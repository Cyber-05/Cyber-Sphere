import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookMarked, Lock, Zap, Network, Code, Shield, Database } from 'lucide-react';

const knowledgeTopics = [
  {
    title: 'Networking Fundamentals',
    icon: Network,
    color: 'cyan',
    description: 'Core networking concepts essential for cybersecurity professionals.',
    sections: [
      { name: 'OSI Model', items: ['Layer Overview', 'TCP/IP Stack', 'Protocol Functions'] },
      { name: 'IP & DNS', items: ['IPv4 Basics', 'IPv6 Introduction', 'DNS Resolution'] },
      { name: 'TCP/UDP', items: ['Connection Oriented', 'Connectionless', 'Port Concepts'] },
    ],
  },
  {
    title: 'Linux Basics',
    icon: Code,
    color: 'green',
    description: 'Master the Linux command line and system administration.',
    sections: [
      { name: 'File System', items: ['Directory Structure', 'File Permissions', 'Ownership'] },
      { name: 'Commands', items: ['Basic Navigation', 'File Manipulation', 'Process Management'] },
      { name: 'Scripting', items: ['Bash Basics', 'Script Writing', 'Automation'] },
    ],
  },
  {
    title: 'Web Security',
    icon: Shield,
    color: 'red',
    description: 'Understand web vulnerabilities and defensive practices.',
    sections: [
      { name: 'OWASP Top 10', items: ['Injection', 'XSS', 'CSRF', 'Weak Auth'] },
      { name: 'HTTP Protocol', items: ['Request/Response', 'Headers', 'Status Codes'] },
      { name: 'Web Technologies', items: ['HTML/CSS/JS', 'SQL Databases', 'APIs'] },
    ],
  },
  {
    title: 'Authentication & Authorization',
    icon: Lock,
    color: 'yellow',
    description: 'Learn identity verification and access control mechanisms.',
    sections: [
      { name: 'Authentication', items: ['Passwords', 'Multi-Factor Auth', 'Biometrics'] },
      { name: 'Authorization', items: ['Access Control', 'RBAC', 'ABAC'] },
      { name: 'Security Protocols', items: ['OAuth', 'SAML', 'Kerberos'] },
    ],
  },
  {
    title: 'Encryption & Cryptography',
    icon: Zap,
    color: 'purple',
    description: 'Understand encryption algorithms and cryptographic principles.',
    sections: [
      { name: 'Symmetric Crypto', items: ['DES/AES', 'Block Modes', 'Key Management'] },
      { name: 'Asymmetric Crypto', items: ['RSA', 'ECC', 'Digital Signatures'] },
      { name: 'Hashing', items: ['Hash Functions', 'Salting', 'Verification'] },
    ],
  },
  {
    title: 'Security Awareness',
    icon: BookMarked,
    color: 'orange',
    description: 'Develop security mindset and best practices.',
    sections: [
      { name: 'Social Engineering', items: ['Phishing', 'Pretexting', 'Baiting'] },
      { name: 'Best Practices', items: ['Password Management', 'Data Protection', 'Incident Response'] },
      { name: 'Compliance', items: ['GDPR', 'HIPAA', 'ISO 27001'] },
    ],
  },
  {
    title: 'Incident Response',
    icon: Database,
    color: 'blue',
    description: 'Handle and respond to security incidents effectively.',
    sections: [
      { name: 'IR Framework', items: ['Identification', 'Containment', 'Eradication'] },
      { name: 'Forensics', items: ['Evidence Collection', 'Log Analysis', 'Preservation'] },
      { name: 'Recovery', items: ['System Restoration', 'Communication', 'Lessons Learned'] },
    ],
  },
  {
    title: 'Cloud Security',
    icon: Shield,
    color: 'teal',
    description: 'Secure cloud infrastructure and services.',
    sections: [
      { name: 'Cloud Models', items: ['IaaS', 'PaaS', 'SaaS'] },
      { name: 'AWS/Azure/GCP', items: ['IAM', 'Network Security', 'Data Protection'] },
      { name: 'Compliance', items: ['Shared Responsibility', 'Compliance Tools', 'Auditing'] },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; text: string; badge: string }> = {
  cyan: { bg: 'bg-cyan-500/5', border: 'border-cyan-500/20 hover:border-cyan-500/40', icon: 'text-cyan-400', text: 'text-cyan-400', badge: 'bg-cyan-500/10' },
  green: { bg: 'bg-green-500/5', border: 'border-green-500/20 hover:border-green-500/40', icon: 'text-green-400', text: 'text-green-400', badge: 'bg-green-500/10' },
  red: { bg: 'bg-red-500/5', border: 'border-red-500/20 hover:border-red-500/40', icon: 'text-red-400', text: 'text-red-400', badge: 'bg-red-500/10' },
  yellow: { bg: 'bg-yellow-500/5', border: 'border-yellow-500/20 hover:border-yellow-500/40', icon: 'text-yellow-400', text: 'text-yellow-400', badge: 'bg-yellow-500/10' },
  purple: { bg: 'bg-purple-500/5', border: 'border-purple-500/20 hover:border-purple-500/40', icon: 'text-purple-400', text: 'text-purple-400', badge: 'bg-purple-500/10' },
  orange: { bg: 'bg-orange-500/5', border: 'border-orange-500/20 hover:border-orange-500/40', icon: 'text-orange-400', text: 'text-orange-400', badge: 'bg-orange-500/10' },
  blue: { bg: 'bg-blue-500/5', border: 'border-blue-500/20 hover:border-blue-500/40', icon: 'text-blue-400', text: 'text-blue-400', badge: 'bg-blue-500/10' },
  teal: { bg: 'bg-teal-500/5', border: 'border-teal-500/20 hover:border-teal-500/40', icon: 'text-teal-400', text: 'text-teal-400', badge: 'bg-teal-500/10' },
};

function TopicCard({ topic, index }: { topic: typeof knowledgeTopics[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[topic.color];
  const Icon = topic.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`glass rounded-2xl border ${c.border} ${c.bg} overflow-hidden transition-all`}
    >
      <motion.button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left flex items-start gap-4 hover:bg-white/5 transition-all"
      >
        <div className={`w-12 h-12 rounded-xl ${c.text} ${c.badge} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-white text-lg mb-1">{topic.title}</h3>
          <p className="text-sm text-gray-500">{topic.description}</p>
        </div>

        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className={`w-5 h-5 ${c.text}`} />
        </motion.div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-3 border-t border-white/5">
          {topic.sections.map((section, si) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: si * 0.05 }}
              className="p-4 rounded-lg bg-white/5 border border-white/5"
            >
              <h4 className={`font-semibold text-sm mb-2 ${c.text}`}>{section.name}</h4>
              <div className="flex flex-wrap gap-2">
                {section.items.map(item => (
                  <span key={item} className={`text-xs px-2.5 py-1 rounded-full ${c.badge} text-gray-300 font-mono`}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function KnowledgeLibrary() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-blue-500/20 text-xs text-blue-400 font-mono mb-6 tracking-widest uppercase">
            <BookMarked className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Cyber <span className="text-gradient-cyan">Knowledge Library</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive educational content on all aspects of cybersecurity. Click any topic to expand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {knowledgeTopics.map((topic, i) => (
            <TopicCard key={topic.title} topic={topic} index={i} />
          ))}
        </div>

        {/* Study Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 glass rounded-2xl border border-cyan-500/10 p-8"
        >
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            Effective Study Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Progressive Learning', desc: 'Start with fundamentals before advanced topics' },
              { title: 'Hands-On Practice', desc: 'Apply knowledge in labs and real scenarios' },
              { title: 'Community Support', desc: 'Join forums and study groups for peer learning' },
            ].map(tip => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-white/5 border border-white/5"
              >
                <h4 className="font-semibold text-cyan-400 mb-1 text-sm">{tip.title}</h4>
                <p className="text-gray-500 text-sm">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
