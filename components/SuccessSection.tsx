"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";

export default function SuccessSection() {
  const sliderRef = useRef<Slider>(null);

  const slides = [
    {
      id: 1,
      img: "/images/success-stories-1.webp",
      title: "Financial Hub",
      desc: "Bring order to your product universe. Manage all your items, variants, and collections from a single dashboard.",
    },
    {
      id: 2,
      img: "/images/success-stories-2.webp",
      title: "Get Paid Faster, Stay Compliant",
      desc: "Take control of your finances. Our dashboard guarantees on-time payouts and instant access to invoices.",
    },
    {
      id: 3,
      img: "/images/success-stories-3.webp",
      title: "Your Earnings, Simplified",
      desc: "Effortlessly track every payout, access invoices, and enjoy peace of mind with built-in compliance.",
    },
    {
      id: 4,
      img: "/images/success-stories-4.webp",
      title: "Streamline Your Settlements",
      desc: "A central platform for managing payouts, e-invoices, and ensuring all transactions meet RSF 20 standards.",
    },
    {
      id: 5,
      img: "/images/success-stories-5.webp",
      title: "Track. Manage. Get Paid.",
      desc: "Immediately view payout status, download commission invoices, and verify compliance hassle-free.",
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
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="success_section bg_golden py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">
            Streamlined Payouts @ Shopneo Store
          </h2>
          <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
            Experience quick and clear settlements with a fully transparent
            process, ensuring you get paid on time, every time.
          </p>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
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
