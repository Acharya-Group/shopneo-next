"use client";
import { customers } from "@/data/customers";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "@/components/eMitter/ContactForm";
import { QRCodeCanvas } from "qrcode.react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, use } from "react"; 

// ✅ Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Page({ params }) {
  const [showQR, setShowQR] = useState(false);

  const { slug } = use(params); 
  const slugLower = slug.toLowerCase();
  const customer = customers.find(
    (c) => c.slug.toLowerCase() === slugLower
  );

  if (!customer) {
    return <div className="p-6 text-red-500 text-center py-20">❌ Page not found!</div>;
  }

  // ✅ Share handler
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: customer.name || "My Website",
          url,
        })
        .then(() => console.log("Shared successfully"))
        .catch((err) => console.log("Share failed:", err));
    } else {
      navigator.clipboard.writeText(url);
      alert("✅ Link copied to clipboard!");
    }
  };

  // ✅ QR download handler
  const handleDownloadQR = () => {
    const canvas = document.getElementById("qrCode");
    if (canvas instanceof HTMLCanvasElement) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "website-qr.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="absolute bottom-[-50%] transform -translate-y-1/2 left-0">
          <Image
            src={customer.profile}
            alt={customer.name}
            width={144}
            height={144}
            className="object-cover h-28 w-28 sm:h-36 sm:w-36 rounded-full border shadow"
          />
        </div>
        <img
          className="w-full h-[200px] object-cover rounded-lg mb-8"
          height={300}
          width={1200}
          src={customer.banner}
          alt={`${customer.businessName} Banner`} />
      </div>


      <div className="lg:w-10/12 md:w-9/12 sm:w-9/12 sm:ps-3 mt-14">
        {customer.name && (
          <h1 className="text-3xl font-bold">{customer.name}</h1>
        )}

        {customer.businessName && (
          <p className="text-lg font-semibold text-gray-600">
            🛍️{customer.businessName}
          </p>
        )}

        {customer.location && (
          <p className="text-gray-500 text-sm">📍{customer.location}</p>
        )}

        {customer.description && (
          <p className="text-gray-700 max-w-2xl mt-2">
            {customer.description}
          </p>
        )}

        {/* Contact & Socials */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
          {customer.email && <span>📧 {customer.email}</span>}
          {customer.contact && <span>📞 {customer.contact}</span>}
          {customer.alternativeNumber && <span>📱 {customer.alternativeNumber}</span>}

          {customer.whatsapp && (
            <Link href={customer.whatsapp} target="_blank">💬 WhatsApp</Link>
          )}
          {customer.instagram && (
            <Link href={customer.instagram} target="_blank">📸 Instagram</Link>
          )}
          {customer.facebook && (
            <Link href={customer.facebook} target="_blank">📘 Facebook</Link>
          )}
          {customer.youtube && (
            <Link href={customer.youtube} target="_blank">▶ YouTube</Link>
          )}
        </div>
         {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleShare}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          🔗 Share Website
        </button>

        <button
          onClick={() => {
            setShowQR(true);
            setTimeout(handleDownloadQR, 500);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          📥 Download QR
        </button>
      </div>

      {/* Hidden QR Code (for download) */}
      {showQR && (
        <div className="hidden">
          <QRCodeCanvas id="qrCode" value={window.location.href} size={200} />
        </div>
      )}
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 mt-5">Products</h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            slidesPerView={4}
            spaceBetween={20}
            navigation={{
              nextEl: ".products-next",
              prevEl: ".products-prev",
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="gallery_slider max-w-[2200px] mx-auto mb-10"
          >
            {customer.products.map((product, idx) => (
              <SwiperSlide
                key={idx}
                className="border rounded-xl p-6 flex flex-col items-center text-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-32 object-cover mb-3"
                />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <Link
                  href={product.whatsappUrl}
                  target="_blank"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm"
                >
                  Chat via WhatsApp
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className="products-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:text-black cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button className="products-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:text-black cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Gallery Section */}
      </div>
      {/* gallery section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            slidesPerView={4}
            spaceBetween={20}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="gallery_slider max-w-[2200px] mx-auto mb-10"
          >
            {customer.gallery.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="flex justify-center items-center px-3"
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Arrows */}
          <button className="gallery-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white p-2 rounded-full shadow-md transition-all duraction-300 hover:text-black cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button className="gallery-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white p-2 rounded-full shadow-md transition-all duraction-300 hover:text-black cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Blogs Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Blogs</h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            slidesPerView={4}
            spaceBetween={20}
            navigation={{
              nextEl: ".blogs-next",
              prevEl: ".blogs-prev",
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="gallery_slider max-w-[2200px] mx-auto mb-10"
          >
            {customer.blogs.map((blog, idx) => (
              <SwiperSlide
                key={idx}
                className="border rounded-xl p-6 bg-white shadow hover:shadow-md transition"
              >
                <Image
                  src={blog.img}
                  alt={blog.heading}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover rounded mb-4"
                />
               <h3 
  title={blog.heading} 
  className="text-xl font-semibold mb-2 truncate"
>
  {blog.heading}
</h3>
<p 
  className="text-gray-600 text-sm line-clamp-2"
>
  {blog.description}
</p>

              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Arrows */}
          <button className="blogs-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white p-2 rounded-full shadow-md transition-all duraction-300 hover:text-black cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button className="blogs-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white p-2 rounded-full shadow-md transition-all duraction-300 hover:text-black cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      {/* contact form */}
      <ContactForm email={customer.email} />
      {/* Business Hours */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
        <div className="border rounded-lg p-6 mb-10">
          <ul className="space-y-2">
            {Object.entries(customer.businessHours).map(([day, hours]) => (
              <li key={day} className="flex justify-between">
                <span className="font-medium capitalize">{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
        >
          ← Sell Products on ShopNeo
        </Link>
      </div>
    </div>
  );
}
