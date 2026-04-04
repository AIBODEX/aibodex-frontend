
const amenities = [
  "Swimming Pool", "CCTV Surveillance", "Boys Quarter (BQ)",
  "Gym", "Ample Parking", "Security Gate House",
  "24/7 power", "Fitted Kitchen", "Treated water"
];

const CheckIcon = () => (
  <div className="w-[18px] h-[18px] bg-[#11B880] rounded-[4px] flex items-center justify-center flex-shrink-0">
    <svg 
      className="w-[12px] h-[12px] text-white" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={3} 
        d="M5 13l4 4L19 7" 
      />
    </svg>
  </div>
);

const PropertyAmenities = () => {
  return (
    <div className="mt-12">
      <h2 className="text-[22px] font-semibold mb-6 text-gray-900">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-6 gap-x-4">
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckIcon />
            <span className="text-gray-500 font-light text-[15px]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities;
