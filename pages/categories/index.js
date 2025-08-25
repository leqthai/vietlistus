import categories from "../../data/categories";

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT COLUMN */}
      <aside className="w-1/3 sm:w-1/4 border-r border-gray-200 bg-white px-3 pt-5">
        <ul className="flex flex-col gap-2">
          {Object.keys(categories).map((mainCategory) => (
            <button
              key={mainCategory}
              className="text-left px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              {mainCategory}
            </button>
          ))}
        </ul>
      </aside>

      {/* RIGHT COLUMN */}
      <section className="flex-1 p-5">
        <h1 className="text-xl font-bold mb-4">Chọn một danh mục</h1>
        <p>Danh sách các mục sẽ hiển thị ở đây…</p>
      </section>
    </div>
  );
}
