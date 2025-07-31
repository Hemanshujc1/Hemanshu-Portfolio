"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
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

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setResult(responseData.message);
        reset();
      } else {
        setResult(responseData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(null), 5000);
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-y-auto py-20 mt-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row w-full h-[100vh] contact-page"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-white text-center flex flex-col justify-center items-center gap-4 p-6"
        >
          <div className="mt-3 max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Contact Me
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Whether you’re looking to collaborate on a project, have a
              question, or just want to connect — I’d love to hear from you.
              Feel free to reach out via email or WhatsApp, or simply fill out
              the form, and I’ll get back to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:hemanshuwork26@gmail.com"
              className="flex items-center justify-center gap-3"
            >
              <img
                src="/icons8-gmail.svg"
                alt="Gmail"
                width={34}
                height={34}
                className="rounded-md cursor-pointer"
              />
              <p className="text-sm sm:text-base">hemanshuwork26@gmail.com</p>
            </a>
            <a
              href="https://wa.me/917021552408?text=Hello!%20Hemanshu%20I%20just%20came%20across%20your%20portfolio"
              className="flex items-center justify-center gap-3"
            >
              <img
                src="/icons8-whatsapp.svg"
                alt="whatsapp"
                width={34}
                height={34}
                className="rounded-md cursor-pointer"
              />
              <p className="text-sm sm:text-base">+91 7021552408</p>
            </a>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center items-center p-4"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-3xl flex flex-col items-center gap-4 text-white"
          >
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col w-full">
                {errors.FirstName && (
                  <span className="text-red-500 text-xs">
                    {errors.FirstName.message}
                  </span>
                )}
                <input
                  {...register("FirstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "Min length is 2" },
                    maxLength: { value: 20, message: "Max length is 20" },
                  })}
                  type="text"
                  placeholder="First Name"
                  className="p-3 rounded-full bg-white text-black shadow-md text-center"
                />
              </div>
              <div className="flex flex-col w-full">
                {errors.LastName && (
                  <span className="text-red-500 text-xs">
                    {errors.LastName.message}
                  </span>
                )}
                <input
                  {...register("LastName", {
                    required: "Last name is required",
                    minLength: { value: 2, message: "Min length is 2" },
                    maxLength: { value: 20, message: "Max length is 20" },
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="p-3 rounded-full bg-white text-black shadow-md text-center"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col w-full">
                {errors.Email && (
                  <span className="text-red-500 text-xs">
                    {errors.Email.message}
                  </span>
                )}
                <input
                  {...register("Email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-full bg-white text-black shadow-md text-center"
                />
              </div>
              <div className="flex flex-col w-full">
                {errors.Number && (
                  <span className="text-red-500 text-xs">
                    {errors.Number.message}
                  </span>
                )}
                <input
                  {...register("Number", {
                    required: "Mobile number is required",
                    minLength: { value: 10, message: "Min length is 10" },
                    maxLength: { value: 14, message: "Max length is 14" },
                  })}
                  type="tel"
                  placeholder="Mobile Number"
                  className="p-3 rounded-full bg-white text-black shadow-md text-center"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="w-full flex flex-col">
              {errors.Subject && (
                <span className="text-red-500 text-xs">
                  {errors.Subject.message}
                </span>
              )}
              <input
                {...register("Subject", {
                  required: "Subject is required",
                  minLength: { value: 5, message: "Min length is 5" },
                  maxLength: { value: 50, message: "Max length is 50" },
                })}
                type="text"
                placeholder="Subject"
                className="p-3 rounded-full bg-white text-black shadow-md text-center w-full"
              />
            </div>

            {/* Message */}
            <div className="w-full flex flex-col">
              {errors.Message && (
                <span className="text-red-500 text-xs">
                  {errors.Message.message}
                </span>
              )}
              <textarea
                {...register("Message", {
                  required: "Message is required",
                  minLength: { value: 20, message: "Min length is 20" },
                  maxLength: { value: 1000, message: "Max length is 1000" },
                })}
                placeholder="Message"
                rows={5}
                className="p-4 rounded-md bg-white text-black shadow-md resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center gap-4 mt-3">
              <input
                type="submit"
                value={isSubmitting ? "Sending..." : "Message Me"}
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-md text-white font-bold transition-all bg-ambient shadow-ambient ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-200'
                }`}
              />
              {result && (
                <div className={`text-sm font-extrabold transition-opacity duration-300 ease-in ${
                  result.includes('Thank you') || result.includes('success') 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {result}
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
