import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GrowUs from "@/components/GrowUs";
import ConnectOndc from "@/components/ConnectOndc";
import UnlockFuture from "@/components/UnlockFuture";
import AiSection from "@/components/AiSection";
import Management from "@/components/Management";
import TrustedPartners from "@/components/TrustedPartners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Unlock } from "lucide-react";
import SmartShipping from "@/components/SmartShipping";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
        <Header />
        <Hero/>
        <GrowUs/>
        <ConnectOndc/>
        <UnlockFuture/>
        <AiSection/>
        <Management/>
        <TrustedPartners/>
        <SmartShipping/>
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
