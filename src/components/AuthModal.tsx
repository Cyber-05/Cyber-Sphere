import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} onClick={e => e.stopPropagation()} className="glass rounded-2xl border border-cyan-500/20 p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-white">{mode === 'login' ? 'Welcome Back' : 'Join CyberSphere'}</h2>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
                <X className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>

            <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-lg border border-white/10">
              <button onClick={() => setMode('login')} className={`flex-1 py-2 rounded-md font-semibold transition-all ${mode === 'login' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-500'}`}>
                Login
              </button>
              <button onClick={() => setMode('signup')} className={`flex-1 py-2 rounded-md font-semibold transition-all ${mode === 'signup' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-500'}`}>
                Sign Up
              </button>
            </div>

            <form className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Display Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-600" />
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" placeholder="Your name" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-600" />
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-600" />
                  <input type={showPassword ? 'text' : 'password'} className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-10 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-600 hover:text-gray-400">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={loading} type="button" onClick={onSuccess} className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold rounded-lg disabled:opacity-50">
                {mode === 'login' ? 'Login' : 'Create Account'}
              </motion.button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4 font-mono">
              {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-cyan-400 hover:text-cyan-300 font-semibold">
                {mode === 'login' ? 'Sign up' : 'Login'}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
