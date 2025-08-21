import { useState } from "react";
import { GoLock } from "react-icons/go";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface CustomInputProps {
  label?: string;
  icon?: React.ReactNode;
  type: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
}

export default function CustomInput({
  label,
  icon,
  type,
  placeholder,
  required,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="space-y-2 w-full">
      <label htmlFor={type} className="text-sm font-medium text-[#F1F2F3]">
        { label }
      </label>
      <div className="relative">
        <div
          className="absolute text-gray-400 left-3 top-1/2
          transform -translate-y-1/2 text-[20px]"
        >
          {icon}
        </div>
        <input
          type={showPassword ? "text" : type}
          id={type}
          placeholder={placeholder}
          required={required}
          className={`${
            icon && type === "password" && "px-10" ||
            icon && type !== "password" && "pl-10" ||
            !icon && type !== "password" && "px-3" ||
            !icon && type === "password" && "pr-10"
          }
            bg-[#21252b80] border border-[#2c313a]/50
          focus:border-[#5593f7] outline-none rounded-md py-2 w-full
          placeholder:text-gray-500 text-[#F1F2F3]`}
        />
        {type === "password" && (
          <div
            onClick={handleShowPassword}
            className="absolute text-gray-400 right-3 top-1/2 transform -translate-y-1/2
            text-[20px] cursor-pointer hover:text-white transition-colors"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        )}
      </div>
    </div>
  );
}
