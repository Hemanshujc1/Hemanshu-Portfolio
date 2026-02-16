import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InitialPage = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  const messages = [
  "Initializing Portfolio...",
  "Compiling Experience...",
  "Loading Projects...",
  "Optimizing Performance...",
  "Deploying Innovation..."
];

const [message, setMessage] = useState(messages[0]);


useEffect(() => {
  const messageInterval = setInterval(() => {
    const random = Math.floor(Math.random() * messages.length);
    setMessage(messages[random]);
  }, 1000);

  return () => clearInterval(messageInterval);
}, []);


  useEffect(() => {
    // Smoother progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // Wait a bit before finishing
          return 100;
        }
        // Randomize the progress increment for a more "real" feel
        const increment = Math.random() * 10;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
      >
        <div className="w-full max-w-md px-10 flex flex-col items-center gap-6">
          {/* Logo or Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-lightest-slate mb-4"
          >
            {/* <span className="text-accent">HC's Portfolio</span> */}
            <span className="text-accent">&lt;Hemanshu Portfolio /&gt;</span>

          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-full h-1 bg-tertiary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent shadow-[0_0_10px_rgba(100,255,218,0.7)]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Percentage */}
          <div className="flex justify-between w-full text-sm font-mono text-slate">
            <span>{message}</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InitialPage;
