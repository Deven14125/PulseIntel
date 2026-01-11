"use client";

import PredictionForm from "@/components/PredictionForm";

export default function PredictPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            AI Risk Assessment
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Fill in the details below to generate your health report.
          </p>
        </div>
        <PredictionForm />
      </div>
    </main>
  );
}
