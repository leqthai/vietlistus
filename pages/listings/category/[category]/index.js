import { useRouter } from "next/router";
import listings from "../../../../data/listings";

export default function ListingsPage() {
  const router = useRouter();
  const { category } = router.query;

  const filteredListings = listings.filter(
    (listing) => listing.category === category
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      {filteredListings.length === 0 ? (
        <p>Không có tin nào trong danh mục này.</p>
      ) : (
        <ul className="space-y-4">
          {filteredListings.map((item) => (
            <li
              key={item.id}
              className="border p-4 rounded shadow hover:bg-gray-50 transition"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500">
                {item.location} • {item.postedAt}
              </p>
              <p className="text-blue-500 font-bold">{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
