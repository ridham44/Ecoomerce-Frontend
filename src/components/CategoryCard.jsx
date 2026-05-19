function CategoryCard({ category }) {
  const Icon = category.icon

  return (
    <a
      className="group flex h-[145px] w-[170px] shrink-0 flex-col items-center justify-center gap-4 rounded border border-black/30 bg-white text-black no-underline transition hover:border-[#db4444] hover:bg-[#db4444] hover:text-[#fafafa] focus:border-[#db4444] focus:bg-[#db4444] focus:text-[#fafafa] focus:outline-none"
      href={category.href}
    >
      <Icon className="h-14 w-14 stroke-[1.5]" aria-hidden="true" />
      <span className="text-base leading-6">{category.label}</span>
    </a>
  )
}

export default CategoryCard
