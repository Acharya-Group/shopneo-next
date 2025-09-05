"use client";
import "./globals.css";
import { useEffect,ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import Script from "next/script";

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
        url: "/images/meta.webp",
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
      "/images/meta.webp",
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
      <title>Shopneo</title>
      <body className="!overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      {/* ✅ Tawk.to Script */}
      <Script id="tawk-to" strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5b2b664cd0b5a54796820793/1j4cbl1fi';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
      </body>
    </html>
  );
}
