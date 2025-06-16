import React, { useEffect, useState } from "react";

const InitialPage = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true); // Trigger exit animation
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 1000); // Match exit animation duration
          }, 300); // Small delay after reaching 100
          return 100;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-[1000ms] ease-in-out ${
        isExiting
          ? "opacity-0 scale-75 rotate-3 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,#00091d_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="flex flex-col items-start text-4xl md:text-6xl font-bold px-8 py-6 gap-4 text-white z-10">
        <h3 className="animate-fadeInUp">Hold up</h3>
        <h3 className="animate-fadeInUp delay-200">Coding magic loading! 🚀</h3>
        <h3 className="animate-fadeInUp delay-400">Almost there!</h3>
      </div>

      {/* Progress */}
      <div className="text-5xl md:text-6xl font-extrabold absolute bottom-[8%] right-[4%] px-6 py-2 text-white animate-bounceIn">
        {progress}%
      </div>
    </div>
  );
};

export default InitialPage;
