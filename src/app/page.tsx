import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OfferingsSection from "@/components/OfferingsSection";
import SignUpSection from "@/components/SignUpSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <HeroSection />
      <OfferingsSection />
      <SignUpSection />
      <Footer />
    </div>
  );
}
