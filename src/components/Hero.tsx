import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Globe, ChevronRight, ArrowDown } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Resources' },
  { value: 100, suffix: '+', label: 'Learning Labs' },
  { value: 50, suffix: '+', label: 'Tool Categories' },
  { value: 10, suffix: 'K+', label: 'Global Community' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const floatingParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}));

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Learn Cybersecurity. Protect the Digital World.';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-teal-500/8 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-500/20 text-sm text-cyan-400 font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          SYSTEM ONLINE — CYBERSPHERE v2.0
          <Terminal className="w-4 h-4" />
        </motion.div>

        {/* Main logo heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">
            <span className="text-white">Cyber</span>
            <span className="text-gradient-cyan neon-text">Sphere</span>
          </h1>
        </motion.div>

        {/* Typewriter headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="min-h-16 mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 leading-tight">
            {typedText}
            <span className="cursor-blink text-cyan-400 ml-1">|</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          A modern cybersecurity learning hub featuring educational resources, defensive security tools,
          OSINT references, malware analysis resources, and ethical hacking learning platforms.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="#resources"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,212,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/30 cyber-btn transition-all"
          >
            <Globe className="w-5 h-5" />
            Explore Resources
            <ChevronRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="#roadmap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 glass border border-cyan-500/30 text-cyan-400 font-bold rounded-xl hover:border-cyan-500/60 transition-all cyber-btn"
          >
            <Shield className="w-5 h-5" />
            Start Learning
          </motion.a>

          <motion.a
            href="#tools"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 glass border border-green-500/30 text-green-400 font-bold rounded-xl hover:border-green-500/60 transition-all cyber-btn"
          >
            <Terminal className="w-5 h-5" />
            Security Tools
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0,212,255,0.4)' }}
              className="glass rounded-xl p-4 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group cursor-default"
            >
              <div className="text-3xl font-black text-gradient-cyan mb-1 neon-text">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-500 font-mono tracking-wider uppercase group-hover:text-cyan-500 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
