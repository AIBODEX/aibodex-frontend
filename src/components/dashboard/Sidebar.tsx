import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { 
  LayoutDashboard, 
  Heart, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut,
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/user-dashboard' },
    { name: 'Saved Properties', icon: Heart, path: '/saved-properties' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];

  const bottomItems = [
    { name: 'Settings', icon: Settings },
    { name: 'Logout', icon: LogOut },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar container */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-[260px] bg-white border-r border-[#f1f1f1] flex flex-col justify-between py-6 px-4
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2 pl-4 mb-12">
            <img src={Logo} alt="Logo" className="w-20" />
          </div>

          {/* Top Nav Items */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium transition-colors
                    ${isActive 
                      ? 'bg-[#11B880] text-white shadow-sm shadow-[#11B880]/20' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                  onClick={() => setIsOpen(false)} // Close sidebar on mobile navigation
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Nav Items */}
        <div className="space-y-2 pb-4">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href="#"
                className="flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.name === 'Logout') {
                    // logout logic
                  }
                }}
              >
                <Icon className="w-5 h-5 text-gray-400" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
