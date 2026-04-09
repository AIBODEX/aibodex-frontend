import { Target } from 'lucide-react'; // Can use a pin or target icon

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
          <div className="bg-white px-5 py-3 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] flex items-center space-x-3 transition-transform hover:scale-105 cursor-pointer">
            <Target className="w-5 h-5 text-gray-400" />
            <span className="text-[15px] text-gray-600 font-medium">Freedom Way, Lekki Phase 1,</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
