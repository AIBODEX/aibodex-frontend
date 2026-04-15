import { UploadCloud } from 'lucide-react';

const FileDropZone = ({ placeholder }: { placeholder: string }) => (
  <div className="border-2 border-dashed border-gray-200 hover:border-[#11B880]/50 rounded-xl bg-white p-8 mb-6 flex flex-col items-center justify-center transition-colors cursor-pointer relative overflow-hidden group min-h-[140px]">
    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
    <div className="w-12 h-12 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#EAF8F3] transition-colors">
      <UploadCloud className="w-6 h-6 text-gray-400 group-hover:text-[#11B880]" />
    </div>
    <span className="text-[13px] text-gray-500 font-medium">
      {placeholder}
    </span>
  </div>
);

const UploadDocumentsStep = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-[#F9FAFB] rounded-[24px] p-8 border border-gray-50 shadow-sm mt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] font-medium text-[#1E1E1E]">Legal Ownership Documents</h2>
          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[11px] font-medium uppercase tracking-wide">
            Required
          </span>
        </div>

        <div>
          <h3 className="text-[14px] font-medium text-gray-700 mb-3">Certificate of occupancy (C of O)</h3>
          <FileDropZone placeholder="Upload jpeg, png file" />
        </div>

        <div>
          <h3 className="text-[14px] font-medium text-gray-700 mb-3">Governor's consent / Registered card</h3>
          <FileDropZone placeholder="Upload jpeg, png file" />
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsStep;
