import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none"
    >
      {/* Stars fade in */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{ duration: 2, delay: Math.random() * 1 }}
          />
        ))}
      </motion.div>

      {/* Central content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        {/* Earth emergence */}
        <motion.div
          className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 shadow-2xl shadow-cyan-500/50"
          animate={{ scale: [0.8, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="w-full h-full rounded-full blur-lg opacity-80 bg-gradient-to-br from-blue-400 to-cyan-400" />
        </motion.div>

        {/* Logo emergence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="space-y-3"
        >
          <h1 className="text-6xl font-black">
            <span className="text-white">Cyber</span>
            <span className="text-gradient-cyan neon-text">Sphere</span>
          </h1>
          <p className="text-cyan-400 font-mono text-sm tracking-widest">
            INITIALIZING SECURITY INTELLIGENCE
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="w-64 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 mt-8 mx-auto rounded-full"
        />
      </motion.div>

      {/* Orbiting satellites */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            x: [100 * Math.cos((i * Math.PI) / 2), 150 * Math.cos((i * Math.PI) / 2 + Math.PI)],
            y: [100 * Math.sin((i * Math.PI) / 2), 150 * Math.sin((i * Math.PI) / 2 + Math.PI)],
          }}
          transition={{ duration: 3, delay: 1, repeat: Infinity }}
          style={{ left: '50%', top: '50%', marginLeft: '-4px', marginTop: '-4px' }}
        />
      ))}
    </motion.div>
  );
}
