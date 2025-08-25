"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";

export default function ManagementSection() {
  const sliderRef = useRef<Slider | null>(null);

  const slides = [
    {
        id: 1,
      img: "/images/management-slide-1.webp",
      title: "Centralized Product Catalog",
      desc: "Bring order to your product universe. Manage all your items, variants, and collections from a single, intuitive dashboard. Update descriptions, prices, and images in seconds, ensuring your entire catalog is always accurate and up-to-date.",
    },
    {
        id: 2,
      img: "/images/management-slide-2.webp",
      title: "Real-Time Inventory Tracking",
      desc: "Never oversell or lose a sale to stockouts again. Shopneo automatically updates your inventory levels with every sale, return, and restock. Get a live view of your stock across all sales channels, all in one place.",
    },
    {
        id: 3,
      img: "/images/management-slide-3.webp",
      title: "Bulk Editing & Import/Export",
      desc: "Save hours on tedious data entry. Quickly make changes to hundreds of products at once or seamlessly import your entire catalog from a spreadsheet. Effortlessly export your data for reporting or migration, making bulk management a breeze.",
    },
    {
        id: 4,
      img: "/images/management-slide-4.webp",
      title: "Low-Stock Alerts & Smart Reordering",
      desc: "Stay proactive, not reactive. Set custom thresholds and receive instant notifications when inventory runs low. Make informed purchasing decisions with insights that help you reorder best-sellers on time and optimize your stock levels.",
    },
    {
        id: 5,
      img: "/images/management-slide-5.webp",
      title: "Multi-Channel Sync",
      desc: "Sell everywhere without the chaos. Keep your inventory and product details perfectly synchronized across your website, online marketplaces, and physical store. A sale on one platform instantly updates all others, eliminating sync errors.",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="success_section py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="fs-lg font-semibold">
            Simplify Catalog & Inventory Management with Shopneo
          </h2>
          <p className="fs-base mt-2">
            Effortlessly manage your inventory and product catalog with
            Shopneo&apos;s intuitive tools, ensuring smooth operations and
            efficient sales.
          </p>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide ) => (
            <div key={slide.id} className="p-2">
              <div className="custom-card bg-white rounded-2xl border border-yellow-500 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-200 hover:scale-110"
                />
                <div className="px-4 py-5">
                  <h5 className="text-lg font-semibold truncate">
                    {slide.title}
                  </h5>
                  <p className="text-sm line-clamp-2">{slide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="custom-arrow bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition"
          >
            ←
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="custom-arrow bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
