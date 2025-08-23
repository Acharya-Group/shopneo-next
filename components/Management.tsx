"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";

export default function ManagementSection() {
  const sliderRef = useRef<Slider | null>(null);

  const slides = [
    {
      img: "/images/management-slide-1.webp",
      title: "Centralized Product Catalog",
      desc: "Bring order to your product universe. Manage all your items, variants, and collections from a single, intuitive dashboard. Update descriptions, prices, and images in seconds, ensuring your entire catalog is always accurate and up-to-date.",
    },
    {
      img: "/images/management-slide-2.webp",
      title: "Real-Time Inventory Tracking",
      desc: "Never oversell or lose a sale to stockouts again. Shopneo automatically updates your inventory levels with every sale, return, and restock. Get a live view of your stock across all sales channels, all in one place.",
    },
    {
      img: "/images/management-slide-3.webp",
      title: "Bulk Editing & Import/Export",
      desc: "Save hours on tedious data entry. Quickly make changes to hundreds of products at once or seamlessly import your entire catalog from a spreadsheet. Effortlessly export your data for reporting or migration, making bulk management a breeze.",
    },
    {
      img: "/images/management-slide-4.webp",
      title: "Low-Stock Alerts & Smart Reordering",
      desc: "Stay proactive, not reactive. Set custom thresholds and receive instant notifications when inventory runs low. Make informed purchasing decisions with insights that help you reorder best-sellers on time and optimize your stock levels.",
    },
    {
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
        <div className="slick-slider-container">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((item, idx) => (
              <div key={idx} className="p-2">
                <div className="custom-card border border-yellow-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="px-4 py-6">
                    <h5 className="font-semibold text-lg truncate mb-2">
                      {item.title}
                    </h5>
                    <p className="text-sm leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="slick-prev custom-arrow bg-yellow-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="slick-next custom-arrow bg-yellow-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
