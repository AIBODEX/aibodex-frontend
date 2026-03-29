import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../assets/logo.svg';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About us', path: '/about' },
    { name: 'Browse works', path: '/browse' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 px-5 md:px-12 flex items-center shadow-sm sticky top-0 z-50">
      {/* Logo Section */}
      <Link to="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
        <img src={Logo} alt="aibodex" className="w-20 md:w-22" />
      </Link>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-8 ml-auto mr-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-gray-600 hover:text-[#00C48C] font-medium transition-colors text-sm lg:text-base relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C48C] transition-all group-hover:w-full"></span>
          </Link>
        ))}
         <Link
          to="/signup"
          className="bg-[#00C48C] hover:bg-[#00A072] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex-shrink-0 text-sm md:text-base"
        >
          Book demo
        </Link>
      </div>

      {/* CTA Button and Hamburger - Mobile Container */}
      <div className="flex items-center gap-4 ml-auto md:ml-0">
        
        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 focus:outline-none text-gray-700 hover:text-[#00C48C] transition-colors rounded-md"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden md:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="flex flex-col py-3 px-5 space-y-2 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-[#00C48C] font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
          to="/signup"
          className="bg-[#00C48C] hover:bg-[#00A072] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex-shrink-0 text-sm md:text-base"
        >
          Book demo
        </Link>
        
        </div>
      </div>
    </nav>
  );
};
