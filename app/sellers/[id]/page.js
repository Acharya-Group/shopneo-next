import { sellers } from "@/data/sellers";

export default function SellerDetail({ params }) {
  const seller = sellers.find((s) => s.id.toString() === params.id);

  if (!seller) {
    return <div className="p-6 text-red-500">Seller not found!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{seller.name}</h1>
      <p className="text-gray-700 mb-4">{seller.description}</p>

      <h2 className="text-xl font-semibold mb-2">Products:</h2>
      <ul className="list-disc list-inside">
        {seller.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}
