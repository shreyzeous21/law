"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Place = () => {
  return (
    <div className="flex flex-col h-auto w-full max-w-6xl px-4 justify-center mx-auto">
      <div className="flex flex-col items-center h-auto gap-10  lg:flex-row-reverse lg:justify-between w-full justify-center">
        <motion.div
          className="lg:w-1/2 h-auto  flex flex-col space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h4
            className="text-lg font-bold text-[#b8967e]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tired with running from pillar to post with your legal issues and
            troubles?
          </motion.h4>
          <motion.h2
            className="text-5xl font-bold text-[#b8967e]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            You've Come to The Right Place.
          </motion.h2>
          <p className="text-gray-700 text-lg">
            Chambers of Sarthak Mittalk, Advocates & Solicitors, spearheaded by
            Mr. Sarthak Mittalk, is a premier full-service litigation firm based
            in New Delhi. With more than three decades of experience in the
            legal field, we are the top lawyers in Delhi, well-equipped to
            provide the best legal solutions to our clients. We handle matters
            in Civil, Criminal, Constitutional, Commercial, Labour, Services,
            Consumer Protection, Matrimonial issues, among other related
            subjects of law.
          </p>
        </motion.div>
        <motion.div
          className="lg:w-1/2 h-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/law-slider-2.jpg"
            width={1000}
            height={1000}
            alt="Legal Expertise"
            className="h-auto w-full rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Place;
