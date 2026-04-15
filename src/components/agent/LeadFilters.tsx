import { ChevronDown } from 'lucide-react';

const LeadFilters = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 w-full gap-4">
      <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-[#11B880] text-white rounded-full text-[14px] font-medium border border-[#11B880]">
          <span>All Stages</span>
          <ChevronDown className="w-4 h-4 ml-1 opacity-80" />
        </button>
        
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-white text-gray-700 rounded-full text-[14px] font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
          <span>All Priorities</span>
          <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
        </button>
        
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-white text-gray-700 rounded-full text-[14px] font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
          <span>All Sources</span>
          <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
        </button>
      </div>

      <button className="text-[#11B880] text-[14px] font-medium hover:underline whitespace-nowrap self-start sm:self-auto">
        Clear all filters.
      </button>
    </div>
  );
};

export default LeadFilters;
