import React from "react";
import { motion } from "framer-motion";
import { Globe, Video, Bot, TrendingUp, Check, ArrowRight, MessageCircle } from "lucide-react";
import HeadingPart from "../../components/HeadingPart/HeadingPart";
import Contactsection from "../../components/Contactsection/Contactsection";
import { servicesData, agencyInfo } from "../../data/agencyData";
import { Link } from "react-router-dom";

const iconMap = {
  Globe,
  Bot,
  Video,
  TrendingUp,
};

const Services = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <HeadingPart text="Our Services" />

      {/* Intro */}
      <div className="px-6 max-w-3xl mx-auto text-center -mt-4">
        <p className="text-slate text-base sm:text-lg font-light leading-relaxed">
          From full-stack web applications to AI spokesperson videos, high-retention video edits, and targeted Meta ad funnels.
        </p>
      </div>

      {/* Services Cards */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.icon] || Globe;
          const whatsappUrl = `https://wa.me/${agencyInfo.whatsappNumber}?text=${encodeURIComponent(
            `Hello Dev Solutions! I am interested in your "${service.title}" service.`
          )}`;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-2xl bg-secondary/90 border border-tertiary flex flex-col justify-between hover:border-accent/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-accent border border-tertiary shadow-glow group-hover:scale-105 transition-transform">
                    <Icon size={28} />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-slate leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-light-slate">
                      <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Check size={13} className="text-accent" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-tertiary mt-auto">
                <Link
                  to="/Packages"
                  className="px-5 py-2.5 rounded-lg bg-accent text-white text-sm sm:text-base font-semibold flex items-center gap-2 hover:bg-accent/90 shadow-glow transition-all"
                >
                  View Packages <ArrowRight size={16} />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-primary border border-tertiary text-slate hover:text-accent text-sm sm:text-base font-medium flex items-center gap-2 transition-colors hover:border-accent/40"
                >
                  <MessageCircle size={16} /> Inquire
                </a>
              </div>
            </motion.div>
          );
        })}
      </section>

      <Contactsection />
    </div>
  );
};

export default Services;
