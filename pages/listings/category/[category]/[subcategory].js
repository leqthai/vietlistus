import { useRouter } from "next/router";
import Link from "next/link";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import listings from "../../../../data/listings";  // ✅ Correct

export default function SubcategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;

  const filteredListings = listings.filter(
    (item) =>
      item.category === decodeURIComponent(category) &&
      item.subcategory === decodeURIComponent(subcategory)
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {decodeURIComponent(subcategory)}
      </h1>

      {filteredListings.length === 0 ? (
        <p className="text-gray-500">No listings found in this subcategory.</p>
      ) : (
        <ul className="space-y-4">
          {filteredListings.map((item) => (
            <li
              key={item.id}
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

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaTag /> ${item.price}
                  </span>
                </div>
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
