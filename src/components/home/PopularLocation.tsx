import { useState } from 'react';

const mockLocations = [
  {
    id: 1,
    image: 'https://i.pinimg.com/736x/62/75/28/627528062ac839de17ed6c20c064db0b.jpg',
    title: 'Victoria Island, Lagos',
    price: '₦180M',
    properties: '245 properties available',
    isFavorite: false,
    isBookmarked: false,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/bd/40/a4/bd40a4cfb299461610875a79745c9a32.jpg',
    title: 'Lekki Phase 1',
    price: '₦150M',
    properties: '100 properties available',
    isFavorite: false,
    isBookmarked: false,
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/736x/f0/93/57/f0935738be258f782100dd5bd675493a.jpg',
    title: 'Abuja – Wuse 2',
    price: '₦110M',
    properties: '60 properties available',
    isFavorite: false,
    isBookmarked: false,
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/736x/7e/85/f0/7e85f0aafc45c9058d8c61cb95952e54.jpg',
    title: 'Ikoyi Lagos',
    price: '₦180M',
    properties: '345 properties available',
    isFavorite: false,
    isBookmarked: false,
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/1200x/f4/25/4b/f4254bcdd6e64589751a6c31bc6255ca.jpg',
    title: 'Ojuelegba, Lagos',
    price: '₦180M',
    properties: '345 properties available',
    isFavorite: false,
    isBookmarked: false,
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/736x/b4/e2/4e/b4e24e7c1d8f80f7d6064fccef2aa278.jpg',
    title: 'Lagos island',
    price: '₦180M',
    properties: '345 properties available',
    isFavorite: false,
    isBookmarked: false,
  },
];

const PopularLocation = () => {
  const [locations, setLocations] = useState(mockLocations);

  const toggleFavorite = (id: number) => {
    setLocations(locations.map(loc => loc.id === id ? { ...loc, isFavorite: !loc.isFavorite } : loc));
  };

  const toggleBookmark = (id: number) => {
    setLocations(locations.map(loc => loc.id === id ? { ...loc, isBookmarked: !loc.isBookmarked } : loc));
  };

  return (
    <section className="w-full bg-[#FAFAFA] font-sans py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-[1.75rem] font-normal text-gray-900 tracking-tight">
            Popular Locations
          </h2>
          <button className="text-[17px] text-gray-500 hover:text-[#10b981] transition-colors bg-transparent border-none cursor-pointer">
            See All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {locations.map((location) => (
            <div key={location.id} className="group cursor-pointer">
              <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden rounded-[1.25rem] bg-gray-200">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="mt-5 px-1">
                <h3 className="text-[1.15rem] font-medium text-gray-900 mb-1">
                  {location.title}
                </h3>
                <p className="text-[15px] font-normal text-gray-500 mb-1">
                  Avg. Price: <span className="font-medium text-gray-600">{location.price}</span>
                </p>
                <p className="text-[14px] text-gray-400">
                  {location.properties}
                </p>

                <div className="flex items-center gap-6 mt-6">
                  <button className="px-5 py-2 border border-gray-200 bg-white shadow-sm hover:shadow-md rounded-full text-[13px] font-medium text-gray-500 hover:border-[#10b981] hover:text-[#10b981] transition-all">
                    View Properties
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(location.id); }}
                      className="focus:outline-none hover:scale-110 transition-transform"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill={location.isFavorite ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        strokeWidth={1.5}
                        className={`w-[1.125rem] h-[1.125rem] ${location.isFavorite ? 'text-red-500 stroke-red-500' : 'text-gray-500 stroke-gray-500'}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleBookmark(location.id); }}
                      className="focus:outline-none hover:scale-110 transition-transform"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill={location.isBookmarked ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        strokeWidth={1.5}
                        className={`w-5 h-5 ${location.isBookmarked ? 'text-[#10b981] stroke-[#10b981]' : 'text-gray-500 stroke-gray-500'}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocation;