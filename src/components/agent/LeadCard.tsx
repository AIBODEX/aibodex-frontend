import { Mail, Phone, MapPin, Home, Eye } from 'lucide-react';

interface LeadCardProps {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  propertyInterest: string;
  propertyPrice: string;
  propertyBudget: string;
  leadScore: string;
  leadSource: string;
  isNew?: boolean;
  priority?: 'high' | 'medium' | 'low';
}

const priorityStyles = {
  high: 'bg-pink-100 text-[#d946ef]',
  medium: 'bg-orange-100 text-[#f97316]',
  low: 'bg-blue-100 text-[#3b82f6]',
};

const LeadCard = ({
  id,
  name,
  avatar,
  email,
  phone,
  location,
  propertyInterest,
  propertyPrice,
  propertyBudget,
  leadScore,
  leadSource,
  isNew = false,
  priority = 'high'
}: LeadCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full border border-gray-50 flex flex-col shadow-[0_2px_12px_rgb(0,0,0,0.02)]">
      
      {/* Header Info */}
      <div className="flex items-center gap-3 mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h3 className="text-[16px] font-medium text-[#1E1E1E] leading-tight mb-1">{name}</h3>
          <p className="text-[13px] text-gray-400">ID: {id}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-6">
        {isNew && (
          <span className="px-2.5 py-1 bg-[#11B880]/10 text-[#11B880] text-[11px] font-medium rounded-full">
            New
          </span>
        )}
        <span className={`px-2.5 py-1 text-[11px] font-medium rounded-full capitalize ${priorityStyles[priority]}`}>
          {priority} priority
        </span>
      </div>

      {/* Contact Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2.5 text-gray-500">
          <Mail className="w-4 h-4 opacity-70" />
          <span className="text-[13px]">{email}</span>
        </div>
        <div className="flex items-center gap-2.5 text-gray-500">
          <Phone className="w-4 h-4 opacity-70" />
          <span className="text-[13px]">{phone}</span>
        </div>
        <div className="flex items-center gap-2.5 text-gray-500">
          <MapPin className="w-4 h-4 opacity-70" />
          <span className="text-[13px]">{location}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100 mb-5"></div>

      {/* Property Interest */}
      <div className="mb-6">
        <p className="text-[13px] text-gray-400 mb-2.5">Property interest</p>
        <div className="flex items-center gap-2 text-[#1E1E1E] mb-2 font-medium">
          <Home className="w-[18px] h-[18px]" />
          <span className="text-[14px]">
            {propertyInterest} - {propertyPrice}
          </span>
        </div>
        <p className="text-[13px] text-gray-500">
          Budget around {propertyBudget}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100 mb-5"></div>

      {/* Footer Meta */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-[13px] text-gray-500">
          Lead Score: <span className="text-[#11B880] font-medium">{leadScore}</span>
        </p>
        <p className="text-[13px] text-gray-500">
          Source: {leadSource}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 w-full mt-auto">
        <a href={`tel:${phone}`} className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-full text-[14px] font-medium transition-colors">
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a href={`mailto:${email}`} className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full text-[14px] font-medium transition-colors">
          <Mail className="w-4 h-4 text-gray-400" />
          Mail
        </a>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
          <Eye className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default LeadCard;
