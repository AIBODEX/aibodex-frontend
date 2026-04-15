import { useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { 
  LayoutDashboard, 
  List,
  Users,
  ShieldCheck,
  Settings, 
  LogOut,
} from 'lucide-react';

const AgentSidebar = ({ isOpen, setIsOpen }: { isOpen?: boolean, setIsOpen?: (val: boolean) => void }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/agent-dashboard' },
    { name: 'My Listing', icon: List, path: '/agent-dashboard/listings' },
    { name: 'Leads and CRMs', icon: Users, path: '/agent-dashboard/leads' },
    { name: 'Verification', icon: ShieldCheck, path: '/agent-dashboard/verification' },
    { name: 'Settings', icon: Settings, path: '/agent-dashboard/settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen && setIsOpen(false)}
        />
      )}
      
      {/* Sidebar container */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-[260px] bg-white border-r border-[#f1f1f1] flex flex-col pt-6 pb-8 px-4
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex-1">
          {/* Logo */}
          <div className="flex items-center space-x-2 pl-4 mb-10">
            <img src={Logo} alt="Logo" className="w-24" />
          </div>

          {/* Top Nav Items */}
          <nav className="space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path === '/agent-dashboard' && location.pathname.startsWith('/agent-dashboard') && location.pathname === '/agent-dashboard'); // basic exact match logic for now
              return (
                <a
                  key={item.name}
                  href={item.path}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors text-[15px]
                    ${isActive 
                      ? 'bg-[#11B880] text-white shadow-sm' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                  onClick={() => setIsOpen && setIsOpen(false)}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Nav Items */}
        <div className="mt-8">
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors text-[15px]"
            onClick={(e) => {
              e.preventDefault();
              // logout logic
            }}
          >
            <LogOut className="w-5 h-5 text-gray-400" />
            <span>Logout</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default AgentSidebar;
