"use client";

import React from "react";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
};

export const IconButton: React.FC<IconButtonProps> = ({ icon, className, ...props }) => {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {icon}
    </button>
  );
};
