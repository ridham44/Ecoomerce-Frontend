import { IoChevronDown } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { FiHeart, FiLogOut, FiSearch, FiShoppingBag, FiShoppingCart, FiStar, FiUser, FiXCircle } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
  { label: 'About', to: '/about' },
  { label: 'Sign Up', to: '/signup' },
]

const accountLinks = [
  { label: 'Manage My Account', icon: FiUser, to: '/account' },
  { label: 'My Order', icon: FiShoppingBag, href: '#orders' },
  { label: 'My Cancellations', icon: FiXCircle, href: '#cancellations' },
  { label: 'My Reviews', icon: FiStar, href: '#reviews' },
]

function Header({ isAuthenticated = false, wishlistCount = 0, cartCount = 0, onLogout }) {
  const location = useLocation()
  const isAccountPage = location.pathname === '/account'

  return (
    <header className="w-full border-b border-[#e5e5e5] bg-white text-black">
      <div className="relative flex h-12 w-full items-center justify-center bg-black px-8 text-[#fafafa] lg:px-[136px] max-[760px]:h-auto max-[760px]:min-h-16 max-[760px]:justify-start max-[760px]:px-5 max-[760px]:py-2.5">
        <p className="m-0 text-sm leading-[21px] text-[#fafafa] max-[760px]:max-w-[calc(100%-92px)] max-[760px]:text-xs max-[760px]:leading-[18px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a className="ml-2 font-semibold text-[#fafafa] underline-offset-2" href="#shop">
            ShopNow
          </a>
        </p>
        <button
          type="button"
          className="absolute right-8 top-1/2 inline-flex min-h-6 -translate-y-1/2 cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm text-[#fafafa] lg:right-[136px] max-[760px]:right-5 max-[760px]:text-xs"
          aria-label="Change language"
        >
          English
          <IoChevronDown aria-hidden="true" />
        </button>
      </div>
      <div className="mx-auto flex h-[94px] w-[min(100%-48px,1170px)] items-center gap-[148px] pt-10 max-[1180px]:gap-12 max-[760px]:h-auto max-[760px]:min-h-32 max-[760px]:w-[min(100%-32px,1170px)] max-[760px]:flex-wrap max-[760px]:gap-4 max-[760px]:py-5 max-[760px]:pt-5">
        <Link
          className="whitespace-nowrap text-2xl font-bold leading-6 tracking-[0.03em] text-black no-underline max-[760px]:text-[22px]"
          to="/"
          aria-label="Exclusive home"
        >
          Exclusive
        </Link>
        <nav
          className="flex h-6 items-center gap-12 max-[1180px]:gap-7 max-[760px]:order-3 max-[760px]:w-full max-[760px]:justify-between max-[760px]:gap-4"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.to === '/'
                ? location.pathname === '/'
                : link.to.startsWith('/#')
                  ? false
                  : location.pathname === link.to

            return (
              <Link
                key={link.label}
                className={`whitespace-nowrap text-base leading-6 text-black no-underline max-[760px]:text-sm ${isActive ? 'underline underline-offset-4' : ''}`}
                to={link.to}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="ml-auto flex h-[38px] items-center gap-4 max-[760px]:gap-2.5">
          <label className="flex h-[38px] w-[243px] items-center gap-3 rounded bg-[#f5f5f5] py-[7px] pl-5 pr-3 text-black max-[760px]:w-[min(100vw-160px,220px)] max-[760px]:pl-3">
            <span className="sr-only">Search products</span>
            <input
              className="min-w-0 flex-1 border-0 bg-transparent text-xs leading-[18px] text-black outline-0 placeholder:text-black/50"
              type="search"
              placeholder="What are you looking for?"
            />
            <FiSearch className="h-6 w-6" aria-hidden="true" />
          </label>
          <Link className="relative grid h-8 w-8 place-items-center text-black no-underline" to="/wishlist" aria-label="Wishlist">
            <FiHeart className="h-6 w-6" aria-hidden="true" />
            {wishlistCount > 0 ? (
              <span className="absolute -right-0.5 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#db4444] px-1 text-xs leading-none text-white">
                {wishlistCount}
              </span>
            ) : null}
          </Link>
          <Link className="relative grid h-8 w-8 place-items-center text-black no-underline" to="/cart" aria-label="Cart">
            <FiShoppingCart className="h-6 w-6" aria-hidden="true" />
            {cartCount > 0 ? (
              <span className="absolute -right-0.5 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#db4444] px-1 text-xs leading-none text-white">
                {cartCount}
              </span>
            ) : null}
          </Link>
          {isAuthenticated ? (
            <div className="group relative">
              <button
                className={`grid h-8 w-8 place-items-center rounded-full border-0 p-0 transition group-focus-within:bg-[#db4444] group-focus-within:text-white group-hover:bg-[#db4444] group-hover:text-white ${
                  isAccountPage ? 'bg-[#db4444] text-white' : 'bg-transparent text-black'
                }`}
                type="button"
                aria-label="Account menu"
              >
                <FiUser className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="invisible absolute right-0 top-[38px] z-50 h-[208px] w-56 rounded bg-black/55 px-[18px] py-[18px] text-white opacity-0 shadow-[0_22px_60px_rgba(0,0,0,0.32)] backdrop-blur-[180px] backdrop-saturate-150 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="m-0 flex list-none flex-col gap-[13px] p-0">
                  {accountLinks.map((item) => {
                    const Icon = item.icon

                    return (
                      <li key={item.label}>
                        <Link className="flex items-center gap-3 text-sm leading-[21px] text-white no-underline" to={item.to ?? item.href}>
                          <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          <span className="whitespace-nowrap">{item.label}</span>
                        </Link>
                      </li>
                    )
                  })}
                  <li>
                    <button className="flex w-full items-center gap-3 border-0 bg-transparent p-0 text-left text-sm leading-[21px] text-white" type="button" onClick={onLogout}>
                      <FiLogOut className="h-6 w-6 shrink-0" aria-hidden="true" />
                      <span className="whitespace-nowrap">Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header
