'use client'
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { SplitText, ScrollTrigger } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(SplitText, ScrollTrigger)

function HeroSection() {

    useGSAP(()=>{
        const titleSplit = SplitText.create('.hero-title',{
            type: 'chars',
        })

        const tl =gsap.timeline({
            delay: 1
        })
        tl
        .to('.hero-content',{
            opacity: 1,
            y: 0,
            ease: 'power1.inOut'
        })
        .to('.hero-text-scroll',{
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:'circ.out'
        },"-=0.5")
        .from(titleSplit.chars,{
            yPercent: 200,
            stagger: 0.02,
            ease: 'power2.out'
        },"-=0.05")

        const heroTl = gsap.timeline({
            scrollTrigger:{
                trigger: '.hero-container',
                start: '1% top',
                end: 'bottom top',
                scrub: true,
            }
        })

        heroTl.to('.hero-container',{
            rotate: 7,
            scale: 0.9,
            yPercent: 30,
            ease:'power1.inOut'
        })
    })

  return (
    <section className="bg-main-bg">
        <div className="hero-container">
            <Image src='/images/static-img.png' alt="hero-img" width={4000} height={4000} className="absolute h-full w-full bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"/>
            <div className="hero-content opacity-0">
                <div className="overflow-hidden">
                    <h1 className="hero-title mt-3 md:mt-4">Freaking Delicious</h1>
                </div>
                <div className="hero-text-scroll" style={{
                    clipPath:"polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }}>
                    <div className="hero-subtitle">
                        <h1>Protein + Caffine</h1>
                    </div>
                </div>
                <h2>
                    Live life to the fullest with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                </h2>
                <div className="hero-button">
                    <p>Chug a spylt</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection