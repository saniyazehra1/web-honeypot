import React, { useState } from 'react';
import { Shield, Smartphone, AlertCircle, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    setStatus('loading');

    try {
      await fetch('http://localhost:5050/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, action: 'signup' })
      });
      setTimeout(() => setStatus('error'), 1500);
    } catch (err) {
      setTimeout(() => setStatus('error'), 1500);
    }
  };

  return (
    <div className="flex-1 relative overflow-hidden flex flex-col justify-center py-12 sm:px-6 lg:px-8 z-10">
      <div className="absolute top-[20%] right-[20%] w-[20%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-alertRed/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="flex justify-center flex-col items-center">
          <div className="p-3 bg-panelBg border border-panelBorder rounded-2xl shadow-[0_0_15px_rgba(168,85,247,0.2)] mb-4">
            <Shield className="h-12 w-12 text-purple-400" />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tight">
            Apply for Access
          </h2>
          <p className="mt-2 text-center text-sm text-textMuted max-w">
            Request credentials for Synergy AI Platform
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="glass-panel py-8 px-4 sm:rounded-2xl sm:px-10">

          {status === 'error' && (
            <div className="mb-6 bg-alertRed/10 border border-alertRed rounded-lg p-4 flex items-start animate-pulse">
              <AlertCircle className="h-5 w-5 text-alertRed mt-0.5 mr-3 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-alertRed">Registration Failed</h3>
                <p className="mt-1 text-sm text-alertRed/80">
                  Critical Error: Database Connection Timeout (0x80040E31). The provisioning database is unreachable.
                </p>
              </div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-panelBorder rounded-lg bg-darkBg/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Corporate Email
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-panelBorder rounded-lg bg-darkBg/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                  placeholder="jdoe@synergy-ai.corp"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Requested Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-panelBorder rounded-lg bg-darkBg/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms_signup"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-panelBorder bg-darkBg text-purple-400 focus:ring-purple-400 focus:ring-offset-darkBg"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms_signup" className="font-medium text-textMuted">
                  I agree to the <Link to="/terms" className="text-purple-400 hover:underline" target="_blank">Terms & Conditions</Link>
                </label>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] text-sm font-bold text-darkBg bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-white hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 focus:ring-offset-darkBg transition-all disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader className="animate-spin h-5 w-5" />
                ) : (
                  'Create Secure Account'
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
                <span className="px-2 bg-panelBg text-textMuted">Or sign up directly with</span>
              </div>
            </div>

            <div className="mt-6">
              <button onClick={handleSubmit} type="button" className="w-full flex items-center justify-center px-4 py-3 border border-panelBorder rounded-lg shadow-sm bg-darkBg/50 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                <Smartphone className="h-5 w-5 mr-2 text-purple-400" />
                Sign up with Phone
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-textMuted">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-400 font-semibold hover:text-white transition-colors">
                Secured Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
