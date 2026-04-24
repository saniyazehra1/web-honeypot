import React from 'react';
import { ShieldAlert, BrainCircuit, Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full flex justify-center pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">

        {/* Hero Section */}
        <div className="text-center max-w-4xl relative z-10 pt-10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accentBlue/20 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-panelBorder bg-white/5 text-sm font-medium text-textMuted">
            <span className="flex w-2 h-2 rounded-full bg-accentBlue mr-2 animate-pulse"></span>
            Advanced Infrastructure Deception
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Securing Industrial Automation with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-blue-400">
              AI-Driven Honeypots
            </span>
          </h1>
          <p className="mt-6 text-xl text-textMuted mb-12 max-w-3xl mx-auto">
            Deploy high-fidelity deceptive environments tailored for Operational Technology (OT) to capture, analyze, and neutralize adversarial threats in real-time.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/login" className="flex items-center px-8 py-4 bg-gradient-to-r from-accentBlue to-blue-500 text-darkBg border border-transparent hover:from-white hover:to-accentBlue font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] group">
              Access Honeypot
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/features" className="flex items-center px-8 py-4 bg-panelBg text-white border border-panelBorder hover:bg-white/10 font-bold rounded-xl transition-all">
              View Capabilities
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-32 w-full">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Platform Benefits</h2>
            <div className="h-1 w-20 bg-accentBlue mx-auto mt-4 rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<ShieldAlert className="w-10 h-10 text-alertRed" />}
              title="Proactive Threat Detection"
              desc="Identify reconnaissance and exploitation attempts against simulated PLCs before attackers reach the actual critical control network."
              color="group-hover:border-alertRed/50 group-hover:shadow-[0_0_30px_rgba(255,42,42,0.15)]"
            />
            <BenefitCard
              icon={<BrainCircuit className="w-10 h-10 text-purple-400" />}
              title="Expert Knowledge Base"
              desc="Leverage advanced behavioral analysis algorithms to rapidly understand attacker TTPs (Tactics, Techniques, and Procedures)."
              color="group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]"
            />
            <BenefitCard
              icon={<Activity className="w-10 h-10 text-green-400" />}
              title="Real-time Monitoring"
              desc="Gain instant high-level visibility into unauthorized access attempts with live dashboards, alerts, and comprehensive payload logging."
              color="group-hover:border-green-400/50 group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc, color }) {
  return (
    <div className={`glass-panel p-8 rounded-3xl transition-all duration-300 group hover:-translate-y-2 border border-panelBorder ${color}`}>
      <div className="mb-6 w-16 h-16 flex justify-center items-center bg-darkBg/80 rounded-2xl border border-panelBorder group-hover:bg-panelBg transition-colors">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-textMuted leading-relaxed">{desc}</p>
    </div>
  );
}
