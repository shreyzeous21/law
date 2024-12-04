"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const AboutHome = () => {
  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className=" justify-center mx-auto flex w-full ">
      <div className="max-w-6xl w-full gap-10 px-4 h-full flex flex-col lg:flex-row justify-center">
        {/* Images Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <motion.div
            className="bg-gray-200 w-full h-40 lg:h-48 rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/law-slider-1.jpg"
              alt="law 1"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            className="bg-gray-200 w-full h-40 lg:h-48 rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/law-slider-2.jpg"
              alt="law 2"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="bg-gray-200 w-full h-40 lg:h-48 rounded-lg shadow-md overflow-hidden flex flex-col justify-center items-start p-4">
            <span className="text-[#b8967e] text-4xl font-bold">
              <CountUp start={0} end={25} duration={5} />+
            </span>
            <p className="text-black font-semibold text-lg">
              Years of Experience
            </p>
            <img src="/clients.png" alt="" />
            <p className="text-black font-semibold text-lg">
              Divorce Satisfied Clients
            </p>
          </div>
          <motion.div
            className="bg-gray-200 w-full h-40 lg:h-48 rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/law-slider-1.jpg"
              alt="law 1"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 flex gap-4 flex-col justify-center lg:items-start items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariant}
        >
          <span className="text-black bg-gray-200 text-center lg:w-auto py-1 px-4 rounded-md shadow-md">
            About Us
          </span>
          <h1 className=" text-4xl lg:text-5xl text-black font-bold leading-tight text-center lg:text-start">
            Experienced Divorce Lawyers by Your Side
          </h1>
          <p className="text-gray-700 text-center lg:text-start">
            Our experienced divorce lawyers are not just legal professionals;
            they are your advocates, your confidants, and your partners in law.
          </p>
          <div className="flex flex-col lg:items-start items-center w-full lg:w-[35vw]">
            <h2 className="text-lg font-semibold text-center lg:text-left">
              Our Best Service Benefits:
            </h2>
            <div className="flex font-semibold mx-auto flex-col justify-between lg:flex-row w-full">
              <ul className="list-disc list-inside">
                <li>Free Consultation</li>
                <li>24/7 Support</li>
                <li>Confidentiality</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>Experienced Professionals</li>
                <li>Tailored Solutions</li>
                <li>Peace of Mind</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#b8967e] rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#b8967e]"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#b8967e]"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#bdb3ab] rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Speak With a Lawyer
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHome;
