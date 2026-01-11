"use client";

import { motion } from "framer-motion";
import { BarChart, CheckCircle2 } from "lucide-react";

export default function ModelInfo() {
  const models = [
    { name: "Random Forest Classifier", accuracy: "88.5%", status: "Active" },
    { name: "Gradient Boosting", accuracy: "86.2%", status: "Evaluated" },
    { name: "Logistic Regression", accuracy: "79.4%", status: "Evaluated" },
    { name: "Decision Tree", accuracy: "73.1%", status: "Evaluated" },
  ];

  return (
    <main className="min-h-screen py-12 px-4 bg-transparent transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            Model Performance Metrics
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our diagnostic engine is powered by rigorous statistical analysis and machine learning optimization.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 flex items-center justify-between backdrop-blur-md ${
                model.status === "Active"
                  ? "bg-white/90 dark:bg-gray-800/90 border-green-500 shadow-lg"
                  : "bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
              }`}
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  {model.name}
                  {model.status === "Active" && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">
                      Currently Used
                    </span>
                  )}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Status: <span className="font-medium">{model.status}</span>
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {model.accuracy}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Accuracy</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
             <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <BarChart className="w-6 h-6 text-blue-500"/> Why Random Forest?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The Random Forest algorithm was selected as the final model for this application due to its superior performance in handling non-linear data and its robustness against overfitting.
                    By aggregating the predictions of multiple decision trees, it provides a stable and accurate risk assessment for cardiovascular disease prediction.
                </p>
             </div>
             <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Dataset & Training</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The model was trained on a comprehensive dataset containing over 70,000 patient records. Features include objective findings (Age, Height, Weight), examination results (Systolic & Diastolic BP, Glucose, Cholesterol), and lifestyle choices (Smoking, Alcohol, Activity).
                </p>
             </div>
        </div>
      </div>
    </main>
  );
}
