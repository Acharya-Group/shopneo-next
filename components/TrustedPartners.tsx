"use client";

import Slider from "react-slick";
import Image from "next/image";
import { trustedLogos } from "../data/common";
export default function TruestedPartners() {

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="bg_golden py-10">
      <div  className="px-4">
        {/* Heading */}
        <h2 data-aos="fade-up" data-aos-duraction="1000" className="text-center text-2xl md:text-3xl font-semibold">
          Optimized Logistics @ Shopneo
        </h2>
        <p data-aos="fade-up" data-aos-duraction="2000" className="text-center text-base font-medium mt-2 mb-6 px-2">
          Comprehensive, Automated Shipping Solutions to Boost Efficiency
        </p>

        {/* Logo Slider */}
        <Slider {...settings}>
          {trustedLogos.map((logo, idx) => (
            <div data-aos="flip-left" data-aos-duraction="2000"
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
