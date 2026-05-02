import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import About from './pages/About';
import Terms from './pages/Terms';
import Settings from './pages/Settings';
import { Shield } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  // Simplified logic, showing nav on all pages as requested
  return (
    <nav className="border-b border-panelBorder bg-panelBg/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-accentBlue" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-white">
                Synergy AI
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <NavLink to="/">Home</NavLink>
            {location.pathname === '/dashboard' || location.pathname === '/settings' ? (
              <NavLink to="/login">Logout</NavLink>
            ) : (
              <NavLink to="/login">Honeypot Login</NavLink>
            )}
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/about">About Team</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-accentBlue/10 text-accentBlue' : 'text-textMuted hover:text-white hover:bg-white/5'}`}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t border-panelBorder bg-darkBg/90 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <p className="text-textMuted text-sm font-medium">
          <span className="text-white">Developed by:</span> Saniya Zehra
        </p>
        <div className="hidden md:block w-px h-4 bg-panelBorder"></div>
        <Link to="/terms" className="text-accentBlue text-sm hover:underline">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darkBg text-white selection:bg-accentBlue/30 flex flex-col font-sans">
        <Navigation />
        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
