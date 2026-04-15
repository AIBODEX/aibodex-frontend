import { ChevronDown, MapPin } from 'lucide-react';

const PropertyDetailsStep = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-[#F9FAFB] rounded-[24px] p-8 border border-gray-50 shadow-sm mt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] font-medium text-[#1E1E1E]">Property Details</h2>
          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[11px] font-medium">
            • High Quality Image Boost Visibility
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Core Specs */}
          <div className="space-y-6">
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Title</label>
              <input type="text" placeholder="e.g Luxury 3-Bedroom Apartment" className="w-full p-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-1 focus:ring-[#11B880]" />
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Property Type</label>
              <div className="relative">
                <input type="text" readOnly className="w-full p-3 border border-gray-200 rounded-xl text-[14px] bg-white cursor-pointer" />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#11B880]" />
              </div>
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Description</label>
              <textarea rows={4} className="w-full p-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-1 focus:ring-[#11B880]" />
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Address</label>
              <input type="text" placeholder="e.g Luxury 3-Bedroom Apartment" className="w-full p-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-1 focus:ring-[#11B880]" />
            </div>
          </div>

          {/* Column 2: Amenities and Status */}
          <div className="space-y-8">
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Amenities</label>
              <div className="space-y-3">
                {['Air Conditioning', 'Swimming Pool', 'Balcony', 'Wi-Fi', 'Gym'].map((amenity, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-[18px] h-[18px] rounded text-[#11B880] border-gray-300 focus:ring-[#11B880] focus:ring-offset-0" />
                    <span className="text-[14px] text-gray-500">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Verification Status</label>
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-6 bg-[#11B880] rounded-full p-1 relative flex items-center cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full translate-x-[18px]"></div>
                </div>
                <span className="text-[14px] text-gray-500">Verified</span>
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Negotiable</label>
              <div className="w-[42px] h-6 bg-gray-200 rounded-full p-1 relative flex items-center cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>

          {/* Column 3: Location and Pricing */}
          <div className="space-y-6 flex flex-col">
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Location</label>
              <div className="w-full h-[120px] bg-gray-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-200 cursor-pointer hover:opacity-90">
                {/* Simulated map placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
                <div className="flex flex-col items-center z-10 bg-white/80 px-3 py-1.5 rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-red-500 mb-1" />
                  <span className="text-[10px] font-medium">Freedom Way, Lekki Phase 1</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-4 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Listing Type</label>
              <div className="flex items-center gap-6">
                {['For sale', 'For rent', 'Both'].map((type, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="listingType" className="w-[18px] h-[18px] text-[#11B880] ring-[#11B880] border-gray-300 focus:ring-[#11B880]" />
                    <span className="text-[14px] text-gray-500">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <label className="block text-[14px] font-medium text-[#1E1E1E] mb-2 flex items-center gap-2"><span className="w-1 h-1 bg-[#11B880] rounded-full"></span> Price</label>
                <input type="text" placeholder="#1,000,000" className="w-full p-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:ring-1 focus:ring-[#11B880]" />
              </div>

              <div className="mt-8 pt-4">
                <button className="w-full py-3.5 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-xl text-[14px] font-medium shadow-sm transition-colors">
                  Upload Details
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsStep;
