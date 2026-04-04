import { Search } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
      
      {/* Left side: Avatar and text */}
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-100 to-blue-200 overflow-hidden flex-shrink-0">
          <img 
            src="https://randomuser.me/api/portraits/men/4.jpg" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Good morning marvellous</h1>
          <p className="text-[15px] text-gray-500 mt-0.5">Mange your property journey and verification request</p>
        </div>
      </div>

      {/* Right side: Search and Action Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <div className="relative w-full sm:w-[300px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search any property" 
            className="w-full pl-10 pr-4 py-3 bg-[#f8f9fa] border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-[#11B880] transition-colors"
          />
        </div>
        <button className="whitespace-nowrap w-full sm:w-auto px-6 py-3 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-xl text-[15px] font-medium transition-colors shadow-sm">
          Verify new Property
        </button>
      </div>
      
    </div>
  );
};

export default DashboardHeader;
