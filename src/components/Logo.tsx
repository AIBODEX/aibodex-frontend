
export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#00C48C]" // Teal color for the house
      >
        {/* House Outline */}
        <path
          d="M25 5L45 20V45H5V20L25 5Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Network Nodes (Abstract representation) */}
        <circle cx="15" cy="30" r="3" fill="#1E3A8A" /> {/* Dark Blue Node */}
        <circle cx="35" cy="30" r="3" fill="#1E3A8A" /> {/* Dark Blue Node */}
        <circle cx="25" cy="20" r="3" fill="#1E3A8A" /> {/* Dark Blue Node */}
        <circle cx="25" cy="38" r="3" fill="#1E3A8A" /> {/* Dark Blue Node */}

        {/* Network Lines */}
        <path d="M15 30L25 20L35 30L25 38L15 30Z" stroke="#1E3A8A" strokeWidth="2" />
      </svg>
      
      <span className="text-2xl font-bold tracking-tight text-[#1E3A8A]">
        AIBODEX
      </span>
    </div>
  );
};
