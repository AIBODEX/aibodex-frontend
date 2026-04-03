
const ImageGallery = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-2">
      {/* Main Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" 
          alt="Main Property View" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* 4 small images */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 h-[300px] md:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
          alt="Kitchen" 
          className="w-full h-full object-cover rounded-2xl"
        />
        <img 
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80" 
          alt="Bedroom" 
          className="w-full h-full object-cover rounded-2xl"
        />
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80" 
          alt="Pool" 
          className="w-full h-full object-cover rounded-2xl"
        />
        <img 
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80" 
          alt="Garage" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
