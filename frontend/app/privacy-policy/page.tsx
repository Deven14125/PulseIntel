"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 border border-white/20"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-6">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Information Collection</h2>
              <p className="leading-relaxed">
                VitalSense AI collects non-personally identifiable health metrics required for the prediction model, including age, gender, BMI components, blood pressure, and glucose levels. We do not store your name, email, or any persistent identifiers associated with these health metrics unless you explicitly create an account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. How We Use Information</h2>
              <p className="leading-relaxed">
                The data you input is processed in real-time by our Machine Learning model solely for the purpose of generating a heart disease risk assessment. No data is shared with third parties, advertisers, or insurance providers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Data Security</h2>
              <p className="leading-relaxed">
                While we prioritize data security, this tool is currently a demonstration. Please do not submit real sensitive personal health information (PHI) that you wish to remain strictly confidential.
              </p>
            </section>

             <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use local storage only to persist your theme preferences (Light/Dark mode). We do not use third-party tracking cookies.
              </p>
            </section>

             <section>
              <p className="text-sm text-gray-500 italic mt-8">
                Last Updated: January 2026
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
