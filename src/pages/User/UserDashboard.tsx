import DashboardLayout from "../../layout/DashboardLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardSummary from "../../components/dashboard/DashboardSummary";
import RecentInquiries from "../../components/dashboard/RecentInquiries";
import NextViewingCard from "../../components/dashboard/NextViewingCard";
import SavedPropertiesSection from "../../components/dashboard/SavedPropertiesSection";

const UserDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full">
        {/* Header Section */}
        <DashboardHeader />

        {/* Top Summary Cards */}
        <DashboardSummary />

        {/* Middle Section: Inquiries Table and Next Viewing Card */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="w-full lg:w-[60%] xl:w-[65%] overflow-hidden">
            <RecentInquiries />
          </div>
          <div className="w-full lg:w-[40%] xl:w-[35%] flex-shrink-0">
            <NextViewingCard />
          </div>
        </div>

        {/* Bottom Section: Saved Properties */}
        <SavedPropertiesSection />
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
