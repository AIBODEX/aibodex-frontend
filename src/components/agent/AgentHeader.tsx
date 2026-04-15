import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AgentHeaderProps {
  title?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  actionButtonText?: string;
  actionButtonLink?: string;
}

const AgentHeader = ({ 
  title = "Good morning agent Tunde", 
  subtitle = "Welcome back, here's what's happening with your properties today",
  searchPlaceholder = "Search any property",
  actionButtonText = "Add new Property",
  actionButtonLink = "#"
}: AgentHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 w-full">
      
      {/* Left side: Avatar and text */}
      <div className="flex items-center space-x-4">
        <div className="w-[52px] h-[52px] rounded-full overflow-hidden flex-shrink-0 bg-blue-100">
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt="Agent Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#1E1E1E]">{title}</h1>
          <p className="text-[14px] text-gray-500 mt-0.5">{subtitle}</p>
        </div>
      </div>

      {/* Right side: Search and Action Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
        <div className="relative w-full sm:w-[280px]">
          <Search className="w-[18px] h-[18px] text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder={searchPlaceholder} 
            className="w-full pl-11 pr-4 py-2.5 bg-[#F9FAFB] hover:bg-gray-100 border-none rounded-xl text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-200 transition-colors"
          />
        </div>
        {actionButtonText && (
          <Link 
            to={actionButtonLink}
            className="whitespace-nowrap flex justify-center w-full sm:w-auto px-6 py-2.5 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-lg text-[14px] font-medium transition-colors cursor-pointer"
          >
            {actionButtonText}
          </Link>
        )}
      </div>
      
    </div>
  );
};

export default AgentHeader;
