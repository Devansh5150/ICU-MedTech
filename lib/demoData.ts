export const demoPatient = {
  id: "ICU-2024-1547",
  name: "John Doe",
  initials: "JD",
  age: 58,
};

export const demoVitals = {
  heartRate: 72,
  bloodPressure: "120/80",
  spo2: 98,
  respirationRate: 16,
};

export const demoEcg = {
  categories: ["Biology", "Business", "Psychology"],
  data: [
    { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
    { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
    { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
    { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
    { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
    { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
    { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
    { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
  ],
  index: "Year",
};

export const demoDiagnosis = {
  status: "Normal" as const,
  items: [
    { label: "Heart Rhythm: Regular Sinus Rhythm", level: "success" as const },
    { label: "No Arrhythmia Detected", level: "success" as const },
    { label: "Minor ST Segment Elevation", level: "warning" as const },
  ],
  overall: {
    title: "Overall Assessment: Healthy",
    note: "Continue monitoring. No immediate intervention required.",
  },
};

export const demoRisk = {
  label: "Low Risk",
  score: 25,
  recommendations: [
    "Maintain regular exercise routine",
    "Continue low-sodium diet",
    "Monitor blood pressure daily",
    "Schedule follow-up in 2 weeks",
  ],
};
