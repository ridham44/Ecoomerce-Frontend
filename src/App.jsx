import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import About from './pages/About'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function ProtectedRoute({ isAuthenticated, children }) {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('exclusive-auth') === 'true')
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('exclusive-auth', String(isAuthenticated))
  }, [isAuthenticated])

  const handleLogin = (redirectTo = '/') => {
    setIsAuthenticated(true)
    navigate(redirectTo)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header isAuthenticated={isAuthenticated} wishlistCount={isAuthenticated ? 4 : 0} cartCount={isAuthenticated ? 2 : 0} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart/checkout"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
