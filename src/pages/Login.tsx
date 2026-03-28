import { Link } from 'react-router-dom';
import roundImage from '../assets/round.png';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row p-2">
        {/* Left Section - Image */}
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
             <img src={roundImage} alt="" className="absolute top-[-38px] left-[300px] w-5 h-30 " />
          </span>
        </h1>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-16 md:py-12 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl font-normal tracking-tight text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-500 mb-8 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#10b981] hover:text-[#059669] hover:underline transition-colors">
                Sign up
              </Link>
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#10b981] focus:border-[#10b981] transition-colors placeholder:text-gray-400"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#10b981] focus:border-[#10b981] transition-colors placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-start mt-2 ">
                <Link to="/forgot-password" className='text-[#10b981] mb-5 hover:text-[#059669] hover:underline text-sm capitalize transition-colors'>forgot password?</Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-medium py-3 rounded-lg transition-colors mt-6 text-sm"
              >
                Create Account
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.09-1.93 3.28-4.78 3.28-8.32Z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.26 1.05-3.71 1.05-2.85 0-5.27-1.93-6.13-4.52H2.18v2.84C4.01 20.64 7.69 23 12 23Z" fill="#34A853"/>
                  <path d="M5.87 14.12c-.22-.66-.35-1.37-.35-2.12s.13-1.46.35-2.12V7.04H2.18A10.983 10.983 0 0 0 1 12c0 1.77.42 3.44 1.18 4.96l3.69-2.84Z" fill="#FBBC05"/>
                  <path d="M12 4.64c1.62 0 3.07.56 4.22 1.66l3.16-3.16C17.45 1.48 14.97.5 12 .5 7.69.5 4.01 2.86 2.18 6.54l3.69 2.84c.86-2.59 3.28-4.74 6.13-4.74Z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                  <path d="M16.671 15.542l.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V5.002s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.637H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z" fill="#fff"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
