import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Logo from '../assets/logo.svg';
export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Mobile Header (only visible on mobile when sidebar is closed) */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-[#f1f1f1] sticky top-0 z-30">
        <div className="flex items-center space-x-2">
          {/* Logo Mark for Mobile Header */}
          <img src={Logo} alt="Logo" className="w-20" />
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 -mr-2 text-gray-500">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <main className="lg:ml-[260px] min-h-screen">
        <div className="p-4 sm:p-8 md:p-10 max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
