import { useRouter } from "next/router";
import Link from "next/link";
import listings from "../../../../data/listings"; // adjust path if needed

export default function MainCategoryListings() {
  const router = useRouter();
  const { category } = router.query;

  // Filter listings by main category and sort by most recent first
  const filteredListings = listings
    .filter((item) => item.category === decodeURIComponent(category))
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort newest → oldest

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        {decodeURIComponent(category)} - All Listings
      </h1>

      {filteredListings.length === 0 ? (
        <p className="text-gray-500">No listings found for this category.</p>
      ) : (
        <ul className="space-y-4">
          {filteredListings.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Thumbnail */}
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              {/* Listing Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {item.description}
                </p>
                <p className="text-blue-600 font-medium mt-1">${item.price}</p>
              </div>

              {/* View Button */}
              <Link
                href={`/listings/${item.id}`}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
