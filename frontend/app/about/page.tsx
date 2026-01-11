"use client";

import { motion } from "framer-motion";
import { User, Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen py-12 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About The Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A pioneering initiative to bridge the gap between clinical data and actionable health insights using Artificial Intelligence.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-lg border-l-8 border-red-500 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">The Mission</h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg">
                    Cardiovascular diseases remain the leading cause of death globally. My mission is to democratize access to early risk detection. 
                    By identifying potential heart health issues before they become critical, I aim to empower individuals to take proactive steps towards a longer, healthier life. 
                    This tool is designed to be an accessible first step in preventative healthcare.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/30"
                >
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                         The Tech Stack
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Built for speed and reliability, our architecture ensures your data is processed instantly and securely:
                    </p>
                     <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                             <strong>Next.js 14:</strong> Seamless UI
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                             <strong>FastAPI:</strong> Rapid Inference
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                             <strong>Scikit-Learn:</strong> Robust AI
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                             <strong>Tailwind:</strong> Modern Design
                        </li>
                    </ul>
                </motion.div>
                 
                 <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/30"
                >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Creator</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                        I am <span className="font-bold text-red-600 dark:text-red-400">Deven Machchhar</span>, a developer passionate about healthcare innovation and AI.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        This project was developed as part of research into applied Machine Learning in Diagnostics. I believe open-source tools can revolutionize patient care and make health insights accessible to everyone.
                    </p>
                </motion.div>
            </div>
        </motion.div>

        <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Connect Details</h3>
            <div className="flex justify-center gap-6">
                <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition">
                    <Linkedin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                </a>
                <a href="mailto:contact@example.com" className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full hover:bg-red-200 dark:hover:bg-red-900/50 transition">
                    <Mail className="w-6 h-6 text-red-600" />
                </a>
            </div>
        </div>
      </div>
    </main>
  );
}
