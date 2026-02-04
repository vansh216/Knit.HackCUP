import React from "react";
import { motion } from "framer-motion";

const prizes = [
  {
    id: 1,
    title: "Second Prize",
    amount: "₹ 15,000",
    icon: "🥇",
    border: "border-yellow-400",
    glow: "hover:shadow-yellow-400/50",
  },
  {
    id: 2,
    title: "First Prize",
    amount: "₹ 10,000",
    icon: "🥈",
    border: "border-gray-300",
    glow: "hover:shadow-gray-300/50",
  },
  {
    id: 3,
    title: "Third Prize",
    amount: "₹ 5,000",
    icon: "🥉",
    border: "border-orange-400",
    glow: "hover:shadow-orange-400/50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Prizes = () => {
  return (
    <section id="prize" className="text-gray-50 py-16 px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl bg-linear-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent font-extrabold tracking-widest mb-12 md:mb-16"
        style={{ fontFamily: "nexa, sans-serif" }}
      >
        PRIZES WORTH ₹30K
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-20 w-full"
      >
        {prizes.map((prize, index) => (
          <motion.div
            key={prize.id}
            variants={card}
            whileHover={{ scale: 1.08 }}
            className={`w-full max-w-xs md:flex-1
              border-2 ${prize.border}
              rounded-2xl py-10 px-6 text-center
              bg-linear-to-br from-slate-900 to-slate-600
              shadow-xl transition-all duration-300
              ${prize.glow} hover:shadow-2xl
              hover:bg-linear-to-br hover:from-slate-500 hover:to-slate-900
              ${
                index === 1
                  ? "md:-translate-y-8 md:scale-110"
                  : ""
              }`}
          >
            <div className="text-5xl md:text-6xl mb-4">{prize.icon}</div>
            <p className="text-xl md:text-2xl font-bold mb-3 tracking-wide">
              {prize.title}
            </p>
            <p className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-[#CFFFE8] to-white bg-clip-text text-transparent">
              {prize.amount}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Prizes;
