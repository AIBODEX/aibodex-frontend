import { CTA } from '../components/CTA';
import { DreamHome } from '../components/DreamHome';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Vision } from '../components/Vision';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Vision />
      <FeaturedProperties />
      <CTA />
      <DreamHome />
      <Footer />
    </main>

  );
};
