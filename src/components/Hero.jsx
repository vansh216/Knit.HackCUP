import React from "react";
import { motion } from "framer-motion";

import LiquidEther from './Liquid';

const Hero = () => {
  return (
    <section className=" md:h-screen w-full   flex items-center">
      <div style={{ width: '100%', height: 650, position: 'relative' }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    color0="#5227FF"
    color1="#ae9eff"
    color2="#B19EEF"
/>
     <div className="absolute top-0 h-screen left-0 w-full md:px-10 flex md:justify-between md:flex-row flex-col gap-10 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex md:w-1/2 flex-col px-4 gap-y-4 md:pl-25 md:gap-y-7"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-400 to-slate-700">
          GDG Hacker CUP
        </h1>

        <p className="text-lg text-gray-50">
          A 24-Hour Hackathon by{" "}
          <span className="font-semibold text-blue-900">
            Google Developer Groups
          </span>
        </p>

        <div className="flex items-center gap-2 text-gray-700">
          <span className="text-xl">📅</span>
          <span className="font-medium text-yellow-500">17 March 2026</span>
        </div>

        <h3 className="text-xl font-semibold bg-linear-to-r from-slate-400 to-slate-900 bg-clip-text text-transparent">
          Build. Break. Innovate.
        </h3>

        <p className="text-gray-50 max-w-md">
          Join developers, designers, and creators to solve real-world
          problems, collaborate with top minds, and win exciting prizes —
          powered by the GDG community.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-slate-700 hover:bg-red-600 hover:text-black hover:font-semibold hover:scale-110 text-white px-6 py-3 rounded-lg shadow-md transition">
            🚀 Register Now
          </button>

          <button
            onClick={() => {
              const tracksSection = document.getElementById("timeline");
              if (tracksSection) {
                tracksSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border border-gray-300 text-gray-50 hover:bg-gray-50 hover:scale-110 hover:text-black px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            ▶ View Schedule
          </button>
        </div>
      </motion.div>

      {/* RIGHT LOGO */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="md:flex hidden  justify-center md:justify-end"
      >
        <img
          src="logo.png"
          alt="GDG Hacker Cup"
          className="w-80 md:w-170 object-contain"
        />
      </motion.div>

    </div>
            </div>
    </section>
  );
};

export default Hero;
