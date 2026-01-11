"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash screen is visible
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = 'unset';
    }, 4000); // 4 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-gray-950"
        >
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="relative mb-8"
          >
             <div className="absolute inset-0 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
             <Heart className="w-32 h-32 text-red-600 fill-red-600 drop-shadow-2xl animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            PulseIntel
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center px-4 font-light"
          >
            Advanced AI prediction models to assess your cardiovascular risk factors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 text-2xl md:text-3xl text-gray-700 dark:text-gray-200 font-bold pt-4 tracking-wide"
          >
            Created By Deven Machchhar
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
