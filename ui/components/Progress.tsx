"use client";

import React from "react";

export type ProgressProps = {
  value: number; // 0..100
  className?: string;
};

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  const clamped = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));
  return (
    <div className={["w-full h-2 rounded bg-neutral-200 overflow-hidden", className].filter(Boolean).join(" ")}> 
      <div className="h-full bg-blue-600" style={{ width: `${clamped}%` }} />
    </div>
  );
};
