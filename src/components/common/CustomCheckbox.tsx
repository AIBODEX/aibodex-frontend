export const CustomCheckbox = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: () => void }) => (
  <button 
    className="flex items-center gap-3 w-full group focus:outline-none" 
    onClick={onChange}
  >
    <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors shrink-0 ${checked ? 'bg-[#10b981] border-[#10b981]' : 'border-gray-300 bg-white group-hover:border-[#10b981]'}`}>
      {checked && (
        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white" stroke="currentColor" strokeWidth={3.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className="text-[14px] text-gray-600 group-hover:text-gray-900 transition-colors">{label}</span>
  </button>
);
