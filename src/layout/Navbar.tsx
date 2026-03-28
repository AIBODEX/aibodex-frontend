import { Link } from 'react-router-dom';
import Logo  from '../assets/logo.svg';


export const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Browse works', path: '/browse' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50">
      {/* Logo Section */}
      <Link to="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
        <img src={Logo} alt="aibodex" className='w-22'/>
      </Link>

      {/* Navigation Links - Hidden on mobile, visible on medium+ screens */}
      <div className="hidden md:flex items-center gap-8 ml-auto mr-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-gray-600 hover:text-[#00C48C] font-medium transition-colors text-sm lg:text-base"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        to="/signup"
        className="bg-[#00C48C] hover:bg-[#00A072] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex-shrink-0 text-sm md:text-base"
      >
        Book demo
      </Link>
    </nav>
  );
};
