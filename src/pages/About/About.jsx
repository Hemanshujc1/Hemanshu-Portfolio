import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, MessageCircle, Sparkles, Globe, Video, Bot, TrendingUp, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeadingPart from "../../components/HeadingPart/HeadingPart";
import Contactsection from "../../components/Contactsection/Contactsection";

const stats = [
  { value: "IIIT", label: "Engineered From" },
  { value: "4", label: "Core Services" },
  { value: "24h", label: "Response Time" },
  { value: "100%", label: "Client Focused" },
];

const pillars = [
  {
    icon: Zap,
    title: "Rapid Delivery",
    desc: "Fast production cycles with clear timelines and zero bottlenecks.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    desc: "Everything we build is designed to turn visitors into paying customers.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    desc: "No agency middlemen. You talk directly with us on WhatsApp.",
  },
  {
    icon: Sparkles,
    title: "Modern Tech & AI",
    desc: "Combining Next.js, React & state-of-the-art AI tools for maximum impact.",
  },
];

const services = [
  { icon: Globe, title: "Websites & Web Apps", color: "from-accent/20 to-blue-500/10" },
  { icon: Bot, title: "AI-Generated Videos", color: "from-purple-500/20 to-accent/10" },
  { icon: Video, title: "Video Editing", color: "from-pink-500/20 to-purple-500/10" },
  { icon: TrendingUp, title: "Meta Ads", color: "from-orange-500/20 to-pink-500/10" },
];

const techStack = [
  "React.js", "Next.js", "Node.js", "Tailwind CSS",
  "Premiere Pro", "After Effects", "HeyGen AI",
  "ElevenLabs", "Meta Ads Manager",
];

const About = () => {
  return (
    <div className="flex flex-col gap-0 mt-10">
      <HeadingPart text="About Dev Solutions" />

      {/* Hero Intro Block */}
      <section className="px-6 md:px-16 max-w-6xl mx-auto w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-accent font-mono text-sm tracking-widest uppercase font-semibold">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-lightest-slate mt-3 leading-tight">
                A lean digital studio<br />
                <span className="text-accent">built for real results.</span>
              </h2>
            </div>

            <p className="text-slate text-base sm:text-lg leading-relaxed">
              <strong className="text-lightest-slate">Dev Solutions</strong> is a full-service digital growth studio helping brands, creators, and businesses stand out online — with modern websites, AI-generated videos, cinematic video editing, and high-ROI Meta ad campaigns.
            </p>
            <p className="text-slate text-sm sm:text-base leading-relaxed">
              We're a small, focused team that moves fast, communicates directly, and delivers real work. No fluff. No agency overhead. Just clean, premium digital assets built to grow your business.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/917021552408?text=Hello%20Dev%20Solutions!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm flex items-center gap-2 shadow-glow hover:scale-105 transition-all"
              >
                <FaWhatsapp size={17} /> Chat on WhatsApp
              </a>
              <Link
                to="/Services"
                className="px-6 py-3 rounded-xl bg-secondary border border-tertiary text-lightest-slate hover:text-accent hover:border-accent/40 font-medium text-sm transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-7 rounded-2xl bg-secondary/90 border border-tertiary text-center flex flex-col gap-1 hover:border-accent/40 transition-all shadow-lg"
              >
                <span className="text-4xl font-extrabold text-accent">{stat.value}</span>
                <span className="text-sm text-slate font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-6 md:px-16">
        <div className="h-px bg-tertiary w-full my-6" />
      </div>

      {/* 4 Pillars */}
      <section className="px-6 md:px-16 max-w-6xl mx-auto w-full py-8">
        <div className="text-center mb-10">
          <span className="text-accent font-mono text-sm tracking-widest uppercase font-semibold">
            Our Approach
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate mt-2">
            Why clients choose us
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-secondary/90 border border-tertiary hover:border-accent/40 transition-all shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary border border-tertiary flex items-center justify-center text-accent mb-4 shadow-glow group-hover:scale-105 transition-transform">
                  <Icon size={22} />
                </div>
                <h4 className="text-base font-bold text-lightest-slate mb-2">{item.title}</h4>
                <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-6 md:px-16 max-w-6xl mx-auto w-full py-8">
        <div className="text-center mb-10">
          <span className="text-accent font-mono text-sm tracking-widest uppercase font-semibold">
            What We Offer
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate mt-2">
            4 services. 1 studio.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${s.color} border border-tertiary hover:border-accent/40 transition-all shadow-lg flex flex-col items-center text-center gap-4 group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/60 border border-tertiary flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-glow">
                  <Icon size={26} />
                </div>
                <span className="text-sm sm:text-base font-semibold text-lightest-slate">{s.title}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 max-w-3xl mx-auto text-center py-8">
        <span className="text-xs font-mono text-slate uppercase tracking-wider block mb-4">
          Technologies & Tools
        </span>
        <div className="flex flex-wrap justify-center gap-2.5">
          {techStack.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-lg bg-secondary/90 border border-tertiary text-sm font-mono text-lightest-slate hover:border-accent/40 hover:text-accent transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      <Contactsection />
    </div>
  );
};

export default About;
