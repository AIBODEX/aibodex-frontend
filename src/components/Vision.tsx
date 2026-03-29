import ellipse2 from '../assets/Ellipse2.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.png';

export const Vision = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Background */}
      <img src={ellipse2} alt="" className="absolute top-0 right-[-50px] md:right-0 w-64 md:w-auto z-0 pointer-events-none opacity-50 md:opacity-100" />
      
      {/* Heading Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#111827] leading-[1.2] tracking-tight">
          Where your vision <br className="hidden sm:block" />
          <span className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 align-middle mt-2 md:mt-0">
            <span>finds its</span>
            <img 
                src={img3} 
                alt="Vision" 
                className="w-16 h-8 md:w-24 md:h-12 object-cover rounded-full inline-block" 
            />
            <span>home</span>
          </span>
        </h2>
        
        <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-2">
          AIBODEX offers more than just a place to live instead a space designed to 
          reflect your unique style, crafted with timeless precision.
        </p>

        {/* Newsletter Form */}
        <div className="mt-10 w-full max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-transparent sm:bg-white rounded-2xl sm:rounded-full p-0 sm:p-2 sm:pl-6 shadow-none sm:shadow-md border-0 sm:border border-gray-100 gap-3 sm:gap-0">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-gray-50 sm:bg-transparent border border-gray-200 sm:border-none rounded-xl sm:rounded-none px-5 py-4 sm:p-0 outline-none text-gray-700 placeholder-gray-400 text-base w-full focus:ring-2 focus:ring-[#00C48C]/20 sm:focus:ring-0"
            />
            <button className="bg-[#00C48C] hover:bg-[#00A072] text-white px-8 py-4 sm:py-3.5 rounded-xl sm:rounded-full font-medium transition-all w-full sm:w-auto shrink-0 shadow-sm sm:shadow-none hover:shadow-md">
              Stay Updated
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="relative z-10 w-full mt-12 md:mt-16 max-w-5xl mx-auto px-4">
        <img 
          src={img2} 
          alt="Modern Architecture" 
          className="w-full h-auto object-cover rounded-2xl md:rounded-none"
        />
      </div>
      
    </section>
  );
};
