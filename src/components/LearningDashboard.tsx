import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Award, Clock } from 'lucide-react';

export default function LearningDashboard() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-purple-500/20 text-xs text-purple-400 font-mono mb-6 tracking-widest uppercase">
            <TrendingUp className="w-3.5 h-3.5" /> Dashboard
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Track Your <span className="text-gradient-fire">Progress</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { icon: TrendingUp, label: 'Total Progress', value: '34%', color: 'cyan' },
            { icon: Clock, label: 'Time Spent', value: '87h', color: 'green' },
            { icon: Award, label: 'Certificates', value: '2', color: 'yellow' },
            { icon: BarChart3, label: 'Modules Done', value: '12', color: 'purple' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-xl border border-white/10 p-5">
                <Icon className="w-5 h-5 mb-3" style={{ color: stat.color === 'cyan' ? '#00d4ff' : stat.color === 'green' ? '#00ff88' : stat.color === 'yellow' ? '#ffff00' : '#b8a3ff' }} />
                <p className="text-xs text-gray-600 font-mono mb-1">{stat.label}</p>
                <p className="text-2xl font-black text-white">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl border border-purple-500/10 p-8">
          <h3 className="font-bold text-white mb-4">Your Learning Journey</h3>
          <div className="space-y-3">
            {['Current Track: Cybersecurity Fundamentals', '12 of 30 modules completed', '34% progress toward Academy Graduate'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <p className="text-sm text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
