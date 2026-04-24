import React, { useState } from 'react';
import { Shield, Fingerprint, Smartphone, AlertCircle, Loader } from 'lucide-react';

export default function Landing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Honeypot action: send credentials to local logging server
      await fetch('http://localhost:5050/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      // Deliberate mock error for the attacker/bot
      setTimeout(() => setStatus('error'), 1500);
    } catch (err) {
      // In case the local server is down, still show the fake error to maintain the ruse
      setTimeout(() => setStatus('error'), 1500);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accentBlue/20 blur-[120px] rounded-full point-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-alertRed/10 blur-[120px] rounded-full point-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="flex justify-center flex-col items-center">
          <div className="p-3 bg-panelBg border border-panelBorder rounded-2xl shadow-[0_0_15px_rgba(0,240,255,0.2)] mb-4">
            <Shield className="h-12 w-12 text-accentBlue" />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tight">
            Synergy AI Solutions
          </h2>
          <p className="mt-2 text-center text-sm text-textMuted max-w">
            Enterprise Industrial Control Systems
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="glass-panel py-8 px-4 sm:rounded-2xl sm:px-10">

          {status === 'error' && (
            <div className="mb-6 bg-alertRed/10 border border-alertRed rounded-lg p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-alertRed mt-0.5 mr-3 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-alertRed">Authentication Failed</h3>
                <p className="mt-1 text-sm text-alertRed/80">
                  Critical Error: Database Connection Timeout (0x80040E31). The authentication server is currently unreachable.
                </p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Corporate ID / Username
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-panelBorder rounded-lg bg-darkBg/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentBlue focus:border-transparent transition-all"
                  placeholder="Enter your assigned ID"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Security Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-3 border border-panelBorder rounded-lg bg-darkBg/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentBlue focus:border-transparent transition-all"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-darkBg border-panelBorder rounded text-accentBlue focus:ring-accentBlue focus:ring-offset-darkBg"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-textMuted">
                  Remember device
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-accentBlue hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-darkBg bg-gradient-to-r from-accentBlue to-blue-400 hover:from-white hover:to-accentBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentBlue focus:ring-offset-darkBg transition-all disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader className="animate-spin h-5 w-5" />
                ) : (
                  'Access System'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-panelBorder" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-panelBg text-textMuted">Or authenticate via</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-panelBorder rounded-lg shadow-sm bg-darkBg/50 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                <Fingerprint className="h-5 w-5 mr-2 text-textMuted" />
                Google SSO
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-panelBorder rounded-lg shadow-sm bg-darkBg/50 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                <Smartphone className="h-5 w-5 mr-2 text-textMuted" />
                Phone OTP
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-textMuted">
          UNAUTHORIZED ACCESS IS STRICTLY PROHIBITED. <br /> Monitored by Synergy AI Security Operations.
        </p>
      </div>
    </div>
  );
}
