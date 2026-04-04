import { Target } from 'lucide-react';

const PropertyLocation = () => {
  return (
    <div className="mt-12">
      <h2 className="text-[22px] font-semibold mb-6 text-gray-900">Location</h2>
      <div className="w-full h-[250px] md:h-[300px] bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Map Location" 
          className="w-full h-full object-cover opacity-30 mix-blend-multiply grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center transition-transform hover:scale-105 cursor-pointer transform -translate-y-4">
            
            {/* Red Pin Locator */}
            <div className="flex flex-col items-center relative z-10 drop-shadow-sm">
              <div className="w-6 h-6 border-[5px] border-[#E11D48] rounded-full bg-white relative z-10"></div>
              <div className="w-[3px] h-5 bg-[#E11D48] -mt-1 relative z-0"></div>
            </div>

            {/* Pill Label */}
            <div className="bg-white px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex items-center space-x-2 -mt-1 z-20">
              <Target className="w-4 h-4 text-gray-400" />
              <span className="text-[14px] text-gray-600 font-medium">Freedom Way, Lekki Phase 1,</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
