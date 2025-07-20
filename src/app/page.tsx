import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OfferingsSection from "@/components/OfferingsSection";
import SignUpSection from "@/components/SignUpSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory">
      <Navigation />
      <HeroSection />
      <OfferingsSection />
      <SignUpSection />
      <Footer />
    </main>
  );
}
