import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12 mb-8">
      <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-100 text-gray-400 hover:bg-gray-50 transition-colors">
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      <button className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#11B880] text-white text-[14px] font-medium">
        1
      </button>
      <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-[14px] font-medium">
        2
      </button>
      <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-[14px] font-medium">
        3
      </button>
      
      <span className="w-9 h-9 flex items-center justify-center text-gray-400 text-[14px]">
        ...
      </span>
      
      <button className="w-10 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 border border-gray-100 transition-colors text-[14px] font-medium">
        120
      </button>

      <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-100 text-gray-400 hover:bg-gray-50 transition-colors">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
