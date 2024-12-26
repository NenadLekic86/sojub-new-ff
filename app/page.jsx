import Hero from "../components/hero/Hero";
import RepMeme from "../components/repMeme/RepMeme";
import Trailer from "../components/trailer/Trailer";
import OwnLand from "@/components/ownLand/OwnLand";
import GearUp from "../components/gearUp/GearUp";
import Mmm from "../components/mmm/Mmm";
import HowItWorks from "../components/howItWorks/HowItWorks";
import ScreenShots from "../components/screenShots/ScreenShots";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Trailer />
      <RepMeme />
      <OwnLand />
      <GearUp />
      <Mmm />
      <HowItWorks />
      <ScreenShots />
      <Footer />
    </main>
  );
}
