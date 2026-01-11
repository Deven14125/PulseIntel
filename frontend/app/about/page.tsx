"use client";

import { motion } from "framer-motion";
import { Users, Github, Linkedin, Mail } from "lucide-react";

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
            <Users className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About The Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A pioneering initiative to bridge the gap between clinical data and actionable health insights using Artificial Intelligence.
          </p>
        </motion.div>

        <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border-l-4 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Cardiovascular diseases remain the leading cause of death globally. Our mission is to democratize access to early risk detection. 
                    By identifying potential heart health issues before they become critical, we empower individuals to take proactive steps towards a longer, healthier life. 
                    This tool is designed to be an accessible first step in preventative healthcare.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Tech Stack</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Built for speed and reliability, our architecture ensures your data is processed instantly and securely:
                    </p>
                     <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                        <li><strong>Next.js 14:</strong> For a seamless, reactive user interface.</li>
                        <li><strong>FastAPI:</strong> Handling complex model inference with minimal latency.</li>
                        <li><strong>Scikit-Learn:</strong> Utilizing robust Random Forest algorithms.</li>
                        <li><strong>Tailwind CSS:</strong> Ensuring a beautiful, accessible design.</li>
                    </ul>
                </div>
                 <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We are a group of data scientists and developers passionate about healthcare innovation.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        This project was developed as part of our research into applied Machine Learning in Diagnostics (SEM-6 Studies). We believe open-source tools can revolutionize patient care.
                    </p>
                </div>
            </div>
        </div>

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
