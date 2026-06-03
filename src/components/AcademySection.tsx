import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Lock, CheckCircle } from 'lucide-react';

const tracks = [
  { id: '1', title: 'Cybersecurity Fundamentals', level: 'Beginner', color: 'green', modules: 5 },
  { id: '2', title: 'Linux Fundamentals', level: 'Beginner', color: 'orange', modules: 5 },
  { id: '3', title: 'Web Security', level: 'Intermediate', color: 'red', modules: 5 },
  { id: '4', title: 'Digital Forensics', level: 'Intermediate', color: 'purple', modules: 5 },
  { id: '5', title: 'Security Operations', level: 'Advanced', color: 'cyan', modules: 5 },
  { id: '6', title: 'Cloud Security', level: 'Advanced', color: 'blue', modules: 5 },
];

export default function AcademySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-500/20 text-xs text-cyan-400 font-mono mb-6 tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" /> Academy
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Premium Learning <span className="text-gradient-cyan">Academy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Structured learning tracks from beginner to advanced.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track, i) => (
            <motion.div key={track.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }} className="glass rounded-2xl border border-white/10 p-6 group cursor-pointer hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <Lock className="w-6 h-6 text-cyan-400" />
                <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono">{track.level}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{track.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{track.modules} modules • ~10 hours</p>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                Start <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
