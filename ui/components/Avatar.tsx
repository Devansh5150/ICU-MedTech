"use client";

import React from "react";

export type AvatarProps = {
  image?: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  className?: string;
};

const sizeMap = {
  small: "h-8 w-8 text-xs",
  medium: "h-10 w-10 text-sm",
  large: "h-12 w-12 text-base",
};

export const Avatar: React.FC<AvatarProps> = ({ image, size = "medium", children, className }) => {
  return (
    <div className={["inline-flex items-center justify-center rounded-full bg-neutral-200 overflow-hidden text-neutral-700 font-medium", sizeMap[size], className].filter(Boolean).join(" ")}> 
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="avatar" className="h-full w-full object-cover" />
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
};
