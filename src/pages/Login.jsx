import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import loginImage from '../assets/images/login.png'

const DEFAULT_EMAIL = 'alicapatel@gmail.com'
const DEFAULT_PASSWORD = 'Aica44$'

function Login({ onLogin }) {
  const location = useLocation()
  const [email, setEmail] = useState(DEFAULT_EMAIL)
  const [password, setPassword] = useState(DEFAULT_PASSWORD)
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (email.trim() === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      setError('')
      const from = location.state?.from
      const redirectTo = from ? `${from.pathname}${from.search ?? ''}` : '/'
      onLogin(redirectTo)
      return
    }

    setError('Use alicapatel@gmail.com and Aica44$ to log in.')
  }

  return (
    <main className="bg-white">
      <section className="mx-auto mt-[70px] flex min-h-[781px] w-[min(calc(100vw-48px),1305px)] items-center gap-[129px] pb-[140px] max-[1180px]:gap-16 max-[980px]:mt-12 max-[980px]:min-h-0 max-[980px]:flex-col max-[760px]:w-full max-[760px]:gap-10 max-[760px]:pb-20">
        <div className="h-[781px] w-[805px] overflow-hidden rounded-r bg-[#cbeef2] max-[1180px]:w-[58vw] max-[980px]:h-auto max-[980px]:w-[calc(100vw-48px)] max-[760px]:w-full">
          <img className="h-full w-full object-cover max-[980px]:aspect-[805/781]" src={loginImage} alt="Shopping cart and phone" />
        </div>

        <div className="flex h-[530px] w-[371px] flex-col justify-center gap-12 max-[760px]:h-auto max-[760px]:w-[calc(100vw-32px)]">
          <div>
            <h1 className="m-0 text-4xl font-medium leading-[30px] tracking-[0.04em] text-black max-[560px]:text-3xl">Log in to Exclusive</h1>
            <p className="mb-0 mt-6 text-base leading-6 text-black">Enter your details below</p>
          </div>

          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="grid gap-10">
              <label className="block border-b border-black/50 pb-2">
                <span className="sr-only">Email or phone number</span>
                <input
                  className="w-full border-0 bg-transparent text-base leading-6 text-black outline-0 placeholder:text-black/40"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email or Phone Number"
                />
              </label>
              <label className="block border-b border-black/50 pb-2">
                <span className="sr-only">Password</span>
                <input
                  className="w-full border-0 bg-transparent text-base leading-6 text-black outline-0 placeholder:text-black/40"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
              </label>
            </div>

            {error ? <p className="-mb-6 -mt-6 text-sm leading-5 text-[#db4444]">{error}</p> : null}

            <div className="flex items-center justify-between gap-4">
              <button className="inline-flex h-14 w-[143px] items-center justify-center rounded border-0 bg-[#db4444] px-12 py-4 text-base font-medium leading-6 text-[#fafafa]" type="submit">
                Log In
              </button>
              <a className="text-base leading-6 text-[#db4444] no-underline" href="#forgot-password">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
