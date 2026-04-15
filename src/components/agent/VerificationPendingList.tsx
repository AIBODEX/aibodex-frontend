import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const pendings = [
  {
    id: 1,
    title: '4 Bedroom Flat - #180,000',
    location: 'Phase 1 lekki lagos',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=80&q=80',
    progress: 65,
    badges: [
      { text: 'Document uploaded', active: true },
      { text: 'Location verified', active: true },
      { text: 'Ownership Pending', outline: true }
    ],
    timeAgo: 'Submitted: 2 hours ago'
  },
  {
    id: 2,
    title: '4 Bedroom Flat - #180,000',
    location: 'Phase 1 lekki lagos',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=80&q=80',
    progress: 65,
    badges: [
      { text: 'Document uploaded', active: true },
      { text: 'Location verified', active: false },
      { text: 'Ownership Pending', outline: true }
    ],
    timeAgo: 'Submitted: 4 hours ago'
  }
];

const VerificationPendingList = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-[24px] p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-medium text-[#1E1E1E]">Pending Verification</h2>
        <span className="bg-orange-100 text-orange-500 text-[12px] font-medium px-3 py-1 rounded-full">
          5 active
        </span>
      </div>

      <div className="space-y-6">
        {pendings.map((item) => (
          <div key={item.id} className="flex flex-col p-5 bg-white border border-gray-100 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
              <img src={item.image} alt="Property" className="w-[60px] h-[60px] rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-medium text-[#1E1E1E] leading-tight mb-1 truncate">{item.title}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
                  <MapPin className="w-[14px] h-[14px]" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[13px] text-gray-500">Verification progress</span>
                <span className="text-[13px] font-medium text-[#1E1E1E]">{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-orange-400 h-1.5 rounded-full" 
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.badges.map((badge, idx) => (
                <span 
                  key={idx} 
                  className={`text-[11px] px-2.5 py-1 rounded-full flex items-center justify-center
                    ${badge.active 
                      ? 'bg-orange-100 text-orange-500 font-medium' 
                      : badge.outline 
                        ? 'border border-gray-200 text-gray-500 font-normal'
                        : 'bg-orange-50/50 text-orange-300 font-medium'
                    }
                  `}
                >
                  {badge.text} {badge.outline && <ArrowRight className="w-3 h-3 ml-1 transform -rotate-45" />}
                  {badge.active && <ArrowRight className="w-3 h-3 ml-1" />}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[13px] text-gray-400">{item.timeAgo}</span>
              <Link to="/agent-dashboard/verification" className="text-[#11B880] text-[14px] font-medium flex items-center gap-1 hover:underline group">
                View Details
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerificationPendingList;
