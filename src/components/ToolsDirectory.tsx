import { motion } from 'framer-motion';
import { ExternalLink, Lock, Hash, Shield, Code, Search, Database, Globe } from 'lucide-react';

const tools = [
  {
    id: 1,
    name: 'CyberChef',
    tagline: 'The Cyber Swiss Army Knife',
    description: 'The ultimate tool for encoding, decoding, encryption, hashing, and data analysis used by security professionals worldwide.',
    link: 'https://gchq.github.io/CyberChef/',
    color: 'cyan',
    icon: Code,
    features: ['Base64 Encode/Decode', 'MD5 / SHA Hashing', 'AES Encryption', 'Data Conversion', 'Forensics Utilities', 'Recipe System'],
    badge: 'GCHQ Official',
  },
  {
    id: 2,
    name: 'VirusTotal',
    tagline: 'Multi-Engine Threat Intelligence',
    description: 'Analyze suspicious files, domains, IPs and URLs to detect malware using 70+ antivirus engines and website scanners.',
    link: 'https://www.virustotal.com',
    color: 'red',
    icon: Shield,
    features: ['File Scanning', 'URL Analysis', '70+ AV Engines', 'IP Reputation', 'Domain Info', 'API Access'],
    badge: 'Google Owned',
  },
  {
    id: 3,
    name: 'Termux',
    tagline: 'Linux on Android',
    description: 'Android terminal emulator and Linux environment for learning Linux, programming, Git, SSH, automation, and penetration testing.',
    link: 'https://termux.dev',
    color: 'green',
    icon: Hash,
    features: ['Bash Terminal', 'Package Manager', 'Python / Node.js', 'SSH Client', 'Git Integration', 'Networking Tools'],
    badge: 'Open Source',
  },
  {
    id: 4,
    name: 'OWASP',
    tagline: 'Web Security Standard',
    description: 'The Open Web Application Security Project — the leading knowledge base for web application security, including the OWASP Top 10.',
    link: 'https://owasp.org',
    color: 'orange',
    icon: Lock,
    features: ['OWASP Top 10', 'Security Testing', 'Cheat Sheets', 'ZAP Scanner', 'WebGoat', 'Threat Modeling'],
    badge: 'Foundation',
  },
];

const colorMap: Record<string, { border: string; glow: string; badge: string; icon: string; tag: string; gradient: string }> = {
  cyan: {
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    glow: 'hover:shadow-cyber',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: 'text-cyan-400 bg-cyan-500/10',
    tag: 'bg-cyan-500/10 text-cyan-400',
    gradient: 'from-cyan-500 to-teal-400',
  },
  red: {
    border: 'border-red-500/20 hover:border-red-500/50',
    glow: 'hover:shadow-red-glow',
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
    icon: 'text-red-400 bg-red-500/10',
    tag: 'bg-red-500/10 text-red-400',
    gradient: 'from-red-500 to-orange-400',
  },
  green: {
    border: 'border-green-500/20 hover:border-green-500/50',
    glow: 'hover:shadow-green-glow',
    badge: 'bg-green-500/10 text-green-400 border-green-500/20',
    icon: 'text-green-400 bg-green-500/10',
    tag: 'bg-green-500/10 text-green-400',
    gradient: 'from-green-500 to-teal-400',
  },
  orange: {
    border: 'border-orange-500/20 hover:border-orange-500/50',
    glow: 'hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    icon: 'text-orange-400 bg-orange-500/10',
    tag: 'bg-orange-500/10 text-orange-400',
    gradient: 'from-orange-500 to-yellow-400',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ToolsDirectory() {
  return (
    <section id="tools" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-500/20 text-xs text-cyan-400 font-mono mb-6 tracking-widest uppercase">
            <Database className="w-3.5 h-3.5" />
            Security Tools Directory
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Essential <span className="text-gradient-cyan">Cyber Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-standard security tools used by professionals for analysis, testing, and defense.
          </p>
        </motion.div>

        {/* Tools grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {tools.map((tool) => {
            const c = colorMap[tool.color];
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl border ${c.border} ${c.glow} transition-all duration-300 overflow-hidden group`}
              >
                {/* Top bar gradient */}
                <div className={`h-0.5 bg-gradient-to-r ${c.gradient}`} />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                        <p className="text-sm text-gray-500 font-mono">{tool.tagline}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${c.badge}`}>
                      {tool.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{tool.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.features.map(f => (
                      <span key={f} className={`text-xs px-2.5 py-1 rounded-md font-mono ${c.tag}`}>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${c.gradient} text-black font-bold text-sm rounded-xl cyber-btn transition-all group-hover:shadow-lg`}
                  >
                    <Globe className="w-4 h-4" />
                    Open {tool.name}
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass rounded-2xl border border-cyan-500/10 p-6 flex flex-wrap justify-around gap-4 text-center"
        >
          {[
            { icon: Search, label: 'Active Tools', value: '50+' },
            { icon: Shield, label: 'Verified Safe', value: '100%' },
            { icon: Code, label: 'Open Source', value: '80%' },
            { icon: Globe, label: 'Platforms', value: 'All' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="w-5 h-5 text-cyan-500" />
              <div>
                <div className="text-xl font-black text-gradient-cyan">{stat.value}</div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
