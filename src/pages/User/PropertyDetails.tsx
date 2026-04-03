import Navbar2 from "../../layout/Navbar2";
import Breadcrumbs from '../../components/property-details/Breadcrumbs';
import PropertyActions from '../../components/property-details/PropertyActions';
import ImageGallery from '../../components/property-details/ImageGallery';
import PropertyHeader from '../../components/property-details/PropertyHeader';
import PropertyDescription from '../../components/property-details/PropertyDescription';
import PropertyAmenities from '../../components/property-details/PropertyAmenities';
import PropertyLocation from '../../components/property-details/PropertyLocation';
import ContactAgentForm from '../../components/property-details/ContactAgentForm';
import { Footer } from '../../components/Footer';

const PropertyDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar2 />
      
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top Header: Breadcrumbs & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <Breadcrumbs />
          <PropertyActions />
        </div>

        {/* Gallery */}
        <ImageGallery />

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-4 pb-20">
          
          {/* Left Column (Property Details) */}
          <div className="w-full lg:w-[65%]">
            <PropertyHeader />
            <PropertyDescription />
            <PropertyAmenities />
            <PropertyLocation />
          </div>

          {/* Right Column (Contact Agent Form) */}
          <div className="w-full lg:w-[35%] mt-8 lg:mt-12">
            <div className="sticky top-24">
              <ContactAgentForm />
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetails;