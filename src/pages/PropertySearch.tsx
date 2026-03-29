import { useState } from "react";
import Navbar2 from "../layout/Navbar2";
import { mockProperties } from "../data/mockProperties";
import { PropertySidebar, type FilterState } from "../components/property-search/PropertySidebar";
import { PropertyGrid } from "../components/property-search/PropertyGrid";

export default function PropertySearch() {
  const [properties, setProperties] = useState(mockProperties);
  
  // Filter States
  const [filters, setFilters] = useState<FilterState>({
    aiVerified: false,
    propertyTypes: ['Duplex'],
    bedrooms: '3+',
    amenities: ['Gym']
  });

  // Toggle Handlers
  const toggleProperty = (id: number, field: 'isFavorite' | 'isBookmarked') => {
    setProperties(properties.map(p => p.id === id ? { ...p, [field]: !p[field] } : p));
  };

  return (
      <div>
        <Navbar2 />
      
      {/* Main Layout Container */}
      <div className="w-full max-w-[1440px] px-4 md:px-6 lg:px-8 py-8 md:py-12 flex flex-col lg:flex-row gap-8 items-start justify-center">
        
        {/* Extracted Sidebar */}
        <PropertySidebar filters={filters} setFilters={setFilters} />

        {/* Extracted Grid */}
        <PropertyGrid properties={properties} toggleProperty={toggleProperty} />
        
      </div>
    </div>
  );
}