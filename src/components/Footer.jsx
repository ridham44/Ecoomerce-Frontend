import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaLinkedinIn, FaRegPaperPlane, FaTwitter } from 'react-icons/fa';

const footerColumns = [
    {
        title: 'Support',
        links: ['44 Ahmedabad Gujarat India.', 'exclusive@gmail.com', '+88015-88888-9999'],
    },
    {
        title: 'Account',
        links: ['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'],
    },
    {
        title: 'Quick Link',
        links: ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'],
    },
];

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="mb-6 m-0 text-xl font-medium leading-7 text-[#fafafa] max-[760px]:mb-4">{title}</h3>
            <ul className="m-0 flex list-none flex-col gap-4 p-0 max-[760px]:gap-3">
                {links.map((link) => (
                    <li key={link}>
                        <a className="block max-w-[175px] text-base leading-6 text-[#fafafa] no-underline" href="#footer">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function QrCode() {
    return (
        <div className="grid h-20 w-20 grid-cols-7 gap-0.5 bg-white p-[3px]" aria-label="QR code">
            {Array.from({ length: 49 }).map((_, index) => (
                <span key={index} className={(index * 7 + index * index) % 5 < 2 ? 'bg-black' : 'bg-white'} />
            ))}
        </div>
    );
}

function AppBadge({ store }) {
    const isApple = store === 'apple';

    return (
        <a
            className="flex h-[34px] w-[110px] items-center gap-1.5 rounded border border-[#fafafa] bg-[#030303] px-[7px] py-1 text-white no-underline"
            href="#download"
            aria-label={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
        >
            {isApple ? (
                <FaApple className="shrink-0 text-[19px]" aria-hidden="true" />
            ) : (
                <FaGooglePlay className="shrink-0 text-[19px]" aria-hidden="true" />
            )}
            <span className="flex flex-col text-xs font-semibold leading-3">
                <small className="text-[7px] font-normal leading-[9px]">{isApple ? 'Download on the' : 'GET IT ON'}</small>
                {isApple ? 'App Store' : 'Google Play'}
            </span>
        </a>
    );
}

function Footer() {
    return (
        <footer className="min-h-[440px] w-full bg-black text-[#fafafa]">
            <div className="mx-auto grid min-h-[376px] w-full max-w-[1440px] grid-cols-[1.18fr_1fr_0.85fr_0.85fr_1.2fr] gap-[72px] px-[135px] pb-[52px] pt-20 max-[1180px]:grid-cols-3 max-[1180px]:gap-x-10 max-[1180px]:gap-y-12 max-[1180px]:px-10 max-[1180px]:pb-11 max-[1180px]:pt-16 max-[760px]:grid-cols-1 max-[760px]:gap-9 max-[760px]:px-6 max-[760px]:pb-9 max-[760px]:pt-12">
                <div>
                    <h2 className="mb-6 m-0 text-2xl font-bold leading-6 tracking-[0.03em] text-[#fafafa] max-[760px]:mb-4">Exclusive</h2>
                    <h3 className="mb-6 m-0 text-xl font-medium leading-7 text-[#fafafa] max-[760px]:mb-4">Subscribe</h3>
                    <p className="mb-4 mt-0 text-base leading-6 text-[#fafafa]">Get 10% off your first order</p>
                    <form className="flex h-12 w-[217px] items-center rounded border-[1.5px] border-[#fafafa] py-0 pl-4 pr-3">
                        <label htmlFor="subscribe-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="subscribe-email"
                            className="min-w-0 flex-1 border-0 bg-transparent text-base text-[#fafafa] outline-0 placeholder:text-[#fafafa]/40"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button
                            className="grid h-6 w-6 cursor-pointer place-items-center border-0 bg-transparent p-0 text-[#fafafa]"
                            type="submit"
                            aria-label="Subscribe"
                        >
                            <FaRegPaperPlane aria-hidden="true" />
                        </button>
                    </form>
                </div>

                {footerColumns.map((column) => (
                    <FooterColumn key={column.title} {...column} />
                ))}

                <div>
                    <h3 className="mb-6 m-0 text-xl font-medium leading-7 text-[#fafafa] max-[760px]:mb-4">Download App</h3>
                    <p className="mb-2 mt-0 text-xs font-medium leading-[18px] text-[#fafafa]/70">Save $3 with App New User Only</p>
                    <div className="mb-6 flex items-center gap-2">
                        <QrCode />
                        <div className="grid gap-1">
                            <AppBadge store="google" />
                            <AppBadge store="apple" />
                        </div>
                    </div>
                    <div className="flex items-center gap-6" aria-label="Social links">
                        <a className="grid h-6 w-6 place-items-center text-[#fafafa] no-underline" href="#facebook" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a className="grid h-6 w-6 place-items-center text-[#fafafa] no-underline" href="#twitter" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a className="grid h-6 w-6 place-items-center text-[#fafafa] no-underline" href="#instagram" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a className="grid h-6 w-6 place-items-center text-[#fafafa] no-underline" href="#linkedin" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex min-h-16 items-center justify-center border-t border-white/10 max-[760px]:px-6 max-[760px]:py-4 max-[760px]:text-center">
                <p className="m-0 text-base leading-6 text-white/30">Copyright Ridham Patel 2026. All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
