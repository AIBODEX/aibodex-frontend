import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos',
    isFavorite: false,
    isBookmarked: false,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1721146609543-491c1ec04240?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '5-Bedroom Smart Home',
    price: '₦450,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos',
    isFavorite: true,
    isBookmarked: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos',
    isFavorite: false,
    isBookmarked: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos',
    isFavorite: false,
    isBookmarked: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1721146609543-491c1ec04240?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos',
    isFavorite: true,
    isBookmarked: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos',
    isFavorite: false,
    isBookmarked: true,
  },
];

const CuratedList = () => {
  // Minimal state to make the bookmark and favorite icons interactive
  const [properties, setProperties] = useState(mockProperties);

  const toggleFavorite = (id: number) => {
    setProperties(properties.map(p => p.id === id ? { ...p, isFavorite: !p.isFavorite } : p));
  };

  const toggleBookmark = (id: number) => {
    setProperties(properties.map(p => p.id === id ? { ...p, isBookmarked: !p.isBookmarked } : p));
  };

  return (
    <section className="w-full bg-white font-sans py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-[1.75rem] font-normal text-gray-900 tracking-tight">
            AI Curated Listing
          </h2>
          <button className="text-[17px] text-gray-500 hover:text-[#10b981] transition-colors bg-transparent border-none cursor-pointer">
            See All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="bg-[#fafafa] rounded-[1.5rem] p-3 transition-transform hover:-translate-y-1 hover:shadow-sm duration-300"
            >
              <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden rounded-[1rem]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="px-2 py-4">
                <h3 className="text-[1.1rem] font-medium text-gray-900 mb-1">
                  {property.title}
                </h3>
                <p className="text-[15px] font-medium text-gray-500 mb-1">
                  {property.price}
                </p>
                <p className="text-[14px] text-gray-400">
                  {property.location}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <button className="px-4 py-1.5 border border-gray-200 bg-white rounded-full text-[13px] font-medium text-gray-500 hover:border-[#10b981] hover:text-[#10b981] transition-colors">
                    <Link to={"/property-details"}>
                    View Property
                    </Link>
                  </button>
                  
                  <div className="flex items-center gap-3 pr-2">
                    <button 
                      onClick={() => toggleFavorite(property.id)}
                      className="focus:outline-none hover:scale-110 transition-transform"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill={property.isFavorite ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        strokeWidth={1.5}
                        className={`w-5 h-5 ${property.isFavorite ? 'text-red-500 stroke-red-500' : 'text-gray-400 stroke-gray-400'}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={() => toggleBookmark(property.id)}
                      className="focus:outline-none hover:scale-110 transition-transform"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill={property.isBookmarked ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        strokeWidth={1.5}
                        className={`w-5 h-5 ${property.isBookmarked ? 'text-[#10b981] stroke-[#10b981]' : 'text-gray-400 stroke-gray-400'}`}
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

export default CuratedList;