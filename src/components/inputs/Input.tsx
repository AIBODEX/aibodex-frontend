import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

const Input = ({ value, onChange, placeholder, type = "text" }: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='input-box'>
      <input
        type={type == "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#10b981] focus:border-[#10b981] transition-colors placeholder:text-gray-400"
      />

      {type === "password" && (
        <span className='absolute left-[90%] top-3'>
          {showPassword ? (
            <FaRegEye
              size={22}
              className="text-green-600 cursor-pointer"
              onClick={() => toggleShowPassword()}
            />
          ) : (
            <FaRegEyeSlash
              size={22}
              className="text-slate-400 cursor-pointer"
              onClick={() => toggleShowPassword()}
            />
          )}
        </span>
      )}
    </div>
  );
};

export default Input