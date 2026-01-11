"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, Activity, FileText } from "lucide-react";

export default function Documentation() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "1. Data Collection",
      description: "The system accepts user input across key health metrics: Age, Gender, Height, Weight, Systolic/Diastolic Blood Pressure, Cholesterol levels, Glucose levels, Smoking status, Alcohol consumption, and Physical Activity."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      title: "2. Machine Learning Analysis",
      description: "Your data is processed by our trained Random Forest Classifier. This model has analyzed thousands of historical patient records to identify patterns and correlations associated with cardiovascular disease."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "3. Feature Engineering",
      description: "The system automatically calculates derived metrics like Body Mass Index (BMI) and Pulse Pressure to enhance prediction accuracy, mimicking the diagnostic process of a cardiologist."
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "4. Risk Assessment",
      description: "The model outputs a probability score. Scores above a calibrated threshold indicate a higher statistical likelihood of heart disease presence, prompting a 'High Risk' warning."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600 mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Understanding the technology behind VitalSense AI. How we turn health data into actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 bg-white dark:bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
            
            <h2 className="text-3xl font-bold mb-6 relative z-10">Technical Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-400">Frontend</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Next.js 14 (App Router)</li>
                        <li>• Tailwind CSS for Styling</li>
                        <li>• Framer Motion for Animations</li>
                        <li>• TypeScript for Type Safety</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• FastAPI (Python)</li>
                        <li>• Scikit-Learn (ML Model)</li>
                        <li>• Pandas & NumPy (Data Processing)</li>
                        <li>• Uvicorn (ASGI Server)</li>
                    </ul>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
