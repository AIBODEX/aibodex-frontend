import { MapPin, ChevronDown, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { DashboardLayout } from '../../layout/DashboardLayout';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import PropertyCardMini from '../../components/dashboard/PropertyCardMini';

const savedItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  }
];

const recommendedItems = [
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    title: '5-Bedroom Smart Home',
    price: '₦350,000,000',
    location: 'Freedom Way, Lekki Phase 1, Lagos'
  }
];

const SavedProperties = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full pb-12">
        {/* Header Section */}
        <DashboardHeader />

        <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Your Wacthlist</h1>
            <p className="text-gray-500 text-[15px]">Track your favourite listings and AI-recommended matches</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-gray-700 text-[14px] font-medium transition-colors">
              <MapPin className="w-4 h-4 text-gray-500" />
              Map view
            </button>
            <button className="px-4 py-2 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-lg text-[14px] font-medium transition-colors">
              Add new property
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#11B880] text-white rounded-full text-[14px] font-medium">
            All saved
            <span className="bg-white text-[#11B880] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">16</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#f9fafb] border border-gray-100 text-gray-700 rounded-full text-[14px] font-medium hover:bg-gray-50">
            Price: Low to high
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#f9fafb] border border-gray-100 text-gray-700 rounded-full text-[14px] font-medium hover:bg-gray-50">
            Verified only
            <CheckCircle className="w-4 h-4 text-gray-400" />
          </button>
          <button className="px-4 py-2 bg-[#f9fafb] border border-gray-100 text-gray-700 rounded-full text-[14px] font-medium hover:bg-gray-50">
            Location: lekki phase 1
          </button>
          <button className="px-4 py-2 text-[#11B880] font-medium text-[14px] hover:underline ml-2">
            Clear all filters.
          </button>
        </div>

        {/* Saved Properties Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-medium text-gray-900 tracking-tight">Saved Properties</h2>
            <button className="text-gray-500 font-medium text-[15px] hover:text-[#11B880] transition-colors">View all saved</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedItems.map((prop) => (
              <PropertyCardMini 
                key={prop.id}
                image={prop.image}
                title={prop.title}
                price={prop.price}
                location={prop.location}
                variant="saved"
              />
            ))}
          </div>
        </div>

        {/* Pagination Dummy */}
        <div className="mt-10 mb-8 flex justify-center items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#11B880] text-white flex items-center justify-center text-sm font-medium">1</button>
          <button className="w-8 h-8 rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm font-medium">2</button>
          <button className="w-8 h-8 rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm font-medium">3</button>
          <span className="text-gray-400 px-1">.....</span>
          <button className="w-8 h-8 rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-50 flex items-center justify-center text-sm font-medium">16</button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Recommended Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-medium text-gray-900 tracking-tight">Recommended</h2>
            <button className="text-gray-500 font-medium text-[15px] hover:text-[#11B880] transition-colors">View all</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedItems.map((prop) => (
              <PropertyCardMini 
                key={prop.id}
                image={prop.image}
                title={prop.title}
                price={prop.price}
                location={prop.location}
                variant="recommended"
              />
            ))}
          </div>
        </div>
        
      </div>
    </DashboardLayout>
  );
};

export default SavedProperties;
