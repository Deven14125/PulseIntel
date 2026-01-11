"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Heart, Activity, Ruler, Weight, User, Cigarette, Wine, 
  Dumbbell, ArrowRight, Loader2, Thermometer
} from "lucide-react";

type FormData = {
  age: number;
  height: number;
  gender: string;
  weight: number;
  ap_hi: number;
  ap_lo: number;
  cholesterol: string;
  glucose: string;
  smoke: string;
  alcohol: string;
  active: string;
};

export default function PredictionForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    age: 30,
    height: 170,
    gender: "Male",
    weight: 70,
    ap_hi: 120,
    ap_lo: 80,
    cholesterol: "Normal",
    glucose: "Normal",
    smoke: "No",
    alcohol: "No",
    active: "No",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["cholesterol", "glucose", "gender", "smoke", "alcohol", "active"].includes(name)
        ? value 
        : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://pulseintel-backend.onrender.com/predict", formData);
      const queryParams = new URLSearchParams({
        prediction: response.data.prediction.toString(),
        result: response.data.result,
        bmi: response.data.bmi.toString(),
        ...Object.fromEntries(
          Object.entries(formData).map(([key, value]) => [key, value.toString()])
        )
      }).toString();
      
      router.push(`/result?${queryParams}`);
    } catch (err) {
      setError("Unable to connect to the prediction engine. Please verify backend status.");
    } finally {
      setLoading(false);
    }
  };

  const inputWrapperClass = "relative group";
  const inputClass = "w-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3.5 pl-11 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all duration-300 shadow-sm hover:shadow-md text-base";
  const labelClass = "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 ml-1";
  const iconClass = "absolute left-3.5 top-[38px] w-5 h-5 text-gray-400 group-focus-within:text-rose-500 transition-colors duration-300";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <motion.div  
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 dark:border-gray-700/50 ring-1 ring-black/5"
      >
        {/* Header Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500" />

        <div className="bg-gradient-to-b from-white/80 to-transparent dark:from-gray-800/80 p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 dark:brightness-50 pointer-events-none"></div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/50 dark:to-rose-800/30 mb-6 shadow-glow"
            >
              <Heart className="w-10 h-10 text-rose-600 dark:text-rose-400 animate-pulse" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-rose-800 to-gray-900 dark:from-white dark:via-rose-200 dark:to-gray-200 mb-4 tracking-tight">
              PulseIntel Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Advanced AI-powered cardiovascular health assessment using key biometric indicators.
            </p>
        </div>

        <div className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-12">
                {/* Personal Info */}
                <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-200/60 dark:border-gray-700/60">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                          <User className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Personal Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Age</label>
                            <User className={iconClass} />
                            <input type="number" name="age" value={formData.age} onChange={handleChange} className={inputClass} placeholder="Years" min="1" max="120" required />
                        </div>
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Gender</label>
                            <User className={iconClass} />
                            <select name="gender" value={formData.gender} onChange={handleChange} className={`${inputClass} appearance-none`}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Height (cm)</label>
                            <Ruler className={iconClass} />
                            <input type="number" name="height" value={formData.height} onChange={handleChange} className={inputClass} placeholder="CM" min="50" max="300" required />
                        </div>
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Weight (kg)</label>
                            <Weight className={iconClass} />
                            <input type="number" name="weight" value={formData.weight} onChange={handleChange} className={inputClass} placeholder="KG" min="20" max="300" required />
                        </div>
                    </div>
                </motion.section>

                {/* Medical Data */}
                <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-200/60 dark:border-gray-700/60">
                        <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-rose-600 dark:text-rose-400">
                          <Activity className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Medical Vitals</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-rose-50/50 dark:bg-rose-900/10 p-6 rounded-2xl border border-rose-100 dark:border-rose-900/20">
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Systolic Blood Pressure</label>
                            <Activity className={iconClass} />
                            <input type="number" name="ap_hi" value={formData.ap_hi} onChange={handleChange} className={inputClass} placeholder="mmHg" min="60" max="250" required />
                            <p className="text-xs text-gray-500 mt-1 ml-1">Normal range: 90-120</p>
                        </div>
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Diastolic Blood Pressure</label>
                            <Activity className={iconClass} />
                            <input type="number" name="ap_lo" value={formData.ap_lo} onChange={handleChange} className={inputClass} placeholder="mmHg" min="40" max="150" required />
                            <p className="text-xs text-gray-500 mt-1 ml-1">Normal range: 60-80</p>
                        </div>
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Cholesterol Level</label>
                            <Thermometer className={iconClass} />
                            <select name="cholesterol" value={formData.cholesterol} onChange={handleChange} className={`${inputClass} appearance-none`}>
                                <option>Normal</option>
                                <option>Above Normal</option>
                                <option>Well Above Normal</option>
                            </select>
                        </div>
                        <div className={inputWrapperClass}>
                            <label className={labelClass}>Glucose Level</label>
                            <Thermometer className={iconClass} />
                            <select name="glucose" value={formData.glucose} onChange={handleChange} className={`${inputClass} appearance-none`}>
                                <option>Normal</option>
                                <option>Above Normal</option>
                                <option>Well Above Normal</option>
                            </select>
                        </div>
                    </div>
                </motion.section>

                {/* Lifestyle */}
                <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-200/60 dark:border-gray-700/60">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                          <Dumbbell className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Lifestyle Factors</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className={`${inputWrapperClass} bg-gray-50 dark:bg-gray-800/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-emerald-400 dark:hover:border-emerald-500/50 transition-colors`}>
                            <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                              <Cigarette className="w-4 h-4 text-gray-500" /> Smoking Status
                            </label>
                            <div className="flex gap-2">
                                {["No", "Yes"].map((option) => (
                                  <button
                                    key={`smoke-${option}`}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, smoke: option }))}
                                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                                      formData.smoke === option 
                                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" 
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                ))}
                            </div>
                        </div>

                        <div className={`${inputWrapperClass} bg-gray-50 dark:bg-gray-800/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-purple-400 dark:hover:border-purple-500/50 transition-colors`}>
                            <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                              <Wine className="w-4 h-4 text-gray-500" /> Alcohol Consumer
                            </label>
                            <div className="flex gap-2">
                                {["No", "Yes"].map((option) => (
                                  <button
                                    key={`alcohol-${option}`}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, alcohol: option }))}
                                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                                      formData.alcohol === option 
                                        ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30" 
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                ))}
                            </div>
                        </div>

                        <div className={`${inputWrapperClass} bg-gray-50 dark:bg-gray-800/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors`}>
                            <label className="block font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                              <Dumbbell className="w-4 h-4 text-gray-500" /> Physical Activity
                            </label>
                            <div className="flex gap-2">
                                {["No", "Yes"].map((option) => (
                                  <button
                                    key={`active-${option}`}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, active: option }))}
                                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                                      formData.active === option 
                                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" 
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.div variants={itemVariants} className="pt-8">
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full relative overflow-hidden group bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-500 hover:to-orange-500 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-rose-500/30 transform transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-rose-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-xl" />
                        <div className="relative flex items-center justify-center gap-3 text-lg">
                            {loading ? (
                                <>
                                  <Loader2 className="w-6 h-6 animate-spin" />
                                  <span>Processing Health Data...</span>
                                </>
                            ) : (
                                <>
                                  <span>Generate Prediction Analysis</span>
                                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </div>
                    </button>
                </motion.div>
            </form>
        </div>
      </motion.div>

      {error && (
        <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-red-50/90 dark:bg-red-900/40 backdrop-blur border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 rounded-xl text-center font-medium shadow-lg"
        >
            {error}
        </motion.div>
      )}
    </div>
  );
}
