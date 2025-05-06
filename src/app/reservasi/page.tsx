// import Header from "@/components/Header";
import HeroSection from "@/components/reservasi/HeroSection";
import ReservasiSection from "@/components/reservasi/ReservasiSection";
import Footer from "@/components/reservasi/Footer";
import Navbar from "@/components/reservasi/Navbar";
import Gallery from "@/components/reservasi/Gallery";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <Gallery/>
      <ReservasiSection/>
      <Footer />
      <Navbar />
    </div>
  );
}
