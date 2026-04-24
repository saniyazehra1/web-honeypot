import React from 'react';
import { Scale, ShieldQuestion, FileCode2 } from 'lucide-react';

export default function Terms() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-accentBlue/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
          Terms & Conditions
        </h1>
        <p className="text-textMuted">
          Legal disclosure for the Synergy AI Platform Usage & Data Capture
        </p>
      </div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-accentBlue/20 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
        <div className="prose prose-invert max-w-none text-textMuted space-y-8">

          <section className="bg-darkBg/40 border border-panelBorder p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-white flex items-center mb-4">
              <Scale className="w-5 h-5 mr-3 text-accentBlue" />
              1. Ethical Hacking & Project Scope
            </h2>
            <p className="leading-relaxed">
              This system is part of a university capstone project focusing on Operational Technology (OT) and cybersecurity. By accessing or attempting to exploit this platform, you acknowledge that this is a simulated deceptive environment (Honeypot) designed strictly for research, academic evaluation, and the advancement of ethical hacking principles. Any unauthorized attempts to compromise the underlying host infrastructure outside the scope of the emulated ICS protocols are strictly prohibited.
            </p>
          </section>

          <section className="bg-darkBg/40 border border-panelBorder p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-white flex items-center mb-4">
              <ShieldQuestion className="w-5 h-5 mr-3 text-purple-400" />
              2. Honeypot Usage & Interception
            </h2>
            <p className="leading-relaxed">
              Users and entities scanning or attempting brute-force authorization on this platform agree that their actions are continuously monitored. The platform utilizes Conpot and custom network capture to log telemetry, including but not limited to Source IPs, captured plaintext credentials, User-Agents, and exploitation vectors. This platform operates as an attractive nuance strictly to capture intelligence on adversarial techniques targeting SCADA and Modbus endpoints.
            </p>
          </section>

          <section className="bg-darkBg/40 border border-panelBorder p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-white flex items-center mb-4">
              <FileCode2 className="w-5 h-5 mr-3 text-green-400" />
              3. Data Privacy for Research
            </h2>
            <p className="leading-relaxed">
              All data harvested through this portal is classified as Threat Intelligence. Real-world credentials inadvertently supplied to this login interface are discarded natively, while synthetic exploitation combinations are kept securely inside an isolated ELK stack (Elasticsearch) architecture. Personal data is not monetized. Logs are routinely safely flushed upon the conclusion of the academic assessment grading phase.
            </p>
          </section>

        </div>

        <div className="mt-12 text-center border-t border-panelBorder pt-8">
          <p className="text-sm font-mono text-white/50">
            Internal Document Ref: SYN-AI-TOS-v1.1 | Developed by Hon. Project Team
          </p>
        </div>
      </div>
    </div>
  );
}
