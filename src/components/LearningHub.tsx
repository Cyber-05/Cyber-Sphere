import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Zap, Trophy, CheckCircle, Lock, Target, ChevronRight, BarChart3 } from 'lucide-react';

const learningLevels = {
  Beginner: {
    icon: Lock,
    color: 'green',
    description: 'Start your cybersecurity journey',
    objectives: [
      'Understand networking fundamentals',
      'Learn Linux basics and command line',
      'Master web security concepts',
      'Practice basic Python scripting',
    ],
    resources: [
      { title: 'CompTIA Security+', type: 'Certification', time: '8 weeks' },
      { title: 'Networking Fundamentals', type: 'Course', time: '20 hours' },
      { title: 'Linux Academy', type: 'Platform', time: 'Self-paced' },
      { title: 'TryHackMe Beginner Path', type: 'Labs', time: '30 hours' },
    ],
    progress: 0,
  },
  Intermediate: {
    icon: Zap,
    color: 'cyan',
    description: 'Build specialized security skills',
    objectives: [
      'Master web application security',
      'Learn penetration testing methodologies',
      'Understand threat intelligence',
      'Practice malware analysis basics',
    ],
    resources: [
      { title: 'CEH (Certified Ethical Hacker)', type: 'Certification', time: '12 weeks' },
      { title: 'OSCP Preparation', type: 'Course', time: '16 weeks' },
      { title: 'Hack The Box Medium Labs', type: 'Labs', time: '60 hours' },
      { title: 'PortSwigger Web Security', type: 'Course', time: '40 hours' },
    ],
    progress: 35,
  },
  Advanced: {
    icon: Trophy,
    color: 'red',
    description: 'Become a security expert',
    objectives: [
      'Master advanced penetration testing',
      'Specialize in malware analysis',
      'Develop security research capabilities',
      'Lead security teams and projects',
    ],
    resources: [
      { title: 'OSCP (Offensive Security)', type: 'Certification', time: '20 weeks' },
      { title: 'Advanced Malware Analysis', type: 'Course', time: '24 weeks' },
      { title: 'Red Team Simulation', type: 'Training', time: '40 hours' },
      { title: 'Security Research Track', type: 'Program', time: 'Variable' },
    ],
    progress: 0,
  },
};

const colorMap: Record<string, {
  border: string; bg: string; icon: string; text: string;
  bar: string; badge: string;
}> = {
  green: {
    border: 'border-green-500/20 hover:border-green-500/40',
    bg: 'bg-green-500/5',
    icon: 'text-green-400 bg-green-500/10',
    text: 'text-green-400',
    bar: 'bg-green-500',
    badge: 'bg-green-500/10 text-green-400',
  },
  cyan: {
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    bg: 'bg-cyan-500/5',
    icon: 'text-cyan-400 bg-cyan-500/10',
    text: 'text-cyan-400',
    bar: 'bg-cyan-500',
    badge: 'bg-cyan-500/10 text-cyan-400',
  },
  red: {
    border: 'border-red-500/20 hover:border-red-500/40',
    bg: 'bg-red-500/5',
    icon: 'text-red-400 bg-red-500/10',
    text: 'text-red-400',
    bar: 'bg-red-500',
    badge: 'bg-red-500/10 text-red-400',
  },
};

export default function LearningHub() {
  const [activeLevel, setActiveLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const level = learningLevels[activeLevel];
  const c = colorMap[level.color];
  const LevelIcon = level.icon;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-purple-500/20 text-xs text-purple-400 font-mono mb-6 tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            Learning Hub
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Complete <span className="text-gradient-fire">Learning Paths</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Structured curricula designed to take you from beginner to expert in cybersecurity.
          </p>
        </motion.div>

        {/* Level tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-10 flex-wrap"
        >
          {Object.entries(learningLevels).map(([key, val]) => (
            <motion.button
              key={key}
              onClick={() => setActiveLevel(key as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeLevel === key
                  ? `bg-gradient-to-r from-${val.color}-500 to-${val.color === 'green' ? 'teal' : val.color === 'cyan' ? 'blue' : 'orange'}-400 text-black shadow-lg`
                  : 'glass border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <val.icon className="w-4 h-4" />
              {key}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Left - Overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`glass rounded-2xl border ${c.border} p-8 lg:col-span-1`}
            >
              <div className={`w-14 h-14 rounded-xl ${c.icon} flex items-center justify-center mb-4`}>
                <LevelIcon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{activeLevel}</h3>
              <p className="text-gray-500 text-sm mb-6">{level.description}</p>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-600 uppercase">Completion</span>
                  <span className={`text-sm font-bold ${c.text}`}>{level.progress}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={c.bar}
                    initial={{ width: 0 }}
                    animate={{ width: `${level.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>

              {/* Skills badges */}
              <div className="space-y-2">
                <p className="text-xs font-mono text-gray-600 uppercase tracking-wider mb-3">Key Skills</p>
                {['Networking', 'Analysis', 'Testing'].map(skill => (
                  <div key={skill} className={`flex items-center gap-2 p-2.5 rounded-lg ${c.badge}`}>
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-mono">{skill}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-6 py-3 bg-gradient-to-r from-${level.color}-500 to-${level.color === 'green' ? 'teal' : level.color === 'cyan' ? 'blue' : 'orange'}-400 text-black font-bold rounded-lg cyber-btn`}
              >
                Start Learning
              </motion.button>
            </motion.div>

            {/* Middle - Learning Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`glass rounded-2xl border ${c.border} p-8`}
            >
              <div className="flex items-center gap-2 mb-6">
                <Target className={`w-5 h-5 ${c.text}`} />
                <h4 className="font-bold text-white">Learning Objectives</h4>
              </div>
              <div className="space-y-3">
                {level.objectives.map((obj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <CheckCircle className={`w-4 h-4 ${c.text} mt-0.5 flex-shrink-0`} />
                    <span className="text-sm text-gray-300">{obj}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Recommended Resources */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`glass rounded-2xl border ${c.border} p-8`}
            >
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className={`w-5 h-5 ${c.text}`} />
                <h4 className="font-bold text-white">Recommended Resources</h4>
              </div>
              <div className="space-y-3">
                {level.resources.map((res, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">{res.title}</h5>
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                      <span>{res.type}</span>
                      <span>{res.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs text-gray-400"
              >
                <p className="text-orange-400 font-semibold mb-1">Tip</p>
                <p>Complete resources in order for best results. Join communities for peer support.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
