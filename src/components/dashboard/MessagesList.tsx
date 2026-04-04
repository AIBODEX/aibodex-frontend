import { Link } from 'react-router-dom';

const messagesData = [
  {
    id: 1,
    sender: 'Tunde Balogun',
    previewLine1: 'Hi, just checking in 😊',
    previewLine2: 'Are you still interested in the 3-bedroom flat in Yaba?',
    unreadCount: 1,
    avatar: '' // Placeholder for empty avatar
  },
  {
    id: 2,
    sender: 'Tunde Balogun',
    previewLine1: 'Hi, just checking in 😊',
    previewLine2: 'Are you still interested in the 3-bedroom flat in Yaba?',
    unreadCount: 1,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    sender: 'Tunde Balogun',
    previewLine1: 'Hi, just checking in 😊',
    previewLine2: 'Are you still interested in the 3-bedroom flat in Yaba?',
    unreadCount: 1,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 4,
    sender: 'Tunde Balogun',
    previewLine1: 'Hi, just checking in 😊',
    previewLine2: 'Are you still interested in the 3-bedroom flat in Yaba?',
    unreadCount: 1,
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
  }
];

const MessagesList = () => {
  return (
    <div className="w-full flex-1">
      <h2 className="text-[20px] font-medium text-gray-900 tracking-tight mb-6">Messages</h2>
      
      <div className="bg-[#f9fafb] border border-[#f1f1f1] rounded-[24px] p-2 sm:p-4 h-full flex flex-col">
        {/* Top Header inside box */}
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 mb-2">
          <span className="text-[14px] font-medium text-gray-500">All messages</span>
          <span className="bg-[#11B880] text-white px-3 py-1 rounded-full text-[12px] font-medium">Unread</span>
        </div>

        {/* Message Items */}
        <div className="flex flex-col gap-1 overflow-y-auto">
          {messagesData.map((msg) => (
            <Link 
              key={msg.id} 
              to="/messages/chat"
              className="flex items-center justify-between p-3 sm:p-4 hover:bg-white rounded-[16px] transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border border-gray-100">
                  {msg.avatar ? (
                    <img src={msg.avatar} alt={msg.sender} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-medium text-gray-900 group-hover:text-[#11B880] transition-colors mb-0.5">{msg.sender}</h3>
                  <p className="text-[13px] text-gray-600 mb-0.5">{msg.previewLine1}</p>
                  <p className="text-[12px] text-gray-400 line-clamp-1">{msg.previewLine2}</p>
                </div>
              </div>

              {/* Unread dot */}
              {msg.unreadCount > 0 && (
                <div className="w-5 h-5 bg-[#11B880] text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ml-2 shadow-sm">
                  {msg.unreadCount}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesList;
