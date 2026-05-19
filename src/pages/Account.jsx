const accountSections = [
  {
    title: 'Manage My Account',
    links: ['My Profile', 'Address Book', 'My Payment Options'],
  },
  {
    title: 'My Orders',
    links: ['My Returns', 'My Cancellations'],
  },
  {
    title: 'My WishList',
    links: [],
  },
]

function TextInput({ label, placeholder, type = 'text' }) {
  return (
    <label className="block">
      <span className="mb-2 block text-base leading-6 text-black">{label}</span>
      <input
        className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0 placeholder:text-black/40"
        type={type}
        placeholder={placeholder}
      />
    </label>
  )
}

function Account() {
  return (
    <main className="bg-white pb-[140px] pt-20">
      <div className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <div className="flex items-center justify-between gap-6 max-[620px]:flex-col max-[620px]:items-start">
          <nav className="text-sm leading-[21px]" aria-label="Breadcrumb">
            <a className="text-black/50 no-underline" href="/">
              Home
            </a>
            <span className="mx-3 text-black/50">/</span>
            <span className="text-black">My Account</span>
          </nav>
          <p className="m-0 text-sm leading-[21px] text-black">
            Welcome! <span className="text-[#db4444]">Alica Patel</span>
          </p>
        </div>

        <div className="account-layout">
          <aside aria-label="Account sections">
            <nav className="flex flex-col gap-6">
              {accountSections.map((section) => (
                <div key={section.title}>
                  <h2 className="m-0 text-base font-medium leading-6 text-black">{section.title}</h2>
                  {section.links.length ? (
                    <ul className="mb-0 mt-4 flex list-none flex-col gap-2 p-0 pl-[35px]">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a className={`text-base leading-6 no-underline ${link === 'My Profile' ? 'text-[#db4444]' : 'text-black/50'}`} href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </nav>
          </aside>

          <section className="account-profile-card">
            <h1 className="m-0 text-xl font-medium leading-7 text-[#db4444]">Edit Your Profile</h1>

            <form className="mt-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid grid-cols-2 gap-x-[50px] gap-y-6 max-[760px]:grid-cols-1">
                <TextInput label="First Name" placeholder="Alica" />
                <TextInput label="Last Name" placeholder="Patel" />
                <TextInput label="Email" placeholder="alicapatel@gmail.com" type="email" />
                <TextInput label="Address" placeholder="Ahmedabad, Gujarat, India" />
              </div>

              <fieldset className="mt-6 border-0 p-0">
                <legend className="mb-4 text-base leading-6 text-black">Password Changes</legend>
                <div className="grid gap-4">
                  <input className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0 placeholder:text-black/40" type="password" placeholder="Current Password" />
                  <input className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0 placeholder:text-black/40" type="password" placeholder="New Password" />
                  <input className="h-[50px] w-full rounded border-0 bg-[#f5f5f5] px-4 text-base leading-6 text-black outline-0 placeholder:text-black/40" type="password" placeholder="Confirm New Password" />
                </div>
              </fieldset>

              <div className="mt-6 flex items-center justify-end gap-8 max-[520px]:flex-col-reverse max-[520px]:items-stretch">
                <button className="h-14 border-0 bg-transparent px-4 text-base leading-6 text-black" type="button">
                  Cancel
                </button>
                <button className="h-14 rounded border-0 bg-[#db4444] px-12 text-base font-medium leading-6 text-[#fafafa]" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Account
