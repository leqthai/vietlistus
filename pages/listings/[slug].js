import React from "react";
import listings from "../../data/listings";

export default function ListingPage({ listing }) {
  if (!listing) {
    return <div className="p-6">Listing not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{listing.title}</h1>
      <p className="mt-2 text-gray-700">{listing.description}</p>
      <p className="mt-4 text-sm text-gray-500">Category: {listing.category}</p>
      <p className="text-sm text-gray-500">Subcategory: {listing.subcategory}</p>
    </div>
  );
}

// ✅ Generate all valid listing paths
export async function getStaticPaths() {
  const paths = listings.map((item) => ({
    params: { slug: String(item.slug) }, // 🔹 Ensure it's a STRING
  }));

  return {
    paths,
    fallback: false,
  };
}

// ✅ Provide listing data based on slug
export async function getStaticProps({ params }) {
  const listing = listings.find((item) => item.slug === params.slug);
  return { props: { listing: listing || null } };
}
