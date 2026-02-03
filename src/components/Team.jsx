import { motion } from "framer-motion";

const team = [
  {
    name: "Addeb",
    role: "Hackathon Lead",
    image: "https://avatars.githubusercontent.com/u/179551932?v=4",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "vansh",
    role: "Community & Outreach",
    image: "https://avatars.githubusercontent.com/u/216386028?v=4",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Aman",
    role: "Technical Mentor",
    image: "https://avatars.githubusercontent.com/u/216386028?v=4",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Neha",
    role: "Design & Media",
    image: "https://avatars.githubusercontent.com/u/216386028?v=4",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
];

export default function TeamSection() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent mb-14"
        >
          Meet Our Team
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {member.role}
                </p>

                <div className="flex justify-center gap-5 mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink-500 hover:text-pink-400"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
