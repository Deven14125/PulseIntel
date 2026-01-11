"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Activity, Ruler, Weight, User, Cigarette, Wine, CheckCircle, AlertTriangle } from "lucide-react";

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

  const [result, setResult] = useState<null | { prediction: number; result: string; bmi: number }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "cholesterol" || name === "glucose" || name === "gender" || name === "smoke" || name === "alcohol" || name === "active" 
        ? value 
        : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      console.log("Sending data to backend:", formData);
      const response = await axios.post("http://localhost:8000/predict", formData);
      console.log("Backend response:", response.data);
      
      // Navigate to result page with query params
      const queryParams = new URLSearchParams({
        prediction: response.data.prediction.toString(),
        result: response.data.result,
        bmi: response.data.bmi.toString(),
      }).toString();
      
      router.push(`/result?${queryParams}`);
    } catch (err) {
      setError("Failed to get prediction. Please try again. Ensure backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2 border bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors";
  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2";

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-colors border border-white/20"
      >
        <div className="bg-gradient-to-r from-red-600 to-pink-600 p-6 text-white text-center">
            <Heart className="w-12 h-12 mx-auto mb-2 text-white/90" />
            <h2 className="text-3xl font-bold">PulseIntel Prediction</h2>
            <p className="opacity-90 mt-2">Enter your health details for an AI assessment</p>
        </div>

        <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <section>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b dark:border-gray-700 pb-2 flex items-center gap-2">
                        <User className="w-5 h-5 text-red-500" /> Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <label className={labelClass}>Age (years)</label>
                            <input type="number" name="age" value={formData.age} onChange={handleChange} className={inputClass} min="1" max="100" required />
                        </div>
                        <div>
                            <label className={labelClass}>Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}><Ruler className="w-4 h-4"/> Height (cm)</label>
                            <input type="number" name="height" value={formData.height} onChange={handleChange} className={inputClass} min="50" max="250" required />
                        </div>
                        <div>
                            <label className={labelClass}><Weight className="w-4 h-4"/> Weight (kg)</label>
                            <input type="number" name="weight" value={formData.weight} onChange={handleChange} className={inputClass} min="20" max="200" required />
                        </div>
                    </div>
                </section>

                {/* Medical Data */}
                <section>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b dark:border-gray-700 pb-2 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-red-500" /> Medical Data
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelClass}>Systolic BP (ap_hi)</label>
                            <input type="number" name="ap_hi" value={formData.ap_hi} onChange={handleChange} className={inputClass} min="50" max="250" required />
                        </div>
                        <div>
                            <label className={labelClass}>Diastolic BP (ap_lo)</label>
                            <input type="number" name="ap_lo" value={formData.ap_lo} onChange={handleChange} className={inputClass} min="30" max="150" required />
                        </div>
                        <div>
                            <label className={labelClass}>Cholesterol Level</label>
                            <select name="cholesterol" value={formData.cholesterol} onChange={handleChange} className={inputClass}>
                                <option>Normal</option>
                                <option>Above Normal</option>
                                <option>Well Above Normal</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>Glucose Level</label>
                            <select name="glucose" value={formData.glucose} onChange={handleChange} className={inputClass}>
                                <option>Normal</option>
                                <option>Above Normal</option>
                                <option>Well Above Normal</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Lifestyle */}
                <section>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b dark:border-gray-700 pb-2 flex items-center gap-2">
                        <Wine className="w-5 h-5 text-red-500" /> Lifestyle
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className={labelClass}><Cigarette className="w-4 h-4" /> Smoker?</label>
                            <select name="smoke" value={formData.smoke} onChange={handleChange} className={inputClass}>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>Alcohol Intake?</label>
                            <select name="alcohol" value={formData.alcohol} onChange={handleChange} className={inputClass}>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>Physically Active?</label>
                            <select name="active" value={formData.active} onChange={handleChange} className={inputClass}>
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center pt-4">
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {loading ? "Analyzing..." : "Analyze Risk"}
                    </button>
                </div>
            </form>
        </div>
      </motion.div>

      {error && (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center"
        >
            {error}
        </motion.div>
      )}
    </div>
  );
}
