import { useState } from "react";
import categories from "../../data/categories";

export default function CategoriesPage() {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex max-w-6xl mx-auto border rounded-lg shadow-md overflow-hidden mt-8">

        {/* LEFT COLUMN — MAIN CATEGORIES */}
        <div className="w-1/3 bg-white border-r p-4 overflow-y-auto max-h-[90vh]">
          <h1 className="text-2xl font-bold mb-4">Danh Mục (Categories)</h1>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.slug}
                onClick={() => setSelected(category)}
                className={`p-3 rounded-lg cursor-pointer transition font-medium ${
                  selected.slug === category.slug
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN — SUBCATEGORIES */}
        <div className="w-2/3 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold mb-4">{selected.name}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selected.subcategories.map((sub, index) => (
              <li
                key={index}
                className="p-3 bg-white border rounded-lg shadow-sm hover:shadow-md cursor-pointer transition"
              >
                {sub}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
