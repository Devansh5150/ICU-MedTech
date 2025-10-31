"use client";

import React from "react";

export type AreaChartProps = {
  categories: string[];
  data: Array<Record<string, number | string>>;
  index: string;
  className?: string;
};

export const AreaChart: React.FC<AreaChartProps> = ({ categories, data, index, className }) => {
  return (
    <div className={"w-full h-64 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 flex flex-col " + (className ?? "")}> 
      <div className="px-4 py-2 text-sm text-neutral-400 flex items-center justify-between">
        <span>ECG Preview</span>
        <span className="text-xs">{categories.join(" · ")}</span>
      </div>
      <div className="flex-1 grid grid-rows-6 grid-cols-12 gap-px p-4">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="bg-neutral-950/60" />
        ))}
      </div>
      <div className="px-4 py-2 text-xs text-neutral-500">
        <span>Index: {index}</span> · <span>Points: {data.length}</span>
      </div>
    </div>
  );
};
