"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/common";
type FAQ = {
  question: string;
  answer: string;
};



export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg_golden">
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Minimal Commissions
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Quickly and easily transfer your entire catalog from your current
            platform with just a few simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f5a10a] px-4 py-3 rounded-lg cursor-pointer transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left cursor-pointer"
              >
                <h6 className="text-white font-semibold">{faq.question}</h6>
                <ChevronDown
                  className={`text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-2">
                  <p className="text-sm text-white font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
