"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is ONDC Network?",
    answer:
      "ONDC Network or Open Network for Digital Commerce Protocol is an initiative to digitize the Indian retail industry...",
  },
  {
    question: "How does ONDC improve digital commerce?",
    answer:
      "ONDC enhances digital commerce by providing a standardized platform for sellers and buyers to interact, making online transactions easier and more accessible...",
  },
  {
    question: "What is a Seller App in the ONDC network?",
    answer:
      "A Seller App on the ONDC network enables businesses to list their products, manage orders, and handle logistics through a seamless digital interface...",
  },
  {
    question: "How do I register as a seller on ONDC?",
    answer:
      "To register as a seller on ONDC, simply download a compatible seller app like Mystore, and follow the easy registration process...",
  },
  {
    question: "What are the benefits of joining the ONDC network?",
    answer:
      "ONDC provides sellers with better visibility, access to a larger audience, and the ability to list products on multiple buyer apps, increasing sales opportunities...",
  },
  {
    question: "Is there any fee for using the ONDC network?",
    answer:
      "Joining the ONDC network is free. However, there may be nominal charges based on the transactions and network services...",
  },
  {
    question: "Can a seller register on ShopNeo powered by ONDC?",
    answer: "Yes, a seller can register on ShopNeo powered by ONDC.",
  },
  {
    question: "Can a seller register multiple brands with the same GST?",
    answer:
      "No, each brand should have its own GST to register. However, a seller can onboard multiple brands and manage them centrally using the seller manager model.",
  },
  {
    question: "Can multiple sellers register with the same GST?",
    answer:
      "No, each seller should have their own GST to register. However, a seller can onboard multiple brands and manage them centrally using the seller manager model.",
  },
  {
    question: "Why or when do we need GST for registration?",
    answer:
      "It is mandatory for all sellers of goods and services to be registered for GST. Any seller who wants to sell products PAN India must submit GST details for registration.",
  },
  {
    question: "How long does it take to go live on ShopNeo?",
    answer: "It usually takes 2-3 business days to go live on ShopNeo.",
  },
  {
    question: "Can I use my personal PAN if GSTIN matches?",
    answer: "Yes, you can add your personal PAN if the GSTIN matches.",
  },
  {
    question:
      "My products are not visible in other buyer apps, what should I do?",
    answer:
      "Please wait at least 24 hours before checking. Ensure all mandatory fields and attributes are filled. If still not visible, raise a ticket in the ShopNeo support dashboard and the team will resolve the issue.",
  },
  {
    question:
      "What are the various BNPs (Buyer Network Participants) on the ONDC Network?",
    answer: "You can find details of other buyer apps on ONDC's official website.",
  },
  {
    question: "Is there any Help Center for ShopNeo?",
    answer:
      "Yes, you can also refer to our help center for detailed answers to your queries.",
  },
];

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
