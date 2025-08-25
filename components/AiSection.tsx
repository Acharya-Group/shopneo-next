"use client";

import Image from "next/image";
import { Aifeatures } from "../data/common";
export default function AiSection() {
  return (
    <section className="bg_golden py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 relative">
          {/* Heading */}
          <h2 className="fs-lg font-semibold">AI for Ecommerce Growth</h2>
          <p className="fs-base">
            Boost conversions and streamline operations with AI-driven solutions.
          </p>

          {/* AI Image */}
          <div className="relative ai_image mx-auto my-6 w-[300px]">
            <Image
              src="/images/ai-new.webp"
              alt="AI for Ecommerce"
              width={300}
              height={300}
              className="mx-auto rounded-full ai_logo"
            />
            {/* connector below image */}
            <span className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-1 bg-yellow-500 h-10"></span>
          </div>

          {/* Timeline Parent */}
          <div className="timeline_main_parent grid grid-cols-1 md:grid-cols-4 gap-4 border-t-4 border-yellow-500 relative pt-4">
            {Aifeatures.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="timeline_card relative bg-yellow-100/50 border border-yellow-500 p-4 rounded-md">
                  {/* small connector above card */}
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-1 bg-yellow-500 h-5"></span>
                  <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                  <p className="text-sm leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
