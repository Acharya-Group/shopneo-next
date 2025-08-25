import React from 'react'
import Hero from "@/components/Hero";
import GrowUs from "@/components/GrowUs";
import ConnectOndc from "@/components/ConnectOndc";
import UnlockFuture from "@/components/UnlockFuture";
import AiSection from "@/components/AiSection";
import Management from "@/components/Management";
import TrustedPartners from "@/components/TrustedPartners";
import { Unlock } from "lucide-react";
import SmartShipping from "@/components/SmartShipping";
import SuccessSection from "@/components/SuccessSection";
import AgileSection from "@/components/AgileSection";
import MinimalCommission from "@/components/MinialCommision";
import SmoothMigration from "@/components/SmoothMigration";
import FaqSection from "@/components/FaqSection";
const page = () => {
  return (
    <>
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
    </>
  )
}

export default page