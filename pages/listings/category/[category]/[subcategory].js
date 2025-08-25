// pages/listings/category/[category]/[subcategory].js
import { useRouter } from "next/router";
import listings from "../../../../data/listings";

export async function getStaticPaths() {
  const paths = listings.map((listing) => ({
    params: {
      category: listing.category,
      subcategory: listing.subcategory,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filtered = listings.filter(
    (item) =>
      item.category === params.category &&
      item.subcategory === params.subcategory
  );

  return {
    props: {
      listings: filtered,
      category: params.category,
      subcategory: params.subcategory,
    },
  };
}

export default function SubcategoryPage({ listings, category, subcategory }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        {subcategory} in {category}
      </h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <a href={`/listings/${listing.slug}`}>{listing.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
