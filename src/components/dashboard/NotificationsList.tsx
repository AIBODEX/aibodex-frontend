import { Heart } from 'lucide-react';

const notificationsData = [
  {
    id: 1,
    iconColor: 'text-[#ef4444]', // red
    bgColor: 'bg-[#fee2e2]', // red-100
    dotColor: 'bg-[#ef4444]',
    text: 'The 2-bedroom apartment you saved in Lekki dropped by ₦150,000.',
    time: 'Sept 23, 2:00 PM'
  },
  {
    id: 2,
    iconColor: 'text-[#10b981]', // green
    bgColor: 'bg-[#d1fae5]', // green-100
    dotColor: 'bg-[#10b981]',
    text: 'The 2-bedroom apartment you saved in Lekki dropped by ₦150,000.',
    time: 'Sept 23, 2:00 PM'
  },
  {
    id: 3,
    iconColor: 'text-[#8b5cf6]', // purple
    bgColor: 'bg-[#ede9fe]', // purple-100
    dotColor: 'bg-[#8b5cf6]',
    text: 'The 2-bedroom apartment you saved in Lekki dropped by ₦150,000.',
    time: 'Sept 23, 2:00 PM'
  },
  {
    id: 4,
    iconColor: 'text-[#8b5cf6]', // purple
    bgColor: 'bg-[#ede9fe]', // purple-100
    dotColor: 'bg-[#8b5cf6]',
    text: 'The 2-bedroom apartment you saved in Lekki dropped by ₦150,000.',
    time: 'Sept 23, 2:00 PM'
  }
];

const NotificationsList = () => {
  return (
    <div className="w-full flex-1">
      <h2 className="text-[20px] font-medium text-gray-900 tracking-tight mb-6">Notifications</h2>
      
      <div className="bg-[#f9fafb] border border-[#f1f1f1] rounded-[24px] p-2 sm:p-4 h-full flex flex-col">
        {/* Top Header inside box */}
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 mb-2">
          <span className="text-[14px] font-medium text-gray-500">All notifications</span>
          <span className="bg-[#11B880] text-white px-3 py-1 rounded-full text-[12px] font-medium">Unread</span>
        </div>

        {/* Notifications Items */}
        <div className="flex flex-col gap-1 overflow-y-auto">
          {notificationsData.map((notif) => (
            <div 
              key={notif.id} 
              className="flex items-center justify-between p-3 sm:p-4 hover:bg-white rounded-[16px] transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notif.bgColor} bg-opacity-60`}>
                  <Heart className={`w-5 h-5 ${notif.iconColor}`} fill="currentColor" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <p className="text-[13px] text-gray-800 leading-snug mb-1">{notif.text}</p>
                  <p className="text-[11px] text-gray-400">{notif.time}</p>
                </div>
              </div>

              {/* Unread circle dot */}
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ml-4 ${notif.dotColor}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsList;
