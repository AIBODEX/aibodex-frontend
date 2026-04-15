import { Sparkles } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      title: 'Price Alert',
      description: 'Properties in Lekki Phase 1 are trending up by 5%. Consider updating listing #402.',
      time: 'Just now',
      timeColor: 'text-[#11B880]'
    },
    {
      title: 'Price Alert',
      description: 'Properties in Lekki Phase 1 are trending up by 5%. Consider updating listing #402.',
      time: '2h ago',
      timeColor: 'text-gray-400'
    },
    {
      title: 'Price Alert',
      description: 'Properties in Lekki Phase 1 are trending up by 5%. Consider updating listing #402.',
      time: '5h ago',
      timeColor: 'text-gray-400'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] rounded-[24px] p-6 w-full h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="w-5 h-5 text-[#11B880]" />
        <h2 className="text-[18px] font-medium text-[#1E1E1E]">AI Insights</h2>
      </div>

      <div className="space-y-4 flex-1">
        {insights.map((insight, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 flex flex-col h-fit">
            <h3 className="text-[15px] font-medium text-[#1E1E1E] mb-2">{insight.title}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4 pr-4">
              {insight.description}
            </p>
            <span className={`text-[12px] font-medium ${insight.timeColor}`}>
              {insight.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;
