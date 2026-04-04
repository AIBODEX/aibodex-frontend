import PropertyCardMini from './PropertyCardMini';

const savedProperties = [
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
  }
];

const SavedPropertiesSection = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-semibold text-gray-900 tracking-tight">Saved Properties</h2>
        <button className="text-gray-500 font-medium text-sm hover:text-teal-600 transition-colors">View all saved</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedProperties.map((prop) => (
          <PropertyCardMini 
            key={prop.id}
            image={prop.image}
            title={prop.title}
            price={prop.price}
            location={prop.location}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedPropertiesSection;
