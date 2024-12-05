"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className="flex flex-col h-auto w-full max-w-6xl px-4 justify-center mx-auto">
      <motion.h1
        className="text-5xl font-bold lg:mb-0 mb-5 text-[#b8967e]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Philosophy
      </motion.h1>
      <div className="flex flex-col items-center h-auto lg:gap-20 gap-10 lg:flex-row lg:justify-between w-full justify-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-700 text-lg">
            One of the most distinguished and celebrated first-principles
            lawyers of the Delhi High Court; Chambers of Sarthak Mittalk,
            Advocates & Solicitors strives on the same virtuosity and dedication
            towards attending to every client matter with the utmost integrity
            and highest level of professionalism. Our incomparable focus on
            ‘quality’ and rigorous attention to detail stands us apart and has
            helped us achieve a gold-standard of faith and trust with our
            clients.
          </p>
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/law-slider-2.jpg"
            width={1000}
            height={1000}
            alt="ourp"
            className="h-auto w-full rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
