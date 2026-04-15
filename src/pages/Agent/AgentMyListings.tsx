import { useState } from 'react';
import AgentSidebar from '../../components/agent/AgentSidebar';
import AgentHeader from '../../components/agent/AgentHeader';
import AgentStatCards, { type Stat } from '../../components/agent/AgentStatCards';
import ListingFilters from '../../components/agent/ListingFilters';
import ListingCard from '../../components/agent/ListingCard';
import Pagination from '../../components/agent/Pagination';
import { Home, Eye, MessageSquare, FileText } from 'lucide-react';

const myListingStats: Stat[] = [
  {
    title: 'Total Listing',
    value: '120',
    subtext: 'You have 120 active properties',
    icon: Home
  },
  {
    title: 'Active',
    value: '110',
    subtext: 'You have 110 active listing at the moment',
    icon: Eye
  },
  {
    title: 'Pending',
    value: '100',
    subtext: 'You have 100 properties that are verified',
    icon: MessageSquare
  },
  {
    title: 'Sold/Rented',
    value: '56',
    subtext: 'You have 150 total views in the recent days',
    icon: FileText
  }
];

const listings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    badgeText: 'For sale',
    badgeType: 'sale' as const,
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    badgeText: 'For rent',
    badgeType: 'rent' as const,
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    badgeText: 'Sold',
    badgeType: 'sold' as const,
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
   {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    badgeText: 'For rent',
    badgeType: 'rent' as const,
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
   {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    badgeText: 'Sold',
    badgeType: 'sold' as const,
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
   {
    id: 6,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    badgeText: 'For sale',
    badgeType: 'sale' as const,
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
];

const AgentMyListings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <AgentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <main className="lg:ml-[260px] min-h-[100vh] transition-all duration-300 flex flex-col">
        <div className="p-4 md:p-8 max-w-[1400px] mx-auto w-full flex-1 flex flex-col">
          
          {/* Header */}
          <AgentHeader 
            title="My Listings"
            subtitle="Manage your property journey and verification request"
          />
          
          {/* Summary Cards */}
          <AgentStatCards stats={myListingStats} />
          
          {/* Filters */}
          <ListingFilters />
          
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 items-start">
            {listings.map((listing) => (
              <ListingCard 
                key={listing.id}
                image={listing.image}
                badgeText={listing.badgeText}
                badgeType={listing.badgeType}
                title={listing.title}
                price={listing.price}
                location={listing.location}
              />
            ))}
          </div>
          
          {/* Pagination */}
          <Pagination />
          
        </div>
      </main>
    </div>
  );
};

export default AgentMyListings;
