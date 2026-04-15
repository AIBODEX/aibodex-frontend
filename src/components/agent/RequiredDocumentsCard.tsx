import { CheckCircle2, FileText } from 'lucide-react';

const REQUIRED_DOCS = [
  {
    title: 'Certificate of Occupancy (C of O)',
    desc: 'Required for ownership verification'
  },
  {
    title: 'Survey Plan',
    desc: 'For location and boundary validation'
  },
  {
    title: 'Property Photos',
    desc: 'Minimum 5 high-quality images'
  },
  {
    title: 'Owner ID',
    desc: 'Valid government-issued ID'
  }
];

const RequiredDocumentsCard = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-[24px] p-6 w-full flex flex-col h-full border border-gray-50">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600">
          <FileText className="w-5 h-5" />
        </div>
        <h2 className="text-[18px] font-medium text-[#1E1E1E]">Required Documents</h2>
      </div>

      <div className="space-y-6 flex-1">
        {REQUIRED_DOCS.map((doc, idx) => (
          <div key={idx} className="flex gap-4">
            <CheckCircle2 className="w-6 h-6 text-blue-600/80 flex-shrink-0" />
            <div>
              <h3 className="text-[15px] font-medium text-[#1E1E1E] leading-tight mb-1">{doc.title}</h3>
              <p className="text-[13px] text-gray-500">{doc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 px-6 py-3 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-xl text-[14px] font-medium transition-colors shadow-sm">
        Upload Documents
      </button>
    </div>
  );
};

export default RequiredDocumentsCard;
