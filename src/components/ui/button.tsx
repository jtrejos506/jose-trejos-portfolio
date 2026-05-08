import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const base =
  "w-full py-3 rounded-lg font-medium text-white transition border-none focus:outline-none focus:ring-2 focus:ring-violet-500";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...rest
}) => {
  const variantClass =
    variant === "primary"
      ? "bg-linear-to-r from-violet-600 to-indigo-600 hover:opacity-90"
      : "bg-gray-600 hover:bg-gray-700";

  return (
    <button
      className={`${base} ${variantClass} ${className ?? ""}`}
      {...rest}
    />
  );
};
