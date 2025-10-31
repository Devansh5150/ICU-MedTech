"use client";

import React from "react";
import { AreaChart } from "@/ui/components/AreaChart";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { Progress } from "@/ui/components/Progress";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { demoPatient, demoVitals, demoEcg, demoDiagnosis, demoRisk } from "@/lib/demoData";
import { FeatherActivity } from "@subframe/core";
import { FeatherArrowDown } from "@subframe/core";
import { FeatherBell } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherCpu } from "@subframe/core";
import { FeatherDroplet } from "@subframe/core";
import { FeatherHeart } from "@subframe/core";
import { FeatherTrendingUp } from "@subframe/core";
import { FeatherUpload } from "@subframe/core";
import { FeatherUploadCloud } from "@subframe/core";
import { FeatherWind } from "@subframe/core";
import { FeatherZap } from "@subframe/core";

function VirtualIcuDashboard() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background py-6 overflow-auto">
        <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border bg-default-background px-6 py-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar size="large" image="">
              {demoPatient.initials}
            </Avatar>
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-default-font">
                {demoPatient.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-body font-body text-subtext-color">
                  Age: {demoPatient.age}
                </span>
                <span className="text-body font-body text-subtext-color">
                  •
                </span>
                <span className="text-body font-body text-subtext-color">
                  ID: {demoPatient.id}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              icon={<FeatherBell />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <Avatar image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop">
              DR
            </Avatar>
          </div>
        </div>
        <div className="flex w-full items-start gap-4 flex-wrap">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <FeatherHeart className="text-body font-body text-error-600" />
              <span className="text-body-bold font-body-bold text-subtext-color">
                Heart Rate
              </span>
            </div>
            <span className="w-full text-heading-1 font-heading-1 text-default-font">
              {demoVitals.heartRate}
            </span>
            <span className="text-caption font-caption text-subtext-color">
              bpm
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <FeatherActivity className="text-body font-body text-brand-600" />
              <span className="text-body-bold font-body-bold text-subtext-color">
                Blood Pressure
              </span>
            </div>
            <span className="w-full text-heading-1 font-heading-1 text-default-font">
              {demoVitals.bloodPressure}
            </span>
            <div className="flex items-center gap-1">
              <FeatherArrowDown className="text-caption font-caption text-success-700" />
              <span className="text-caption font-caption text-subtext-color">
                mmHg
              </span>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <FeatherDroplet className="text-body font-body text-brand-600" />
              <span className="text-body-bold font-body-bold text-subtext-color">
                Oxygen Level SpO2
              </span>
            </div>
            <span className="w-full text-heading-1 font-heading-1 text-default-font">
              {demoVitals.spo2}%
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Normal
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <FeatherWind className="text-body font-body text-brand-600" />
              <span className="text-body-bold font-body-bold text-subtext-color">
                Respiration Rate
              </span>
            </div>
            <span className="w-full text-heading-1 font-heading-1 text-default-font">
              {demoVitals.respirationRate}
            </span>
            <span className="text-caption font-caption text-subtext-color">
              breaths/min
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
          <div className="flex w-full items-center justify-between">
            <span className="text-heading-2 font-heading-2 text-default-font">
              ECG Waveform Monitor
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-secondary"
                icon={<FeatherUpload />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Upload ECG
              </Button>
              <Button
                icon={<FeatherZap />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Analyze ECG
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md border border-solid border-neutral-800 bg-[#0a0a0aff] px-8 py-16">
            <AreaChart
              categories={demoEcg.categories}
              data={demoEcg.data}
              index={demoEcg.index}
            />
            <div className="flex w-full flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed border-neutral-700 bg-neutral-950 px-8 py-8">
              <FeatherUploadCloud className="text-heading-1 font-heading-1 text-neutral-600" />
              <span className="text-body font-body text-neutral-500 text-center">
                Drag and drop ECG file here or click to browse
              </span>
              <span className="text-caption font-caption text-neutral-600">
                Supports .csv, .txt, .edf formats
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start gap-6 flex-wrap">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <FeatherCpu className="text-body font-body text-brand-600" />
              <span className="text-heading-3 font-heading-3 text-default-font">
                AI Diagnosis
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-body-bold font-body-bold text-default-font">
                  Current Status
                </span>
                <Badge variant="success" icon={<FeatherCheck />}>
                  {demoDiagnosis.status}
                </Badge>
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                {demoDiagnosis.items.map((item, idx) => (
                  <div key={idx} className="flex w-full items-center gap-3">
                    <div className={`flex h-3 w-3 flex-none items-start rounded-full ${item.level === "success" ? "bg-success-600" : item.level === "warning" ? "bg-warning-600" : "bg-neutral-500"}`} />
                    <span className="text-body font-body text-default-font">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex w-full items-start gap-2 rounded-md bg-success-900 px-4 py-3">
                <FeatherCheckCircle className="text-body font-body text-success-700" />
                <div className="flex grow shrink-0 basis-0 flex-col items-start">
                  <span className="text-body-bold font-body-bold text-success-700">
                    {demoDiagnosis.overall.title}
                  </span>
                  <span className="text-caption font-caption text-success-800">
                    {demoDiagnosis.overall.note}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <FeatherTrendingUp className="text-body font-body text-brand-600" />
              <span className="text-heading-3 font-heading-3 text-default-font">
                AI Risk Prediction
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center justify-between">
                <span className="text-body-bold font-body-bold text-default-font">
                  30-Day Risk Score
                </span>
                <Badge variant="success">{demoRisk.label}</Badge>
              </div>
              <div className="flex w-full items-center gap-3">
                <Progress value={demoRisk.score} />
                <span className="text-body-bold font-body-bold text-default-font">
                  {demoRisk.score}%
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-3 rounded-md bg-neutral-50 px-4 py-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Lifestyle Recommendations
                </span>
                <div className="flex w-full flex-col items-start gap-2">
                  {demoRisk.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FeatherCheck className="text-caption font-caption text-brand-600" />
                      <span className="text-body font-body text-default-font">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default VirtualIcuDashboard;
