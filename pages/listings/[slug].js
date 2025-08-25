// pages/listings/[slug].js
import { useRouter } from "next/router";
import listings from "../../data/listings";

export async function getStaticPaths() {
  const paths = listings.map((listing) => ({
    params: { slug: listing.slug },
  }));

  return {
    paths,
    fallback: false, // 404 if slug not found
  };
}

export async function getStaticProps({ params }) {
  const listing = listings.find((item) => item.slug === params.slug);

  return {
    props: {
      listing,
    },
  };
}

export default function ListingPage({ listing }) {
  const router = useRouter();

  // If the page is not generated yet (fallback true)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{listing.title}</h1>
      <p><strong>Category:</strong> {listing.category}</p>
      <p><strong>Subcategory:</strong> {listing.subcategory}</p>
      <p>{listing.description}</p>
    </div>
  );
}
