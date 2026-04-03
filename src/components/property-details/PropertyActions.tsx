import { Bookmark, Share2, Printer } from 'lucide-react';

const PropertyActions = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <button className="flex items-center space-x-2 px-3 md:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
        <Bookmark className="w-4 h-4" />
        <span className="text-sm font-medium">Save</span>
      </button>
      <button className="flex items-center space-x-2 px-3 md:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
      </button>
      <button className="flex items-center space-x-2 px-3 md:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
        <Printer className="w-4 h-4" />
        <span className="text-sm font-medium">Print</span>
      </button>
    </div>
  );
};

export default PropertyActions;
