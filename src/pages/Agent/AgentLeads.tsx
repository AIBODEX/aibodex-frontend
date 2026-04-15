import { useState } from 'react';
import AgentSidebar from '../../components/agent/AgentSidebar';
import AgentHeader from '../../components/agent/AgentHeader';
import AgentStatCards, { type Stat } from '../../components/agent/AgentStatCards';
import LeadFilters from '../../components/agent/LeadFilters';
import LeadCard from '../../components/agent/LeadCard';
import Pagination from '../../components/agent/Pagination';
import { Home, Eye, MessageSquare, FileText } from 'lucide-react';

const leadsStats: Stat[] = [
  {
    title: 'Total Leads',
    value: '46',
    subtext: 'You have 46 active leads this month',
    icon: Home
  },
  {
    title: 'Active Leads',
    value: '25',
    subtext: 'You have 25 active leads at the moment',
    icon: Eye
  },
  {
    title: 'Converted',
    value: '8',
    subtext: 'You have 17% conversion rate',
    icon: MessageSquare
  },
  {
    title: 'Avg response time',
    value: '2.4h',
    subtext: 'You have improved lately on how you respond',
    icon: FileText
  }
];

const leadsData = Array(4).fill({
  id: '#LD4657',
  name: 'Temitope Lawal Ayomide',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  isNew: true,
  priority: 'high' as const,
  email: 'temitopelawal300@gmail.com',
  phone: '+234 906 676 0056',
  location: 'Interested in lekki lagos',
  propertyInterest: '4 Bedroom Flat',
  propertyPrice: '#180,000',
  propertyBudget: '#160,000',
  leadScore: '85/100',
  leadSource: 'Website'
}).map((lead, index) => ({ ...lead, uniqueId: index }));

const AgentLeads = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <AgentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <main className="lg:ml-[260px] min-h-[100vh] transition-all duration-300 flex flex-col">
        <div className="p-4 md:p-8 max-w-[1400px] mx-auto w-full flex-1 flex flex-col">
          
          {/* Header */}
          <AgentHeader 
            title="Leads and CRMs"
            subtitle="Manage your property journey and verification request"
            searchPlaceholder="Search any leads by username"
          />
          
          {/* Summary Cards */}
          <AgentStatCards stats={leadsStats} />
          
          <div className="bg-[#F9FAFB] rounded-[24px] p-6 mb-8 w-full flex-1 flex flex-col">
            {/* Filters */}
            <LeadFilters />
            
            {/* CRM Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {leadsData.map((lead) => (
                <LeadCard 
                  key={lead.uniqueId}
                  id={lead.id}
                  name={lead.name}
                  avatar={lead.avatar}
                  isNew={lead.isNew}
                  priority={lead.priority}
                  email={lead.email}
                  phone={lead.phone}
                  location={lead.location}
                  propertyInterest={lead.propertyInterest}
                  propertyPrice={lead.propertyPrice}
                  propertyBudget={lead.propertyBudget}
                  leadScore={lead.leadScore}
                  leadSource={lead.leadSource}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-auto pt-8">
              <Pagination />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default AgentLeads;
