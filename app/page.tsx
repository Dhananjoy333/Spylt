"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "./_sections/HeroSection";
import MessageSection from "./_sections/MessageSection";
import FlavorSection from "./_sections/FlavorSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./_sections/NutritionSection";
import BenefitSection from "./_sections/BenefitSection";
import TestimonialSection from "./_sections/TestimonialSection";
import FooterSection from "./_sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection/>
          <div>
            <BenefitSection/>
            <TestimonialSection/>
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
}
