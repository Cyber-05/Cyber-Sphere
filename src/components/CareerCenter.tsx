import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, ChevronRight, DollarSign } from 'lucide-react';

const careers = [
  { title: 'SOC Analyst', salary: '$60K - $90K', demand: 'High' },
  { title: 'Security Analyst', salary: '$70K - $110K', demand: 'High' },
  { title: 'Security Engineer', salary: '$90K - $140K', demand: 'Very High' },
  { title: 'Incident Responder', salary: '$80K - $125K', demand: 'High' },
  { title: 'Threat Hunter', salary: '$100K - $160K', demand: 'Very High' },
  { title: 'Cloud Security Engineer', salary: '$110K - $170K', demand: 'Very High' },
];

export default function CareerCenter() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-green-500/20 text-xs text-green-400 font-mono mb-6 tracking-widest uppercase">
            <Briefcase className="w-3.5 h-3.5" /> Careers
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Launch Your Cyber <span className="text-gradient-green">Career</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">High-demand roles with lucrative salaries.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, i) => (
            <motion.div key={career.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8 }} className="glass rounded-2xl border border-green-500/10 p-6 group cursor-pointer hover:border-green-500/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{career.title}</h3>
              <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-white/5 border border-white/5">
                <DollarSign className="w-4 h-4 text-yellow-400" />
                <div>
                  <p className="text-xs text-gray-600 font-mono">Salary Range</p>
                  <p className="font-semibold text-white text-sm">{career.salary}</p>
                </div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full font-mono font-bold mb-4 inline-block ${career.demand === 'Very High' ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
                {career.demand} Demand
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-2.5 glass border border-green-500/20 rounded-lg text-sm font-bold text-green-400 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Explore Path <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
