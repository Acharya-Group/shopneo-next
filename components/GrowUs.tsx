"use client";

import Slider from "react-slick";
import Image from "next/image";
import { slides } from "../data/common";

export default function SliderSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 8 } },
      { breakpoint: 1024, settings: { slidesToShow: 7 } },
      { breakpoint: 768, settings: { slidesToShow: 5 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section className="py-10">
      <h2 data-aos="fade-up" className="fs-lg text-center px-3 mb-6 font-semibold">
        20,000+ Sellers Growing With Us
      </h2>

      <Slider {...settings}>
        {slides.map((src, idx) => (
          <div key={idx} className="flex justify-center items-center px-3 h-16">
            <div className="w-24 sm:w-28 md:w-32">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
