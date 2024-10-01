import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "white";
}

export const variantStyles = {
  primary:
    "bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white hover:bg-light-blue-text ",
  white: "bg-white text-black hover:bg-gray",
};

const Button = ({
  variant = "primary",
  className = "",
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-xl ${variantStyles[variant]} text-white py-2 px-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
