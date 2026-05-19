import { useEffect, useRef, useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FiArrowLeft, FiArrowRight, FiArrowUp, FiCamera, FiChevronRight, FiGrid, FiHeadphones, FiHome, FiMonitor, FiShield, FiShoppingBag, FiSmartphone, FiTruck } from 'react-icons/fi'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import SectionTitle from '../components/SectionTitle'
import { bestSellingProducts, exploreProducts, flashSaleProducts } from '../data/products'
import iphone12 from '../assets/images/iphone/iphone-12-pro-1200.jpg'
import iphone12Pro from '../assets/images/iphone/12pro.jpg'
import iphone14ProMax from '../assets/images/iphone/14promax.png'
import iphone17ProMax from '../assets/images/iphone/17promax.jpg'
import iphone6s from '../assets/images/iphone/6s.jpg'
import bossSpeaker from '../assets/images/cardimage/Boss Speaker.jpg'
import ps5Image from '../assets/images/cardimage/ps5.png'
import womenImage from '../assets/images/cardimage/a women.jpg'
import perfumeImage from '../assets/images/cardimage/perfume.webp'

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

const browseCategories = [
  { label: 'Phones', icon: FiSmartphone, href: '#phones' },
  { label: 'Computers', icon: FiMonitor, href: '#computers' },
  { label: 'SmartWatch', icon: FiGrid, href: '#smart-watch' },
  { label: 'Camera', icon: FiCamera, href: '#camera' },
  { label: 'HeadPhones', icon: FiHeadphones, href: '#headphones' },
  { label: 'Home', icon: FiHome, href: '#home-lifestyle' },
  { label: 'Fashion', icon: FiShoppingBag, href: '#fashion' },
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

const speakerCountdown = [
  { value: '23', label: 'Hours' },
  { value: '05', label: 'Days' },
  { value: '59', label: 'Minutes' },
  { value: '35', label: 'Seconds' },
]

const featuredItems = [
  {
    title: 'PlayStation 5',
    description: 'Black and white version of the PS5 coming out on sale.',
    image: ps5Image,
    href: '#playstation-5',
    className: 'row-span-2 min-h-[600px] max-[980px]:row-span-1 max-[980px]:min-h-[420px]',
    imageClassName: 'h-full w-full object-contain object-bottom',
  },
  {
    title: "Women's Collections",
    description: 'Featured woman collections that give you another vibe.',
    image: womenImage,
    href: '#womens-collections',
    className: 'min-h-[284px]',
    imageClassName: 'h-full w-full object-cover object-right',
  },
  {
    title: 'Speakers',
    description: 'Amazon wireless speakers',
    image: bossSpeaker,
    href: '#speakers',
    className: 'min-h-[284px]',
    imageClassName: 'h-full w-full object-contain object-center',
  },
  {
    title: 'Perfume',
    description: 'Luxury fragrance for lasting impressions.',
    image: perfumeImage,
    href: '#perfume',
    className: 'min-h-[284px]',
    imageClassName: 'h-full w-full object-contain object-right',
  },
]

const serviceHighlights = [
  {
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
    icon: FiTruck,
  },
  {
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    icon: FiHeadphones,
  },
  {
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
    icon: FiShield,
  },
]

function FeaturedTile({ item }) {
  return (
    <article className={`group relative overflow-hidden rounded bg-black text-[#fafafa] ${item.className}`}>
      <img className={`absolute inset-0 opacity-90 transition duration-300 group-hover:scale-105 ${item.imageClassName}`} src={item.image} alt={item.title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-8 left-8 z-10 max-w-[260px] max-[560px]:bottom-6 max-[560px]:left-6">
        <h3 className="m-0 text-2xl font-semibold leading-6 tracking-[0.03em] text-[#fafafa]">{item.title}</h3>
        <p className="mb-0 mt-4 text-sm leading-[21px] text-[#fafafa]">{item.description}</p>
        <a className="mt-4 inline-flex border-b border-[#fafafa] pb-1 text-base font-medium leading-6 text-[#fafafa] no-underline" href={item.href}>
          Shop Now
        </a>
      </div>
    </article>
  )
}

function ServiceHighlight({ item }) {
  const Icon = item.icon

  return (
    <article className="flex w-[249px] flex-col items-center text-center max-[760px]:w-full">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-[#2f2e30]">
        <div className="grid h-[58px] w-[58px] place-items-center rounded-full bg-black text-white">
          <Icon className="h-10 w-10" aria-hidden="true" />
        </div>
      </div>
      <h3 className="mb-0 mt-6 text-xl font-semibold leading-7 text-black">{item.title}</h3>
      <p className="mb-0 mt-2 text-sm leading-[21px] text-black">{item.description}</p>
    </article>
  )
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const currentSlide = heroSlides[activeSlide]
  const productRowRef = useRef(null)
  const categoryRowRef = useRef(null)

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

  const scrollCategories = (direction) => {
    categoryRowRef.current?.scrollBy({
      left: direction * 230,
      behavior: 'smooth',
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

      <section className="mx-auto mt-20 w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <SectionTitle label="Categories" title="Browse By Category">
          <div className="flex items-center gap-2">
            <button
              className="grid h-[46px] w-[46px] place-items-center rounded-full border-0 bg-[#f5f5f5] text-black transition hover:bg-[#e9e9e9]"
              type="button"
              onClick={() => scrollCategories(-1)}
              aria-label="Scroll categories left"
            >
              <FiArrowLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              className="grid h-[46px] w-[46px] place-items-center rounded-full border-0 bg-[#f5f5f5] text-black transition hover:bg-[#e9e9e9]"
              type="button"
              onClick={() => scrollCategories(1)}
              aria-label="Scroll categories right"
            >
              <FiArrowRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </SectionTitle>

        <div
          ref={categoryRowRef}
          className="mt-[60px] flex gap-[30px] overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Browse categories"
        >
          {browseCategories.map((category) => (
            <CategoryCard key={category.label} category={category} />
          ))}
        </div>

        <hr className="mt-[70px] h-0 w-full border-0 border-t-[0.5px] border-black/30" />
      </section>

      <section className="mx-auto mt-[70px] w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <SectionTitle label="This Month" title="Best Selling Products">
          <a
            className="inline-flex h-14 w-[159px] items-center justify-center rounded bg-[#db4444] px-12 py-4 text-base font-medium leading-6 text-[#fafafa] no-underline transition hover:bg-[#c73535] max-[560px]:w-auto max-[560px]:px-7"
            href="#best-selling"
          >
            View All
          </a>
        </SectionTitle>

        <div className="mt-[60px] grid grid-cols-4 gap-[30px] max-[1180px]:grid-cols-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-[140px] flex min-h-[500px] w-[min(calc(100vw-48px),1170px)] overflow-hidden bg-black px-14 py-[69px] text-[#fafafa] max-[980px]:flex-col max-[980px]:gap-10 max-[760px]:mt-20 max-[760px]:w-[calc(100vw-32px)] max-[760px]:px-6 max-[760px]:py-10">
        <div className="relative z-10 flex w-[44%] flex-col max-[980px]:w-full">
          <p className="m-0 text-base font-semibold leading-5 text-[#00ff66]">Categories</p>
          <h2 className="mb-0 mt-8 max-w-[460px] text-5xl font-semibold leading-[60px] tracking-[0.04em] text-[#fafafa] max-[760px]:text-4xl max-[760px]:leading-[46px]">
            Enhance Your Music Experience
          </h2>
          <div className="mt-8 flex flex-wrap gap-6 max-[760px]:gap-3">
            {speakerCountdown.map((item) => (
              <div key={item.label} className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white text-black">
                <span className="text-base font-semibold leading-5">{item.value}</span>
                <span className="text-[11px] leading-[18px]">{item.label}</span>
              </div>
            ))}
          </div>
          <a
            className="mt-10 inline-flex h-14 w-[171px] items-center justify-center rounded bg-[#00ff66] px-12 py-4 text-base font-medium leading-6 text-[#fafafa] no-underline transition hover:bg-[#00d957]"
            href="#buy-speaker"
          >
            Buy Now!
          </a>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-white/25 blur-[90px]" aria-hidden="true" />
          <img className="relative z-10 max-h-[390px] w-full object-contain max-[980px]:max-h-[320px]" src={bossSpeaker} alt="Portable black speaker" />
        </div>
      </section>

      <section className="mx-auto mt-[70px] w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <SectionTitle label="Our Products" title="Explore Our Products">
          <div className="flex items-center gap-2">
            <button
              className="grid h-[46px] w-[46px] place-items-center rounded-full border-0 bg-[#f5f5f5] text-black transition hover:bg-[#e9e9e9]"
              type="button"
              aria-label="Previous products"
            >
              <FiArrowLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              className="grid h-[46px] w-[46px] place-items-center rounded-full border-0 bg-[#f5f5f5] text-black transition hover:bg-[#e9e9e9]"
              type="button"
              aria-label="Next products"
            >
              <FiArrowRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </SectionTitle>

        <div className="mt-[60px] grid grid-cols-4 gap-x-[30px] gap-y-[60px] max-[1180px]:grid-cols-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {exploreProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-[60px] flex justify-center">
          <a
            className="inline-flex h-14 w-[234px] items-center justify-center gap-2.5 rounded bg-[#db4444] px-12 py-4 text-base font-medium leading-6 text-[#fafafa] no-underline transition hover:bg-[#c73535]"
            href="#all-products"
          >
            View All Products
          </a>
        </div>
      </section>

      <section className="mx-auto mt-[140px] w-[min(calc(100vw-48px),1170px)] max-[760px]:mt-20 max-[760px]:w-[calc(100vw-32px)]">
        <SectionTitle label="Featured" title="New Arrival" />

        <div className="mt-[60px] grid min-h-[600px] grid-cols-2 items-stretch gap-[30px] max-[980px]:grid-cols-1">
          <FeaturedTile item={featuredItems[0]} />
          <div className="grid h-[600px] grid-rows-[284px_1fr] gap-[30px] max-[980px]:h-auto max-[980px]:grid-rows-none">
            <FeaturedTile item={featuredItems[1]} />
            <div className="grid min-h-0 grid-cols-2 gap-[30px] max-[620px]:grid-cols-1">
              <FeaturedTile item={featuredItems[2]} />
              <FeaturedTile item={featuredItems[3]} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-[140px] flex w-[min(calc(100vw-48px),1170px)] items-end justify-center max-[760px]:mt-20 max-[760px]:w-[calc(100vw-32px)]">
        <div className="flex min-h-[161px] w-[943px] max-w-full items-start justify-center gap-[88px] max-[980px]:gap-10 max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-12">
          {serviceHighlights.map((item) => (
            <ServiceHighlight key={item.title} item={item} />
          ))}
        </div>

        <button
          className="absolute -bottom-24 -right-[88px] grid h-[46px] w-[46px] place-items-center rounded-full border-0 bg-[#f5f5f5] text-black transition hover:bg-[#e9e9e9] max-[1340px]:right-0 max-[760px]:-bottom-20"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp className="h-6 w-6" aria-hidden="true" />
        </button>
      </section>
    </main>
  )
}

export default Home
