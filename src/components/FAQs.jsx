import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const FAQs = [
    {
      question: "What is Purvanchal Technical Hackathon?",
      answer:
        "It is a inter college hackathon hosted by Kamla Nehru Institute Of Technology, Sultanpur. Its final round will be held on 2nd December, 2025 at KNIT, Sultanpur Campus.",
    },
    {
      question: "Who all are eligible to participate?",
      answer: "Any student pursuing a college degree can participate.",
    },
    {
      question: "It is my first hackathon, what's something I should know?",
      answer:
        "Don’t worry! Hackathons are about learning and teamwork. Bring your curiosity and enthusiasm, mentors and peers will guide you throughout.",
    },
    {
      question: "What is the Round 1?",
      answer:
        "Round 1 is the PPT submission round where participants present their ideas to get shortlisted for the final round.",
    },
    {
      question: "Where and how do I submit my PPT for Round 1?",
      answer:
        "You can submit your PPT through the Unstop registration page till 18 Feb, 2026.",
    },
    {
      question: "Where is it being held?",
      answer:
        "The first round will be hosted online on Unstop and the final round will be hosted at KNIT Sultanpur campus.",
    },
    {
      question: "Can we participate individually?",
      answer:
        "No, the team size should be 2–4 members to enhance learning and collaboration.",
    },
    {
      question: "Will there be food arrangements and accommodation?",
      answer:
        "Yes, meals and accommodation will be provided to all registered participants during the event with a minimal payment.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="min-h-screen flex flex-col items-center px-4 md:px-10 py-16"
    >
      {/* Heading Motion */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14
                   bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
      >
        FAQ&apos;s
      </motion.h2>

      <div className="w-full max-w-4xl space-y-5">
        {FAQs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-xl border border-white/10
                          bg-white/5 backdrop-blur-lg
                          transition-all duration-300
                          ${isOpen
                            ? "shadow-lg shadow-purple-500/30 border-[#B19EEF]/60"
                            : "hover:border-[#B19EEF]/40"
                          }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span
                  className={`text-lg md:text-xl font-semibold transition-colors
                              ${isOpen ? "text-[#B19EEF]" : "text-gray-100"}`}
                >
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold text-[#B19EEF]"
                >
                  +
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden px-6 pb-5"
                  >
                    <p className="text-slate-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
