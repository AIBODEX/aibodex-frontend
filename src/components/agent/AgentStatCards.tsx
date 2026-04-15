import { Home, Users, MessageSquare, FileText, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface Stat {
  title: string;
  value: ReactNode;
  subtext: string;
  icon: LucideIcon;
}

interface AgentStatCardsProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    title: 'Active Listing',
    value: '290',
    subtext: 'You have 290 active properties',
    icon: Home
  },
  {
    title: 'Total leads',
    value: '145',
    subtext: 'You have 145 total leads available',
    icon: Users
  },
  {
    title: 'Verified Properties',
    value: '100',
    subtext: 'You have 100 properties that are verified',
    icon: MessageSquare
  },
  {
    title: 'Total Views',
    value: '150',
    subtext: 'You have 150 total views in the recent days',
    icon: FileText
  }
];

const AgentStatCards = ({ stats = defaultStats }: AgentStatCardsProps) => {
  return (
    <div className="bg-[#F9FAFB] rounded-[24px] p-6 mb-8 w-full">
      <h2 className="text-[18px] font-medium text-[#1E1E1E] mb-6">Brief Summary</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 flex flex-col">
              <div className="flex items-center space-x-2 text-gray-500 mb-4">
                <span className="text-[14px] font-medium">{stat.title}</span>
                <Icon className="w-4 h-4 text-gray-400 stroke-2" />
              </div>
              <div className="text-[28px] font-semibold text-[#1E1E1E] mb-2">
                {stat.value}
              </div>
              <p className="text-[12px] text-gray-400 leading-relaxed mt-auto max-w-[130px]">
                {stat.subtext}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentStatCards;
