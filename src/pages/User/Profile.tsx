import { DashboardLayout } from '../../layout/DashboardLayout';

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="w-full bg-[#fcfcfc] rounded-3xl pb-10 overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-[#f1f1f1]">
        
        {/* Cover Image */}
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] relative bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1600" 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-6 md:px-10 lg:px-14">
          
          {/* Avatar floating over cover */}
          <div className="relative -mt-[60px] sm:-mt-[70px] md:-mt-[80px] mb-4 md:mb-6">
            <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-[30px] overflow-hidden border-4 sm:border-[6px] border-white bg-white shadow-sm inline-block">
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* User Details */}
          <div className="mb-10">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-gray-900 tracking-tight leading-tight mb-2">
              Chioma Queen Gabriel
            </h1>
            <p className="text-[15px] sm:text-[16px] text-gray-500 mb-3">
              Update your profile and personal details
            </p>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-8 md:gap-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[15px] sm:text-[16px] text-gray-800">First name</label>
                <div className="w-full bg-white border border-[#f1f1f1] rounded-[14px] px-5 py-4 shadow-sm">
                  <input 
                    type="text" 
                    defaultValue="Chioma" 
                    className="w-full bg-transparent border-none focus:outline-none text-[15px] text-gray-600"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[15px] sm:text-[16px] text-gray-800">Last name</label>
                <div className="w-full bg-white border border-[#f1f1f1] rounded-[14px] px-5 py-4 shadow-sm">
                  <input 
                    type="text" 
                    defaultValue="Queen" 
                    className="w-full bg-transparent border-none focus:outline-none text-[15px] text-gray-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2.5 sm:col-span-2 lg:col-span-1">
                <label className="text-[15px] sm:text-[16px] text-gray-800">Email</label>
                <div className="w-full bg-white border border-[#f1f1f1] rounded-[14px] px-5 py-4 shadow-sm">
                  <input 
                    type="email" 
                    defaultValue="chiomaqueen12@gmail.com" 
                    className="w-full bg-transparent border-none focus:outline-none text-[15px] text-gray-600 overflow-ellipsis"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-2.5 w-full pb-8">
              <label className="text-[15px] sm:text-[16px] text-gray-800">Bio</label>
              <div className="w-full bg-white border border-[#f1f1f1] rounded-[24px] p-6 shadow-sm min-h-[220px]">
                <textarea 
                  className="w-full h-full bg-transparent border-none focus:outline-none text-[15px] text-gray-600 resize-none min-h-[160px]"
                  defaultValue="Hi everyone, i am queen and i am currently Looking for a verified home within budget. Interested in modern apartments and secure locations."
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
