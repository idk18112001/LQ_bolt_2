import HeroSection from '../components/HeroSection';
import OfferingsSection from '../components/OfferingsSection';
import SignUpSection from '../components/SignUpSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <OfferingsSection />
      <SignUpSection />
      <Footer />
    </div>
  );
}
