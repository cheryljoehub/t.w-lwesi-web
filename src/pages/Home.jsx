import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/lewis/Hero";
import Mission from "@/components/lewis/Mission";
import Pillars from "@/components/lewis/Pillars";
import StudioPortal from "@/components/lewis/StudioPortal";
import CareerServices from "@/components/lewis/CareerServices";
import SpeakerSeries from "@/components/lewis/SpeakerSeries";
import UpcomingEvent from "@/components/lewis/UpcomingEvent";
import CareerServicesSection from "@/components/lewis/CareerServicesSection";
import IndigoAssessment from "@/components/lewis/IndigoAssessment";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Pillars />
        <UpcomingEvent />
        <StudioPortal />
        <CareerServices />
        <CareerServicesSection />
        <IndigoAssessment />
        <SpeakerSeries />
      </main>
      <Footer />
    </div>
  );
}