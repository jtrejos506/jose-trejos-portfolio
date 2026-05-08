import React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const base =
  "w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white";

export const Select: React.FC<SelectProps> = ({ className, ...rest }) => (
  <select className={`${base} ${className ?? ""}`} {...rest} />
);
