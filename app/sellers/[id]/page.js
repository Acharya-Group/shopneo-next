import { sellers } from "@/data/sellers";
import Link from "next/link";
import { categoryImages } from "../../../data/sellers";

export default function SellerDetail({ params }) {
  const seller = sellers.find((s) => s.id.toString() === params.id);

  if (!seller) {
    return <div className="p-6 text-red-500">❌ Seller not found!</div>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Seller Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        <img
          src={seller.logo}
          alt={seller.name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border shadow"
        />
        <div>
          <h1 className="text-3xl font-bold">{seller.name}</h1>
          <p className="text-gray-500 text-sm mb-2">{seller.tagline}</p>
          <p className="text-gray-700 max-w-2xl">{seller.description}</p>

          {/* Seller Stats */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
            <span>⭐ {seller.rating} ({seller.totalReviews} reviews)</span>
            <span>📦 {seller.totalProducts} products</span>
            <span>👥 {seller.followers} followers</span>
            <span>⏱ Response: {seller.responseTime}</span>
            <span>🔄 Returns: {seller.returnRate}</span>
            {seller.verified && (
              <span className="text-green-600 font-semibold">✔ Verified Seller</span>
            )}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seller.category.map((cat, idx) => (
          <Link
            key={idx}
            href={seller.shopneoLink}
            target="_blank"
            className="border rounded-xl p-6 flex flex-col items-center justify-center text-center bg-yellow-50 hover:bg-yellow-100 transition cursor-pointer"
          >
           <img
  src={categoryImages[cat] || categoryImages.Default}
  alt={cat}
  className="w-16 h-16 object-contain mb-3"
/>

            <span className="text-lg font-semibold text-yellow-700">{cat}</span>
          </Link>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <Link
          href="/sellers"
          className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
        >
          ← Back to Sellers
        </Link>
      </div>
    </div>
  );
}
