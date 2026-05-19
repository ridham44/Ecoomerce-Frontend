import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiEye, FiHeart } from 'react-icons/fi'

function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const activeVariant = product.variants?.[selectedVariant]
  const productImage = activeVariant?.image ?? product.image

  return (
    <article className="w-[270px] shrink-0">
      <div className="group relative flex h-[250px] items-center justify-center overflow-hidden rounded bg-[#f5f5f5]">
        {product.discount ? <span className="absolute left-3 top-3 rounded bg-[#db4444] px-3 py-1 text-xs leading-[18px] text-[#fafafa]">{product.discount}</span> : null}
        {product.badge ? <span className="absolute left-3 top-3 rounded bg-[#00ff66] px-3 py-1 text-xs leading-[18px] text-[#fafafa]">{product.badge}</span> : null}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
          <button className="grid h-[34px] w-[34px] place-items-center rounded-full border-0 bg-white text-black" type="button" aria-label={`Add ${product.title} to wishlist`}>
            <FiHeart className="h-5 w-5" aria-hidden="true" />
          </button>
          <button className="grid h-[34px] w-[34px] place-items-center rounded-full border-0 bg-white text-black" type="button" aria-label={`Quick view ${product.title}`}>
            <FiEye className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <img className="h-[180px] w-[210px] object-contain transition duration-300 group-hover:scale-105" src={productImage} alt={activeVariant?.label ?? product.title} />
        <button
          className="absolute bottom-0 left-0 h-[41px] w-full translate-y-full border-0 bg-black text-base font-medium leading-6 text-white transition group-hover:translate-y-0 group-focus-within:translate-y-0"
          type="button"
        >
          Add To Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 className="m-0 text-base font-medium leading-6 text-black">{product.title}</h3>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-base font-medium leading-6 text-[#db4444]">${product.price}</span>
          {product.oldPrice ? <span className="text-base font-medium leading-6 text-black/50 line-through">${product.oldPrice}</span> : null}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 text-[#ffad33]" aria-label={`${product.rating} star rating`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className={`h-5 w-5 ${index < product.rating ? 'text-[#ffad33]' : 'text-black/20'}`} aria-hidden="true" />
            ))}
          </div>
          <span className="text-sm font-semibold leading-[21px] text-black/50">({product.reviews})</span>
        </div>
        {product.variants ? (
          <div className="mt-2 flex items-center gap-2">
            {product.variants.map((variant, index) => (
              <button
                key={variant.color}
                className={`h-5 w-5 rounded-full border-2 p-0 ring-1 ring-black/20 ${index === selectedVariant ? 'border-white outline outline-2 outline-black' : 'border-transparent'}`}
                style={{ backgroundColor: variant.color }}
                type="button"
                onClick={() => setSelectedVariant(index)}
                aria-label={`Show ${variant.label}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default ProductCard
