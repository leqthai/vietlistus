<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {categoriesData[activeCategory]?.subcategories?.map((subcat) => (
    <Link
      key={subcat.vi}
      href={`/listings/category/${encodeURIComponent(activeCategory)}/${encodeURIComponent(subcat.vi)}`}
      className="block p-3 bg-white rounded-md shadow hover:bg-gray-100 transition"
    >
      <span className="block text-gray-900 text-sm">{subcat.vi}</span>
      <span className="block text-gray-500 text-xs">{subcat.en}</span>
    </Link>
  ))}
</ul>
