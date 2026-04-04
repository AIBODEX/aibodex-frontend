import { MapPin } from 'lucide-react';

const NextViewingCard = () => {
  return (
    <div className="w-full flex-shrink-0 xl:mt-8 md:mt-10">
      <div className="bg-[#f9fafb] rounded-[24px] p-6 border border-[#f1f1f1] h-full flex flex-col justify-between">
        
        <div>
          <h2 className="text-[17px] font-semibold text-gray-900 tracking-tight pb-4 mb-4 border-b border-[#f1f1f1]">Next Viewing</h2>

          <div className="flex items-center justify-between mb-4">
            <span className="text-[#11B880] text-sm font-medium">Tomorrow</span>
            <span className="text-gray-500 text-sm">10:30 AM</span>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 text-[16px] mb-1.5">Banana island Luxury villa</h3>
            <div className="flex items-center text-gray-500 text-[13px] space-x-1.5">
              <MapPin className="w-[14px] h-[14px]" />
              <span className="truncate">Freedom Way, Lekki Phase 1, Lagos</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3 flex items-center space-x-3 shadow-sm border border-gray-50 mb-8">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Agent" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-gray-900">Meeting with agent</span>
              <span className="text-[12px] text-gray-500 mt-0.5">Mr Emmanuel adegboye</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3  w-full mt-auto mb-6">
          <button className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            Reschedule
          </button>
          <button className="flex-1 py-2.5 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-full text-sm font-medium transition-colors shadow-sm">
            Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default NextViewingCard;
