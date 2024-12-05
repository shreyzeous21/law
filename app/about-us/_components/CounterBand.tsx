"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterItem {
  img: string;
  count: number;
  label: string;
}

const counters: CounterItem[] = [
  { img: "/attorneys.svg", count: 50, label: "Expert Attorneys" },
  { img: "/happy-clients.svg", count: 80, label: "Happy Clients" },
  { img: "/cases-complete.svg", count: 100, label: "Cases Complete" },
  { img: "/cases-closed.svg", count: 120, label: "Cases Closed" },
];

const CounterBand: React.FC = () => {
  return (
    <div className="flex flex-col h-auto w-full max-w-6xl px-4 items-center justify-center mx-auto">
      <section className="bg-gray-800 h-auto rounded-xl p-10 flex flex-col lg:flex-row w-full justify-between items-center">
        {counters.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col py-4 px-6 items-center justify-center text-center border border-transparent transition duration-300 hover:border-white rounded-lg mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={item.img} alt={item.label} className="w-16 h-16 mb-4" />
            <Counter end={item.count} />
            <p className="text-white font-semibold mt-2">{item.label}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

interface CounterProps {
  end: number;
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    const duration = 2000;
    const increment = endValue / (duration / 100);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(counter);
        start = endValue;
      }
      setCount(Math.floor(start));
    }, 100);

    return () => clearInterval(counter);
  }, [end]);

  return <span className="font-bold text-4xl text-white">{`${count}+`}</span>;
};

export default CounterBand;
