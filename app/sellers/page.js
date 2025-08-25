"use client"; // needed for interactivity in Next.js App Router
import { useState } from "react";
import Link from "next/link";
import { sellers } from "@/data/sellers";
import Image from "next/image";

export default function SellersPage() {
  // State for search, filter, pagination
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const sellersPerPage = 9; 

  // 1. Filter + Search logic
  const filteredSellers = sellers.filter((seller) => {
    const matchesSearch =
      seller.name.toLowerCase().includes(search.toLowerCase()) ||
      seller.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || seller.category === filter;
    return matchesSearch && matchesFilter;
  });

  // 2. Pagination logic
  const totalPages = Math.ceil(filteredSellers.length / sellersPerPage);
  const indexOfLast = currentPage * sellersPerPage;
  const indexOfFirst = indexOfLast - sellersPerPage;
  const currentSellers = filteredSellers.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">All Sellers</h1>

      {/* Search + Filter Controls */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search sellers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-10/12 border-yellow-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"
        />
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded py-2 px-3 w-2/12 border-yellow-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Beauty">Beauty</option>
          <option value="Home">Home</option>
          <option value="Books">Books</option>
          <option value="Grocery">Grocery</option>
          <option value="Health">Health</option>
          <option value="Sports">Sports</option>
          <option value="Toys">Toys</option>
          <option value="Furniture">Furniture</option>
          <option value="Automotive">Automotive</option>,
          <option value="Others">Others</option>
        </select>
      </div>

     {/* Sellers List */}
{currentSellers.length > 0 ? (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {currentSellers.map((seller) => (
      <li key={seller.id} className="p-4 border rounded-lg shadow border-yellow-300 hover:shadow-lg transition">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">{seller.name}</h2>
            <p className="text-gray-600">{seller.description}</p>
          </div>
           <img
          src={seller.logo}
          alt={seller.name}
          className="w-20 h-20 md:w-22 md:h-22 rounded-full border shadow"
        />
        </div>
        <span className="text-sm text-gray-500">
          Category: {seller.category}
        </span>
        <br />
        <Link
          href={`/sellers/${seller.id}`}
          className="text-yellow-600 font-semibold hover:underline mt-2 inline-block"
        >
          View Details →
        </Link>
      </li>
    ))}
  </ul>
) : (
  <p className="text-center text-gray-500 font-medium mt-8">
    🚫 No sellers found matching your criteria.
  </p>
)}


      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
