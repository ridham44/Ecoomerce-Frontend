import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiHeart, FiMinus, FiPlus, FiRefreshCcw, FiTruck } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import goldMain from '../assets/images/watch/Audemars Piguet gold main.jpg'
import goldOne from '../assets/images/watch/Audemars Piguet gold 1.jpg'
import goldTwo from '../assets/images/watch/Audemars Piguet gold 2.jpg'
import goldThree from '../assets/images/watch/Audemars Piguet gold 3.jpg'
import silverMain from '../assets/images/watch/Audemars Piguet main.jpg'
import silverOne from '../assets/images/watch/Audemars Piguet1.jpg'
import silverTwo from '../assets/images/watch/Audemars Piguet2.jpg'
import silverThree from '../assets/images/watch/Audemars Piguet3.jpg'
import products from '../data/products'

const productSlug = 'audemars-piguet-royal-oak'

const variants = {
  silver: {
    label: 'Silver',
    color: '#c7c9c8',
    images: [silverMain, silverOne, silverTwo, silverThree],
    complement: 'Silver - Bracelet Silver',
    caseMaterial: 'Silver',
    dial: 'Silver openworked',
    strapMaterial: 'Silver',
  },
  gold: {
    label: 'Yellow Gold',
    color: '#d6a944',
    images: [goldMain, goldOne, goldTwo, goldThree],
    complement: 'Yellow Gold - Bracelet Yellow Gold',
    caseMaterial: 'Yellow gold',
    dial: 'Yellow gold openworked',
    strapMaterial: 'Yellow gold',
  },
}

const relatedProducts = products.filter((product) => ['patek-watch', 'best-apple-watch', 'chanel-purse', 'jordan-shoes'].includes(product.id))

