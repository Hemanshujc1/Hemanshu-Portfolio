import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { clientTestimonials, agencyFaqs } from "../../data/agencyData";

const TestimonialsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 block">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-lightest-slate tracking-tight">
            Trusted By Growing Brands &amp; Creators
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {clientTestimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-secondary/90 border border-lightest-slate/10 p-7 rounded-2xl flex flex-col justify-between shadow-xl relative group hover:border-accent/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={22} className="text-accent/30" />
                </div>
                <p className="text-slate text-sm leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-lightest-slate/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-lightest-slate">{item.name}</h4>
                  <span className="text-xs text-slate">{item.role}</span>
                </div>
                <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                  {item.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {agencyFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-secondary/70 border border-lightest-slate/10 p-5 rounded-xl"
              >
                <h4 className="text-base font-bold text-lightest-slate mb-2">
                  {faq.question}
                </h4>
                <p className="text-slate text-xs sm:text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
