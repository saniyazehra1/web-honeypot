import React from 'react';
import { Network, Server, HardDrive, Radio, Search } from 'lucide-react';

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-textMuted mb-6">
          System Architecture & Emulation
        </h1>
        <p className="text-lg text-textMuted">
          Comprehensive technical infrastructure designed to faithfully emulate real-world OT systems, acting as a highly attractive decoy for adversaries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

        {/* Network Topology Visual */}
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-accentBlue/10 blur-[80px] rounded-full pointer-events-none"></div>

          <h2 className="text-2xl font-bold mb-8 flex items-center shrink-0 z-10">
            <Network className="w-6 h-6 mr-3 text-accentBlue" />
            Emulated Honeypot Subnet
          </h2>

          <div className="flex-1 flex flex-col justify-center items-center relative z-10 mt-4">
            <div className="w-full max-w-md border border-alertRed/30 bg-alertRed/5 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-panelBg px-3 text-[10px] text-alertRed font-bold border border-alertRed/30 rounded uppercase tracking-wider animate-pulse">
                Exposed Demilitarized Zone (DMZ)
              </div>

              <div className="flex justify-center mb-6">
                <Node icon={<Radio className="text-alertRed w-6 h-6" />} label="Edge Router" sub="Public NAT" />
              </div>

              <div className="h-8 w-px bg-alertRed/30 mx-auto -mt-6 mb-2 border-l border-dashed border-alertRed/50"></div>

              <div className="grid grid-cols-2 gap-6 relative">
                <Node icon={<Server className="text-green-400 w-6 h-6" />} label="Conpot Node" sub="192.168.1.50" />
                <Node icon={<HardDrive className="text-yellow-400 w-6 h-6" />} label="Modbus Service" sub=":502" />
              </div>
            </div>

            <div className="w-px h-12 border-l-2 border-dashed border-panelBorder mx-auto my-2"></div>

            <div className="w-full max-w-sm border border-blue-500/30 bg-blue-500/5 rounded-xl p-4 flex items-center justify-center gap-4">
              <Search className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-white">ELK Stack Log Forwarding</span>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          <h2 className="text-2xl font-bold mb-8 flex items-center z-10">
            <Server className="w-6 h-6 mr-3 text-purple-400" />
            Core Technologies
          </h2>

          <ul className="space-y-6 z-10">
            <FeatureRow
              title="Low-Interaction Conpot"
              desc="Simulates complete industrial machinery including Siemens S7 PLCs to attract Modbus, s7comm, and HTTP probes."
            />
            <FeatureRow
              title="Packet Capture (PCAP)"
              desc="Invisible background network analyzers trap all payload content, reconstructing adversarial zero-day payloads."
            />
            <FeatureRow
              title="Intrusion Detection (IDS)"
              desc="Rule-based correlation engines compare incoming exploitation vectors against known SCADA vulnerability signatures."
            />
          </ul>
        </div>

      </div>
    </div>
  );
}

function FeatureRow({ title, desc }) {
  return (
    <li className="flex items-start bg-darkBg/50 p-5 rounded-2xl border border-panelBorder/50 group hover:border-accentBlue/30 transition-colors">
      <div className="w-2 h-2 rounded-full bg-accentBlue mt-2 mr-4 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
      <div>
        <h4 className="font-semibold text-white text-lg">{title}</h4>
        <p className="text-sm text-textMuted mt-1 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function Node({ icon, label, sub }) {
  return (
    <div className="flex flex-col items-center p-3 bg-darkBg/90 border border-panelBorder rounded-xl text-center shadow-lg group hover:border-white/20 transition-all">
      <div className="mb-2 p-2 bg-white/5 rounded-lg">{icon}</div>
      <span className="text-sm font-bold text-white truncate w-full">{label}</span>
      {sub && <span className="text-[10px] font-mono text-textMuted truncate mt-0.5 bg-black/40 px-2 py-0.5 rounded">{sub}</span>}
    </div>
  )
}
