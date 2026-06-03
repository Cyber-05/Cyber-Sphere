import { motion } from 'framer-motion';
import { Network, Terminal, Globe, Code, Shield, Search, Cpu, Cloud, Lock, Microscope, Siren, ChevronRight, Map } from 'lucide-react';

const roadmapLevels = [
  {
    level: 'Beginner',
    subtitle: 'Foundation Skills',
    color: 'green',
    gradient: 'from-green-500 to-teal-400',
    borderColor: 'border-green-500/30',
    bgColor: 'bg-green-500/5',
    glowColor: 'shadow-[0_0_30px_rgba(0,255,136,0.15)]',
    icon: Shield,
    skills: [
      { name: 'Networking Fundamentals', icon: Network, desc: 'TCP/IP, DNS, HTTP, Protocols, OSI Model' },
      { name: 'Linux Command Line', icon: Terminal, desc: 'Bash, File System, Permissions, Scripting' },
      { name: 'Web Basics', icon: Globe, desc: 'HTTP/HTTPS, HTML, CSS, Web Architecture' },
      { name: 'Python Programming', icon: Code, desc: 'Scripting, Automation, Security Tools' },
    ],
  },
  {
    level: 'Intermediate',
    subtitle: 'Core Security Skills',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-400',
    borderColor: 'border-cyan-500/30',
    bgColor: 'bg-cyan-500/5',
    glowColor: 'shadow-[0_0_30px_rgba(0,212,255,0.15)]',
    icon: Search,
    skills: [
      { name: 'Web Application Security', icon: Globe, desc: 'OWASP Top 10, SQLi, XSS, CSRF, Auth Bypass' },
      { name: 'OSINT Techniques', icon: Search, desc: 'Reconnaissance, Maltego, Shodan, WHOIS' },
      { name: 'Penetration Testing', icon: Shield, desc: 'Metasploit, Nmap, Burp Suite, Enumeration' },
      { name: 'Digital Forensics', icon: Microscope, desc: 'Evidence Collection, Disk Imaging, Artifacts' },
    ],
  },
  {
    level: 'Advanced',
    subtitle: 'Expert Specializations',
    color: 'red',
    gradient: 'from-red-500 to-orange-400',
    borderColor: 'border-red-500/30',
    bgColor: 'bg-red-500/5',
    glowColor: 'shadow-[0_0_30px_rgba(255,34,68,0.15)]',
    icon: Cpu,
    skills: [
      { name: 'Malware Analysis', icon: Cpu, desc: 'Static/Dynamic Analysis, Sandbox, IDA Pro' },
      { name: 'Reverse Engineering', icon: Code, desc: 'Assembly, Ghidra, Binary Exploitation' },
      { name: 'Threat Hunting', icon: Siren, desc: 'SIEM, Log Analysis, IOC Detection, MITRE ATT&CK' },
      { name: 'Cloud Security', icon: Cloud, desc: 'AWS/Azure Security, IAM, Container Security' },
    ],
  },
];

const colorMap: Record<string, { tag: string; icon: string; badge: string; line: string }> = {
  green: { tag: 'bg-green-500/10 text-green-400', icon: 'text-green-400', badge: 'bg-green-500/10 text-green-300 border-green-500/20', line: 'bg-green-500' },
  cyan: { tag: 'bg-cyan-500/10 text-cyan-400', icon: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20', line: 'bg-cyan-500' },
  red: { tag: 'bg-red-500/10 text-red-400', icon: 'text-red-400', badge: 'bg-red-500/10 text-red-300 border-red-500/20', line: 'bg-red-500' },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-500/20 text-xs text-cyan-400 font-mono mb-6 tracking-widest uppercase">
            <Map className="w-3.5 h-3.5" />
            Learning Roadmap
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Your <span className="text-gradient-cyan">Security Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A structured path from zero to security expert — follow the roadmap at your own pace.
          </p>
        </motion.div>

        {/* Roadmap columns */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:flex absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-green-500/30 via-cyan-500/30 to-red-500/30 -z-0 items-center justify-between pointer-events-none" />

          {roadmapLevels.map((level, i) => {
            const c = colorMap[level.color];
            const LevelIcon = level.icon;
            return (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <LevelIcon className="w-8 h-8 text-black" strokeWidth={2} />
                  </motion.div>
                </div>

                {/* Level card */}
                <div className={`glass rounded-2xl border ${level.borderColor} ${level.glowColor} transition-all hover:scale-[1.01] duration-300`}>
                  <div className={`h-1 bg-gradient-to-r ${level.gradient} rounded-t-2xl`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black text-white">{level.level}</h3>
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${c.badge}`}>
                        Step {i + 1}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-mono mb-5">{level.subtitle}</p>

                    <div className="space-y-3">
                      {level.skills.map((skill, si) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + si * 0.08 }}
                          whileHover={{ x: 4 }}
                          className={`flex items-start gap-3 p-3 rounded-xl ${level.bgColor} border border-white/5 transition-all cursor-default group`}
                        >
                          <div className={`mt-0.5 ${c.icon}`}>
                            <skill.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">{skill.desc}</div>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 ${c.icon} ml-auto mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-4 font-mono">Ready to start your journey?</p>
          <motion.a
            href="#resources"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,212,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold rounded-xl shadow-lg shadow-cyan-500/30 cyber-btn"
          >
            <Lock className="w-5 h-5" />
            Begin Your Path
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
