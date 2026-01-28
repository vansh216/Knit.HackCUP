import React from "react";

const Hero = () => {
  return (
    <section className="h-screen w-full mt-10 bg-white flex items-center">
      <div className="w-full  md:px-10 flex md:justify-between md:flex-row flex-col gap-10 items-center">
        
       
        <div className="flex md:w-1/2 flex-col px-4 gap-y-4   md:pl-25 md:gap-y-7 ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            GDG Hacker CUP
          </h1>

          <p className="text-lg text-gray-600">
            A 24-Hour Hackathon by{" "}
            <span className="font-semibold text-blue-900">
              Google Developer Groups
            </span>
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-xl">📅</span>
            <span className="font-medium">17 March 2026</span>
          </div>

          <h3 className="text-xl font-semibold text-slate-900">
            Build. Break. Innovate.
          </h3>

          <p className="text-gray-600 max-w-md">
            Join developers, designers, and creators to solve real-world
            problems, collaborate with top minds, and win exciting prizes —
            powered by the GDG community.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition">
              🚀 Register Now
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg flex items-center gap-2 transition">
              ▶ View Schedule
            </button>
          </div>
        </div>

       
        <div className="flex justify-center md:justify-end">
          <img
            src="logo.png"
            alt="GDG Hacker Cup"
            className="w-800 md:w-170 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
