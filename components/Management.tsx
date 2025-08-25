"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import { managementSlides } from "../data/common";

export default function ManagementSection() {
  const sliderRef = useRef<Slider | null>(null);

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
        <div className="text-center mb-8" data-aos="fade-up">
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
          {managementSlides.map((slide ) => (
            <div data-aos-duraction="3000" data-aos="flip-left" key={slide.id} className="p-2">
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
