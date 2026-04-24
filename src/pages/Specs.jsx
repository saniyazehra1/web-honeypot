import React from 'react';
import { Cpu, HardDrive, Zap, Code, Shield, Droplet, Flame, ArrowRight } from 'lucide-react';

export default function Specs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-textMuted mb-4">
          Architecture & Specifications
        </h1>
        <p className="text-textMuted">
          Comprehensive technical documentation of the OT Honeypot infrastructure, designed to emulate industrial control systems and capture adversarial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        {/* Hardware Specs */}
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-accentBlue/10 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-accentBlue" />
            Hardware Infrastructure
          </h2>
          <ul className="space-y-4">
            <SpecItem
              icon={<Cpu />}
              title="Raspberry Pi 4 Model B"
              desc="Quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz with 4GB LPDDR4 memory serving as the physical honeypot node."
            />
            <SpecItem
              icon={<HardDrive />}
              title="256GB NVMe M.2 SSD"
              desc="High-speed solid-state storage via USB 3.0 enclosure for reliable log caching and operating system hosting."
            />
            <SpecItem
              icon={<Zap />}
              title="Uninterruptible Power Supply (UPS)"
              desc="PiJuice HAT or equivalent inline battery backup to prevent corruption during sudden power drops (common in OT environments)."
            />
          </ul>
        </div>

        {/* Software Specs */}
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-alertRed/10 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="w-6 h-6 mr-3 text-alertRed" />
            Software Stack
          </h2>
          <ul className="space-y-4">
            <SpecItem
              icon={<Code />}
              title="Python & Conpot"
              desc="Conpot is a low-interactive server-side ICS honeypot designed to be easily deployed, modified and extended."
            />
            <SpecItem
              icon={<ActivityIcon />}
              title="Wireshark / TShark"
              desc="Network protocol analyzer running in the background to capture full packet dumps (.pcap) of malicious interactions."
            />
            <SpecItem
              icon={<Shield />}
              title="Snort IDS"
              desc="Open-source intrusion detection system matching incoming traffic against known ICS/SCADA exploit signatures."
            />
            <SpecItem
              icon={<HardDrive />}
              title="Elasticsearch / ELK Stack"
              desc="Centralized log aggregation and search engine for parsing, indexing, and visualizing the honeypot sensor data."
            />
          </ul>
        </div>

      </div>

      {/* Industrial Applications */}
      <h2 className="text-2xl font-bold mb-6 text-center">Emulated Industrial Applications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl group hover:bg-white/5 transition-all">
          <div className="flex items-start">
            <div className="p-4 bg-blue-500/10 rounded-xl mr-4 group-hover:scale-110 transition-transform">
              <Droplet className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Water Treatment Facility</h3>
              <p className="text-sm text-textMuted mb-4">
                Emulates tank level sensors, pump controls, and pH monitors. Attackers often target these systems via Modbus to manipulate chemical mixtures or trigger overflows.
              </p>
              <div className="flex items-center text-xs font-mono text-blue-400">
                <ArrowRight className="w-3 h-3 mr-1" /> Profile: default_water
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl group hover:bg-white/5 transition-all">
          <div className="flex items-start">
            <div className="p-4 bg-orange-500/10 rounded-xl mr-4 group-hover:scale-110 transition-transform">
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Oil & Gas Pipeline</h3>
              <p className="text-sm text-textMuted mb-4">
                Mimics pressure valves, flow meters, and temperature gauges. Adversaries probe these endpoints for disruption capabilities or intellectual property theft.
              </p>
              <div className="flex items-center text-xs font-mono text-orange-400">
                <ArrowRight className="w-3 h-3 mr-1" /> Profile: default_pipeline
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function SpecItem({ icon, title, desc }) {
  return (
    <li className="flex items-start bg-darkBg/50 p-4 rounded-xl border border-panelBorder/50">
      <div className="text-textMuted mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm text-textMuted mt-1 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function ActivityIcon() {
  return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
}
