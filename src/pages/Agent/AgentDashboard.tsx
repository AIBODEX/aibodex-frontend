import { useState } from 'react';
import AgentSidebar from '../../components/agent/AgentSidebar';
import AgentHeader from '../../components/agent/AgentHeader';
import AgentStatCards from '../../components/agent/AgentStatCards';
import AgentPerformanceChart from '../../components/agent/AgentPerformanceChart';
import AIInsights from '../../components/agent/AIInsights';
import AgentPropertiesTable from '../../components/agent/AgentPropertiesTable';

const AgentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <AgentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <main className="lg:ml-[260px] min-h-screen transition-all duration-300">
        <div className="p-4 md:p-8 max-w-[1400px] mx-auto">
          
          {/* Header */}
          <AgentHeader />
          
          {/* Summary Cards */}
          <AgentStatCards />
          
          {/* Middle Section: Chart & Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 min-h-[400px]">
              <AgentPerformanceChart />
            </div>
            <div className="lg:col-span-1 min-h-[400px]">
              <AIInsights />
            </div>
          </div>
          
          {/* Properties Table */}
          <AgentPropertiesTable />
          
        </div>
      </main>
    </div>
  );
};

export default AgentDashboard;