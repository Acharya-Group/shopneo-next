import Image from "next/image";

export default function SmoothMigration() {
  const topLogos = [
    { img: "/images/amazon-logo.webp", alt: "Amazon Logo" },
    { img: "/images/Shopify-Logo.webp", alt: "Shopify Logo" },
  ];

  const bottomLogos = [
    { img: "/images/woocommerce-logo.webp", alt: "WooCommerce Logo" },
    { img: "/images/magento-logo.webp", alt: "Magento Logo" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 data-aos="fade-up" data-aos-duraction="000" data-aos-duarction="1000" className="text-2xl font-semibold">Smooth Migration</h2>
          <p data-aos="fade-up" data-aos-duarction="2000" className="text-gray-700 max-w-2xl mx-auto">
            Quickly and easily transfer your entire catalog from your current
            platform with just a few simple steps.
          </p>

          {/* Top Row */}
          <div className="flex justify-center items-center gap-4 sm:gap-10 pt-6 max-w-2xl mx-auto">
            {topLogos.map((logo, index) => (
              <div data-aos-duarction="1000" data-aos="flip-left"
                key={index}
                className="bg-[#f5a30a7a] hover:bg-[#f5a30a8a] transition-all duration-300 rounded-lg transform hover:scale-110 w-full h-20 sm:h-32 flex p-4 items-center justify-center"
              >
                <Image
                  src={logo.img}
                  alt={logo.alt}
                  width={206}
                  height={60}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>

          {/* ONDC Logo */}
          <div className="flex justify-center py-6">
            <Image data-aos="zoom-in" data-aos-duarction="2000"
              src="/images/ondc-logo.svg"
              alt="ONDC Logo"
              width={300}
              height={80}
              className="mx-auto"
            />
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center gap-4 sm:gap-10 pt-6n max-w-2xl mx-auto">
            {bottomLogos.map((logo, index) => (
              <div data-aos-duarction="2000" data-aos="flip-left"
                key={index}
                className="bg-[#f5a30a7a] hover:bg-[#f5a30a8a] transition-all duration-300 rounded-lg  transform hover:scale-110 w-full h-20 sm:h-32 flex items-center justify-center p-4"
              >
                <Image
                  src={logo.img}
                  alt={logo.alt}
                  width={206}
                  height={60}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
