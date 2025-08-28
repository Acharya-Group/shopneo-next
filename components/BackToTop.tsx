"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; 

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button 
      aria-label="Back to Top"
        onClick={scrollToTop}
        className="bg-yellow-500  cursor-pointer  ease-in-out hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
