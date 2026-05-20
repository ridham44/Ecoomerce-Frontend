import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="bg-white pb-[150px] pt-20 text-black max-[760px]:pb-24 max-[760px]:pt-10">
      <div className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <nav className="flex items-center gap-3 text-sm leading-[21px]" aria-label="Breadcrumb">
          <Link className="text-black/50 no-underline" to="/">
            Home
          </Link>
          <span className="text-black/50">/</span>
          <span className="text-black">404 Error</span>
        </nav>

        <section className="mt-[135px] flex flex-col items-center text-center max-[760px]:mt-20">
          <h1 className="m-0 text-[110px] font-medium leading-[115px] tracking-[0.03em] text-black max-[980px]:text-[82px] max-[980px]:leading-[88px] max-[760px]:text-[48px] max-[760px]:leading-[56px]">
            404 Not Found
          </h1>
          <p className="mb-0 mt-10 text-base leading-6 text-black max-[760px]:mt-6">
            Your visited page not found. You may go home page.
          </p>
          <Link
            className="mt-20 inline-flex h-14 w-[254px] items-center justify-center rounded bg-[#db4444] px-12 py-4 text-base font-medium leading-6 text-[#fafafa] no-underline transition hover:bg-[#c73535] max-[760px]:mt-12"
            to="/"
          >
            Back to home page
          </Link>
        </section>
      </div>
    </main>
  )
}

export default NotFound
