"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { slides } from "../data/common";

export default function SliderSection() {
  return (
    <section className="py-10">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="fs-lg text-center px-3 mb-6 font-semibold"
      >
        20,000+ Sellers Growing With Us
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        speed={800}
        slidesPerView={6}
        breakpoints={{
          1280: { slidesPerView: 8 },
          1024: { slidesPerView: 7 },
          768: { slidesPerView: 5 },
          640: { slidesPerView: 3 },
          0: { slidesPerView: 3 },
        }}
        className="mySwiper max-w-[2200px] mx-auto"
      >
        {slides.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="flex justify-center items-center px-3 h-16"
          >
            <div className="w-24 sm:w-28 md:w-32">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
