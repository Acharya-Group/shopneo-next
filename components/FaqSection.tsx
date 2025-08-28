"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/common";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg_golden">
      <div className="container mx-auto py-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            data-aos="fade-up"
            data-aos-duraction="1000"
            className="text-2xl md:text-4xl font-semibold"
          >
            Minimal Commissions
          </h2>
          <p
            data-aos-duraction="2000"
            data-aos="fade-up"
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Quickly and easily transfer your entire catalog from your current
            platform with just a few simple steps.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duraction="3000"
              key={index}
              className="bg-[#f5a10a] px-4 py-3 rounded-lg cursor-pointer"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left cursor-pointer"
              >
                <h5 className="text-white font-semibold">{faq.question}</h5>
                <ChevronDown
                  className={`text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Smooth with Framer Motion */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="text-sm text-white font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
