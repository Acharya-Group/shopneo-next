"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper"; // ✅ Import type
import Image from "next/image";
import { successSlides } from "../data/common";
import { useRef } from "react";

export default function SuccessSection() {
  // ✅ Correctly typed ref
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="success_section bg_golden py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            data-aos-duraction="1000"
            data-aos="fade-up"
            className="text-3xl font-semibold"
          >
            Streamlined Payouts @ Shopneo Store
          </h2>
          <p
            data-aos-duraction="2000"
            data-aos="fade-up"
            className="text-gray-700 mt-2 max-w-2xl mx-auto"
          >
            Experience quick and clear settlements with a fully transparent
            process, ensuring you get paid on time, every time.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={4}
          spaceBetween={16}
          breakpoints={{
            992: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            200: { slidesPerView: 1 },
          }}
          className="pb-10"
        >
          {successSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="p-2">
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="custom-arrow bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition"
          >
            ←
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="custom-arrow bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
