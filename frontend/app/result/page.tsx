"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, RefreshCcw, ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const prediction = searchParams.get("prediction");
  const resultText = searchParams.get("result");
  const bmi = searchParams.get("bmi");

  // If no data, redirect back to predict
  if (!prediction || !resultText) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">No result data found.</p>
            <Link href="/predict" className="text-blue-600 hover:underline">Go back to prediction</Link>
        </div>
    );
  }

  const isHighRisk = prediction === "1";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-3xl shadow-2xl p-8 md:p-12 text-center border-2 backdrop-blur-md ${
            isHighRisk 
              ? "bg-white/90 dark:bg-gray-900/90 border-red-100 dark:border-red-900/50" 
              : "bg-white/90 dark:bg-gray-900/90 border-green-100 dark:border-green-900/50"
          }`}
      >
        {/* Background Gradients */}
        <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${
            isHighRisk ? "from-red-50 to-transparent dark:from-red-900/20" : "from-green-50 to-transparent dark:from-green-900/20"
        }`} />

        <div className="relative z-10">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${
                    isHighRisk ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                }`}
            >
                {isHighRisk ? <AlertTriangle className="w-12 h-12" /> : <CheckCircle className="w-12 h-12" />}
            </motion.div>

            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isHighRisk ? "text-red-600" : "text-green-600"}`}>
                {resultText}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Based on your provided health metrics, our AI analysis indicates a 
                <strong> {isHighRisk ? "Higher Probability" : "Lower Probability"} </strong> 
                of cardiovascular disease.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-8 max-w-lg mx-auto backdrop-blur-sm">
                 <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                    <span className="text-gray-500 dark:text-gray-400">Your Calculated BMI</span>
                    <span className="text-2xl font-bold text-gray-800 dark:text-white">{parseFloat(bmi || "0").toFixed(1)}</span>
                 </div>
                 <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> AI Recommendations:
                    </h4>
                    {isHighRisk ? (
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                             <li className="flex gap-2"><span className="text-red-500">•</span> Consult a cardiologist specifically for further tests.</li>
                             <li className="flex gap-2"><span className="text-red-500">•</span> Strictly monitor saturated fat intake.</li>
                             <li className="flex gap-2"><span className="text-red-500">•</span> Target 150 minutes of moderate activity weekly.</li>
                        </ul>
                    ) : (
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                             <li className="flex gap-2"><span className="text-green-500">•</span> Continue with your balanced diet.</li>
                             <li className="flex gap-2"><span className="text-green-500">•</span> Maintain regular sleep schedule.</li>
                             <li className="flex gap-2"><span className="text-green-500">•</span> Keep up your hydration levels.</li>
                        </ul>
                    )}
                 </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                    onClick={() => router.push('/predict')}
                    className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                    <ArrowLeft className="w-5 h-5" /> Back to Predict
                </button>
                <button 
                    onClick={() => router.push('/predict')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                    <RefreshCcw className="w-5 h-5" /> Predict Another
                </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ResultPage() {
    return (
        <main className="min-h-screen py-12 px-4 bg-transparent flex items-center justify-center">
            <Suspense fallback={<div className="text-center">Loading Result...</div>}>
                <ResultContent />
            </Suspense>
        </main>
    )
}
