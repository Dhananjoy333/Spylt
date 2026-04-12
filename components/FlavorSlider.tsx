"use client";
import { flavorlists } from "@/constants/index";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function FlavorSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const isLaptop = useMediaQuery({
    query: "(max-width: 1280px)"
  })


  useGSAP(() => {
    const scrollAmount =
      (sliderRef.current?.scrollWidth ?? 0) - window.innerWidth;

      let extraScroll = 0

      if(isMobile){
        return
      }else if(isLaptop){
        extraScroll = 700;
      }else{
        extraScroll = 1500
      }

      const totalScroll = scrollAmount + extraScroll

  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${totalScroll}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${totalScroll}px`,
        ease: "power1.inOut",
      });
    

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });
    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<",
      );
  },[isMobile, isLaptop]);

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <Image
              src={`/images/${flavor.color}-bg.svg`}
              alt="drinks-bg"
              height={4000}
              width={4000}
              className="absolute bottom-0"
            />

            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt="drinks"
              width={400}
              height={80}
              className="drinks w-65 md:w-90 lg:w-100 2xl:w-170 lg:h-120 2xl:h-250"
            />

            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt="drinks"
              width={400}
              height={80}
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlavorSlider;
