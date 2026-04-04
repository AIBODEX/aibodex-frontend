import { Search } from 'lucide-react';

const users = [
  { id: 1, name: 'Benjamin Miles Franklin.', snippet: 'Hello, when will you be available for a call?', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', online: true },
  { id: 2, name: 'Oni Damilola Ifeoluwa', snippet: 'Hello, when will you be available for a call?', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', online: true },
  { id: 3, name: 'Samuel Marvellous', snippet: 'Hello, when will you be available for a call?', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', online: true },
  { id: 4, name: 'Gloria Adediran', snippet: 'Hello, when will you be available for a call?', avatar: 'https://randomuser.me/api/portraits/women/24.jpg', online: true },
  { id: 5, name: 'Adedamola Olaleye', snippet: 'Hello, when will you be available for a call?', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', online: true },
  { id: 6, name: 'Morgan Gibbs White', snippet: 'Hello, when will you be available for a call?', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', online: true },
];

const ChatSidebar = () => {
  return (
    <div className="w-full lg:w-[320px] xl:w-[380px] h-full border-r border-[#f1f1f1] flex flex-col bg-white flex-shrink-0">
      
      {/* Header & Tabs */}
      <div className="p-6 pb-4">
        <h2 className="text-[22px] font-semibold text-[#11B880] tracking-tight mb-6">Messages</h2>
        
        <div className="flex bg-[#f8f9fa] rounded-full p-1 mb-6">
          <button className="flex-1 bg-[#11B880] text-white py-2 rounded-full text-[14px] font-medium flex items-center justify-center gap-2 shadow-sm">
            General 
            <span className="bg-white text-[#11B880] w-5 h-5 rounded-full text-[10px] flex items-center justify-center">25</span>
          </button>
          <button className="flex-1 text-gray-500 hover:text-gray-700 py-2 rounded-full text-[14px] font-medium flex items-center justify-center gap-2">
            Archived
            <span className="text-gray-400 text-[10px]">30</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Message" 
            className="w-full pl-4 pr-10 py-3 bg-white border border-gray-100 rounded-full text-[13px] focus:outline-none focus:ring-1 focus:ring-teal-500/20 focus:border-[#11B880] transition-colors placeholder:text-gray-400"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {users.map((user) => (
          <div 
            key={user.id} 
            className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              {user.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#11B880] rounded-full border-2 border-white"></div>
              )}
            </div>

            {/* Snippet */}
            <div className="overflow-hidden">
              <h3 className="text-[15px] font-medium text-gray-800 truncate mb-0.5">{user.name}</h3>
              <p className="text-[13px] text-gray-400 truncate">{user.snippet}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ChatSidebar;
