"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { trustedLogos } from "../data/common";


export default function TruestedPartners() {
  return (
    <section className="bg_golden py-10">
      <div className="px-4">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-2xl md:text-3xl font-semibold"
        >
          Optimized Logistics @ Shopneo
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-center text-base font-medium mt-2 mb-6 px-2"
        >
          Comprehensive, Automated Shipping Solutions to Boost Efficiency
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          slidesPerView={6}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
          className="trusted_slider"
        >
          {trustedLogos.map((logo, idx) => (
            <SwiperSlide
              key={idx}
              className="flex justify-center items-center p-4"
            >
              <Image
                src={logo}
                alt={`Logistics Partner ${idx + 1}`}
                width={150}
                height={80}
                className="object-contain w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
