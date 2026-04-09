import { Link } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";
import Input from "../../components/inputs/Input";

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Handle SignUp form submit
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName) {
      setError("Please enter your first name");
      return;
    }

    if (!lastName) {
      setError("Please enter your last name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email adress");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // login API call
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      <AuthLayout>
        {/* Right Section - Form */}
        <h1 className="text-3xl font-normal tracking-tight text-gray-900 mb-2">
          Create an account
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#10b981] hover:text-[#059669] hover:underline transition-colors"
          >
            Log in
          </Link>
        </p>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                type="text"
                placeholder="First name"
              />
            </div>
            <div>
              <Input
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="text"
              placeholder="Email Address"
            />
          </div>

          <div>
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-start mt-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 accent-[#10b981] cursor-pointer"
              />
            </div>
            <div className="ml-3 text-sm flex-1">
              <label htmlFor="terms" className="text-gray-500">
                By signing up, i agree to the{" "}
                <button
                  type="button"
                  className="text-[#10b981] hover:text-[#059669] hover:underline transition-colors"
                >
                  Terms & Conditions
                </button>
              </label>
            </div>
          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

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
            <span className="bg-white px-4 text-gray-500">
              Or register with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600 text-sm font-medium"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.09-1.93 3.28-4.78 3.28-8.32Z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.26 1.05-3.71 1.05-2.85 0-5.27-1.93-6.13-4.52H2.18v2.84C4.01 20.64 7.69 23 12 23Z"
                fill="#34A853"
              />
              <path
                d="M5.87 14.12c-.22-.66-.35-1.37-.35-2.12s.13-1.46.35-2.12V7.04H2.18A10.983 10.983 0 0 0 1 12c0 1.77.42 3.44 1.18 4.96l3.69-2.84Z"
                fill="#FBBC05"
              />
              <path
                d="M12 4.64c1.62 0 3.07.56 4.22 1.66l3.16-3.16C17.45 1.48 14.97.5 12 .5 7.69.5 4.01 2.86 2.18 6.54l3.69 2.84c.86-2.59 3.28-4.74 6.13-4.74Z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600 text-sm font-medium"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                fill="#1877F2"
              />
              <path
                d="M16.671 15.542l.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V5.002s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.637H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z"
                fill="#fff"
              />
            </svg>
            Facebook
          </button>
        </div>
      </AuthLayout>
    </div>
  );
};

export default SignUp;
