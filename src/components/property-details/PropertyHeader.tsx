import { MapPin, BedDouble, Bath, Car, Maximize } from 'lucide-react';

const PropertyHeader = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">5 Bedroom Detached Duplex with BQ</h1>
      <div className="flex items-center text-gray-500 mt-2 space-x-2">
        <MapPin className="w-5 h-5" />
        <p className="text-[15px]">Freedom Way, Lekki Phase 1, Lagos</p>
      </div>
      
      <div className="grid grid-cols-2 lg:flex lg:flex-row items-center gap-y-6 gap-x-4 lg:gap-10 mt-6 md:mt-8 pb-6 md:pb-8 border-b border-gray-100">
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="p-2 md:p-3 bg-teal-50/50 text-[#11B880] rounded-full">
            <BedDouble className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
          </div>
          <div>
            <p className="text-[11px] md:text-xs text-gray-500 mb-0.5">Bedrooms</p>
            <p className="font-medium text-sm md:text-base text-gray-900">5 Beds</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="p-2 md:p-3 bg-teal-50/50 text-[#11B880] rounded-full">
            <Bath className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
          </div>
          <div>
            <p className="text-[11px] md:text-xs text-gray-500 mb-0.5">Bathroom</p>
            <p className="font-medium text-sm md:text-base text-gray-900">6 Baths</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="p-2 md:p-3 bg-teal-50/50 text-[#11B880] rounded-full">
            <Car className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
          </div>
          <div>
            <p className="text-[11px] md:text-xs text-gray-500 mb-0.5">Parking</p>
            <p className="font-medium text-sm md:text-base text-gray-900">7 Cars</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="p-2 md:p-3 bg-teal-50/50 text-[#11B880] rounded-full">
            <Maximize className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
          </div>
          <div>
            <p className="text-[11px] md:text-xs text-gray-500 mb-0.5">Land size</p>
            <p className="font-medium text-sm md:text-base text-gray-900">600 sqm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
