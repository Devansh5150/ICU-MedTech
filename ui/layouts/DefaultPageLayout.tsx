"use client";

import React from "react";
import Link from "next/link";
import {
  FeatherHome,
  FeatherInbox,
  FeatherBarChart2,
  FeatherBell,
  FeatherMoreHorizontal,
} from "@subframe/core";

export type DefaultPageLayoutProps = {
  children: React.ReactNode;
};

export const DefaultPageLayout: React.FC<DefaultPageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-dvh w-full bg-default-background text-default-font">
      <div className="mx-auto flex w-full max-w-[1400px] gap-6 px-4 py-6">
        <aside className="sticky top-6 hidden h-[calc(100dvh-3rem)] w-64 shrink-0 flex-col justify-between rounded-xl border border-neutral-border bg-default-background p-4 shadow-sm md:flex">
          <div className="flex flex-col gap-1">
            <Link href="/virtual-icu" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-default-font hover:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-700/40 aria-[current=page]:bg-emerald-900/30" aria-current="page">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/60 text-emerald-400">
                <FeatherHome className="h-4 w-4" />
              </span>
              Home
            </Link>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-subtext-color hover:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-700/40" href="#">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400">
                <FeatherInbox className="h-4 w-4" />
              </span>
              Inbox
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-subtext-color hover:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-700/40" href="#">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400">
                <FeatherBarChart2 className="h-4 w-4" />
              </span>
              Reports
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-subtext-color hover:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-700/40" href="#">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400">
                <FeatherBell className="h-4 w-4" />
              </span>
              Notifications
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-subtext-color hover:bg-neutral-900/40 focus:outline-none focus:ring-2 focus:ring-emerald-700/40" href="#">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-neutral-400">
                <FeatherMoreHorizontal className="h-4 w-4" />
              </span>
              More
            </a>
          </div>
          <div className="rounded-lg border border-neutral-border bg-neutral-950 p-4">
            <div className="text-sm font-medium text-default-font">Get $100 bonus</div>
            <div className="mt-1 text-xs text-subtext-color">Limited time only</div>
            <button className="mt-3 w-full rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">Claim</button>
          </div>
        </aside>
        <main className="min-w-0 grow">{children}</main>
      </div>
    </div>
  );
};
