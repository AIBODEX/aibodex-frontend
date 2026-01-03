import bgImage from '../assets/bg.png';
import heroImage from '../assets/hero.svg';
import roundImage from '../assets/round.png';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* Decorative Blur Elements (Matching the design's soft gradients) */}
      <img src={bgImage} alt="" className="absolute top-0 left-[-50px] w-70 md:w-96  z-0 pointer-events-none" />
      <img src={bgImage} alt="" className="absolute top-0 right-[-120px] w-90 md:w-96  z-0 pointer-events-none transform scale-x-[-1]" />

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto mt-12 md:mt-20 px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-[#111827] leading-tight tracking-tight">
          Find Your Dream Home <br />
          <span className="relative">
             with Ease
             {/* Decorative Spark/lines from design */}
             <img src={roundImage} alt="" className="absolute top-[-70px] left-[430px] w-40 h-10 md:w-14 md:h-20" />
          </span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Timeless architecture, exclusive locations, and luxury homes designed to inspire your next chapter.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#00C48C] hover:bg-[#00A072] text-white px-8 py-3.5 rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
            Contact Us
          </button>
          <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-3.5 rounded-full font-medium text-lg transition-all hover:bg-gray-50 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* Hero Image (Bottom) */}
      <div className="relative w-full -mt-20 md:-mt-32 z-10 flex justify-center pointer-events-none">
        <div className="w-full">
            <img 
              src={heroImage} 
              alt="Luxury Home" 
              className="w-full h-auto object-cover "
              style={{ maxHeight: '600px', objectPosition: 'top bottom' }}
            />
        </div>
      </div>
    </section>
  );
};
