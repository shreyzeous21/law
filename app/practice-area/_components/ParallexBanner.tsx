"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ProgressCardProps {
  value: number;
  label: string;
  isVisible: boolean;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  value,
  label,
  isVisible,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      const duration = 2000; // Duration in milliseconds
      const increment = (end / duration) * 10;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          start = end;
        }
        setCount(Math.round(start));
      }, 10);

      return () => clearInterval(counter);
    } else {
      setCount(0); // Reset the counter when not visible
    }
  }, [isVisible, value]);

  return (
    <motion.div
      className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-8 border-[#b8967e] flex items-center justify-center text-3xl font-bold bg-gradient-to-r from-black to-[#b8967e]">
          {count}%
        </div>
      </div>
      <div className="mt-4 text-sm font-semibold text-[#b8967e]">{label}</div>
    </motion.div>
  );
};

const ParallexBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/law-slider-1.jpg')" }}
    >
      <div
        className="absolute inset-0 px-4 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center"
        ref={sectionRef}
      >
        <motion.h1
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We Are The Most Popular Law Firm With Legal Law
        </motion.h1>
        <div className="flex px-4 flex-wrap justify-center gap-8 mb-8">
          <ProgressCard value={60} label="Case Win" isVisible={isVisible} />
          <ProgressCard
            value={80}
            label="Legal Solutions"
            isVisible={isVisible}
          />
        </div>
        <div className="text-lg">
          <p>Monday To Saturday 9.00 AM - 10.30 PM</p>
          <p>168/170, Ave 01, Old York Drive Rich, Mirpur, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default ParallexBanner;
