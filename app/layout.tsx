"use client";
import "./globals.css";
import { useEffect,ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Metadata } from "next";

// ✅ SEO Meta Data
 const metadata: Metadata = {
  title: "Powering the Future of Online Commerce",
  description: "All-in-one ecosystem to grow your business.",
  openGraph: {
    type: "website",
    url: "https://elaborate-daffodil-865703.netlify.app/",
    title: "Powering the Future of Online Commerce",
    description: "All-in-one ecosystem to grow your business.",
    images: [
      {
        url: "https://elaborate-daffodil-865703.netlify.app/assets/images/meta.webp",
        width: 1200,
        height: 630,
        alt: "Shopneo Meta Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Powering the Future of Online Commerce",
    description: "All-in-one ecosystem to grow your business.",
    images: [
      "https://elaborate-daffodil-865703.netlify.app/assets/images/meta.webp",
    ],
  },
  icons: {
    icon: "/images/logo.webp", 
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <html lang="en">
      <body className="!overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
