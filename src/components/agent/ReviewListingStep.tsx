import { MapPin, ArrowLeft, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MOCK_IMAGES = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1628012198051-51bf93417a86?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600607687931-cebf5f51d3b5?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
];

const ReviewListingStep = () => {
  const [isPublished, setIsPublished] = useState(false);

  if (isPublished) {
    return (
      <div className="w-full max-w-[1200px] mx-auto min-h-[500px]">
        <div className="bg-[#F9FAFB] rounded-[24px] p-8 border border-gray-50 shadow-sm mt-8 pb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-[18px] font-medium text-[#1E1E1E]">Review Your Listing</h2>
            <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[11px] font-medium">
              • Check All Details Before Publishing
            </span>
          </div>

          <div className="flex flex-col items-center justify-center py-10 relative overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute opacity-30 bottom-0 pointer-events-none w-full h-[300px] bg-gradient-to-t from-[#11B880]/30 to-transparent"></div>
            
            <div className="w-[120px] h-[120px] bg-green-100 rounded-full flex items-center justify-center mb-6 relative mt-10">
              <div className="w-16 h-16 bg-[#11B880] rounded-full flex items-center justify-center text-white shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 border-[6px] border-[#11B880]/20 rounded-full scale-[1.15]"></div>
              <div className="absolute inset-0 border-[2px] border-[#11B880]/10 rounded-full scale-[1.3]"></div>
            </div>
            
            <div className="bg-pink-50 text-pink-500 text-[13px] font-medium px-4 py-1.5 rounded-full mb-4">
              • Property Published Successfully
            </div>
            
            <p className="text-gray-500 text-[14px] text-center mb-10 z-10">
              Your listing is now live  and visible to potentials buyers/tenants
            </p>
            
            <Link to="/agent-dashboard" className="z-10 px-10 py-3.5 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-full text-[14px] font-medium shadow-sm transition-colors">
              Go to Dashboard
            </Link>
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="bg-[#F9FAFB] rounded-[24px] p-8 border border-gray-50 shadow-sm mt-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-[18px] font-medium text-[#1E1E1E]">Review Your Listing</h2>
          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-[11px] font-medium">
            • Check All Details Before Publishing
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-3 h-[500px]">
            <img src={MOCK_IMAGES[0]} alt="Main" className="w-full h-full object-cover rounded-2xl col-span-1 row-span-2" />
            <div className="grid grid-cols-1 gap-3 col-span-1 row-span-2">
              <img src={MOCK_IMAGES[1]} alt="Sub 1" className="w-full h-[160px] object-cover rounded-xl" />
              <div className="grid grid-cols-2 gap-3 h-[160px]">
                <img src={MOCK_IMAGES[2]} alt="Sub 2" className="w-full h-full object-cover rounded-xl" />
                <img src={MOCK_IMAGES[3]} alt="Sub 3" className="w-full h-full object-cover rounded-xl" />
              </div>
              <img src={MOCK_IMAGES[4]} alt="Sub 4" className="w-full h-[155px] object-cover rounded-xl" />
            </div>
          </div>

          {/* Right: Property Details */}
          <div className="flex flex-col h-full pl-0 lg:pl-6">
            <h3 className="text-[22px] font-semibold text-[#1E1E1E] mb-2">5 Bedroom Detached Duplex with BQ</h3>
            <div className="flex items-center gap-1.5 text-gray-500 mb-6">
              <MapPin className="w-4 h-4 opacity-70" />
              <span className="text-[14px]">Freedom Way, Lekki Phase 1, Lagos</span>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-50">
              <div className="flex flex-col items-center justify-center p-2">
                <span className="text-[11px] text-gray-400 font-medium mb-1 uppercase tracking-wide">Bedrooms</span>
                <span className="text-[14px] font-semibold text-[#1E1E1E]">5 Beds</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-l border-gray-100">
                <span className="text-[11px] text-gray-400 font-medium mb-1 uppercase tracking-wide">Baths/Toil</span>
                <span className="text-[14px] font-semibold text-[#1E1E1E]">6 Baths</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-l border-gray-100">
                <span className="text-[11px] text-gray-400 font-medium mb-1 uppercase tracking-wide">Parking</span>
                <span className="text-[14px] font-semibold text-[#1E1E1E]">7 Cars</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-l border-gray-100">
                <span className="text-[11px] text-gray-400 font-medium mb-1 uppercase tracking-wide">Landsize</span>
                <span className="text-[14px] font-semibold text-[#1E1E1E]">800 sqm</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-[15px] font-medium text-[#1E1E1E] mb-2">About Property</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-1">
                This beautifully designed 5-bedroom flat offers a perfect blend of space, comfort, and modern living. Located in a secure and well-planned neighborhood, the property is ideal for large families or individuals seeking luxury and convenience in one place.
              </p>
              <button className="text-[#11B880] text-[12px] font-medium hover:underline">Read more ✓</button>
            </div>

            <div className="mb-10 flex-1">
              <h4 className="text-[15px] font-medium text-[#1E1E1E] mb-4">Amenities</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
                {['Swimming Pool', 'CCTV Surveillance', 'Boys Quarter (BQ)', 'Gym', 'Ample Parking', 'Security Gate House', '24/7 power', 'Fitted Kitchen', 'Treated water'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckSquare className="w-[18px] h-[18px] text-[#11B880]" />
                    <span className="text-[13px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-auto w-full max-w-sm">
              <button 
                onClick={() => setIsPublished(true)}
                className="w-full py-3 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-xl text-[14px] font-medium shadow-sm transition-colors text-center"
              >
                Publish
              </button>
              <button className="w-full py-3 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl text-[14px] font-medium transition-colors text-center flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to edit
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewListingStep;
