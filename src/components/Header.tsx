import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight, LogIn } from 'lucide-react';

interface HeaderProps {
  onAuthClick?: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Resources', href: '#resources' },
  { label: 'Cyber Tools', href: '#tools' },
  { label: 'Learning Paths', href: '#roadmap' },
  { label: 'Community', href: '#community' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ onAuthClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-cyan-500/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 rounded-lg bg-cyan-400/20 blur-md group-hover:blur-lg transition-all" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">
                Cyber<span className="text-gradient-cyan">Sphere</span>
              </span>
              <div className="text-[10px] text-cyan-500/70 font-mono tracking-widest uppercase">
                Security Intelligence
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                  activeLink === link.href
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-cyan-400 rounded-full transition-all duration-200 ${
                  activeLink === link.href ? 'w-4' : 'w-0 group-hover:w-4'
                }`} />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button & Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {onAuthClick && (
              <motion.button
                onClick={onAuthClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 glass border border-cyan-500/20 text-cyan-400 font-semibold text-sm rounded-lg hover:border-cyan-500/40 transition-all"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </motion.button>
            )}
            <motion.a
              href="#tools"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-semibold text-sm rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all cyber-btn"
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg glass text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 glass-bright rounded-2xl p-6 border border-cyan-500/20"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                >
                  <ChevronRight className="w-4 h-4 text-cyan-500" />
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
