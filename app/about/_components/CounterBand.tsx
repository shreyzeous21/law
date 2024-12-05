import React from "react";
import { motion } from "framer-motion";
import { User, Smile, Briefcase, CheckCircle } from "lucide-react"; // Importing icons from lucide-react

const counters = [
  {
    title: "Expert Attorneys",
    icon: <User size={40} />,
    count: "50+",
  },
  {
    title: "Happy Clients",
    icon: <Smile size={40} />,
    count: "80+",
  },
  {
    title: "Cases Complete",
    icon: <Briefcase size={40} />,
    count: "50+",
  },
  {
    title: "Cases Closed",
    icon: <CheckCircle size={40} />,
    count: "70+",
  },
];

const Counter = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 py-10 bg-black text-[#b8967e]">
      {counters.map((counter, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full">
            {counter.icon}
          </div>
          <h2 className="text-2xl font-bold mt-4">{counter.count}</h2>
          <p className="text-lg mt-2">{counter.title}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Counter;
