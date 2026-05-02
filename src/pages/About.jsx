import React, { useState } from 'react';
import { Users, GraduationCap, Github, Linkedin, Mail, X } from 'lucide-react';

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamData = [
    {
      name: "Saniya Zehra",
      role: "Lead Developer",
      image: "./saniya.png",
      description: "Saniya is the visionary and main developer behind the Synergy AI Portal. As the lead architect, she single-handedly engineered 99% of the platform, building everything from the intricate backend honeypot logic to the stunning frontend UI. Her unparalleled dedication and expertise brought this entire project to life."
    },
    {
      name: "Nidhi",
      role: "Assistant Developer",
      image: "./nidhi.png",
      description: "Nidhi serves as the Assistant Developer, providing crucial support in testing components, refining code structure, and assisting Saniya in ensuring the platform runs smoothly."
    },
    {
      name: "Shradha",
      role: "Security Tester",
      image: "./shradha.png",
      description: "Shradha is the Security Tester, responsible for attempting to breach the honeypot defenses to ensure its logging capabilities, alerts, and security mockups are bulletproof."
    },
    {
      name: "Pooja",
      role: "Quality Analyst",
      image: "./pooja.png",
      description: "Pooja acts as the Quality Analyst, meticulously reviewing the project deliverables, documentation, and ensuring that the final presentation meets the highest academic standards."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">

      <div className="text-center max-w-2xl mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accentBlue/10 blur-[100px] rounded-full pointer-events-none"></div>
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Project Team
        </h1>
      </div>

      {/* Team Members Grid with descriptions */}
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamMember 
              key={index} 
              member={member} 
              onNameClick={() => setSelectedMember(member)} 
            />
          ))}
        </div>
      </div>

      {/* Beautiful Modal for Description */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedMember(null)}
          ></div>
          <div className="relative bg-darkBg border border-accentBlue/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] rounded-3xl p-8 max-w-lg w-full transform transition-all animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-textMuted hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-accentBlue shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-1">{selectedMember.name}</h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-accentBlue mb-6">{selectedMember.role}</p>
              <div className="w-12 h-1 bg-gradient-to-r from-accentBlue to-purple-500 rounded-full mb-6"></div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedMember.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function TeamMember({ member, onNameClick }) {
  return (
    <div className="glass-panel p-6 rounded-3xl text-center group hover:-translate-y-2 transition-all duration-300 border border-panelBorder hover:border-accentBlue/40 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col items-center">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-panelBorder group-hover:border-accentBlue transition-colors shadow-lg relative cursor-pointer" onClick={onNameClick}>
        <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
      </div>
      <button 
        onClick={onNameClick}
        className="text-xl font-bold text-white mb-2 hover:text-accentBlue transition-colors focus:outline-none relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accentBlue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
        title="Click to read description"
      >
        {member.name}
      </button>
      <p className="text-xs font-semibold uppercase tracking-wider text-accentBlue mb-6">{member.role}</p>

      <div className="flex justify-center gap-3 w-full border-t border-panelBorder/50 pt-4 mt-auto">
        <SocialIcon Icon={Github} />
        <SocialIcon Icon={Linkedin} />
        <SocialIcon Icon={Mail} />
      </div>
    </div>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a href="#" className="p-2 bg-darkBg rounded-xl border border-panelBorder text-textMuted hover:text-accentBlue hover:border-accentBlue/50 transition-all">
      <Icon className="w-4 h-4" />
    </a>
  );
}
