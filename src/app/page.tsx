import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import EngineTuning from '@/components/EngineTuning';
import CarUpgrades from '@/components/CarUpgrades';
import TireLetter from '@/components/TireLetter';
import Drifters from '@/components/Drifters';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0a0a0a', margin: 0, padding: 0 }}>
      <Navigation />
      <Hero />
      <Services />
      <EngineTuning />
      <CarUpgrades />
      <TireLetter />
      <Drifters />
      <ContactCTA />
      <Footer />
    </main>
  );
}
