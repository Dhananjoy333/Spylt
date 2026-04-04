import Navbar from "@/components/Navbar";
import HeroSection from "./_sections/HeroSection";
import MessageSection from "./_sections/MessageSection";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <MessageSection/>
      <div className="h-dvh border-4 border-red-400"></div>
    </main>
  );
}
