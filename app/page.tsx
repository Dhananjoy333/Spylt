"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "./_sections/HeroSection";
import MessageSection from "./_sections/MessageSection";
import FlavorSection from "./_sections/FlavorSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
          <div className="h-dvh border-4 border-red-400"></div>
        </div>
      </div>
    </main>
  );
}
