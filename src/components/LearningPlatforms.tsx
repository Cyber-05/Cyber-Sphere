import { motion } from 'framer-motion';
import { ExternalLink, Target, Trophy, BookOpen, ChevronRight, Star } from 'lucide-react';

const platforms = [
  {
    name: 'TryHackMe',
    tagline: 'Learn cybersecurity through hands-on hacking labs.',
    description: 'Interactive cybersecurity training platform with guided learning paths, CTF challenges, and real-world scenarios for beginners to advanced professionals.',
    link: 'https://tryhackme.com',
    icon: Target,
    color: 'red',
    difficulty: 'Beginner Friendly',
    rating: 4.9,
    users: '1M+',
    features: ['Guided Paths', 'Browser VMs', 'CTF Challenges', 'Certifications'],
    highlight: 'Best for Beginners',
  },
  {
    name: 'Hack The Box',
    tagline: 'The elite hacking training platform.',
    description: 'Advanced penetration testing labs with real-world machines, Pro Labs, and a competitive ranking system for serious security professionals.',
    link: 'https://www.hackthebox.com',
    icon: Trophy,
    color: 'green',
    difficulty: 'Intermediate+',
    rating: 4.8,
    users: '2M+',
    features: ['Real Machines', 'Pro Labs', 'Active Community', 'Rankings'],
    highlight: 'Most Challenging',
  },
  {
    name: 'PortSwigger Academy',
    tagline: 'Web security training by Burp Suite creators.',
    description: 'Free world-class web security training covering all OWASP categories with interactive labs built by the creators of Burp Suite professional.',
    link: 'https://portswigger.net/web-security',
    icon: BookOpen,
    color: 'orange',
    difficulty: 'All Levels',
    rating: 4.9,
    users: '500K+',
    features: ['100% Free', 'Web Security', 'Burp Suite Labs', 'Certificates'],
    highlight: 'Completely Free',
  },
];

const colorMap: Record<string, {
  border: string; gradient: string; badge: string;
  glow: string; icon: string; tag: string; star: string;
}> = {
  red: {
    border: 'border-red-500/20 hover:border-red-500/50',
    gradient: 'from-red-500 to-orange-400',
    badge: 'bg-red-500/10 text-red-400 border-red-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(255,34,68,0.2)]',
    icon: 'text-red-400 bg-red-500/10',
    tag: 'bg-red-500/10 text-red-300',
    star: 'text-red-400',
  },
  green: {
    border: 'border-green-500/20 hover:border-green-500/50',
    gradient: 'from-green-500 to-teal-400',
    badge: 'bg-green-500/10 text-green-400 border-green-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(0,255,136,0.2)]',
    icon: 'text-green-400 bg-green-500/10',
    tag: 'bg-green-500/10 text-green-300',
    star: 'text-green-400',
  },
  orange: {
    border: 'border-orange-500/20 hover:border-orange-500/50',
    gradient: 'from-orange-500 to-yellow-400',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(255,107,0,0.2)]',
    icon: 'text-orange-400 bg-orange-500/10',
    tag: 'bg-orange-500/10 text-orange-300',
    star: 'text-orange-400',
  },
};

export default function LearningPlatforms() {
  return (
    <section id="resources" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-green-500/20 text-xs text-green-400 font-mono mb-6 tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            Learning Platforms
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Best <span className="text-gradient-green">Training Grounds</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            World-class platforms trusted by millions of security professionals for hands-on learning.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => {
            const c = colorMap[platform.color];
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`glass rounded-2xl border ${c.border} ${c.glow} transition-all duration-300 flex flex-col overflow-hidden group relative`}
              >
                {/* Highlight banner */}
                <div className={`h-1 bg-gradient-to-r ${c.gradient}`} />

                {/* Highlight badge */}
                <div className={`absolute top-4 right-4 text-xs font-mono px-2.5 py-1 rounded-full border ${c.badge}`}>
                  {platform.highlight}
                </div>

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon & Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className={`w-3.5 h-3.5 ${c.star} fill-current`} />
                        <span className="text-xs text-gray-400 font-mono">{platform.rating} · {platform.users} users</span>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-gray-300 mb-3">{platform.tagline}</p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{platform.description}</p>

                  {/* Difficulty */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-600 font-mono uppercase tracking-wider">Difficulty Level</span>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${c.badge}`}>
                      {platform.difficulty}
                    </span>
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {platform.features.map(f => (
                      <span key={f} className={`text-xs px-2.5 py-1 rounded-md font-mono ${c.tag}`}>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center gap-2 py-3 bg-gradient-to-r ${c.gradient} text-black font-bold text-sm rounded-xl cyber-btn transition-all`}
                  >
                    Start Training
                    <ChevronRight className="w-4 h-4" />
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
