import React from 'react';
import { Users, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
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
          <TeamMember name="Saniya Zehra" role="Lead Developer" image="./saniya.png" />
          <TeamMember name="Nidhi" role="Assistant Developer" image="./nidhi.png" />
          <TeamMember name="Shradha" role="Security Tester" image="./shradha.png" />
          <TeamMember name="Pooja" role="Quality Analyst" image="./pooja.png" />
        </div>
      </div>

    </div>
  );
}

function TeamMember({ name, role, image }) {
  return (
    <div className="glass-panel p-6 rounded-3xl text-center group hover:-translate-y-2 transition-all duration-300 border border-panelBorder hover:border-accentBlue/40 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col items-center">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-panelBorder group-hover:border-accentBlue transition-colors shadow-lg relative">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-xs font-semibold uppercase tracking-wider text-accentBlue mb-6">{role}</p>

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
