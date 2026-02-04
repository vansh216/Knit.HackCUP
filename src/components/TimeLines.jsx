import React from "react";

export default function Timelines() {
  const timelineData = [
    {
      number: "1",
      heading: "Registrations Open",
      text: (
        <>
          <b>From 25 November 2025</b>
          <br />
          All Aboard! Save your spot at Purvanchal student-run hackathon by Google
          Developer Group on Campus KNIT.
        </>
      ),
    },
    {
      number: "2",
      heading: "Registrations Close",
      text: (
        <>
          <b>Last date - 18 Feb 2026 at 11:59 PM</b>
          <br />
          Gate Closes – Last chance to join the hacker caravan.
        </>
      ),
    },
    {
      number: "3",
      heading: "Results for Round 1 (Idea Submission Round)",
      text:
        "Shortlisted teams will be notified via email & our social media platforms by 20 Feb 2026.",
    },
    {
      number: "4",
      heading: "Offline Round on Campus",
      text: (
        <>
          <b>Date - 28 Feb, 09:00 AM Onwards</b>
          <br />
          Ideas will be evaluated based on creativity, feasibility, and impact.
        </>
      ),
    },
    {
      number: "5",
      heading: "Results and Prize Distribution",
      text: (
        <>
          <b>Date - 28 Feb, 09:00 PM Onwards</b>
        </>
      ),
    },
  ];

  return (
    <section id="timeline" className="min-h-screen px-4 md:px-10 py-20">
      <h1
        className="text-center text-4xl md:text-5xl font-black tracking-widest mb-20 
                   bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
        style={{ fontFamily: "nexa, sans-serif" }}
      >
        TIMELINE
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Center Line (desktop only) */}
        <div
          className="absolute left-1/2 top-0 h-full w-1 
                     bg-gradient-to-b from-[#B19EEF] via-[#7c7cff] to-transparent 
                     -translate-x-1/2 hidden md:block"
        />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-16
                ${isLeft ? "md:justify-start" : "md:justify-end"}`}
            >
              {/* Number Circle */}
              <div
                className="
                  static md:absolute
                  md:left-1/2 md:top-1/2
                  md:-translate-x-1/2 md:-translate-y-1/2
                  mb-4 md:mb-0
                  w-14 h-14 rounded-full
                  bg-gradient-to-br from-slate-800 to-slate-400
                  flex items-center justify-center
                  text-xl font-bold text-white
                  shadow-xl shadow-purple-500/40
                "
              >
                {item.number}
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-[46%]
                  bg-gradient-to-br from-slate-900 to-slate-800
                  border border-[#B19EEF]/30
                  rounded-xl p-6
                  shadow-lg shadow-purple-500/10
                  hover:shadow-purple-500/30 hover:-translate-y-1
                  transition-all duration-300`}
              >
                <h3 className="text-xl font-bold text-[#B19EEF] mb-2">
                  {item.heading}
                </h3>
                <div className="text-slate-200 text-sm leading-relaxed">
                  {item.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
