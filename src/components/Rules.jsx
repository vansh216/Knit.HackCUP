import React from "react";

const Rules = () => {
  const rules = [
    "Team Formation: Participants can form teams of 2 to 4 members.",
    "Group leader need to fill the online registration form and fill the details of all members.",
    "Registration fee is non refundable",
    "We encourage multidisciplinary participations",
    "Student can participate only in team",
    "At least one member must be present on the allocated area",
    "All work must be created during the hackathon.",
    "Teams have to present their solution in the form of a prototype",
    "Projects must align with the given hackathon themes or challenges.",
    "All projects must be submitted by the designated deadline, including project description, code, and Presentation",
    "Project Scope: Teams can work on any project within the given theme.",
    "Time Limit: The Hackathon will have a specific time limit.",
    "The use of pre-existing code or projects is not allowed, except for open-source libraries or frameworks.",
    "Code Ownership: All code developed during the Hackathon should be the original work of the team.",
    "Collaboration: Teams are encouraged to collaborate and seek help from mentors, but cross-team collaboration is not allowed.",
    "Presentation: Each team will have to present their project to the judging panel.",
    "Judging Criteria: Innovation, technical implementation, UX, scalability, and relevance.",
    "Fair Play: Any form of cheating or plagiarism will result in disqualification.",
    "Intellectual Property: Participants retain full ownership of their projects.",
    "Code Submission: Teams must submit their code before the deadline.",
    "Code Validation: Organizers may validate code originality.",
    "Code Sharing: Open sourcing on GitHub is appreciated.",
    "Code of Conduct: Inclusivity, respect, and professionalism are mandatory.",
    "Prizes and Awards: Winners will receive prizes based on judging criteria.",
    "Disputes: Decision of organizers and judges will be final.",
    "Liability: Organizers hold no liability for losses or injuries.",
    "Changes to Rules: Organizers may modify rules if required.",
    "There will be no TA/DA for the participants to attend hackathon.",
  ];

  return (
    <section
      id="rules"
      className="min-h-screen px-4 md:px-10 py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14
                     bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent">
        Hackathon Rules
      </h2>

      <div
        className="w-full max-w-5xl max-h-[520px] overflow-y-auto pr-3 space-y-4
                   [&::-webkit-scrollbar]:w-2
                   [&::-webkit-scrollbar-track]:bg-[#0f0a18]
                   [&::-webkit-scrollbar-thumb]:bg-[#B19EEF]
                   [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {rules.map((rule, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl
                       border border-white/10 rounded-xl p-5
                       hover:border-[#B19EEF]/60
                       transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex gap-4 items-start">
              <div className="min-w-[36px] h-9 rounded-full
                              bg-gradient-to-br from-[#B19EEF] to-[#7c6cff]
                              text-black font-bold flex items-center justify-center shadow-md">
                {index + 1}
              </div>

              <p className="text-slate-200 leading-relaxed text-sm md:text-base">
                {rule}
              </p>
            </div>
          </div>
        ))}

        {/* NOTE */}
        <div className="mt-8 p-6 rounded-xl
                        bg-gradient-to-br from-[#1a102a] to-[#120a1f]
                        border border-[#B19EEF]/60 shadow-lg">
          <p className="text-slate-100 font-semibold">
            <span className="text-[#B19EEF]">Note:</span> There will be three
            prizes (First, Second & Third). Final decision of the evaluation
            panel will be binding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;
