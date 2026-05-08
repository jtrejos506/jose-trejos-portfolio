import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const base =
  "w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-white";

export const Input: React.FC<InputProps> = ({ className, ...rest }) => (
  <input className={`${base} ${className ?? ""}`} {...rest} />
);
