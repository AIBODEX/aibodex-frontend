import { useState } from 'react';
import AgentSidebar from '../../components/agent/AgentSidebar';
import AgentHeader from '../../components/agent/AgentHeader';
import AgentStatCards, { type Stat } from '../../components/agent/AgentStatCards';
import VerificationPendingList from '../../components/agent/VerificationPendingList';
import RequiredDocumentsCard from '../../components/agent/RequiredDocumentsCard';
import { Shield, EyeOff, FileMinus, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const verificationStats: Stat[] = [
  {
    title: 'Total Verified',
    value: '67',
    subtext: 'You have 89% succes rate so far',
    icon: Shield
  },
  {
    title: 'Pending Review',
    value: '19',
    subtext: 'You have 18 properties under review by our team',
    icon: EyeOff
  },
  {
    title: 'Failed/Rejected',
    value: '8',
    subtext: 'You have 8 rejected properties',
    icon: FileMinus
  },
  {
    title: 'Trust Score',
    value: '89/100',
    subtext: 'You are actually doing well, keep it up',
    icon: FileCheck
  }
];

const AgentVerification = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Quick override to mimic green/orange/red colors for stat values based on design.
  const styledStats = verificationStats.map((st) => {
    let colorClass = 'text-[#1E1E1E]'; // default
    if(st.title === 'Failed/Rejected') colorClass = 'text-red-500';
    if(st.title === 'Trust Score') colorClass = 'text-[#11B880]';
    return { ...st, value: <span className={colorClass}>{st.value}</span> };
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <AgentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <main className="lg:ml-[260px] min-h-[100vh] transition-all duration-300 flex flex-col">
        <div className="p-4 md:p-8 max-w-[1400px] mx-auto w-full flex-1 flex flex-col">
          
          {/* Header */}
          <AgentHeader 
            title="Verifications"
            subtitle="Manage your property journey and verification request"
            searchPlaceholder="Search any leads by username"
            actionButtonText="Submit for verification"
            actionButtonLink="/agent-dashboard/verification/new"
          />
          
          {/* Summary Cards */}
          <AgentStatCards stats={styledStats} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full flex-1 items-start">
            
            {/* Left side: Pending Verifications List */}
            <div className="lg:col-span-7 xl:col-span-8">
              <VerificationPendingList />
            </div>

            {/* Right side: Documents & Banner */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              <RequiredDocumentsCard />
              
              {/* Green Action Banner Placeholder */}
              <div className="bg-[#EAF8F3] rounded-[24px] p-8 w-full min-h-[200px] flex flex-col items-center justify-end relative h-full">
                <Link to="/agent-dashboard/verification/new" className="w-full text-center px-6 py-3 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-xl text-[14px] font-medium transition-colors shadow-sm">
                  Verify new property
                </Link>
              </div>
            </div>

          </div>
          
        </div>
      </main>
    </div>
  );
};

export default AgentVerification;
