import { useState } from 'react';
import img5 from '../assets/img5.svg'; // Placeholder for the building image

const ctaFeatures = [
    {
        title: "Unparalleled Craftsmanship",
        description: "Every detail is meticulously designed and executed to ensure exceptional quality. From the finest materials to masterful finishes, your home reflects timeless precision and care."
    },
    {
        title: "Personalized Design",
        description: "Tailored to your unique lifestyle, our personalized design approach ensures that every space functions as beautifully as it looks, reflecting your individual taste and needs."
    },
    {
        title: "Exclusive Locations",
        description: "We secure the most sought-after locations, giving you access to prime real estate with breathtaking views and convenient access to the best amenities."
    },
    {
        title: "Modern Innovation",
        description: "Integrating smart home technology and sustainable building practices to create future-ready homes that offer comfort, efficiency, and peace of mind."
    },
    {
        title: "Seamless Experience",
        description: "From the initial consultation to the final handover, our dedicated team handles every aspect, ensuring a smooth, transparent, and enjoyable journey to your new home."
    }
];

export const CTA = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-20 bg-[#10B981] px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            The art of exceptional living <br /> begins in the details
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Accordion */}
          <div className="flex flex-col">
            {ctaFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="border-b border-white/30 last:border-b-0"
              >
                <div 
                  className={`py-6 cursor-pointer group flex justify-between items-center transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-white">
                    {feature.title}
                  </h3>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                    <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                        {feature.description}
                    </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="relative h-full min-h-[400px] rounded-[32px] overflow-hidden">
             <img 
                src={img5} 
                alt="Modern building facade" 
                className="w-full h-full object-cover"
             />
          </div>

        </div>
      </div>
    </section>
  );
};
