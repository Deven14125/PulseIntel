"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-red-50/30 dark:bg-gray-950">
      
      {/* 1. Subtle Grid Background for "Intel" aspect */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `linear-gradient(#ff0000 1px, transparent 1px), linear-gradient(90deg, #ff0000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Organic Floating Blobs (Cell-like) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              (Math.random() * windowSize.width + windowSize.width / 2) % windowSize.width,
              Math.random() * windowSize.width
            ],
            y: [
              Math.random() * windowSize.height,
              (Math.random() * windowSize.height + windowSize.height / 2) % windowSize.height,
              Math.random() * windowSize.height
            ],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 30, // Slow, organic movement
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-20
            ${i % 2 === 0 ? 'bg-red-300 dark:bg-red-800' : 'bg-pink-300 dark:bg-pink-800'}
          `}
          style={{
            width: Math.random() * 400 + 300,
            height: Math.random() * 400 + 300,
          }}
        />
      ))}

      {/* 3. Floating Blood Cells / Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: [null, Math.random() * -200], // Float up significantly
            x: [null, (Math.random() - 0.5) * 100], // Slight horizontal drift
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          className="absolute rounded-full border-2 border-red-500/10 bg-red-600/5 dark:border-red-400/20 dark:bg-red-400/5 backdrop-blur-[1px] shadow-sm"
          style={{
            width: Math.random() * 50 + 20,
            height: Math.random() * 50 + 20,
          }}
        >
          {/* Inner nucleus-like dot for more "cell" detail */}
          <div className="absolute top-1/3 left-1/3 w-[30%] h-[30%] bg-red-400/20 rounded-full blur-[1px]" />
        </motion.div>
      ))}

      {/* 4. EKG Line Effect (Subtle background pulse) */}
      <div className="absolute top-[40%] left-0 w-full opacity-20 dark:opacity-10 pointer-events-none">
        <svg  width="100%" height="150" viewBox="0 0 1000 150" preserveAspectRatio="none">
          <motion.path
            d="M0,75 L100,75 L120,30 L140,120 L160,75 L200,75 L220,10 L240,140 L260,75 L350,75 L370,40 L390,110 L410,75 L500,75 L520,30 L540,120 L560,75 L650,75 L670,10 L690,140 L710,75 L800,75 L820,40 L840,110 L860,75 L1000,75"
            fill="none"
            stroke="currentColor" 
            className="text-red-500 dark:text-red-400"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </svg>
      </div>

       {/* 5. Second EKG Line (Offset, slower) for depth */}
       <div className="absolute top-[60%] left-0 w-full opacity-10 dark:opacity-5 pointer-events-none">
        <svg  width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 L200,50 L210,20 L220,80 L230,50 L400,50 L410,10 L420,90 L430,50 L600,50 L610,30 L620,70 L630,50 L800,50 L810,20 L820,80 L830,50 L1000,50"
            fill="none"
            stroke="currentColor" 
            className="text-pink-500 dark:text-pink-400"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 7,
              ease: "linear",
              repeat: Infinity,
              delay: 1,
            }}
          />
        </svg>
      </div>

    </div>
  );
}
