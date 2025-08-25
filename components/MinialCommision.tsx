import Image from "next/image";

export default function MinimalCommission() {
  const items = [
    { img: "/images/free-setup.webp", text: "Free Setup", alt: "free" },
    { img: "/images/pay-as.webp", text: "Pay as You Go", alt: "pay as you go" },
    { img: "/images/hidden-fees.webp", text: "No Hidden Fees", alt: "no hidden fees" },
    { img: "/images/no-cradit-card.webp", text: "No Credit Card Needed", alt: "credit card" },
  ];

  return (
    <section className="relative overflow-hidden bg_golden">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Minimal Commissions</h2>
          <p className="text-gray-700">
            Maximize your earnings with our low commission structure.
          </p>
        </div>

        {/* Grid for boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#f5a30a7a] hover:bg-yellow-400 transition-all duration-300 rounded-lg p-3 text-center w-full"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={60}
                height={60}
                className="mx-auto"
              />
              <p className="font-semibold mt-2 mb-0">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
