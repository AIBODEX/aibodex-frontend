export interface Property {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  isFavorite: boolean;
  isBookmarked: boolean;
}

interface PropertyGridProps {
  properties: Property[];
  toggleProperty: (id: number, field: 'isFavorite' | 'isBookmarked') => void;
}

export const PropertyGrid = ({ properties, toggleProperty }: PropertyGridProps) => {
  return (
    <main className="flex-1 w-full max-w-[1000px] flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div 
            key={property.id} 
            className="bg-[#fafafa] rounded-[1.5rem] p-3 transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
          >
            <div className="relative w-full h-[220px] sm:h-[200px] md:h-[220px] overflow-hidden rounded-[1rem] bg-gray-200">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="px-2 py-4">
              <h3 className="text-[1.1rem] font-medium text-gray-900 mb-1 leading-tight">
                {property.title}
              </h3>
              <p className="text-[14px] font-medium text-gray-500 mb-1">
                {property.price}
              </p>
              <p className="text-[13px] text-gray-400 truncate">
                {property.location}
              </p>

              <div className="flex items-center justify-between mt-5 pt-1">
                <button className="px-4 py-1.5 border border-gray-200 bg-white rounded-full text-[12px] font-medium text-gray-500 shadow-sm hover:border-[#10b981] hover:text-[#10b981] transition-all">
                  View Property
                </button>
                
                <div className="flex items-center gap-3 pr-2">
                  <button 
                    onClick={() => toggleProperty(property.id, 'isFavorite')}
                    className="focus:outline-none hover:scale-110 transition-transform"
                  >
                    <svg viewBox="0 0 24 24" fill={property.isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} className={`w-[1.2rem] h-[1.2rem] ${property.isFavorite ? 'text-red-500 stroke-red-500' : 'text-gray-400 stroke-gray-400'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => toggleProperty(property.id, 'isBookmarked')}
                    className="focus:outline-none hover:scale-110 transition-transform"
                  >
                    <svg viewBox="0 0 24 24" fill={property.isBookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} className={`w-[1.2rem] h-[1.2rem] ${property.isBookmarked ? 'text-[#10b981] stroke-[#10b981]' : 'text-gray-400 stroke-gray-400'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-14 mb-8 flex justify-center items-center gap-2 md:gap-3">
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="w-10 h-10 bg-[#10b981] text-white rounded-full flex items-center justify-center text-[15px] font-medium shadow-md hover:bg-[#00A072] transition-colors">
          1
        </button>
        <button className="w-10 h-10 text-gray-500 rounded-full flex items-center justify-center text-[15px] font-medium hover:bg-gray-100 transition-colors">
          2
        </button>
        <button className="w-10 h-10 text-gray-500 rounded-full flex items-center justify-center text-[15px] font-medium hover:bg-gray-100 transition-colors">
          3
        </button>
        <span className="w-8 flex items-center justify-center text-gray-400 font-medium tracking-widest">
          ...
        </span>
        <button className="w-10 h-10 text-gray-500 rounded-full flex items-center justify-center text-[15px] font-medium hover:bg-gray-100 transition-colors">
          16
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </main>
  );
};
