import { UploadCloud } from 'lucide-react';

const UploadMediaStep = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-[#F9FAFB] rounded-[24px] p-8 border border-gray-50 shadow-sm mt-8 min-h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] font-medium text-[#1E1E1E]">Upload Media</h2>
          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[11px] font-medium">
            • High Quality Image Boost Visibility
          </span>
        </div>

        <div className="flex-1 w-full border-2 border-dashed border-gray-200 hover:border-[#11B880]/50 rounded-xl bg-white p-10 flex flex-col items-center justify-center transition-colors cursor-pointer relative overflow-hidden group">
          <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
          
          <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-[13px] text-gray-500 font-medium mb-12 shadow-sm">
            T Drag and Drop Media Here
          </div>

          <div className="flex flex-col items-center justify-center">
            <UploadCloud className="w-10 h-10 text-[#11B880] mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-[13px] text-gray-500 text-center leading-relaxed">
              Upload jpeg, png file (Max 20mb) <br/>
              or <span className="text-[#11B880] font-medium">Click Here</span> to Add
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMediaStep;
