"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function SmartShippingSection() {
  const slides = [
    {
      title: "Live Shipping Cost Fetching",
      desc: "With Shopneo, you can fetch live shipping rates directly from top logistics partners in real time. This means that as your customers shop, the system will automatically apply accurate shipping costs to their cart. No more guesswork or manual adjustments—just seamless, transparent pricing from checkout to delivery.",
      img: "/images/logistics-slide-1.webp",
    },
    {
      title: "Auto-Select & Schedule Shipments",
      desc: "Say goodbye to manual shipping carrier selection. Shopneo’s automated system intelligently assigns the best carrier based on your defined criteria. It schedules pickups and ensures that each order is shipped with minimal effort on your part. Focus on growing your business while Shopneo handles the logistics.",
      img: "/images/logistics-slide-2.webp",
    },
    {
      title: "Effortless Shipping Automation",
      desc: "Shopneo redefines logistics by offering a fully automated system that streamlines everything from order processing to real-time tracking. This integration ensures smooth operations, reduces human error, and speeds up the entire fulfillment process. Whether you’re shipping locally or internationally, Shopneo has you covered.",
      img: "/images/logistics-slide-3.webp",
    },
    {
      title: "Streamlined Order Management via WhatsApp",
      desc: "Shopneo enables one-click fulfillment through WhatsApp, making it easy to generate shipping labels and manage orders without leaving the platform. It’s a simple, efficient way to process orders, track shipments, and communicate with your customers—all through the most popular messaging app.",
      img: "/images/logistics-slide-4.webp",
    },
  ];

  const logos = [
    "/images/slide-1.webp",
    "/images/slide-2.webp",
    "/images/slide-3.webp",
    "/images/slide-4.webp",
    "/images/slide-5.webp",
    "/images/slide-6.webp",
    "/images/slide-7.webp",
    "/images/slide-8.webp",
    "/images/slide-9.webp",
    "/images/slide-10.webp",
    "/images/slide-11.webp",
    "/images/slide-12.webp",
    "/images/slide-13.webp",
    "/images/slide-14.webp",
  ];

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
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Smart Shipping @ Shopneo
        </h2>
        <p className="text-center text-base font-medium mt-2 mb-6">
          Fully Automated Shipping, From Order to Delivery
        </p>

        {/* Content Slider */}
        <Slider {...contentSettings} className="mb-8">
          {slides.map((slide, idx) => (
            <div key={idx} className="px-4">
              <div className="flex flex-wrap flex-col flex-row-reverse md:flex-row items-center justify-between gap-6">
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
          {logos.map((logo, idx) => (
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
