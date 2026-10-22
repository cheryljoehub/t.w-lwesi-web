import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioHero from "@/components/studio/StudioHero";
import StudioAbout from "@/components/studio/StudioAbout";
import StudioTestimonials from "@/components/studio/StudioTestimonials";
import StudioContact from "@/components/studio/StudioContact";

export default function Studio42() {
  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      <main>
        <StudioHero />
        <StudioAbout />
        <StudioTestimonials />
        <StudioContact />
      </main>
      <Footer />
    </div>
  );
}