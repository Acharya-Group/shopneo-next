"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { managementSlides } from "../data/common";


export default function ManagementSection() {
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

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            prevEl: ".management-prev",
            nextEl: ".management-next",
          }}
          breakpoints={{
            992: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="management_slider"
        >
          {managementSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="p-2">
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button className="management-prev bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition">
            ←
          </button>
          <button className="management-next bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
