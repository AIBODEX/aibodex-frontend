import { Home, EyeOff, MessageSquare, FileText } from 'lucide-react';

const summaryData = [
  {
    title: 'Property saved',
    icon: Home,
    value: '14',
    text: 'You saved up to 14 properties from the search.',
    valueColor: 'text-[#11B880]',
  },
  {
    title: 'Upcoming Views',
    icon: EyeOff,
    value: '8',
    text: 'You have 8 upcoming property views',
    valueColor: 'text-[#11B880]',
  },
  {
    title: 'Active inquires',
    icon: MessageSquare,
    value: '16',
    text: 'You have 16 active inquires from agents',
    valueColor: 'text-[#11B880]',
  },
  {
    title: 'Document verified',
    icon: FileText,
    value: '16',
    text: 'You verified 16 documents in the recents weeks',
    valueColor: 'text-purple-600',
  },
];

const DashboardSummary = () => {
  return (
    <div className="bg-[#f9fafb] rounded-[24px] p-6 lg:p-8 mb-10 border border-[#f1f1f1]">
      <h2 className="text-[17px] font-semibold text-gray-900 mb-6 tracking-tight">Brief Summary</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {summaryData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-[14px] text-gray-500 font-medium">{item.title}</p>
                <IconComponent className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-3 ${item.valueColor}`}>{item.value}</h3>
                <p className="text-[12px] text-gray-400 leading-relaxed max-w-[140px]">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSummary;
