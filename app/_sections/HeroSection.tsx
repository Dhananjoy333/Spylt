import Image from "next/image"


function HeroSection() {
  return (
    <section className="bg-main-bg">
        <div className="hero-container">
            <Image src='/images/static-img.png' alt="hero-img" width={4000} height={4000} className="absolute h-full w-full bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"/>
            <div className="hero-content">
                <div className="overflow-hidden">
                    <h1 className="hero-title">Freaking Delicious</h1>
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