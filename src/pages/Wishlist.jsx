import { FaStar } from 'react-icons/fa'
import { FiEye, FiShoppingCart, FiTrash2 } from 'react-icons/fi'
import { bestSellingProducts, exploreProducts, flashSaleProducts } from '../data/products'

const wishlistProducts = [
  flashSaleProducts[1],
  exploreProducts[2],
  exploreProducts[7],
  exploreProducts[5],
]

const recommendedProducts = [
  flashSaleProducts[3],
  exploreProducts[6],
  exploreProducts[0],
  bestSellingProducts[0],
]

function getProductImage(product) {
  return product.variants?.[0]?.image ?? product.image
}

function WishlistCard({ product }) {
  return (
    <article className="w-[270px] shrink-0">
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded bg-[#f5f5f5]">
        {product.discount ? <span className="absolute left-3 top-3 rounded bg-[#db4444] px-3 py-1 text-xs leading-[18px] text-[#fafafa]">{product.discount}</span> : null}
        <button className="absolute right-3 top-3 grid h-[34px] w-[34px] place-items-center rounded-full border-0 bg-white text-black" type="button" aria-label={`Remove ${product.title} from wishlist`}>
          <FiTrash2 className="h-5 w-5" aria-hidden="true" />
        </button>
        <img className="h-[180px] w-[210px] object-contain" src={getProductImage(product)} alt={product.title} />
        <button className="absolute bottom-0 left-0 flex h-[41px] w-full items-center justify-center gap-2 border-0 bg-black text-base leading-6 text-white" type="button">
          <FiShoppingCart className="h-6 w-6" aria-hidden="true" />
          Add To Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 className="m-0 text-base font-medium leading-6 text-black">{product.title}</h3>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-base font-medium leading-6 text-[#db4444]">${product.price}</span>
          {product.oldPrice ? <span className="text-base font-medium leading-6 text-black/50 line-through">${product.oldPrice}</span> : null}
        </div>
      </div>
    </article>
  )
}

function RecommendationCard({ product }) {
  return (
    <article className="w-[270px] shrink-0">
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded bg-[#f5f5f5]">
        {product.discount ? <span className="absolute left-3 top-3 rounded bg-[#db4444] px-3 py-1 text-xs leading-[18px] text-[#fafafa]">{product.discount}</span> : null}
        {product.badge ? <span className="absolute left-3 top-3 rounded bg-[#00ff66] px-3 py-1 text-xs leading-[18px] text-[#fafafa]">{product.badge}</span> : null}
        <button className="absolute right-3 top-3 grid h-[34px] w-[34px] place-items-center rounded-full border-0 bg-white text-black" type="button" aria-label={`Quick view ${product.title}`}>
          <FiEye className="h-5 w-5" aria-hidden="true" />
        </button>
        <img className="h-[180px] w-[210px] object-contain" src={getProductImage(product)} alt={product.title} />
        <button className="absolute bottom-0 left-0 flex h-[41px] w-full items-center justify-center gap-2 border-0 bg-black text-base leading-6 text-white" type="button">
          <FiShoppingCart className="h-6 w-6" aria-hidden="true" />
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
      </div>
    </article>
  )
}

function Wishlist() {
  return (
    <main className="bg-white pb-[140px] pt-20">
      <section className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <div className="flex items-center justify-between gap-6 max-[560px]:flex-col max-[560px]:items-start">
          <h1 className="m-0 text-xl font-normal leading-7 text-black">Wishlist ({wishlistProducts.length})</h1>
          <button className="h-14 rounded border border-black/50 bg-white px-12 text-base font-medium leading-6 text-black" type="button">
            Move All To Bag
          </button>
        </div>

        <div className="mt-[60px] grid grid-cols-4 gap-[30px] max-[1180px]:grid-cols-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {wishlistProducts.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <div className="flex items-center justify-between gap-6 max-[560px]:flex-col max-[560px]:items-start">
          <div className="flex items-center gap-4">
            <span className="h-10 w-5 rounded bg-[#db4444]" aria-hidden="true" />
            <h2 className="m-0 text-xl font-normal leading-7 text-black">Just For You</h2>
          </div>
          <button className="h-14 rounded border border-black/50 bg-white px-12 text-base font-medium leading-6 text-black" type="button">
            See All
          </button>
        </div>

        <div className="mt-[60px] grid grid-cols-4 gap-[30px] max-[1180px]:grid-cols-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {recommendedProducts.map((product) => (
            <RecommendationCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Wishlist
