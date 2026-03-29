import { CustomCheckbox } from "../common/CustomCheckbox";

export interface FilterState {
  aiVerified: boolean;
  propertyTypes: string[];
  bedrooms: string;
  amenities: string[];
}

export const PropertySidebar = ({ filters, setFilters }: { filters: FilterState, setFilters: React.Dispatch<React.SetStateAction<FilterState>> }) => {
  
  const toggleArrayFilter = (field: 'propertyTypes' | 'amenities', value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(t => t !== value) 
        : [...prev[field], value]
    }));
  };

  return (
    <aside className="w-full lg:w-[320px] flex-shrink-0 bg-[#FAFAFA] rounded-[1.5rem] p-6 md:p-8 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-medium text-gray-900">Filters</h2>
        <button 
          onClick={() => setFilters({ aiVerified: false, propertyTypes: [], bedrooms: 'Any', amenities: [] })}
          className="text-[#10b981] text-[15px] font-medium hover:text-[#0ea5e9] transition-colors"
        >
          Reset all
        </button>
      </div>

      {/* AI Verified Banner */}
      <div className="bg-[#ecfdf5] border border-[#d1fae5] rounded-[1.25rem] p-5 mb-10 transition-all hover:shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-gray-900 font-medium text-[15px]">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#10b981" className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            AI Verified Only
          </div>
          
          <button 
            onClick={() => setFilters(f => ({ ...f, aiVerified: !f.aiVerified }))}
            className={`w-11 h-6 rounded-full relative flex items-center shrink-0 transition-colors duration-300 focus:outline-none ${filters.aiVerified ? 'bg-[#10b981]' : 'bg-gray-300'}`}
          >
            <span className={`w-4 h-4 bg-white rounded-full absolute shadow-sm transition-all duration-300 ${filters.aiVerified ? 'left-[22px]' : 'left-1'}`}></span>
          </button>
        </div>
        <p className="text-[13px] text-gray-500 leading-relaxed pr-2">
          Show only properties verified by our Ai agents
        </p>
      </div>

      {/* Price Range */}
      <div className="mb-10">
        <h3 className="text-[15px] font-medium text-gray-900 mb-4">Price Range (₦)</h3>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="text-[13px] text-gray-500 mb-2 block">Min Price</label>
            <input type="text" placeholder="Min" className="w-full bg-white border border-gray-200 rounded-[0.75rem] px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:border-[#10b981] focus:ring-[#10b981]/20 transition-all" />
          </div>
          <div className="flex-1">
            <label className="text-[13px] text-gray-500 mb-2 block">Max Price</label>
            <input type="text" placeholder="Max" className="w-full bg-white border border-gray-200 rounded-[0.75rem] px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:border-[#10b981] focus:ring-[#10b981]/20 transition-all" />
          </div>
        </div>
        {/* Visual Slider Mock */}
        <div className="relative w-full h-1.5 bg-gray-200 rounded-full mt-7">
          <div className="absolute left-0 w-[45%] h-full bg-[#10b981] rounded-l-full"></div>
          <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-[#10b981] rounded-full shadow-md border-[2.5px] border-white cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-10">
        <h3 className="text-[15px] font-medium text-gray-900 mb-4">Property Type</h3>
        <div className="space-y-4">
          {['Flat / Apartment', 'Duplex', 'Land', 'Commercial'].map(type => (
            <CustomCheckbox 
              key={type} 
              label={type} 
              checked={filters.propertyTypes.includes(type)} 
              onChange={() => toggleArrayFilter('propertyTypes', type)} 
            />
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-10">
        <h3 className="text-[15px] font-medium text-gray-900 mb-4">Bedrooms</h3>
        <div className="flex gap-2">
          {['Any', '1', '2', '3+'].map(val => (
            <button 
              key={val}
              onClick={() => setFilters(f => ({ ...f, bedrooms: val }))}
              className={`py-2 rounded-xl text-[13px] font-medium transition-all duration-200 flex-1 text-center ${
                filters.bedrooms === val 
                  ? 'bg-[#10b981] text-white shadow-sm' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#10b981] hover:text-[#10b981]'
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-4">
        <h3 className="text-[15px] font-medium text-gray-900 mb-4">Amenities</h3>
        <div className="space-y-4">
          {['Swimming Pool', 'Gym', '24/7 power'].map(type => (
            <CustomCheckbox 
              key={type} 
              label={type} 
              checked={filters.amenities.includes(type)} 
              onChange={() => toggleArrayFilter('amenities', type)} 
            />
          ))}
        </div>
      </div>

    </aside>
  );
};