function ProductDetails() {
  const { productId } = useParams()
  const [selectedVariantKey, setSelectedVariantKey] = useState('silver')
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const activeVariant = variants[selectedVariantKey]

  if (productId !== productSlug) {
    return (
      <main className="bg-white py-24 text-center text-black">
        <h1 className="m-0 text-4xl font-semibold">Product not found</h1>
        <Link className="mt-8 inline-flex h-14 items-center justify-center rounded bg-[#db4444] px-12 text-base font-medium text-white no-underline" to="/">
          Back to home page
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-white pb-[140px] pt-20 text-black max-[760px]:pb-20 max-[760px]:pt-10">
      <div className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <nav className="flex items-center gap-3 text-sm leading-[21px]" aria-label="Breadcrumb">
          <Link className="text-black/50 no-underline" to="/">
            Home
          </Link>
          <span className="text-black/50">/</span>
          <span className="text-black/50">Flash Sales</span>
          <span className="text-black/50">/</span>
          <span className="text-black">Audemars Piguet Royal Oak</span>
        </nav>

        <section className="mt-20 grid grid-cols-[170px_500px_1fr] gap-[30px] max-[1180px]:grid-cols-[140px_1fr] max-[1180px]:gap-y-12 max-[760px]:mt-12 max-[760px]:grid-cols-1">
          <div className="flex flex-col gap-4 max-[760px]:order-2 max-[760px]:grid max-[760px]:grid-cols-5 max-[560px]:grid-cols-3">
            {activeVariant.images.map((image, index) => (
              <button
                key={image}
                className={`flex h-[138px] items-center justify-center rounded border-0 bg-[#f5f5f5] p-3 ${selectedImage === index ? 'outline outline-2 outline-[#db4444]' : ''}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                aria-label={`Show ${activeVariant.label} watch image ${index + 1}`}
              >
                <img className="h-full w-full object-contain" src={image} alt={`${activeVariant.label} Audemars Piguet thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="flex h-[600px] items-center justify-center rounded bg-[#f5f5f5] p-10 max-[1180px]:h-[520px] max-[760px]:order-1 max-[760px]:h-[360px]">
            <img className="h-full w-full object-contain" src={activeVariant.images[selectedImage]} alt={`${activeVariant.label} Audemars Piguet Royal Oak`} />
          </div>

          <aside className="max-[1180px]:col-span-2 max-[760px]:order-3 max-[760px]:col-span-1">
            <h1 className="m-0 text-2xl font-semibold leading-6 tracking-[0.03em] text-black">Audemars Piguet Royal Oak</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-[#ffad33]" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="h-5 w-5" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm leading-[21px] text-black/50">(88 Reviews)</span>
              <span className="h-4 w-px bg-black/50" aria-hidden="true" />
              <span className="text-sm leading-[21px] text-[#00ff66]">In Stock</span>
            </div>
            <p className="mb-0 mt-4 text-2xl leading-6 tracking-[0.03em] text-black">EUR 93,000</p>
            <p className="mb-0 mt-6 text-sm leading-[21px] text-black">
              Royal Oak Double Balance Wheel Openworked in {activeVariant.label.toLowerCase()}, pairing tone-on-tone aesthetics with the self-winding Calibre 3132.
            </p>

            <hr className="my-6 h-0 border-0 border-t border-black/50" />

            <div className="flex items-center gap-6">
              <span className="text-xl leading-5 tracking-[0.03em]">Colours:</span>
              <div className="flex items-center gap-2">
                {Object.entries(variants).map(([key, variant]) => (
                  <button
                    key={key}
                    className={`h-5 w-5 rounded-full border-2 p-0 ${selectedVariantKey === key ? 'border-white outline outline-2 outline-black' : 'border-transparent ring-1 ring-black/30'}`}
                    style={{ backgroundColor: variant.color }}
                    type="button"
                    onClick={() => {
                      setSelectedVariantKey(key)
                      setSelectedImage(0)
                    }}
                    aria-label={`Select ${variant.label}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <span className="text-xl leading-5 tracking-[0.03em]">Size:</span>
              <div className="flex items-center gap-4">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`h-8 min-w-8 cursor-pointer rounded border px-2 text-sm font-medium leading-[21px] transition hover:border-[#db4444] hover:bg-[#db4444] hover:text-white ${
                      selectedSize === size ? 'border-[#db4444] bg-[#db4444] text-white' : 'border-black/50 bg-white text-black'
                    }`}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex h-11 overflow-hidden rounded border border-black/50">
                <button
                  className="grid w-10 cursor-pointer place-items-center border-0 border-r border-black/50 bg-white text-black disabled:cursor-not-allowed disabled:text-black/30"
                  type="button"
                  onClick={() => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))}
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                >
                  <FiMinus className="h-5 w-5" aria-hidden="true" />
                </button>
                <span className="grid w-20 place-items-center text-xl font-medium leading-7">{quantity}</span>
                <button className="grid w-10 cursor-pointer place-items-center border-0 bg-[#db4444] text-white" type="button" onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)} aria-label="Increase quantity">
                  <FiPlus className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <button className="h-11 w-[165px] rounded border-0 bg-[#db4444] text-base font-medium leading-6 text-white" type="button">
                Buy Now
              </button>
              <button
                className={`grid h-11 w-11 cursor-pointer place-items-center rounded border border-black/50 bg-white ${isWishlisted ? 'text-[#db4444]' : 'text-black'}`}
                type="button"
                onClick={() => setIsWishlisted((currentValue) => !currentValue)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-pressed={isWishlisted}
              >
                <FiHeart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-10 overflow-hidden rounded border border-black/50">
              <div className="flex gap-4 border-b border-black/50 p-4">
                <FiTruck className="h-10 w-10 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="m-0 text-base font-medium leading-6">Free Delivery</h2>
                  <p className="mb-0 mt-2 text-xs font-medium leading-[18px] underline">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex gap-4 p-4">
                <FiRefreshCcw className="h-10 w-10 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="m-0 text-base font-medium leading-6">Return Delivery</h2>
                  <p className="mb-0 mt-2 text-xs font-medium leading-[18px]">
                    Free 30 Days Delivery Returns. <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-[140px] max-[760px]:mt-20" aria-label="Related products">
          <div className="flex items-center gap-4">
            <span className="h-10 w-5 rounded bg-[#db4444]" aria-hidden="true" />
            <h2 className="m-0 text-base font-semibold leading-5 text-[#db4444]">Related Item</h2>
          </div>
          <div className="mt-[60px] grid grid-cols-4 gap-[30px] max-[1180px]:grid-cols-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductDetails
