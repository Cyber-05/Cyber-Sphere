import { motion } from 'framer-motion';
import { Users, MessageCircle, Trophy, Zap, Target, ChevronRight, Lock, Sparkles } from 'lucide-react';

const communityItems = [
  {
    type: 'discussion',
    title: 'Best Practices for Incident Response in 2025',
    author: 'SecurityEXPERT',
    replies: 342,
    views: '12.5K',
    category: 'Defense',
    icon: MessageCircle,
    color: 'cyan',
  },
  {
    type: 'group',
    title: 'Web Application Security Study Group',
    author: '156 members',
    replies: 89,
    views: 'Active',
    category: 'Learning',
    icon: Users,
    color: 'green',
  },
  {
    type: 'challenge',
    title: 'CTF Challenge: Advanced Network Forensics',
    author: 'CTF Organizers',
    replies: 78,
    views: '3.2K',
    category: 'Competition',
    icon: Trophy,
    color: 'orange',
  },
  {
    type: 'resource',
    title: 'Collection: OSINT Tools & Frameworks',
    author: 'Research Team',
    replies: 124,
    views: '8.7K',
    category: 'Tools',
    icon: Lock,
    color: 'purple',
  },
  {
    type: 'discussion',
    title: 'Malware Analysis: Recent Ransomware Variants',
    author: 'MalwareAnalyzer',
    replies: 267,
    views: '15.2K',
    category: 'Threats',
    icon: Zap,
    color: 'red',
  },
  {
    type: 'challenge',
    title: 'Security Awareness Challenge — Test Your Skills',
    author: 'Community Leaders',
    replies: 45,
    views: '2.1K',
    category: 'Training',
    icon: Target,
    color: 'yellow',
  },
];

const colorMap: Record<string, { border: string; bg: string; icon: string; text: string; badge: string }> = {
  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', icon: 'text-cyan-400 bg-cyan-500/10', text: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-400' },
  green: { border: 'border-green-500/20', bg: 'bg-green-500/5', icon: 'text-green-400 bg-green-500/10', text: 'text-green-400', badge: 'bg-green-500/10 text-green-400' },
  orange: { border: 'border-orange-500/20', bg: 'bg-orange-500/5', icon: 'text-orange-400 bg-orange-500/10', text: 'text-orange-400', badge: 'bg-orange-500/10 text-orange-400' },
  purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/5', icon: 'text-purple-400 bg-purple-500/10', text: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-400' },
  red: { border: 'border-red-500/20', bg: 'bg-red-500/5', icon: 'text-red-400 bg-red-500/10', text: 'text-red-400', badge: 'bg-red-500/10 text-red-400' },
  yellow: { border: 'border-yellow-500/20', bg: 'bg-yellow-500/5', icon: 'text-yellow-400 bg-yellow-500/10', text: 'text-yellow-400', badge: 'bg-yellow-500/10 text-yellow-400' },
};

export default function CommunitySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-purple-500/20 text-xs text-purple-400 font-mono mb-6 tracking-widest uppercase">
            <Users className="w-3.5 h-3.5" />
            Global Community
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Cyber <span className="text-gradient-fire">Community Hub</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with security professionals, share knowledge, and participate in challenges worldwide.
          </p>
        </motion.div>

        {/* Community stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Members', value: '847.2K' },
            { label: 'Discussions', value: '142.8K' },
            { label: 'Resources', value: '28.5K' },
            { label: 'Active Now', value: '12.3K' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl border border-purple-500/10 p-4 text-center"
            >
              <div className={`text-2xl font-black text-gradient-fire mb-1`}>{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community items grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {communityItems.map((item, i) => {
            const c = colorMap[item.color];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass rounded-2xl border ${c.border} ${c.bg} p-6 group cursor-pointer transition-all hover:border-opacity-40`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`text-xs px-2.5 py-1 rounded-full font-mono font-bold ${c.badge}`}>
                    {item.category}
                  </div>
                </div>

                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 font-mono mb-4">{item.author}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" /> {item.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> {item.views}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured challenges section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl border border-orange-500/20 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-bold text-white">Active Security Challenges</h3>
            <div className="ml-auto text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 font-mono font-bold">
              2 Live
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: 'CTF Championship 2025',
                desc: 'Compete globally in cybersecurity challenges',
                prize: '₹50,000',
                duration: '10 days',
                level: 'Advanced',
              },
              {
                name: 'Vulnerability Hunt',
                desc: 'Find zero-days and report responsibly',
                prize: '₹100,000+',
                duration: 'Ongoing',
                level: 'All Levels',
              },
            ].map((challenge, i) => (
              <motion.div
                key={challenge.name}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all"
              >
                <h4 className="font-semibold text-white mb-1">{challenge.name}</h4>
                <p className="text-xs text-gray-500 mb-3">{challenge.desc}</p>
                <div className="flex items-center justify-between text-xs font-mono text-gray-600">
                  <div className="space-y-0.5">
                    <div>Prize: <span className="text-orange-400 font-bold">{challenge.prize}</span></div>
                    <div>Level: <span className="text-cyan-400 font-bold">{challenge.level}</span></div>
                  </div>
                  <div className="text-right text-gray-500">{challenge.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-lg cyber-btn"
          >
            View All Challenges
          </motion.button>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147,51,234,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 mx-auto px-8 py-4 glass border border-purple-500/30 text-purple-400 font-bold rounded-xl hover:border-purple-500/60 transition-all cyber-btn"
          >
            <Users className="w-5 h-5" />
            Join the Global Community
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
