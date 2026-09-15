import React from "react";
import { motion } from "framer-motion";
import { Globe, Video, Bot, TrendingUp, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData, agencyInfo } from "../../data/agencyData";

const iconMap = {
  Globe,
  Bot,
  Video,
  TrendingUp,
};

const ServicesSection = () => {
  return (
    <section id="services" className="px-6 md:px-12 py-20 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-3 block font-semibold">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-lightest-slate tracking-tight">
            Our Core Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full opacity-70" />
        </div>

        {/* Spacious 2-Column Grid Layout with Larger Text & Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            const whatsappUrl = `https://wa.me/${agencyInfo.whatsappNumber}?text=${encodeURIComponent(
              `Hello Dev Solutions! I'm interested in your "${service.title}" service.`
            )}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/90 rounded-2xl border border-tertiary p-8 sm:p-10 flex flex-col justify-between hover:border-accent/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary border border-tertiary flex items-center justify-center text-accent shadow-glow group-hover:scale-105 transition-transform">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-accent bg-accent/10 px-3.5 py-1 rounded-full border border-accent/20">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description with Much Larger Font Size */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Deliverable Bullets */}
                  <ul className="space-y-3 mb-8">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-light-slate">
                        <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                          <Check size={13} className="text-accent" />
                        </div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-tertiary mt-auto">
                  <Link
                    to="/Packages"
                    className="px-5 py-2.5 rounded-lg bg-accent text-white text-sm sm:text-base font-semibold inline-flex items-center gap-2 hover:bg-accent/90 shadow-glow transition-all active:scale-95"
                  >
                    View Packages <ArrowRight size={16} />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-primary border border-tertiary text-slate hover:text-accent text-sm sm:text-base font-medium inline-flex items-center gap-2 transition-colors hover:border-accent/40"
                  >
                    <MessageCircle size={16} /> Inquire
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
