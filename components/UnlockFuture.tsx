"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";
import { unlockStories } from "../data/common";

export default function SuccessStories() {
  const sliderRef = useRef<Slider>(null);


  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false, // we'll use custom arrows
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="success_section py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 data-aos="fade-up" data-aos-duraction="1000" className="fs-lg font-semibold">
            Unlock the Future of Fast Commerce
          </h2>
          <p data-aos="fade-up" data-aos-duraction="2000" className="fs-base">
            Empower your business with a seamless, white-label quick commerce
            solution
          </p>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="success_slider">
          {unlockStories.map((story) => (
            <div key={story.id} className="p-2">
              <div className="custom-card bg-white rounded-2xl border border-yellow-500 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <Image
                  src={story.img}
                  alt={story.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-200 hover:scale-110"
                />
                <div className="px-4 py-5">
                  <h5 className="text-lg font-semibold truncate">
                    {story.title}
                  </h5>
                  <p className="text-sm line-clamp-2">{story.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="custom-arrow bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold"
          >
            ←
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="custom-arrow bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
