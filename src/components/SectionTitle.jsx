function SectionTitle({ label, title, children }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <div className="mb-6 flex items-center gap-4">
          <span className="h-10 w-5 rounded bg-[#db4444]" aria-hidden="true" />
          <p className="m-0 text-base font-semibold leading-5 text-[#db4444]">{label}</p>
        </div>
        {title ? <h2 className="m-0 text-4xl font-semibold leading-[48px] tracking-[0.04em] text-black max-[760px]:text-3xl">{title}</h2> : null}
      </div>
      {children}
    </div>
  )
}

export default SectionTitle
