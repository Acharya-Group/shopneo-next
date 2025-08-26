"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { unlockStories } from "../data/common";


export default function SuccessStories() {
  return (
    <section className="success_section py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="fs-lg font-semibold"
          >
            Unlock the Future of Fast Commerce
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="fs-base"
          >
            Empower your business with a seamless, white-label quick commerce
            solution
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
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            992: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="success_slider"
        >
          {unlockStories.map((story) => (
            <SwiperSlide key={story.id} className="p-2">
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-center mt-6 gap-4">
          <button className="custom-prev bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
            ←
          </button>
          <button className="custom-next bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
