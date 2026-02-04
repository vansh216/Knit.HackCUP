import React, { useEffect, useRef } from 'react'

import { motion } from "framer-motion";



const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
       <div
  id="about"
  className=" relative overflow-hidden h-screen px-4 md:px-8 lg:px-12 py-6 md:py-8"
  ref={sectionRef}
>
  <div className="relative z-10 w-full h-full flex flex-col">

    {/* ABOUT HEADING */}
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center justify-center py-4 md:py-6 animate-on-scroll"
    >
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
        style={{ fontFamily: "nexa, sans-serif" }}
      >
        ABOUT
      </h2>
    </motion.div>

    <div className="flex justify-center flex-1 overflow-hidden">
      <div className="w-full max-w-7xl grid lg:grid-cols-[58%_42%] items-center gap-6 md:gap-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6 animate-on-scroll animation-delay-200 px-4 md:px-8 lg:px-12 py-4 md:py-6 bg-transparent flex flex-col justify-center"
        >
          <div className="space-y-4 md:space-y-6">
            <p
              className="text-gray-50 text-base font-semibold md:text-lg leading-relaxed tracking-wide"
              style={{ wordSpacing: "0.1em", letterSpacing: "0.02em" }}
            >
              <span className="text-[#7CFF4D] font-semibold">
                Google Developer Group KNIT Sultanpur
              </span>{" "}
              presents{" "}
              <span className="text-[#7CFF4D] font-bold">
                Hacker Cup Hackathon
              </span>{" "}
              on Mar 17, 2026. This flagship event brings together passionate
              developers, creative thinkers, and innovative teams from across
              the region.
            </p>

            <p
              className="text-gray-50 font-semibold text-base md:text-lg leading-relaxed tracking-wide"
              style={{ wordSpacing: "0.1em", letterSpacing: "0.02em" }}
            >
              <span className="text-[#7CFF4D] font-bold">
                Gear up your tech stack
              </span>
              , brainstorm bold ideas, unite as a team, and build solutions that
              matter at{" "}
              <span className="text-[#7CFF4D] font-bold">
                Purvanchal Technical Hackathon
              </span>{" "}
              - the signature hackathon experience at KNIT Sultanpur!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4 md:pt-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 text-white hover:bg-red-600 font-semibold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded hover:text-[#060010] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl inline-block"
            >
              Register Now
            </a>

            <button
              className="bg-transparent border-2 border-slate-800 text-slate-300 hover:text-gray-50 font-semibold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const tracksSection = document.getElementById("tracks");
                if (tracksSection) {
                  tracksSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Tracks
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative animate-on-scroll animation-delay-400 justify-self-center hidden lg:block"
        >
          <div className="relative group max-w-lg mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-[#1c4980]/20 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

            <div className="relative">
              <img
                src="hacks.jpeg"
                alt="HackTU 7.0 - Hackathon Illustration"
                className="w-full h-auto min-h-[100vh] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
</div>

    )
}

export default About