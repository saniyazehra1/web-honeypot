import React, { useState, useEffect } from 'react';
import { Activity, ShieldAlert, Thermometer, Gauge, Zap, Database, Filter, Settings, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [sysStatus, setSysStatus] = useState({ plc: 'UNKNOWN', motor: 'OFF', temperature: 0, pressure: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const [logsRes, statusRes] = await Promise.all([
          fetch('http://localhost:5050/api/logs').catch(() => null),
          fetch('http://localhost:5050/api/status').catch(() => null)
        ]);

        if (logsRes && logsRes.ok) {
          const logsData = await logsRes.json();
          setLogs(logsData);
        }

        if (statusRes && statusRes.ok) {
          const statusData = await statusRes.json();
          setSysStatus(statusData);
        }
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveData();
    const interval = setInterval(fetchLiveData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col md:flex-row overflow-hidden relative">
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Sidebar Navigation */}
      <aside className="w-16 md:w-20 border-r border-panelBorder bg-darkBg flex flex-col items-center py-6 gap-6 z-20 shrink-0 h-full">
        <button
          className="p-3 rounded-xl transition-all bg-accentBlue/20 text-accentBlue border border-accentBlue/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          title="Live Logs"
        >
          <Database className="w-6 h-6" />
        </button>
        <Link
          to="/settings"
          className="p-3 rounded-xl transition-all text-textMuted hover:text-white hover:bg-white/5"
          title="Profile Settings"
        >
          <Settings className="w-6 h-6" />
        </Link>
        <div className="mt-auto">
          <Link
            to="/login"
            className="p-3 rounded-xl transition-all text-alertRed/70 hover:text-alertRed hover:bg-alertRed/10 block mb-2"
            title="Logout"
          >
            <LogOut className="w-6 h-6" />
          </Link>
        </div>
      </aside>

      {/* Secondary Sidebar (Widgets) */}
      <aside className="hidden md:flex w-64 border-r border-panelBorder bg-panelBg/60 backdrop-blur-md p-6 flex-col gap-6 overflow-y-auto shrink-0 z-10 custom-scrollbar">
        <h2 className="text-xs font-bold text-textMuted uppercase tracking-widest mb-2 flex items-center">
          Live Telemetry
        </h2>

        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-400/10 rounded-bl-full pointer-events-none"></div>
          <div className="flex items-center mb-3">
            <Zap className="w-5 h-5 text-green-400 mr-2" />
            <h3 className="font-semibold text-white">PLC Status</h3>
          </div>
          <div className="flex items-baseline mb-1">
            <span className="text-2xl font-bold text-green-400 tracking-tight">{sysStatus.plc}</span>
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <p className="text-xs text-textMuted font-mono flex justify-between"><span>Motor Unit 1:</span> <span className="text-white">{sysStatus.motor}</span></p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-orange-400/10 rounded-bl-full pointer-events-none"></div>
          <div className="flex items-center mb-3">
            <Thermometer className="w-5 h-5 text-orange-400 mr-2" />
            <h3 className="font-semibold text-white">Temperature</h3>
          </div>
          <div className="flex items-baseline mb-1">
            <span className="text-3xl font-bold text-white">{sysStatus.temperature}</span><span className="text-lg text-textMuted ml-1">°C</span>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-accentBlue/10 rounded-bl-full pointer-events-none"></div>
          <div className="flex items-center mb-3">
            <Gauge className="w-5 h-5 text-accentBlue mr-2" />
            <h3 className="font-semibold text-white">Pressure</h3>
          </div>
          <div className="flex items-baseline mb-1">
            <span className="text-3xl font-bold text-white">{sysStatus.pressure}</span><span className="text-lg text-textMuted ml-1">psi</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full z-10 custom-scrollbar relative">
        <div className="animate-in fade-in duration-300">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Investigation Command Center</h1>
              <p className="text-textMuted text-sm">Tracking unauthorized reconnaissance against Modbus endpoints</p>
            </div>
            <div className="flex items-center px-4 py-2 glass-panel rounded-full border-alertRed/30 border shadow-[0_0_15px_rgba(255,42,42,0.1)] shrink-0 w-fit">
              <Activity className="w-4 h-4 text-alertRed animate-pulse mr-2" />
              <span className="text-alertRed font-semibold text-xs tracking-wider uppercase">Active Threat Feed</span>
            </div>
          </div>

          <div className="glass-panel w-full rounded-2xl overflow-hidden flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="px-6 py-4 border-b border-panelBorder bg-darkBg/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-semibold flex items-center text-white">
                <ShieldAlert className="w-5 h-5 mr-3 text-accentBlue" />
                Intercepted Network Traffic
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider bg-green-500/10 text-green-400 border-green-500/30">
                  REAL-TIME SYNC
                </span>
              </div>
            </div>

            <div className="overflow-x-auto p-2">
              <table className="w-full text-left text-sm whitespace-nowrap table-auto border-collapse">
                <thead>
                  <tr className="text-textMuted text-xs uppercase tracking-wider border-b border-panelBorder/50">
                    <th className="py-4 px-6 font-semibold">Timestamp</th>
                    <th className="py-4 px-6 font-semibold">Source IP</th>
                    <th className="py-4 px-6 font-semibold">Extracted Creds / Payload</th>
                    <th className="py-4 px-6 font-semibold">Agent Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="4" className="text-center py-12 text-textMuted">Loading real-time logs from API...</td></tr>
                  ) : logs.length === 0 ? (
                    <tr><td colSpan="4" className="text-center py-12 text-textMuted italic">No malicious activity recorded or database empty.</td></tr>
                  ) : logs.map((log, index) => (
                    <tr key={log.id || index} className="group border-b border-panelBorder/10 hover:bg-white/[0.02]">
                      <td className="py-4 px-6 font-mono text-xs text-textMuted">{log.timestamp ? new Date(log.timestamp).toLocaleTimeString() : 'N/A'}</td>
                      <td className="py-4 px-6 font-mono text-xs text-accentBlue">{log.ip || 'Unknown'}</td>
                      <td className="py-4 px-6"><div className="inline-flex items-center px-2.5 py-1 bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[11px] rounded">{log.creds || 'None'}</div></td>
                      <td className="py-4 px-6 text-textMuted text-xs truncate max-w-[200px]">{log.userAgent || 'Unknown Signature'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
      `}} />
    </div>
  );
}
