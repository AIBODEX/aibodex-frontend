import { ChevronDown } from 'lucide-react';

const PropertyDescription = () => {
  return (
    <div className="mt-10">
      <h2 className="text-[22px] font-semibold mb-4 text-gray-900">About Property</h2>
      <div className="text-gray-500 font-light space-y-5 leading-relaxed text-[15px]">
        <p>
          This beautifully designed 5-bedroom flat offers a perfect blend of space, comfort, 
          and modern living. Located in a secure and well-planned neighborhood, the 
          property is ideal for large families or individuals seeking luxury and convenience in 
          one place.
        </p>
        <p>
          Each of the five bedrooms is spacious and well-lit, featuring built-in wardrobes and 
          en-suite bathrooms for maximum privacy and comfort. The flat includes a large 
          living and dining area with an open-plan layout, creating a warm and welcoming 
          atmosphere for relaxation and entertainment.
        </p>
      </div>
      <button className="flex items-center space-x-1 text-[#11B880] mt-6 text-[15px] font-medium hover:text-[#0e9f6e] transition-colors">
        <span>Read more</span>
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

export default PropertyDescription;
