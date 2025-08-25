"use client";
import Image from "next/image";
import {features} from "../data/common";
export default function AgileSection() {
 
  return (
    <section className="relative overflow-x-hidden">
      {/* Top Left Icon */}
      <div className="absolute top-[10px] left-[-50px] hidden sm:flex rotate-180">
        <Image
          src="/images/technology.webp"
          alt="technology"
          width={100}
          height={100}
        />
      </div>

      {/* Top Right Icon */}
      <div className="absolute top-[200px] right-[-50px]">
        <Image
          src="/images/technology.webp"
          alt="technology"
          width={100}
          height={100}
        />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold">Agile Architecture</h2>
        <p className="text-gray-700 mt-2">
          A flexible, decoupled system designed for speed and scalability.
        </p>

        {/* Logo with blob shape + animation */}
       <div className="my-10 flex justify-center">
  <div className="bg-[#f5a30a73] p-5 animate-blob-rotate">
    <Image
      src="/images/logo.webp"
      alt="ai new"
      width={150}
      height={150}
    />
  </div>
</div>


        {/* Timeline cards */}
       <div className="timeline_main_parent grid grid-cols-1 md:grid-cols-4 gap-4 border-t-4 border-yellow-500 relative pt-4">
            {features.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="timeline_card relative bg-yellow-100/50 border border-yellow-500 p-4 rounded-md">
                  {/* small connector above card */}
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-1 bg-yellow-500 h-5"></span>
                  <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        {/* Certifications */}
        <p className="mt-8 mb-4 text-gray-700 font-medium">
          Validated by Top Security Certifications
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Image
            src="/images/certificed.webp"
            alt="verifird"
            width={100}
            height={100}
          />
          <Image
            src="/images/google-verifird.webp"
            alt="google-verifird"
            width={100}
            height={100}
          />
          <Image
            src="/images/iso-certificed.webp"
            alt="iso-verifird"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
