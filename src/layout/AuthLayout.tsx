import type { ReactNode } from "react";
import roundImage from "../assets/round.png";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row p-2">
      {/* left side image */}
      <div className="hidden md:flex md:w-1/2 relative bg-gray-100 rounded-[1.5rem] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern home exterior"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Overlay Text */}
        <div className="absolute bottom-12 left-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#ffffff] leading-tight tracking-tight">
            Find Your Dream Home <br />
            <span className="relative">
              with Ease
              {/* Decorative Spark/lines from design */}
              <img
                src={roundImage}
                alt=""
                className="absolute top-[-38px] left-[300px] w-5 h-30 "
              />
            </span>
          </h1>
        </div>
      </div>
      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 px-6 py-12 md:px-16 md:py-12 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
