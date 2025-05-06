// import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import EventsSection from "@/components/EventsSection";
import MapSection from "@/components/MapSection";
import JadwalAdzan from "@/components/JadwalAdzan";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <FeatureSection />
      <EventsSection />
      <MapSection />
      <JadwalAdzan />
      <Footer />
      <Navbar />
    </div>
  );
}
