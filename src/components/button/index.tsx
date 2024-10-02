import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "white";
  rounded?: "xl" | "4xl";
}

export const variantStyles = {
  primary:
    "bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white hover:bg-light-blue-text ",
  white: "bg-white text-black hover:bg-gray",
};

export const radiusStyles = {
  xl: "rounded-xl",
  "4xl": "rounded-[36px]",
};

const Button = ({
  rounded = "xl",
  variant = "primary",
  className = "",
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${radiusStyles[rounded]} ${variantStyles[variant]} text-white py-2 px-9 whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
