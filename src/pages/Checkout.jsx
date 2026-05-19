import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import { exploreProducts } from '../data/products'
import mastercardLogo from '../assets/images/payment/mastercard.png'
import upiLogo from '../assets/images/payment/upi.webp'
import visaLogo from '../assets/images/payment/visa.png'

const checkoutItems = [
  {
    ...exploreProducts[6],
    title: 'LCD Monitor',
    quantity: 1,
  },
  {
    ...exploreProducts[7],
    title: 'H1 Gamepad',
    price: 550,
    quantity: 2,
  },
]

const billingFields = [
  { id: 'first-name', label: 'First Name', required: true },
  { id: 'company-name', label: 'Company Name' },
  { id: 'street-address', label: 'Street Address', required: true },
  { id: 'apartment', label: 'Apartment, floor, etc. (optional)' },
  { id: 'town-city', label: 'Town/City', required: true },
  { id: 'phone-number', label: 'Phone Number', required: true, type: 'tel' },
  { id: 'email-address', label: 'Email Address', required: true, type: 'email' },
]

const paymentLogos = [
  { label: 'UPI', image: upiLogo },
  { label: 'Visa', image: visaLogo },
  { label: 'Mastercard', image: mastercardLogo },
]

function getProductImage(product) {
  return product.variants?.[0]?.image ?? product.image
}

function Checkout() {
  const subtotal = checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="bg-white pb-[140px] pt-20">
      <section className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <nav className="text-sm leading-[21px]" aria-label="Breadcrumb">
          <Link className="text-black/50 no-underline" to="/">
            Home
          </Link>
          <span className="mx-3 text-black/50">/</span>
          <Link className="text-black/50 no-underline" to="/cart">
            Cart
          </Link>
          <span className="mx-3 text-black/50">/</span>
          <span className="text-black">Checkout</span>
        </nav>

        <div className="mt-20 grid grid-cols-[470px_527px] items-start justify-between gap-12 max-[1080px]:grid-cols-1 max-[1080px]:gap-16">
          <section className="flex min-h-[814px] w-[470px] flex-col gap-6 max-[560px]:min-h-0 max-[560px]:w-full" aria-labelledby="billing-title">
            <h1 id="billing-title" className="m-0 mb-5 text-4xl font-medium leading-[30px] tracking-[0.04em] text-black max-[560px]:text-3xl">
              Billing Details
            </h1>

            {billingFields.map((field) => (
              <label key={field.id} className="block">
                <span className="mb-2 block text-base leading-6 text-black/40">
                  {field.label}
                  {field.required ? <span className="text-[#db4444]">*</span> : null}
                </span>
                <input
                  id={field.id}
                  className="h-[50px] w-full rounded bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0"
                  type={field.type ?? 'text'}
                  required={field.required}
                />
              </label>
            ))}

            <label className="mt-1 flex items-center gap-4 text-base leading-6 text-black">
              <input className="peer sr-only" type="checkbox" defaultChecked />
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-black/40 bg-white text-transparent peer-checked:border-[#db4444] peer-checked:bg-[#db4444] peer-checked:text-white peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-black">
                <FiCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>Save this information for faster check-out next time</span>
            </label>
          </section>

          <aside className="mt-8 flex min-h-[600px] w-[527px] flex-col gap-8 max-[1080px]:mt-0 max-[620px]:w-full" aria-label="Order summary">
            <div className="flex flex-col gap-8">
              {checkoutItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_auto] items-center gap-6 text-base leading-6 text-black">
                  <div className="flex items-center gap-6">
                    <img className="h-[54px] w-[54px] object-contain" src={getProductImage(item)} alt={item.title} />
                    <span>{item.title}</span>
                  </div>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col text-base leading-6 text-black">
              <div className="flex justify-between border-b border-black/40 pb-4">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between border-b border-black/40 py-4">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pt-4">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
            </div>

            <div className="flex flex-col gap-8 text-base leading-6 text-black">
              <label className="flex items-center justify-between gap-6">
                <span className="flex items-center gap-4">
                  <input className="h-6 w-6 accent-black" type="radio" name="payment-method" />
                  <span>Bank</span>
                </span>
                <span className="flex items-center gap-2">
                  {paymentLogos.map((logo) => (
                    <img key={logo.label} className="h-7 w-auto object-contain" src={logo.image} alt={logo.label} />
                  ))}
                </span>
              </label>

              <label className="flex items-center gap-4">
                <input className="h-6 w-6 accent-black" type="radio" name="payment-method" defaultChecked />
                <span>Cash on delivery</span>
              </label>
            </div>

            <form className="flex gap-4 max-[620px]:flex-col" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="checkout-coupon">
                Coupon code
              </label>
              <input
                id="checkout-coupon"
                className="h-14 flex-1 rounded border border-black px-6 text-base leading-6 outline-0 placeholder:text-black/50"
                type="text"
                placeholder="Coupon Code"
              />
              <button className="h-14 rounded bg-[#db4444] px-12 text-base font-medium leading-6 text-[#fafafa]" type="submit">
                Apply Coupon
              </button>
            </form>

            <button className="h-14 w-[190px] rounded bg-[#db4444] text-base font-medium leading-6 text-[#fafafa]" type="button">
              Place Order
            </button>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Checkout
