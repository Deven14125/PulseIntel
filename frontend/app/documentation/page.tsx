"use client";

import { motion } from "framer-motion";
import { Database, FileSearch, GitBranch, Server, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Documentation() {
  const pipelineSteps = [
    {
      id: 1,
      title: "Data Collection",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      description: "Aggregating raw clinical datasets containing key health metrics such as age, gender, systolic/diastolic blood pressure, cholesterol, and glucose levels.",
      details: ["Source: Kaggle Medical Datasets", "Format: CSV/JSON", "Size: 70,000+ Records"]
    },
    {
      id: 2,
      title: "Preprocessing & EDA",
      icon: <FileSearch className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      description: "Exploratory Data Analysis (EDA) to understand distributions. Cleaning data by handling missing values, removing duplicates, and normalizing scales.",
      details: ["Outlier Detection", "Feature Scaling", "Correlation Heatmaps"]
    },
    {
      id: 3,
      title: "Model Training",
      icon: <GitBranch className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      description: "Training the Random Forest Classifier. This ensemble learning method constructs a multitude of decision trees to improve predictive accuracy and control over-fitting.",
      details: ["Algorithm: Random Forest", "Library: Scikit-Learn", "Grid Search CV Tuning"]
    },
    {
      id: 4,
      title: "Deployment & Inference",
      icon: <Server className="w-6 h-6 text-white" />,
      color: "bg-red-500",
      description: "The trained model is serialized and deployed via a FastAPI backend. It exposes REST endpoints to accept real-time user data and return instant risk predictions.",
      details: ["Framework: FastAPI", "Containerization: Docker", "Latency: <100ms"]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
           <span className="px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
                Technical Deep Dive
            </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Model Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive look at the pipeline powering PulseIntel, from raw data to real-time AI predictions.
          </p>
        </motion.div>

        {/* Model Info Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50 mb-24 max-w-4xl mx-auto"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                     <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Random Forest Classifier</h2>
                     <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        PulseIntel extracts the power of Ensemble Learning using the Random Forest algorithm. By averaging multiple decision trees, we achieve higher accuracy and stability compared to single-tree models.
                     </p>
                     <div className="flex gap-4">
                        <Link href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html" target="_blank" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold hover:underline">
                            Official Scikit-Learn Docs <ExternalLink className="w-4 h-4" />
                        </Link>
                     </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-2xl min-w-[200px] text-center border border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 mb-1">Model Accuracy</div>
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">72.9%</div>
                    <div className="text-xs text-gray-400 mt-2">Validated on Test Set</div>
                </div>
            </div>
        </motion.div>

        {/* Pipeline / Roadmap Section */}
        <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 -translate-x-1/2 hidden md:block" />
            
            {/* Steps */}
            <div className="space-y-12 md:space-y-24">
                {pipelineSteps.map((step, index) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${
                            index % 2 === 0 ? "md:flex-row-reverse text-right" : ""
                        }`}
                    >
                        {/* Content Side */}
                        <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right pl-12 md:pl-0" : "pl-12 md:pl-0"}`}>
                             <div className={`inline-flex items-center justify-center p-3 rounded-xl shadow-lg mb-4 ${step.color}`}>
                                {step.icon}
                             </div>
                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                             <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                             
                             <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                {step.details.map((detail, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                                        {detail}
                                    </span>
                                ))}
                             </div>
                        </div>

                        {/* Center Dot (Desktop Only) */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 bg-red-500 hidden md:block z-10 shadow-lg"></div>

                        {/* Analysis/Visual Side (Empty for balance on desktop) */}
                        <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
