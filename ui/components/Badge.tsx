"use client";

import React from "react";

export type BadgeProps = {
  variant?: "success" | "warning" | "neutral" | "error" | "brand";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

const base = "inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium";
const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-800",
  neutral: "bg-neutral-100 text-neutral-800",
  error: "bg-red-100 text-red-700",
  brand: "bg-blue-100 text-blue-700",
};

export const Badge: React.FC<BadgeProps> = ({ variant = "neutral", icon, children, className }) => {
  return (
    <span className={[base, variants[variant], className].filter(Boolean).join(" ")}> 
      {icon ? <span className="inline-flex items-center">{icon}</span> : null}
      {children}
    </span>
  );
};
