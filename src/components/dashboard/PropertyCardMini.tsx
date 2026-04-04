import { Heart, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardMiniProps {
  image: string;
  title: string;
  price: string;
  location: string;
  variant?: 'dashboard' | 'saved' | 'recommended';
}

const PropertyCardMini = ({ image, title, price, location, variant = 'dashboard' }: PropertyCardMiniProps) => {
  const showHeartOverlay = variant === 'saved' || variant === 'recommended';
  const showBottomIcons = variant === 'dashboard' || variant === 'recommended';

  return (
    <div className="bg-[#f9fafb] rounded-[20px] p-4 border border-[#f1f1f1] flex flex-col hover:shadow-sm transition-shadow min-w-[280px] w-full">
      <div className="h-[180px] w-full rounded-2xl overflow-hidden mb-4 relative">
        {showHeartOverlay && (
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm p-1.5 rounded-full z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
            </svg>
          </div>
        )}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-1 flex flex-col flex-grow">
        <h3 className="font-semibold text-[15px] text-gray-900 mb-1">{title}</h3>
        <p className="font-medium text-gray-500 text-[13px] mb-2">{price}</p>
        <p className="text-gray-400 text-[12px] mb-6 line-clamp-1">{location}</p>

        <div className="mt-auto flex items-center justify-between">
          <Link to="/property-details" className="px-4 py-2 bg-white border border-gray-100 rounded-full text-[12px] font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm inline-flex">
            View Property
          </Link>
          {showBottomIcons && (
            <div className="flex items-center space-x-3">
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-teal-600 transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCardMini;
