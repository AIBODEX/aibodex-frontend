import { DashboardLayout } from '../../layout/DashboardLayout';
import ChatSidebar from '../../components/chat/ChatSidebar';
import ChatArea from '../../components/chat/ChatArea';

const Chat = () => {
  return (
    <DashboardLayout noPadding>
      {/* We use h-[calc(100vh-73px)] on mobile to account for the mobile header. On desktop, h-screen. */}
      <div className="flex w-full h-[calc(100vh-73px)] lg:h-screen overflow-hidden bg-white">
        
        {/* Chat Sidebar (Contacts) - Hidden on mobile by default in this implementation, 
            or shown side-by-side on tablet/desktop. */}
        <div className="hidden md:flex flex-shrink-0 h-full">
          <ChatSidebar />
        </div>
        
        {/* Main Chat Area */}
        <div className="flex-1 h-full min-w-0">
          <ChatArea />
        </div>
        
      </div>
    </DashboardLayout>
  );
};

export default Chat;
