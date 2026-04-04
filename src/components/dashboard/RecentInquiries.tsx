
const inquiries = [
  {
    id: 1,
    property: {
      name: '4 Bed Duplex,',
      location: 'Lekki',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=100'
    },
    agent: 'Tunde Poly',
    status: 'In progress',
    date: 'Jan 23 2003'
  },
  {
    id: 2,
    property: {
      name: '4 Bed Duplex,',
      location: 'Lekki',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=100'
    },
    agent: 'Tunde Poly',
    status: 'Pending',
    date: 'Jan 23 2003'
  },
  {
    id: 3,
    property: {
      name: '4 Bed Duplex,',
      location: 'Lekki',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=100'
    },
    agent: 'Tunde Poly',
    status: 'In progress',
    date: 'Jan 23 2003'
  },
  {
    id: 4,
    property: {
      name: '4 Bed Duplex,',
      location: 'Lekki',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=100'
    },
    agent: 'Tunde Poly',
    status: 'In progress',
    date: 'Jan 23 2003'
  }
];

const getStatusBadge = (status: string) => {
  if (status === 'In progress') {
    return <span className="px-3 py-1 bg-[#E5F7F1] text-[#11B880] rounded-full text-[13px] font-medium">{status}</span>;
  }
  if (status === 'Pending') {
    return <span className="px-3 py-1 bg-[#FFF7D0] text-[#D97706] rounded-full text-[13px] font-medium">{status}</span>;
  }
  return <span>{status}</span>;
};

const RecentInquiries = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-[17px] font-semibold text-gray-900 tracking-tight">Recent Inquires & activity</h2>
        <button className="text-gray-500 font-medium text-sm hover:text-teal-600 transition-colors">See All</button>
      </div>

      <div className="bg-[#f9fafb] border border-[#f1f1f1] rounded-[24px] overflow-x-auto hide-scrollbar scroll-smooth">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="font-medium text-gray-500 text-sm py-4 px-6">Property</th>
              <th className="font-medium text-gray-500 text-sm py-4 px-6">Agent</th>
              <th className="font-medium text-gray-500 text-sm py-4 px-6">Status</th>
              <th className="font-medium text-gray-500 text-sm py-4 px-6">Date</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 last:border-0 hover:bg-white transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <img src={item.property.image} alt={item.property.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-[14px] text-gray-900">{item.property.name}</p>
                      <p className="text-[12px] text-gray-500">{item.property.location}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-[14px] text-gray-600">{item.agent}</span>
                </td>
                <td className="py-4 px-6">
                  {getStatusBadge(item.status)}
                </td>
                <td className="py-4 px-6">
                  <span className="text-[14px] text-gray-600">{item.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentInquiries;
