import { DashboardLayout } from '../../layout/DashboardLayout';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import MessagesList from '../../components/dashboard/MessagesList';
import NotificationsList from '../../components/dashboard/NotificationsList';
import RecentInquiries from '../../components/dashboard/RecentInquiries';
import NextViewingCard from '../../components/dashboard/NextViewingCard';

const Messages = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full min-h-screen">
        {/* Header Section */}
        <div className="flex-shrink-0">
          <DashboardHeader searchPlaceholder="Search any message" />
        </div>

        {/* Middle Section: Inquiries Table and Next Viewing Card */}
        <div className="flex flex-col lg:flex-row gap-6 w-full mb-10">
          <div className="w-full lg:w-[60%] xl:w-[65%] overflow-hidden">
            <RecentInquiries />
          </div>
          <div className="w-full lg:w-[40%] xl:w-[35%] flex-shrink-0">
            <NextViewingCard />
          </div>
        </div>

        {/* Messaging Layout: Split view */}
        <div className="flex-1 pb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full h-[calc(100vh-180px)] min-h-[500px]">
            <MessagesList />
            <NotificationsList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;