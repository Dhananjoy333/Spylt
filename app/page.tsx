import Navbar from "@/components/Navbar";
import HeroSection from "./_sections/HeroSection";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <div className="h-dvh border-2 border-red-500"></div>
    </main>
  );
}
