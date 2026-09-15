import React from "react";
import { motion } from "framer-motion";
import { MessageSquareCode, Palette, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquareCode,
    title: "1. Discovery & Strategy",
    desc: "Share your business goals, target audience, and preferred package on WhatsApp or through our quick quote form.",
  },
  {
    num: "02",
    icon: Palette,
    title: "2. Creative & Dev Sprint",
    desc: "Our specialists craft your responsive website, generate AI video assets, edit viral footage, or build your Meta ad campaign.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "3. Fast Revisions & Polish",
    desc: "Review your deliverables within 24 - 72 hours. We refine every pixel, cut, voice inflection, and headline until it's perfect.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "4. Launch & Revenue Scale",
    desc: "We deploy your website, publish high-converting video content, or activate your Meta Ads to bring in profitable leads.",
  },
];

const ProcessSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-primary relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-lightest-slate tracking-tight">
            Our 4-Step Agile Delivery Workflow
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            From initial idea to revenue-generating launch in as little as 48 hours. No lengthy meetings, no friction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="relative bg-secondary/70 border border-lightest-slate/10 p-7 rounded-2xl flex flex-col justify-between hover:border-accent/30 hover:shadow-glow/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold font-mono text-accent/30">
                    {step.num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-accent border border-lightest-slate/10 shadow-sm">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-lightest-slate mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
