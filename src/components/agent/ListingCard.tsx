import { Share2, BarChart2 } from 'lucide-react';

interface ListingCardProps {
  image: string;
  badgeText: string;
  badgeType: 'sale' | 'rent' | 'sold';
  title: string;
  price: string;
  location: string;
}

const badgeStyles = {
  sale: 'bg-[#11B880] text-white',
  rent: 'bg-blue-600 text-white',
  sold: 'bg-purple-500 text-white'
};

const ListingCard = ({ image, badgeText, badgeType, title, price, location }: ListingCardProps) => {
  return (
    <div className="bg-[#F9FAFB] rounded-2xl p-4 w-full border border-gray-50/50 flex flex-col">
      <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-4">
        <img src={image} className="w-full h-full object-cover" alt={title} />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-[13px] font-medium ${badgeStyles[badgeType]}`}>
          {badgeText}
        </div>
      </div>
      
      <div className="mb-6 flex-1">
        <h3 className="text-[16px] font-medium text-[#1E1E1E] mb-2">{title}</h3>
        <div className="text-[15px] font-semibold text-gray-600 mb-1.5">{price}</div>
        <p className="text-[13px] text-gray-500">{location}</p>
      </div>
      
      <div className="flex items-center gap-3 w-full">
        {badgeType === 'sold' ? (
          <button className="flex-1 px-4 py-2.5 bg-white border border-gray-100 text-gray-500 rounded-full text-[14px] font-medium pointer-events-none text-center">
            Sold
          </button>
        ) : (
          <button className="flex-1 px-4 py-2.5 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-full text-[14px] font-medium transition-colors text-center">
            Edit Details
          </button>
        )}
        
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
          <Share2 className="w-[18px] h-[18px]" />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
          <BarChart2 className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
