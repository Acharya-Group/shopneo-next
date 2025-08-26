"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { SmartSlides, SmartlogosSlide } from "../data/common";


export default function SmartShippingSection() {
  return (
    <section className="py-12 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2
          data-aos-duration="1000"
          data-aos="fade-up"
          className="text-center text-2xl md:text-3xl font-semibold"
        >
          Smart Shipping @ Shopneo
        </h2>
        <p
          data-aos-duration="2000"
          data-aos="fade-up"
          className="text-center text-base font-medium mt-2 mb-6"
        >
          Fully Automated Shipping, From Order to Delivery
        </p>

        {/* Content Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            prevEl: ".content-prev",
            nextEl: ".content-next",
          }}
          slidesPerView={1}
          className="mb-8"
        >
          {SmartSlides.map((slide, idx) => (
            <SwiperSlide key={idx} className="px-4">
              <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6">
                {/* Text */}
                <div className="md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
                    {slide.title}
                  </h3>
                  <p className="text-center md:text-left mt-3 text-gray-700">
                    {slide.desc}
                  </p>
                </div>
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content Arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button className="content-prev bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition">
            ←
          </button>
          <button className="content-next bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold hover:bg-yellow-600 transition">
            →
          </button>
        </div>

        {/* Subtext */}
        <p className="text-center pt-6 text-gray-700 font-medium">
          40+ Logistics Providers, No Account Needed. Option to Integrate Your
          Own.
        </p>

        {/* Logos Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          slidesPerView={6}
          breakpoints={{
            992: { slidesPerView: 5 },
            576: { slidesPerView: 3 },
            300: { slidesPerView: 3 },
            0: { slidesPerView: 1 },
          }}
          className="mt-6"
        >
          {SmartlogosSlide.map((logo, idx) => (
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
