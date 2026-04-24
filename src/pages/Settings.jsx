import React, { useState } from 'react';
import { User, Key, Save, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Settings() {
  const [adminUser, setAdminUser] = useState('admin');
  const [adminPass, setAdminPass] = useState('********');
  const [savedStatus, setSavedStatus] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-textMuted hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>

      <div className="animate-in fade-in duration-300">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">Profile Settings</h1>
          <p className="text-textMuted">Manage your administrator access credentials on the local host.</p>
        </div>

        <div className="relative mt-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-accentBlue rounded-3xl blur opacity-20"></div>
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative border border-panelBorder shadow-2xl bg-panelBg">
            <form onSubmit={handleSaveSettings} className="space-y-8">

              <div>
                <label className="block text-sm font-medium text-white mb-3 flex items-center">
                  <User className="w-5 h-5 mr-3 text-purple-400" /> Administrative Username
                </label>
                <input
                  type="text"
                  value={adminUser}
                  onChange={(e) => setAdminUser(e.target.value)}
                  className="w-full px-5 py-4 bg-darkBg/60 border border-panelBorder rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3 flex items-center">
                  <Key className="w-5 h-5 mr-3 text-accentBlue" /> Authentication Password
                </label>
                <input
                  type="password"
                  value={adminPass}
                  onChange={(e) => setAdminPass(e.target.value)}
                  className="w-full px-5 py-4 bg-darkBg/60 border border-panelBorder rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accentBlue transition-shadow"
                />
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-panelBorder/50">
                <span className="text-sm text-textMuted">Modifications are logged for auditing purposes.</span>
                <button
                  type="submit"
                  className="flex items-center justify-center px-8 py-4 bg-white text-darkBg font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  {savedStatus ? (
                    <><Save className="w-5 h-5 mr-2" /> Saved!</>
                  ) : (
                    "Update Identity"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
