import { IoChevronDown } from 'react-icons/io5'
import { FiHeart, FiSearch, FiShoppingCart } from 'react-icons/fi'

const navLinks = ['Home', 'Contact', 'About', 'Sign Up']

function Header() {
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
        <a
          className="whitespace-nowrap text-2xl font-bold leading-6 tracking-[0.03em] text-black no-underline max-[760px]:text-[22px]"
          href="#home"
          aria-label="Exclusive home"
        >
          Exclusive
        </a>
        <nav
          className="flex h-6 items-center gap-12 max-[1180px]:gap-7 max-[760px]:order-3 max-[760px]:w-full max-[760px]:justify-between max-[760px]:gap-4"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              className="whitespace-nowrap text-base leading-6 text-black no-underline first:underline first:underline-offset-4 max-[760px]:text-sm"
              href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
            >
              {link}
            </a>
          ))}
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
          <a className="grid h-8 w-8 place-items-center text-black no-underline" href="#wishlist" aria-label="Wishlist">
            <FiHeart className="h-6 w-6" aria-hidden="true" />
          </a>
          <a className="grid h-8 w-8 place-items-center text-black no-underline" href="#cart" aria-label="Cart">
            <FiShoppingCart className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
