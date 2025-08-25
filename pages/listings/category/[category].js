// pages/listings/category/[category].js
import { useRouter } from "next/router";
import Link from "next/link";
import categoriesData from "../../../data/categories.json";
import { listings } from "../../../data/listings"; // Your mock or real data source

export default function CategoryListingsPage() {
  const router = useRouter();
  const { category } = router.query;

  if (!category) return <p className="p-6">Loading...</p>;

  const decodedCategory = decodeURIComponent(category);

  // Filter all listings for this main category
  const filteredListings = listings.filter(
    (item) => item.category === decodedCategory
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {categoriesData[decodedCategory]?.vi} ({categoriesData[decodedCategory]?.en})
      </h1>

      {filteredListings.length === 0 ? (
        <p className="text-center text-gray-500">Chưa có tin đăng nào</p>
      ) : (
        <ul className="space-y-4">
          {filteredListings.map((listing) => (
            <li
              key={listing.id}
              className="flex items-center bg-white p-4 rounded-lg shadow border hover:shadow-md transition"
            >
              <img
                src={listing.thumbnail || "/placeholder.png"}
                alt={listing.title}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <Link
                  href={`/listings/${listing.id}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {listing.title}
                </Link>
                <p className="text-sm text-gray-500">{listing.location}</p>
                <p className="text-blue-600 font-bold mt-1">${listing.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
