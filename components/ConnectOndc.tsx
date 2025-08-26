"use client";

import Image from "next/image";

export default function OndcSection() {
  return (
    <section className="bg_golden overflow-x-hidden">
      <div className="container mx-auto py-10 md:py-16 px-4">
        {/* Heading */}
        <h2 data-aos="fade-up" data-aos-duraction="1000" className="fs-lg text-center font-semibold mb-8">
          Seamless ONDC Network Integration
        </h2>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
          {/* Left Text */}
          <div data-aos="fade-right" data-aos-duraction="2000" className="md:w-1/2">
            <h2 className="fs-md font-semibold text-center md:text-left mb-4">
              Effortlessly Integrate with the ONDC Network
            </h2>
            <p className="fs-base text-center md:text-left">
              Our seller app offers a powerful and fully compliant solution for
              businesses of all sizes. With a feature-rich interface, it ensures
              smooth operations and easy integration with the ONDC network.
              You’ll have access to multiple product categories, simplifying the
              management of diverse offerings. Enjoy seamless updates and a
              user-friendly experience that scales with your business.
            </p>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" data-aos-duraction="2000" className="md:w-1/2 w-10/12">
            <Image
              src="/images/seller-ondc-buyar.webp"
              alt="connect"
              width={600}
              height={400}
              className="w-full object-contain hero_image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
