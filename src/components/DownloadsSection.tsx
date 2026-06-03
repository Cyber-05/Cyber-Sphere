import { motion } from 'framer-motion';
import { Download, ExternalLink, Terminal, Globe, Shield, Lock, Code, ChevronRight } from 'lucide-react';

const downloads = [
  {
    name: 'CyberChef',
    version: 'Latest',
    description: 'Web-based data manipulation and analysis tool. Run locally or use online.',
    link: 'https://gchq.github.io/CyberChef/',
    icon: Code,
    color: 'cyan',
    platform: 'Web / Offline',
    size: '~4 MB',
    type: 'free',
  },
  {
    name: 'Termux',
    version: 'v0.118+',
    description: 'Linux terminal emulator for Android. Get it from F-Droid for latest version.',
    link: 'https://termux.dev',
    icon: Terminal,
    color: 'green',
    platform: 'Android',
    size: '~100 MB',
    type: 'free',
  },
  {
    name: 'OWASP ZAP',
    version: 'v2.14+',
    description: 'Open-source web application security scanner for finding vulnerabilities.',
    link: 'https://owasp.org/www-project-zap/',
    icon: Shield,
    color: 'orange',
    platform: 'Windows / Mac / Linux',
    size: '~200 MB',
    type: 'free',
  },
  {
    name: 'TryHackMe',
    version: 'Web App',
    description: 'Browser-based cybersecurity training — no download needed for most labs.',
    link: 'https://tryhackme.com',
    icon: Globe,
    color: 'red',
    platform: 'Web Browser',
    size: 'Online',
    type: 'free',
  },
  {
    name: 'Hack The Box',
    version: 'HTB App',
    description: 'Desktop app for managing your VPN connection and lab access.',
    link: 'https://www.hackthebox.com',
    icon: Lock,
    color: 'teal',
    platform: 'Windows / Mac / Linux',
    size: '~50 MB',
    type: 'freemium',
  },
];

const colorMap: Record<string, { border: string; icon: string; badge: string; gradient: string; tag: string }> = {
  cyan: { border: 'border-cyan-500/20 hover:border-cyan-500/50', icon: 'text-cyan-400 bg-cyan-500/10', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', gradient: 'from-cyan-500 to-teal-400', tag: 'bg-cyan-500/10 text-cyan-400' },
  green: { border: 'border-green-500/20 hover:border-green-500/50', icon: 'text-green-400 bg-green-500/10', badge: 'bg-green-500/10 text-green-400 border-green-500/20', gradient: 'from-green-500 to-teal-400', tag: 'bg-green-500/10 text-green-400' },
  orange: { border: 'border-orange-500/20 hover:border-orange-500/50', icon: 'text-orange-400 bg-orange-500/10', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', gradient: 'from-orange-500 to-yellow-400', tag: 'bg-orange-500/10 text-orange-400' },
  red: { border: 'border-red-500/20 hover:border-red-500/50', icon: 'text-red-400 bg-red-500/10', badge: 'bg-red-500/10 text-red-400 border-red-500/20', gradient: 'from-red-500 to-orange-400', tag: 'bg-red-500/10 text-red-400' },
  teal: { border: 'border-teal-500/20 hover:border-teal-500/50', icon: 'text-teal-400 bg-teal-500/10', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20', gradient: 'from-teal-500 to-cyan-400', tag: 'bg-teal-500/10 text-teal-400' },
};

export default function DownloadsSection() {
  return (
    <section id="downloads" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-green-500/20 text-xs text-green-400 font-mono mb-6 tracking-widest uppercase">
            <Download className="w-3.5 h-3.5" />
            Security Resources
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Downloads & <span className="text-gradient-green">Resources</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Official links to verified security tools and platforms. All links go directly to official sources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {downloads.map((item, i) => {
            const c = colorMap[item.color];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass rounded-2xl border ${c.border} transition-all duration-300 overflow-hidden group`}
              >
                <div className={`h-0.5 bg-gradient-to-r ${c.gradient}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${c.badge}`}>
                        {item.version}
                      </span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        item.type === 'free' ? 'text-green-400 bg-green-500/10' : 'text-yellow-400 bg-yellow-500/10'
                      }`}>
                        {item.type === 'free' ? 'FREE' : 'FREEMIUM'}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>

                  <div className="flex items-center justify-between text-xs font-mono text-gray-600 mb-4">
                    <span className={`px-2 py-1 rounded-md ${c.tag}`}>{item.platform}</span>
                    <span>{item.size}</span>
                  </div>

                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r ${c.gradient} text-black font-bold text-sm rounded-xl cyber-btn transition-all`}
                  >
                    <Download className="w-4 h-4" />
                    Get {item.name}
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Safety note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 glass rounded-xl border border-yellow-500/20 p-4 flex items-start gap-3"
        >
          <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-400">
            <span className="text-yellow-400 font-semibold">Safety Notice:</span> All links above direct to official websites.
            Always verify download sources and use tools only in authorized environments. Practice ethical hacking responsibly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
