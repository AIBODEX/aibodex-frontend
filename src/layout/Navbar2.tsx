import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-28 md:w-32 lg:w-36 h-auto" />
            </Link>
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8 relative">
            <div className="relative w-full shadow-sm rounded-full bg-white">
              <input
                type="text"
                placeholder="Search any property"
                className="w-full pl-6 pr-12 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#10b981]/20 focus:border-[#10b981] transition-all text-sm text-gray-700 placeholder:text-gray-400"
              />
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Section - Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/buy" className="text-gray-700 hover:text-[#10b981] font-medium text-[15px] transition-colors">
              Buy
            </Link>
            <Link to="/rent" className="text-gray-700 hover:text-[#10b981] font-medium text-[15px] transition-colors">
              Rent
            </Link>
            <Link to="/agents" className="text-gray-700 hover:text-[#10b981] font-medium text-[15px] transition-colors">
              Agents
            </Link>
            
            {/* Divider */}
            <div className="hidden lg:block h-8 w-px bg-gray-200 mx-2"></div>
            
            {/* List Property Button */}
            <div className="flex items-center space-x-4">
              <Link
                to="/property-search"
                className="bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2.5 rounded text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
              >
                List Property
              </Link>

              {/* Avatar Profile */}
              <button className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 rounded-full overflow-hidden shrink-0 border border-gray-200 hover:border-gray-300 transition-all shadow-sm">
              <Link to="/user-dashboard">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                  alt="User avatar" 
                  className="h-10 w-10 object-cover"
                />
                </Link>
              </button>
            </div>
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-md focus:ring-2 focus:ring-[#10b981]/50"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg absolute w-full left-0 z-50">
          <div className="px-5 pt-4 pb-6 space-y-2">
            {/* Mobile Search */}
            <div className="mb-6 mt-2 relative shadow-sm">
              <input
                type="text"
                placeholder="Search any property"
                className="w-full pl-5 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#10b981] focus:bg-white transition-colors text-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <Link to="/buy" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#10b981] hover:bg-emerald-50 transition-colors">Buy</Link>
            <Link to="/rent" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#10b981] hover:bg-emerald-50 transition-colors">Rent</Link>
            <Link to="/agents" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#10b981] hover:bg-emerald-50 transition-colors">Agents</Link>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center px-3 mb-5">
                <div className="flex-shrink-0">
                  <Link to={"/user-dashboard"}>
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                    alt="User Profile" 
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  </Link>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">Jane Doe</div>
                  <div className="text-sm font-normal text-gray-500">jane@example.com</div>
                </div>
              </div>
              <Link to="/property-search" className="block w-full text-center bg-[#10b981] hover:bg-[#059669] text-white px-4 py-3.5 rounded-lg font-medium transition-colors shadow-sm">
                List Property
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;