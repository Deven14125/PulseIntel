"use client";

import { motion } from "framer-motion";
import { BarChart, CheckCircle2, TrendingUp, Award, Activity } from "lucide-react";

export default function ModelInfo() {
  const models = [
    { 
      name: "Random Forest Classifier", 
      accuracy: 72.9, 
      status: "Active",
      color: "bg-green-500",
      description: "Best performing ensemble model composed of multiple decision trees."
    },
    { 
      name: "Logistic Regression", 
      accuracy: 72.6, 
      status: "Evaluated", 
      color: "bg-blue-500",
      description: "Statistical model used for binary classification problems."
    },
    { 
      name: "Decision Tree", 
      accuracy: 72.5, 
      status: "Evaluated", 
      color: "bg-orange-500",
      description: "Tree-structured classifier with decision nodes."
    }
  ];

  return (
    <main className="min-h-screen py-16 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-semibold text-sm mb-4">
            <Activity className="w-4 h-4" /> Model Benchmark
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Performance Metrics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
             Comparative analysis of machine learning algorithms evaluated for cardiovascular risk prediction.
          </p>
        </motion.div>

        {/* Main Comparison Section */}
         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/20 dark:border-gray-700/50 shadow-xl">
             
             {/* Text Content */}
             <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <Award className="w-8 h-8 text-yellow-500" />
                    Champion Model
                 </h2>
                 <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    After rigorous testing, the <strong className="text-green-600 dark:text-green-400">Random Forest Classifier</strong> emerged as the most robust model for this medical application.
                 </p>
                 <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Why It Won?</h4>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                        It demonstrated superior stability and generalization compared to single decision trees, effectively reducing overfitting while maintaining high sensitivity for risk detection.
                    </p>
                 </div>
             </div>

             {/* Visual Bar Chart Representation */}
             <div className="space-y-6">
                 {models.map((model, index) => (
                    <motion.div
                        key={model.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="space-y-2 group"
                    >
                        <div className="flex justify-between items-end text-sm font-medium">
                            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                {model.status === "Active" && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                {model.name}
                            </span>
                            <span className="text-gray-900 dark:text-white font-bold">{model.accuracy}%</span>
                        </div>
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${model.accuracy}%` }}
                                transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                                className={`h-full rounded-full ${model.color} shadow-lg relative`}
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
                            </motion.div>
                        </div>
                    </motion.div>
                 ))}
             </div>
         </div>

        {/* Detailed Cards */}
        <div className="grid md:grid-cols-3 gap-6">
            {models.map((model, index) => (
                <motion.div
                     key={model.name}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 + (index * 0.1) }}
                     whileHover={{ y: -5 }}
                     className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                         model.status === "Active" 
                            ? "bg-gradient-to-br from-white/80 to-green-50/80 dark:from-gray-800/80 dark:to-green-900/20 border-green-500/30 shadow-lg shadow-green-500/10 ring-1 ring-green-500/20" 
                            : "bg-white/40 dark:bg-gray-800/40 border-white/20 dark:border-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-800/60"
                     }`}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md ${model.color}`}>
                            {model.name.charAt(0)}
                        </div>
                        {model.status === "Active" && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full">
                                Selected
                            </span>
                        )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{model.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">{model.description}</p>
                    
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Accuracy Score</span>
                        <span className={`text-xl font-bold ${model.status === "Active" ? "text-green-600" : "text-gray-900 dark:text-white"}`}>
                            {model.accuracy}%
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </main>
  );
}
