import bg2 from '../assets/bg2.jpg';
import img6 from '../assets/img6.png';

export const DreamHome = () => {
  return (
    <section 
      className="relative w-full min-h-[800px] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center overflow-hidden"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* Overlay to ensure text readability if needed, though the sky looks clear */}
      {/* <div className="absolute inset-0 bg-black/10"></div> */}

      {/* Text Content */}
      <div className="relative z-10 pt-24 md:pt-32 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-6">
          Your dream <br /> home awaits.
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
          Whether you’re exploring our homes or envisioning something custom, we’re here to bring your dream to life.
        </p>

        <button className="bg-white text-[#111827] px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg">
          Get in touch
        </button>
      </div>

      {/* Building Image */}
      <div className="relative z-10 w-full max-w-[90%] md:max-w-6xl mt-8 md:mt-auto -translate-y-4 md:-translate-y-12">
        <img 
          src={img6} 
          alt="Modern Dream Home" 
          className="w-full h-auto object-contain md:object-cover drop-shadow-2xl"
        />
      </div>
    </section>
  );
};
