import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import { exploreProducts } from '../data/products';

const seededCartItems = [
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
];

function getProductImage(product) {
    return product.variants?.[0]?.image ?? product.image;
}

function Cart() {
    const [cartItems, setCartItems] = useState(seededCartItems);
    const total = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems]);

    const updateQuantity = (id, direction) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: Math.max(1, item.quantity + direction),
                      }
                    : item,
            ),
        );
    };

    return (
        <main className="bg-white pb-[140px] pt-20">
            <section className="mx-auto flex min-h-[840px] w-[min(calc(100vw-48px),1170px)] flex-col gap-20 max-[760px]:w-[calc(100vw-32px)]">
                <nav className="text-sm leading-[21px]" aria-label="Breadcrumb">
                    <a className="text-black/50 no-underline" href="/">
                        Home
                    </a>
                    <span className="mx-3 text-black/50">/</span>
                    <span className="text-black">Cart</span>
                </nav>
                <div className="flex flex-col gap-10">
                    <div className="grid h-[72px] grid-cols-[2fr_1fr_1fr_1fr] items-center rounded bg-white px-10 text-base leading-6 text-black shadow-[0_1px_13px_rgba(0,0,0,0.05)] max-[760px]:hidden">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span className="text-right">Subtotal</span>
                    </div>

                    {cartItems.map((item) => (
                        <article
                            key={item.id}
                            className="grid min-h-[102px] grid-cols-[2fr_1fr_1fr_1fr] items-center rounded bg-white px-10 text-base leading-6 text-black shadow-[0_1px_13px_rgba(0,0,0,0.05)] max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:px-5 max-[760px]:py-5"
                        >
                            <div className="flex items-center gap-5">
                                <div className="relative h-[54px] w-[54px] shrink-0">
                                    <button
                                        className="absolute -left-2 -top-2 z-10 grid h-5 w-5 place-items-center rounded-full border-0 bg-[#db4444] p-0 text-white"
                                        type="button"
                                        aria-label={`Remove ${item.title}`}
                                    >
                                        <FiX className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                    <img className="h-full w-full object-contain" src={getProductImage(item)} alt={item.title} />
                                </div>
                                <h2 className="m-0 text-base font-normal leading-6 text-black">{item.title}</h2>
                            </div>
                            <span>${item.price}</span>
                            <div className="flex h-11 w-[72px] items-center justify-between rounded border-[1.5px] border-black/40 px-3">
                                <span>{String(item.quantity).padStart(2, '0')}</span>
                                <div className="flex flex-col">
                                    <button
                                        className="grid h-4 w-4 place-items-center border-0 bg-transparent p-0 text-black"
                                        type="button"
                                        onClick={() => updateQuantity(item.id, 1)}
                                        aria-label={`Increase ${item.title} quantity`}
                                    >
                                        <FiChevronUp className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                    <button
                                        className="grid h-4 w-4 place-items-center border-0 bg-transparent p-0 text-black"
                                        type="button"
                                        onClick={() => updateQuantity(item.id, -1)}
                                        aria-label={`Decrease ${item.title} quantity`}
                                    >
                                        <FiChevronDown className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <span className="text-right max-[760px]:text-left">${item.price * item.quantity}</span>
                        </article>
                    ))}
                </div>

                <div className="flex items-start justify-between gap-8 max-[980px]:flex-col">
                    <form className="flex gap-4 max-[620px]:w-full max-[620px]:flex-col" onSubmit={(event) => event.preventDefault()}>
                        <label className="sr-only" htmlFor="coupon-code">
                            Coupon code
                        </label>
                        <input
                            id="coupon-code"
                            className="h-14 w-[300px] rounded border border-black px-6 text-base leading-6 outline-0 placeholder:text-black/50 max-[620px]:w-full"
                            type="text"
                            placeholder="Coupon Code"
                        />
                        <button className="h-14 rounded bg-[#db4444] px-12 text-base font-medium leading-6 text-[#fafafa]" type="submit">
                            Apply Coupon
                        </button>
                    </form>

                    <section className="w-[470px] rounded border-[1.5px] border-black px-6 py-8 max-[620px]:w-full" aria-label="Cart total">
                        <h2 className="m-0 text-xl font-medium leading-7 text-black">Cart Total</h2>
                        <div className="mt-6 flex justify-between border-b border-black/40 pb-4 text-base leading-6 text-black">
                            <span>Subtotal:</span>
                            <span>${total}</span>
                        </div>
                        <div className="flex justify-between border-b border-black/40 py-4 text-base leading-6 text-black">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between py-4 text-base leading-6 text-black">
                            <span>Total:</span>
                            <span>${total}</span>
                        </div>
                        <div className="mt-2 flex justify-center">
                            <Link
                                className="inline-flex h-14 items-center justify-center rounded bg-[#db4444] px-12 text-base font-medium leading-6 text-[#fafafa] no-underline"
                                to="/cart/checkout"
                            >
                                Proceed to checkout
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Cart;
