"use client";

import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "neutral-secondary";
  icon?: React.ReactNode;
};

const base = "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
  "neutral-secondary": "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-300",
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", icon, children, className, ...props }) => {
  return (
    <button className={[base, styles[variant], className].filter(Boolean).join(" ")} {...props}>
      {icon ? <span className="inline-flex items-center">{icon}</span> : null}
      {children}
    </button>
  );
};
