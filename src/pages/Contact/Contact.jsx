import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setResult(null);

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setResult({ type: "success", message: responseData.message });
        reset();
      } else {
        setResult({
          type: "error",
          message: responseData.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(null), 5000);
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const inputClasses =
    "w-full p-4 rounded-lg bg-secondary text-lightest-slate border border-lightest-slate/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-slate/50";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center pt-32 pb-12 md:justify-center md:py-20 px-4 md:px-6 bg-primary overflow-x-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10"
      >
        {/* Left Section - Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-lightest-slate mb-6">
              Let's Chat.
              <br />
              <span className="text-slate">Tell me about your project.</span>
            </h2>
            <p className="text-slate text-base md:text-lg leading-relaxed mb-8">
              Let's create something together. I'm open to freelance projects,
              collaborations, or just a friendly chat about technology.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:hemanshuwork26@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-lightest-slate/5 hover:border-accent/30 hover:bg-secondary transition-all group text-left"
            >
              <div className="p-3 rounded-full bg-primary text-accent group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-mono text-slate mb-1">
                  Mail me at
                </h4>
                <p className="text-lightest-slate font-normal group-hover:text-accent transition-colors break-all">
                  hemanshuwork26@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/917021552408"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-lightest-slate/5 hover:border-accent/30 hover:bg-secondary transition-all group text-left"
            >
              <div className="p-3 rounded-full bg-primary text-accent group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-mono text-slate mb-1">WhatsApp</h4>
                <p className="text-lightest-slate font- group-hover:text-accent transition-colors">
                  +91 702 155 2408
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-7/12 bg-secondary rounded-2xl p-6 md:p-10 shadow-2xl border border-lightest-slate/5"
        >
          <h3 className="text-2xl font-bold text-lightest-slate mb-6">
            Send me a message
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <input
                  {...register("FirstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="First Name"
                  className={inputClasses}
                />
                {errors.FirstName && (
                  <span className="text-red-400 text-xs mt-1 block">
                    {errors.FirstName.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  {...register("LastName", {
                    required: "Last name is required",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className={inputClasses}
                />
                {errors.LastName && (
                  <span className="text-red-400 text-xs mt-1 block">
                    {errors.LastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <input
                  {...register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email Address"
                  className={inputClasses}
                />
                {errors.Email && (
                  <span className="text-red-400 text-xs mt-1 block">
                    {errors.Email.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <input
                  {...register("Number", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  placeholder="Phone Number"
                  className={inputClasses}
                />
                {errors.Number && (
                  <span className="text-red-400 text-xs mt-1 block">
                    {errors.Number.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <input
                {...register("Subject", { required: "Subject is required" })}
                type="text"
                placeholder="Subject"
                className={inputClasses}
              />
              {errors.Subject && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.Subject.message}
                </span>
              )}
            </div>

            <div>
              <textarea
                {...register("Message", { required: "Message is required" })}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputClasses} resize-none`}
              />
              {errors.Message && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.Message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg bg-accent/10 text-accent border border-accent/50 font-mono font-bold hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-center text-sm font-medium ${
                  result.type === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {result.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
