import React, { useState } from 'react';
import { Shield, Fingerprint, Smartphone, AlertCircle, Loader, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    setStatus('loading');

    // Hardcoded Admin Access Check
    if (username === 'admin' && password === 'admin@1234') {
      // Simulate network delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
      return;
    }

    try {
      // For all other credentials, send to Flask honeypot backend
      await fetch('http://localhost:5050/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      setTimeout(() => setStatus('error'), 1500);
    } catch (err) {
      setTimeout(() => setStatus('error'), 1500);
    }
  };

  return (
    <div className="flex-1 relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8 z-10">
      <div className="absolute top-[20%] left-[20%] w-[20%] h-[40%] bg-accentBlue/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] bg-alertRed/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="flex justify-center flex-col items-center relative">
          <div className="p-3 bg-panelBg border border-panelBorder rounded-2xl shadow-[0_0_15px_rgba(0,240,255,0.2)] mb-4">
            <Shield className="h-12 w-12 text-accentBlue" />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tight">
            Synergy AI Portal
          </h2>
          <p className="mt-2 text-center text-sm text-textMuted max-w">
            Enterprise Industrial Control Systems
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 relative">
        <div className="glass-panel py-8 px-4 sm:rounded-2xl sm:px-10">

          {/* Admin Toggle (Hidden/Discreet) */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={() => { setUsername('admin'); setPassword(''); }}
              className="text-white/5 hover:text-accentBlue/50 transition-colors"
              title="Admin Portal"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>

          {status === 'error' && (
            <div className="mb-6 bg-alertRed/10 border border-alertRed rounded-lg p-4 flex items-start animate-pulse">
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
                  className="appearance-none block w-full px-4 py-3 border border-panelBorder rounded-lg bg-darkBg/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentBlue focus:border-transparent transition-all"
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
                  className="appearance-none block w-full px-4 py-3 border border-panelBorder rounded-lg bg-darkBg/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentBlue focus:border-transparent transition-all"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-panelBorder bg-darkBg text-accentBlue focus:ring-accentBlue focus:ring-offset-darkBg"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-textMuted">
                  I agree to the <Link to="/terms" className="text-accentBlue hover:underline" target="_blank">Terms & Conditions</Link>
                </label>
              </div>
            </div>

            <div className="flex justify-end text-sm">
              <a href="#" className="font-medium text-textMuted hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-[0_4px_14px_0_rgba(0,240,255,0.39)] text-sm font-bold text-darkBg bg-gradient-to-r from-accentBlue to-blue-400 hover:from-white hover:to-accentBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentBlue focus:ring-offset-darkBg transition-all disabled:opacity-50"
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

          <div className="mt-8 text-center">
            <p className="text-sm text-textMuted">
              Don't have a secure identity access?{' '}
              <Link to="/signup" className="text-accentBlue font-semibold hover:text-white transition-colors">
                Create Account
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
