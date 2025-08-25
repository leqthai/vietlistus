import { useState } from "react";
import Link from "next/link";
import categoriesData from "../data/categories.json";

export default function CategoriesPage() {
  const mainCategories = Object.keys(categoriesData);
  const [activeCategory, setActiveCategory] = useState(mainCategories[0]);

  // Remove English text in parentheses from Vietnamese names
  const cleanVietnamese = (text) => {
    return text.replace(/\s*\(.*?\)/, "");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT COLUMN - MAIN CATEGORIES */}
      <aside className="w-1/3 sm:w-1/4 border-r border-gray-200 bg-white px-3 pt-5 sticky top-0 left-0 h-screen overflow-y-auto">
        {/* VietListUS Logo */}
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-wide text-blue-600">
            Viet<span className="text-red-500">List</span>US
          </h1>
        </div>

        {/* MAIN CATEGORIES */}
        <ul className="flex flex-col gap-2">
          {mainCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex flex-col items-start p-2 rounded-md border shadow-sm transition w-full ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white border-gray-200 hover:shadow-md"
              }`}
            >
              {/* Vietnamese on top */}
              <span className="text-sm font-medium leading-tight">
                {cleanVietnamese(category)}
              </span>
              {/* English below */}
              <span
                className={`text-xs ${
                  activeCategory === category ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {category.match(/\((.*?)\)/)?.[1] || ""}
              </span>
            </button>
          ))}
        </ul>
      </aside>

      {/* RIGHT COLUMN - SUBCATEGORIES */}
      <main className="flex-1 p-3 pt-10">
        {/* MAIN CATEGORY TITLE */}
        <h2 className="text-xl font-bold mb-3">
          <Link
            href={`/listings/category/${encodeURIComponent(activeCategory)}`}
            className="hover:underline text-blue-600"
          >
            {cleanVietnamese(activeCategory)}
          </Link>
        </h2>

        {/* SUBCATEGORY LIST */}
        <ul className="flex flex-col gap-2 items-start">
          {categoriesData[activeCategory].subcategories.map((subcat) => (
            <Link
              key={subcat.en}
              href={`/listings/category/${encodeURIComponent(
                activeCategory
              )}/${encodeURIComponent(subcat.en)}`}
              className="w-full"
            >
              <li className="flex flex-col bg-white p-2 rounded-md shadow-sm hover:shadow-md transition cursor-pointer border border-gray-200 w-full">
                {/* Vietnamese on top */}
                <span className="text-gray-800 font-medium text-sm leading-tight">
                  {cleanVietnamese(subcat.vi)}
                </span>
                {/* English below */}
                <span className="text-gray-500 text-xs leading-tight">
                  {subcat.en}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </div>
  );
}
