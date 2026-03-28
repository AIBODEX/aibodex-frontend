import { useState } from 'react';

const categories = [
  'Luxury Homes',
  'Events center',
  'Terraces',
  'Apartments',
  'Shortlet',
  'Retail shops',
  'Office spaces',
];

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState('Apartments');

  return (
    <div className="w-full bg-white font-sans">
      {/* Categories Tabs */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 py-6">
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-md text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-[#10b981] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent hover:border-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
          <button className="whitespace-nowrap px-4 py-2.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent hover:border-gray-100 transition-colors flex items-center gap-1">
            See more
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 pb-12">
        <div className="relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm group bg-gray-100">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern living room interior"
            className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-center transition-transform duration-[1.5s]"
          />
          
          {/* Bottom Glass Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] min-h-[100px] bg-gray-100/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 border-t border-white/10 flex flex-col justify-center">
            <h1 className="text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight mb-3 lg:mb-4">
              Welcome back, <span> Chioma</span>
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Here are intelligent suggestions based on<br className="hidden sm:block" />
              your recent activity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;