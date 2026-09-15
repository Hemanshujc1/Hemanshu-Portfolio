import React from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { packagesData, agencyInfo } from "../../data/agencyData";

const PackagesSection = () => {
  return (
    <section id="packages" className="px-6 md:px-12 py-16 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Clean Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2 block">
            Flexible Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate">
            Our Packages
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded-full opacity-60" />
          <p className="text-slate text-xs sm:text-sm mt-3 max-w-md mx-auto">
            Choose a package tailored to your stage of growth or request a custom bundle.
          </p>
        </div>

        {/* 2-Column Wider Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packagesData.map((pkg) => {
            const whatsappUrl = `https://wa.me/${agencyInfo.whatsappNumber}?text=${encodeURIComponent(
              `Hello Dev Solutions! I would like to inquire about the "${pkg.name}".`
            )}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? "bg-secondary border-2 border-accent/80 shadow-xl"
                    : "bg-secondary/80 border border-lightest-slate/15 hover:border-accent/40"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 right-5 bg-accent text-primary text-xs font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-glow">
                    <Sparkles size={12} /> Popular
                  </span>
                )}

                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2 font-semibold">
                    {pkg.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-3 leading-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <ul className="space-y-3 mb-8 text-sm sm:text-base text-lightest-slate/90">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check size={16} className="text-accent mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-xl text-sm sm:text-base font-bold text-center flex items-center justify-center gap-2 transition-all mt-auto ${
                    pkg.popular
                      ? "bg-accent text-primary hover:bg-accent/90 shadow-glow"
                      : "bg-primary border border-accent/40 text-accent hover:bg-accent hover:text-primary"
                  }`}
                >
                  <MessageCircle size={17} /> Inquire Now
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

