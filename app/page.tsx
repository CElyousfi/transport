"use client";

import HeroSlider from "@/components/HeroSlider";
import USPSection from "@/components/USPSection";
import CardsSection from "@/components/CardsSection";
import SliderUp from "@/components/SliderUp";
import ContentCardCTA from "@/components/ContentCardCTA";
import AwardsSection from "@/components/AwardsSection";
import StatsSection from "@/components/StatsSection";
import ExploreSection from "@/components/ExploreSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <USPSection />
        <CardsSection />
        <SliderUp />
        <ContentCardCTA />
        <AwardsSection />
        <StatsSection />
        <ExploreSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
