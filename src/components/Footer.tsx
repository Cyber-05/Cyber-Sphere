import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Twitter, Github, Linkedin, Instagram, ChevronRight, Terminal, Code, User } from 'lucide-react';

const footerLinks = {
  'Learning': ['Roadmap', 'TryHackMe', 'Hack The Box', 'PortSwigger', 'Certifications'],
  'Tools': ['CyberChef', 'VirusTotal', 'Termux', 'OWASP ZAP', 'Burp Suite'],
  'Resources': ['OSINT Guide', 'CTF Writeups', 'Cheat Sheets', 'Malware Analysis', 'Forensics'],
  'Community': ['Discord', 'Newsletter', 'Contribute', 'Blog', 'Contact'],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/Cyber-05', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sai-kulwanth-kotagiri-3555ab320/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/_kulwanth__/', label: 'Instagram' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer-section');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="footer-section" className="relative overflow-hidden border-t border-white/5">
      {/* Expanding galaxy effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 2, opacity: 0.3 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-cyan-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-14">
          {/* Brand */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">
                    Cyber<span className="text-gradient-cyan">Sphere</span>
                  </span>
                  <div className="text-[10px] text-cyan-500/70 font-mono tracking-widest uppercase">Security Intelligence</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                A community-driven cybersecurity education hub featuring ethical hacking resources, security tools, OSINT guides, and learning paths for the global security community.
              </p>
              <div className="flex items-center gap-3">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-white/5 hover:border-cyan-500/30 text-gray-500 hover:text-cyan-400 transition-all"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
              >
                <h4 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map(link => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-10 border-y border-white/5 mb-10 relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-black text-gray-400 mb-4 italic"
          >
            "Knowledge is the strongest defense."
          </motion.h2>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
            Keep <span className="text-gradient-cyan neon-text">Learning</span>.
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Keep <span className="text-gradient-green neon-text-green">Defending</span>.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#home" className="flex items-center gap-2 px-6 py-2.5 glass border border-cyan-500/20 text-cyan-400 font-mono text-sm rounded-xl hover:border-cyan-500/50 transition-all">
              <Terminal className="w-4 h-4" /> Back to Top
            </a>
            <a href="#roadmap" className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold text-sm rounded-xl cyber-btn">
              <Code className="w-4 h-4" /> Start Learning
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-mono">
          <span>© 2025 CyberSphere. All rights reserved. For educational purposes only.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Disclaimer</a>
          </div>
        </div>

        {/* Developer credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 pt-4 border-t border-white/5 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full border border-cyan-500/15 text-xs font-mono text-gray-500">
            <User className="w-3.5 h-3.5 text-cyan-500" />
            Developed by{' '}
            <span className="text-gradient-cyan font-semibold">Kulwanth Kotagiri</span>
            <span className="text-cyan-500/50">·</span>
            <span className="text-gray-600">CyberSphere v2.0</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
