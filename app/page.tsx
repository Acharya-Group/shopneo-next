import React from 'react'
import Script from "next/script";   // ✅ Import Script for Tawk.to
import Hero from "@/components/Hero";
import GrowUs from "@/components/GrowUs";
import ConnectOndc from "@/components/ConnectOndc";
import UnlockFuture from "@/components/UnlockFuture";
import AiSection from "@/components/AiSection";
import Management from "@/components/Management";
import TrustedPartners from "@/components/TrustedPartners";
import SmartShipping from "@/components/SmartShipping";
import SuccessSection from "@/components/SuccessSection";
import AgileSection from "@/components/AgileSection";
import MinimalCommission from "@/components/MinialCommision";
import SmoothMigration from "@/components/SmoothMigration";
import FaqSection from "@/components/FaqSection";
import BackToTop from '@/components/BackToTop';

const Page = () => {
  return (
    <>
      <BackToTop/>
      <Hero/>
      <GrowUs/>
      <ConnectOndc/>
      <UnlockFuture/>
      <AiSection/>
      <Management/>
      <TrustedPartners/>
      <SmartShipping/>
      <SuccessSection/>
      <AgileSection/>
      <MinimalCommission/>
      <SmoothMigration/>
      <FaqSection/>

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
      
    </>
  )
}

export default Page
