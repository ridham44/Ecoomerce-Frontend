import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import loginImage from '../assets/images/login.png'

function Signup() {
  return (
    <main className="bg-white">
      <section className="mx-auto mt-[70px] flex min-h-[781px] w-[min(calc(100vw-48px),1305px)] items-center gap-[129px] pb-[140px] max-[1180px]:gap-16 max-[980px]:mt-12 max-[980px]:min-h-0 max-[980px]:flex-col max-[760px]:w-full max-[760px]:gap-10 max-[760px]:pb-20">
        <div className="h-[781px] w-[805px] overflow-hidden rounded-r bg-[#cbeef2] max-[1180px]:w-[58vw] max-[980px]:h-auto max-[980px]:w-[calc(100vw-48px)] max-[760px]:w-full">
          <img className="h-full w-full object-cover max-[980px]:aspect-[805/781]" src={loginImage} alt="Shopping cart and phone" />
        </div>

        <div className="flex h-[530px] w-[371px] flex-col justify-center gap-12 max-[760px]:h-auto max-[760px]:w-[calc(100vw-32px)]">
          <div>
            <h1 className="m-0 text-4xl font-medium leading-[30px] tracking-[0.04em] text-black max-[560px]:text-3xl">Create an account</h1>
            <p className="mb-0 mt-6 text-base leading-6 text-black">Enter your details below</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-10">
              <label className="block border-b border-black/50 pb-2">
                <span className="sr-only">Name</span>
                <input className="w-full border-0 bg-transparent text-base leading-6 text-black outline-0 placeholder:text-black/40" type="text" placeholder="Name" />
              </label>
              <label className="block border-b border-black/50 pb-2">
                <span className="sr-only">Email or phone number</span>
                <input className="w-full border-0 bg-transparent text-base leading-6 text-black outline-0 placeholder:text-black/40" type="email" placeholder="Email or Phone Number" />
              </label>
              <label className="block border-b border-black/50 pb-2">
                <span className="sr-only">Password</span>
                <input className="w-full border-0 bg-transparent text-base leading-6 text-black outline-0 placeholder:text-black/40" type="password" placeholder="Password" />
              </label>
            </div>

            <button className="mt-6 inline-flex h-14 w-full items-center justify-center rounded border-0 bg-[#db4444] px-12 py-4 text-base font-medium leading-6 text-[#fafafa]" type="submit">
              Create Account
            </button>
            <button className="inline-flex h-14 w-full items-center justify-center gap-4 rounded border border-black/40 bg-white px-12 py-4 text-base leading-6 text-black" type="button">
              <FcGoogle className="h-6 w-6" aria-hidden="true" />
              Sign up with Google
            </button>
          </form>

          <p className="m-0 text-center text-base leading-6 text-black/70">
            Already have account?
            <Link className="ml-4 border-b border-black/50 pb-1 text-black no-underline" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Signup
