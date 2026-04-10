import Image from "next/image"
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(SplitText, ScrollTrigger)

function VideoPinSection() {

    const isMobile = useMediaQuery({
        query:'(max-width: 768px)',
    })

    useGSAP(()=>{
        if(!isMobile){
            const tl =gsap.timeline({
            scrollTrigger: {
                trigger: '.vd-pin-section',
                start: '-15% top',
                end: '200% top',
                scrub: 1.5,
                pin: true,        
            }
        })
        tl.to('.video-box',{
            clipPath: "circle(100% at 50% 50%)",
            ease: 'power1.inOut'
        })
        }
    })

  return (
    <section className="vd-pin-section">
        <div style={{
            clipPath: isMobile ? 'circle(100% at 50% 50%)' :'circle(9% at 50% 50%)'
        }} className="size-full video-box">
            <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay/>

            <div className="abs-center md:scale-100 scale-200">
                <Image src='/images/circle-text.svg' width={400} height={400} alt="" className="spin-circle"/>
                <div className="play-btn">
                    <Image src='/images/play.svg' width={400} height={400} alt="" className="size-[3vw] ml-[.5vw]"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoPinSection