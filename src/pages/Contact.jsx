import { FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ContactInfoItem({ icon: Icon, title, children }) {
  return (
    <section>
      <div className="flex items-center gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#db4444] text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="m-0 text-base font-medium leading-6 text-black">{title}</h2>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-sm leading-[21px] text-black">{children}</div>
    </section>
  )
}

function Contact() {
  return (
    <main className="bg-white pb-[140px] pt-20 text-black max-[760px]:pb-20 max-[760px]:pt-10">
      <div className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <nav className="flex items-center gap-3 text-sm leading-[21px]" aria-label="Breadcrumb">
          <Link className="text-black/50 no-underline" to="/">
            Home
          </Link>
          <span className="text-black/50">/</span>
          <span className="text-black">Contact</span>
        </nav>

        <div className="mt-20 flex items-start gap-[30px] max-[980px]:flex-col max-[760px]:mt-12">
          <aside className="h-[457px] w-[340px] shrink-0 rounded bg-white px-[35px] py-10 shadow-[0_1px_13px_rgba(0,0,0,0.05)] max-[980px]:h-auto max-[980px]:w-full">
            <ContactInfoItem icon={FiPhone} title="Call To Us">
              <p className="m-0">We are available 24/7, 7 days a week.</p>
              <p className="m-0">Phone: +880161112222</p>
            </ContactInfoItem>

            <hr className="my-8 h-0 border-0 border-t border-black/50" />

            <ContactInfoItem icon={FiMail} title="Write To US">
              <p className="m-0">Fill out our form and we will contact you within 24 hours.</p>
              <p className="m-0">Emails: customer@exclusive.com</p>
              <p className="m-0">Emails: support@exclusive.com</p>
            </ContactInfoItem>
          </aside>

          <form className="h-[457px] w-[800px] rounded bg-white px-[31px] py-10 shadow-[0_1px_13px_rgba(0,0,0,0.05)] max-[980px]:h-auto max-[980px]:w-full">
            <div className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">
              <label className="sr-only" htmlFor="contact-name">
                Your Name
              </label>
              <input
                id="contact-name"
                className="h-[50px] rounded border-0 bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0 placeholder:text-black/50"
                type="text"
                placeholder="Your Name *"
              />

              <label className="sr-only" htmlFor="contact-email">
                Your Email
              </label>
              <input
                id="contact-email"
                className="h-[50px] rounded border-0 bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0 placeholder:text-black/50"
                type="email"
                placeholder="Your Email *"
              />

              <label className="sr-only" htmlFor="contact-phone">
                Your Phone
              </label>
              <input
                id="contact-phone"
                className="h-[50px] rounded border-0 bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0 placeholder:text-black/50"
                type="tel"
                placeholder="Your Phone *"
              />
            </div>

            <label className="sr-only" htmlFor="contact-message">
              Your Message
            </label>
            <textarea
              id="contact-message"
              className="mt-8 h-[207px] w-full resize-none rounded border-0 bg-[#f5f5f5] px-4 py-3 text-base leading-6 text-black outline-0 placeholder:text-black/50"
              placeholder="Your Massage"
            />

            <div className="mt-8 flex justify-end">
              <button
                className="h-14 w-[215px] cursor-pointer rounded border-0 bg-[#db4444] px-12 py-4 text-base font-medium leading-6 text-[#fafafa] transition hover:bg-[#c73535]"
                type="submit"
              >
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact
