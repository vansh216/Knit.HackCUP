import { FaCity, FaHeartbeat, FaLeaf, FaShieldAlt, FaBookOpen } from 'react-icons/fa';
import { FiGlobe } from "react-icons/fi";

export default function Tracks() {
    return (
        <div id='tracks' className=" min-h-screen text-white pt-8 md:pt-12">
          

            <div className="px-4 py-6">
                <h1 className=" bg-linear-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center" style={{ fontFamily: 'nexa, sans-serif' }}>
                    TRACKS
                </h1>

                <div className="mt-10 flex justify-center flex-wrap gap-6 w-full">

                    
                    {[
                        {
                            icon: <FaCity className="text-[#B19EEF]" />,
                            text: "Smart Cities & Sustainable Urban Tech",
                            img:"SmartCity.jpeg"
                        },
                        {
                            icon: <FaHeartbeat className="text-[#9F7EE8]" />,
                            text: "AI-Powered Health & Well-Being Solutions",
                            img:"AiPower.jpeg"
                        },
                        {
                            icon: <FaLeaf className="text-[#52ca84]" />,
                            text: "Clean Energy, Climate Action & GreenTech",
                            img:"CleanEng.jpeg"
                        },
                        {
                            icon: <FaShieldAlt className="text-[#B19EEF]" />,
                            text: "Next Gen Cyber Threat Detection and Response",
                            img:"Cyber.jpeg"
                        },
                        {
                            icon: <FaBookOpen className="text-[#9F7EE8]" />,
                            text: "Inclusive Education & Digital Equality",
                            img:"Education.jpeg"
                        },
                        {
                            icon: <FiGlobe className="text-[#52ca84]" />,
                            text: "Open Innovations",
                            img:"OpenE.jpeg"
                        }
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="transition-all duration-300 hover:bg-[url(logo.png)] 
                    hover:bg-cover hover:bg-center w-full sm:w-44 h-52 sm:h-64 md:w-64 md:h-72
           bg-slate-800 border border-white/20 rounded-2xl backdrop-blur-md
           p-5 flex flex-col items-center justify-center text-center
           shadow-lg  hover:scale-105 text-white hover:text-black hover:font-bold hover:bg-slate-600"
           onMouseEnter={e => {
      e.currentTarget.style.backgroundImage = `url(${card.img})`;
      e.currentTarget.style.backgroundSize = "cover";
      e.currentTarget.style.backgroundPosition = "center";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundImage = "";
    }}


                        >
                            <div className="text-4xl sm:text-5xl mb-3">
                                {card.icon}
                            </div>
                            <p className="  text-sm sm:text-base font-semibold leading-snug">
                                {card.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}