import { Phone, MoreHorizontal, Paperclip, Mic, CheckCheck } from 'lucide-react';

const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col bg-white h-full relative">
      
      {/* Top Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#f1f1f1]">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Agent" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#11B880] rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h2 className="text-[19px] font-medium text-gray-900 leading-tight">Benjamin Miles Frankiln</h2>
            <p className="text-[14px] text-gray-500 mb-1">A professinonal and expert agent</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 hide-scrollbar flex flex-col gap-8">
        
        {/* Received Message */}
        <div className="flex items-end gap-3 max-w-[80%]">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Agent" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#f8f9fa] border border-[#f1f1f1] rounded-[20px] rounded-bl-sm p-4 text-[14px] text-gray-700 shadow-sm leading-relaxed">
            Ok. Should I send it over email <br/>as well after filling the details.
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex items-end justify-end gap-3 w-full self-end">
          <div className="flex flex-col items-end gap-1">
            <div className="bg-[#11B880] text-white rounded-[20px] rounded-br-sm p-4 text-[14px] shadow-sm leading-relaxed max-w-sm md:max-w-md lg:max-w-xl">
              Yes please do that i stay<br/>more often on th Gmail app
            </div>
            <CheckCheck className="w-4 h-4 text-[#11B880] mr-1" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Me" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Received Message */}
        <div className="flex items-end gap-3 max-w-[80%]">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Agent" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#f8f9fa] border border-[#f1f1f1] rounded-[20px] rounded-bl-sm p-4 text-[14px] text-gray-700 shadow-sm leading-relaxed">
            Ok. Should I send it over email <br/>as well after filling the details.
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex items-end justify-end gap-3 w-full self-end">
          <div className="flex flex-col items-end gap-1">
            <div className="bg-[#11B880] text-white rounded-[20px] rounded-br-sm p-4 text-[14px] shadow-sm leading-relaxed max-w-sm md:max-w-md lg:max-w-xl">
              Yes please do that i stay<br/>more often on th Gmail app
            </div>
            <CheckCheck className="w-4 h-4 text-[#11B880] mr-1" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Me" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="p-6 pt-2 bg-white">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#fafafa] rounded-full flex items-center px-6 py-4 border border-gray-100">
            <button className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
              <Paperclip className="w-5 h-5 -rotate-45" />
            </button>
            <input 
              type="text" 
              placeholder="Type your message" 
              className="flex-1 bg-transparent border-none focus:outline-none px-4 text-[14px] placeholder:text-gray-400 text-gray-700"
            />
          </div>
          <button className="w-[52px] h-[52px] rounded-full bg-[#f8f9fa] border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shrink-0">
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ChatArea;
