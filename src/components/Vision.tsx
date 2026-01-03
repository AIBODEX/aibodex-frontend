import ellipse2 from '../assets/Ellipse2.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.png';

export const Vision = () => {
  return (
    <section className="relative w-full py-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Background */}
      <img src={ellipse2} alt="" className="absolute top-0 right-0 z-0 pointer-events-none" />
      
      {/* Heading Content */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#111827] leading-tight tracking-tight">
          Where your vision <br />
          <span className="inline-flex items-center gap-2 md:gap-4 align-middle">
            <span>find its</span>
            <img 
                src={img3} 
                alt="Vision" 
                className="w-16 h-8 md:w-24 md:h-12 object-cover rounded-full inline-block" 
            />
            <span>home</span>
          </span>
        </h2>
        
        <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          AIBODEX offers more than just a place to live instead a space designed to 
          reflect your unique style, crafted with timeless precision.
        </p>

        {/* Newsletter Form */}
        <div className="mt-10 w-full max-w-lg mx-auto">
          <div className="flex items-center bg-gray-50 rounded-full p-2 pl-6 shadow-sm border border-gray-100">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-lg"
            />
            <button className="bg-[#00C48C] hover:bg-[#00A072] text-white px-6 py-3 rounded-full font-medium transition-colors">
              Stay Updated
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="relative w-full mt-2 max-w-5xl mx-auto px-4">
        <img 
          src={img2} 
          alt="Modern Architecture" 
          className="w-full h-auto object-cover "
        />
      </div>
      
    </section>
  );
};
