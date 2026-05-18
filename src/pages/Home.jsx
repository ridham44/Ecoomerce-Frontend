import { useEffect, useRef, useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight, FiChevronRight } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import SectionTitle from '../components/SectionTitle'
import { flashSaleProducts } from '../data/products'
import iphone12 from '../assets/images/iphone/iphone-12-pro-1200.jpg'
import iphone12Pro from '../assets/images/iphone/12pro.jpg'
import iphone14ProMax from '../assets/images/iphone/14promax.png'
import iphone17ProMax from '../assets/images/iphone/17promax.jpg'
import iphone6s from '../assets/images/iphone/6s.jpg'

const categories = [
  { label: "Woman's Fashion", hasChildren: true },
  { label: "Men's Fashion", hasChildren: true },
  { label: 'Electronics' },
  { label: 'Home & Lifestyle' },
  { label: 'Medicine' },
  { label: 'Sports & Outdoor' },
  { label: "Baby's & Toys" },
  { label: 'Groceries & Pets' },
  { label: 'Health & Beauty' },
]

const heroSlides = [
  {
    eyebrow: 'iPhone 14 Pro Max',
    title: 'Up to 10% off Voucher',
    image: iphone14ProMax,
    alt: 'iPhone 14 Pro Max',
  },
  {
    eyebrow: 'iPhone 12 Pro',
    title: 'Save more on Pro models',
    image: iphone12,
    alt: 'iPhone 12 Pro',
  },
  {
    eyebrow: 'iPhone 12 Pro Series',
    title: 'Premium phones, better prices',
    image: iphone12Pro,
    alt: 'iPhone 12 Pro smartphone',
  },
  {
    eyebrow: 'iPhone 17 Pro Max',
    title: 'Future-ready flagship deals',
    image: iphone17ProMax,
    alt: 'iPhone 17 Pro Max',
  },
  {
    eyebrow: 'iPhone 6s',
    title: 'Classic iPhone offers',
    image: iphone6s,
    alt: 'iPhone 6s',
  },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const currentSlide = heroSlides[activeSlide]
  const productRowRef = useRef(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const showPreviousSlide = () => {
    setActiveSlide((slide) => (slide - 1 + heroSlides.length) % heroSlides.length)
  }

  const showNextSlide = () => {
    setActiveSlide((slide) => (slide + 1) % heroSlides.length)
  }

  const scrollProducts = (direction) => {
    productRowRef.current?.scrollBy({
      left: direction * 310,
      behavior: 'smooth',
    })
  }

  return (
    <main className="bg-white pb-28" id="shop" aria-label="Home page">
      <section className="mx-auto mt-10 flex w-[min(100%-48px,1170px)] gap-[61px] max-[980px]:flex-col max-[980px]:gap-6 max-[760px]:mt-6 max-[760px]:w-[min(100%-32px,1170px)]">
        <aside className="h-[344px] w-[217px] shrink-0 max-[980px]:h-auto max-[980px]:w-full" aria-label="Product categories">
          <ul className="m-0 flex h-full list-none flex-col gap-4 p-0 max-[980px]:grid max-[980px]:grid-cols-2 max-[980px]:gap-3 max-[560px]:grid-cols-1">
            {categories.map((category) => (
              <li key={category.label}>
                <a className="flex items-center justify-between text-base leading-6 text-black no-underline" href={`#${category.label.toLowerCase().replaceAll(' ', '-')}`}>
                  <span>{category.label}</span>
                  {category.hasChildren ? <FiChevronRight className="h-5 w-5" aria-hidden="true" /> : null}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="group relative h-[344px] w-[892px] overflow-hidden bg-black text-[#fafafa] max-[1180px]:flex-1 max-[1180px]:basis-[892px] max-[980px]:w-full max-[980px]:basis-auto max-[760px]:h-auto max-[760px]:min-h-[420px]">
          <div className="relative z-10 flex h-full w-[46%] flex-col justify-center pl-16 max-[760px]:h-auto max-[760px]:w-full max-[760px]:pb-56 max-[760px]:pl-6 max-[760px]:pr-6 max-[760px]:pt-10">
            <div className="mb-5 flex items-center gap-6">
              <FaApple className="h-10 w-10" aria-hidden="true" />
              <span className="text-base leading-6">{currentSlide.eyebrow}</span>
            </div>
            <h1 key={currentSlide.title} className="m-0 max-w-[330px] text-5xl font-semibold leading-[60px] tracking-[0.04em] max-[760px]:text-4xl max-[760px]:leading-[46px]">
              {currentSlide.title}
            </h1>
            <a className="mt-[22px] inline-flex w-fit items-center gap-2 border-b border-[#fafafa] pb-1 text-base font-medium leading-6 text-[#fafafa] no-underline" href="#shop-now">
              Shop Now
              <FiArrowRight className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>

          <img
            key={currentSlide.image}
            className="absolute bottom-0 right-8 h-full w-[54%] object-contain transition duration-500 ease-out max-[760px]:right-0 max-[760px]:h-[250px] max-[760px]:w-full"
            src={currentSlide.image}
            alt={currentSlide.alt}
          />

          <button
            className="absolute left-4 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white opacity-0 transition hover:bg-white/20 focus:opacity-100 focus:outline-none group-hover:opacity-100"
            type="button"
            onClick={showPreviousSlide}
            aria-label="Show previous hero slide"
          >
            <FiArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            className="absolute right-4 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white opacity-0 transition hover:bg-white/20 focus:opacity-100 focus:outline-none group-hover:opacity-100"
            type="button"
            onClick={showNextSlide}
            aria-label="Show next hero slide"
          >
            <FiArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3" aria-label="Hero slider pagination">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                className={`h-3 w-3 cursor-pointer rounded-full p-0 transition ${index === activeSlide ? 'border-2 border-white bg-[#db4444]' : 'border-0 bg-white/50 hover:bg-white/80'}`}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.eyebrow} slide`}
                aria-current={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-[140px] w-full max-[760px]:mt-20">
        <div className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
          <SectionTitle label="Today's" title="Flash Sales">
            <div className="flex items-center gap-2">
              <button
                className="grid h-[46px] w-[46px] place-items-center rounded-full border-0 bg-[#f5f5f5] text-black transition hover:bg-[#e9e9e9]"
                type="button"
                onClick={() => scrollProducts(-1)}
                aria-label="Scroll flash sales left"
              >
                <FiArrowLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                className="grid h-[46px] w-[46px] place-items-center rounded-full border-0 bg-[#f5f5f5] text-black transition hover:bg-[#e9e9e9]"
                type="button"
                onClick={() => scrollProducts(1)}
                aria-label="Scroll flash sales right"
              >
                <FiArrowRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </SectionTitle>
        </div>

        <div
          ref={productRowRef}
          className="ml-[max(24px,calc((100vw-1170px)/2))] mt-10 flex h-[350px] w-[min(calc(100%-24px),1308px)] gap-[30px] overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] max-[760px]:ml-4 max-[760px]:w-[calc(100%-16px)] [&::-webkit-scrollbar]:hidden"
          aria-label="Flash sale products"
        >
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mx-auto mt-[60px] flex w-[min(calc(100vw-48px),1170px)] justify-center max-[760px]:w-[calc(100vw-32px)]">
          <a
            className="inline-flex h-14 w-[234px] items-center justify-center gap-2.5 rounded bg-[#db4444] px-12 py-4 text-base font-medium leading-6 text-[#fafafa] no-underline transition hover:bg-[#c73535]"
            href="#products"
          >
            View All Products
          </a>
        </div>

        <hr className="mx-auto mt-[60px] h-0 w-[min(calc(100vw-48px),1170px)] border-0 border-t-[0.5px] border-black/30 max-[760px]:w-[calc(100vw-32px)]" />
      </section>
    </main>
  )
}

export default Home
