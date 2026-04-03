import { Star } from 'lucide-react';

const ContactAgentForm = () => {
  return (
    <div className="bg-[#fafafa] rounded-[20px] p-6 lg:p-8 border border-gray-100 h-fit">
      <div className="mb-6">
        <p className="text-[13px] text-gray-500 mb-1">Asking Price</p>
        <h3 className="text-[28px] lg:text-[32px] font-semibold text-gray-900">#350,000,000</h3>
      </div>

      <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="Queen Chioma" 
          className="w-[52px] h-[52px] rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-[15px]">Queen Chioma</h4>
          <p className="text-[13px] text-gray-500 mt-0.5">Lead Agent at Prestige Homes</p>
          <div className="flex items-center mt-1.5 text-[13px]">
            <Star className="w-[14px] h-[14px] text-[#FFC107] fill-[#FFC107]" />
            <span className="ml-1.5 font-medium text-gray-700">4.9</span>
            <span className="text-gray-400 ml-1">(127 Reviews)</span>
          </div>
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <input 
            type="text" 
            placeholder="Your name" 
            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-[#11B880] transition-colors"
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="Phone number" 
            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-[#11B880] transition-colors"
          />
        </div>
        <div>
          <textarea 
            placeholder="I'm interested in this property......" 
            rows={5}
            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-[#11B880] resize-none transition-colors"
          ></textarea>
        </div>
        <button 
          type="button" 
          className="w-full py-3.5 mt-2 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-xl font-medium text-[15px] transition-colors shadow-sm"
        >
          Send Message
        </button>
      </form>

      <p className="text-[13px] text-center text-gray-500 mt-6 leading-relaxed">
        By sending a message, you agree to Aibodex{' '}
        <a href="#" className="text-[#11B880] hover:underline">Terms and conditions</a>
      </p>
    </div>
  );
};

export default ContactAgentForm;
