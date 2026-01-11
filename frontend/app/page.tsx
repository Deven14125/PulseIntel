"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Activity, ArrowRight, ShieldCheck, Zap, Stethoscope } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-transparent overflow-hidden relative">
      {/* Background Animation is now global in layout.tsx */}
      
      <div className="container mx-auto px-4 pt-20 pb-32 flex flex-col items-center justify-center text-center">
        
        {/* Animated Heart */}
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", stiffness: 260, damping: 20 }}
           className="relative mb-8"
        >
          <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
             <Heart className="w-32 h-32 text-red-600 fill-red-600 drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Protect Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
            Heart Health
          </span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed"
        >
            Advanced AI prediction models to assess your cardiovascular risk factors instantly. Early detection saves lives.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="flex flex-col sm:flex-row gap-4 mb-20"
        >
            <Link href="/predict">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-red-500/30 flex items-center gap-2 group"
                >
                    Start Prediction
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </Link>
            <Link href="/model-info">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                >
                    Learn How It Works
                    <Activity className="w-5 h-5" />
                </motion.button>
            </Link>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-6xl mb-32"
        >
            <motion.div variants={item} className="p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <Activity className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">High Accuracy</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Our model achieves <span className="font-semibold text-blue-600 dark:text-blue-400">88.5% accuracy</span> using optimized Random Forest algorithms trained on over 70,000 validated clinical records.
                </p>
            </motion.div>

            <motion.div variants={item} className="p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition duration-300">
                 <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Instant Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Advanced FastAPI backend processing ensures you get your comprehensive risk assessment in <span className="font-semibold text-green-600 dark:text-green-400">milliseconds</span>.
                </p>
            </motion.div>

            <motion.div variants={item} className="p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition duration-300">
                 <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Private & Secure</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  We prioritize your privacy. Your health data is processed in real-time for prediction only and is <span className="font-semibold text-purple-600 dark:text-purple-400">never stored</span> on our servers.
                </p>
            </motion.div>
        </motion.div>

        {/* How It Works Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-16">
             <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Simple Process</span>
             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Enter Details", desc: "Input basic health metrics like age, BP, and cholesterol levels.", icon: Stethoscope },
              { step: "02", title: "AI Analysis", desc: "Our machine learning model processes your data against known patterns.", icon: Activity },
              { step: "03", title: "Get Results", desc: "Receive an instant risk assessment with actionable recommendations.", icon: ShieldCheck }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative p-6 text-center group"
              >
                  <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-gray-50/50 dark:text-gray-800/20 -z-10 select-none">
                    {item.step}
                  </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 rounded-3xl p-12 text-white dark:text-gray-900 shadow-2xl flex flex-col md:flex-row justify-around items-center"
        >
             <div className="text-center mb-8 md:mb-0">
                <div className="text-5xl font-bold mb-2">70k+</div>
                <div className="text-gray-400 dark:text-gray-600 font-medium">Clinical Records Analyzed</div>
             </div>
             <div className="w-full md:w-px h-px md:h-16 bg-gray-700 dark:bg-gray-300 hidden md:block"></div>
             <div className="text-center mb-8 md:mb-0">
                <div className="text-5xl font-bold mb-2">99%</div>
                <div className="text-gray-400 dark:text-gray-600 font-medium">Uptime Availability</div>
             </div>
             <div className="w-full md:w-px h-px md:h-16 bg-gray-700 dark:bg-gray-300 hidden md:block"></div>
             <div className="text-center">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-gray-400 dark:text-gray-600 font-medium">Automated Assessment</div>
             </div>
        </motion.div>

      </div>
    </main>
  );
}
