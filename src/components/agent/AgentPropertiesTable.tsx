import { MoreHorizontal } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=40&h=40&q=80',
    title: '4 Bed Duplex, Lekki',
    locationMain: 'Lekki phase 1',
    price: '#180,0000',
    trustScore: 85,
    status: 'Verified',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=40&h=40&q=80',
    title: '4 Bed Duplex, Lekki',
    locationMain: 'Lekki phase 1',
    price: '#180,0000',
    trustScore: 85,
    status: 'In progress',
  },
   {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=40&h=40&q=80',
    title: '4 Bed Duplex, Lekki',
    locationMain: 'Lekki phase 1',
    price: '#180,0000',
    trustScore: 85,
    status: 'Verified',
  }
];

const AgentPropertiesTable = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-[24px] p-6 w-full mt-8 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr>
              <th className="pb-6 font-medium text-gray-500 text-[13px] pl-2 border-b border-gray-100/50">Property</th>
              <th className="pb-6 font-medium text-gray-500 text-[13px] border-b border-gray-100/50">Location</th>
              <th className="pb-6 font-medium text-gray-500 text-[13px] border-b border-gray-100/50">Price</th>
              <th className="pb-6 font-medium text-gray-500 text-[13px] border-b border-gray-100/50">AI Trust Score</th>
              <th className="pb-6 font-medium text-gray-500 text-[13px] border-b border-gray-100/50">Status</th>
              <th className="pb-6 font-medium text-gray-500 text-[13px] text-center border-b border-gray-100/50">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/50">
            {properties.map((prop) => (
              <tr key={prop.id} className="hover:bg-white/50 transition-colors">
                <td className="py-4 pl-2">
                  <div className="flex items-center space-x-3">
                    <img src={prop.image} alt={prop.title} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-medium text-[#1E1E1E] leading-snug">{prop.title.split(',')[0]}</span>
                      <span className="text-[13px] text-gray-500">{prop.title.split(',')[1]?.trim()}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-[14px] text-gray-600">{prop.locationMain}</td>
                <td className="py-4 text-[14px] font-medium text-[#1E1E1E]">{prop.price}</td>
                <td className="py-4">
                  <div className="flex items-center space-x-3 max-w-[120px]">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#11B880] rounded-full" 
                        style={{ width: `${prop.trustScore}%` }}
                      />
                    </div>
                    <span className="text-[13px] font-medium text-gray-600">{prop.trustScore}%</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-[12px] font-inter font-medium
                    ${prop.status === 'Verified' 
                      ? 'bg-[#11B880]/10 text-[#11B880]' 
                      : 'bg-[#F59E0B]/10 text-[#F59E0B]'}
                  `}>
                    {prop.status}
                  </span>
                </td>
                <td className="py-4 text-center">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentPropertiesTable;
