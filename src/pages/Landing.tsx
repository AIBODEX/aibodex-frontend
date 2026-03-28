import { CTA } from '../components/CTA';
import { DreamHome } from '../components/DreamHome';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Vision } from '../components/Vision';
import { Navbar } from '../layout/Navbar';

export const Landing = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <FeaturedProperties />
      <CTA />
      <DreamHome />
      <Footer />
    </main>

  );
};
