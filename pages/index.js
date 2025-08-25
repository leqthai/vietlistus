import React, { useState } from "react";
import categories from "../data/categories";

export default function Home() {
  const mainCategories = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(mainCategories[0]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT COLUMN - MAIN CATEGORIES */}
      <aside className="w-1/3 sm:w-1/4 border-r border-gray-200 bg-white px-3 pt-5">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo-placeholder.png"
            alt="VietListUS"
            className="w-32 h-auto"
          />
        </div>
        <ul className="flex flex-col gap-2">
          {mainCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-3 text-left rounded-lg transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </ul>
      </aside>

      {/* RIGHT COLUMN - SUBCATEGORIES */}
      <main className="flex-1 p-5">
        <h2 className="text-xl font-semibold mb-4">{selectedCategory}</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories[selectedCategory].subcategories.map((subcat, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <p className="font-medium">{subcat.vi}</p>
              <p className="text-gray-500 text-sm">{subcat.en}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
