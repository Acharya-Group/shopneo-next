"use client";

import Slider from "react-slick";
import Image from "next/image";
import { SmartSlides, SmartlogosSlide } from "../data/common";
export default function SmartShippingSection() {

  const contentSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  };

  const logoSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
      responsive: [
      { breakpoint: 992, settings: { slidesToShow: 5 } },
      { breakpoint: 576, settings: { slidesToShow: 3 } },
      { breakpoint: 300, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-12 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 data-aos-duraction="1000" data-aos="fade-up" className="text-center text-2xl md:text-3xl font-semibold">
          Smart Shipping @ Shopneo
        </h2>
        <p data-aos-duraction="2000" data-aos="fade-up" className="text-center text-base font-medium mt-2 mb-6">
          Fully Automated Shipping, From Order to Delivery
        </p>

        {/* Content Slider */}
        <Slider {...contentSettings} className="mb-8">
          {SmartSlides.map((slide, idx) => (
            <div key={idx} className="px-4">
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
            </div>
          ))}
        </Slider>

        {/* Subtext */}
        <p className="text-center pt-6 text-gray-700 font-medium">
          40+ Logistics Providers, No Account Needed. Option to Integrate Your
          Own.
        </p>

        {/* Logos Slider */}
        <Slider {...logoSettings} className="mt-6">
          {SmartlogosSlide.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center p-4">
              <Image
                src={logo}
                alt={`Logistics Partner ${idx + 1}`}
                width={150}
                height={80}
                className="object-contain w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
