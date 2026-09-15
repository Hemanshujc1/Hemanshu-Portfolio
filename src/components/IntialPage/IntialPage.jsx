import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InitialPage = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  const messages = [
    "Initializing Dev Solutions Studio...",
    "Loading Web & AI Video Engines...",
    "Calibrating High-Retention Video Assets...",
    "Preparing High-ROI Meta Ad Funnels...",
    "Unlocking Affordable Digital Growth..."
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
          setTimeout(onFinish, 400);
          return 100;
        }
        const increment = Math.random() * 12 + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

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
            className="text-2xl md:text-3xl font-bold text-lightest-slate mb-4 text-center"
          >
            <span className="text-accent">&lt;Dev Solutions /&gt;</span>
            <p className="text-xs font-mono text-slate mt-1 tracking-widest uppercase">
              Websites • AI Videos • Video Editing • Meta Ads
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-full h-1 bg-tertiary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent shadow-glow"
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
