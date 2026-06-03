import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, Grid3x3, List, Filter, X, ExternalLink } from 'lucide-react';

const toolsDatabase = [
  // OSINT
  { name: 'Shodan', desc: 'Search engine for finding internet-connected devices', category: 'OSINT', link: 'https://shodan.io', color: 'red', verified: true },
  { name: 'Maltego', desc: 'Visual intelligence tool for reconnaissance', category: 'OSINT', link: 'https://maltego.com', color: 'orange', verified: true },
  { name: 'theHarvester', desc: 'Python tool for gathering email and subdomain info', category: 'OSINT', link: 'https://github.com/laramies/theHarvester', color: 'yellow', verified: true },
  { name: 'Recon-ng', desc: 'Full-featured web reconnaissance framework', category: 'OSINT', link: 'https://github.com/lanmaster53/recon-ng', color: 'green', verified: true },

  // Networking
  { name: 'Wireshark', desc: 'Network protocol analyzer for packet inspection', category: 'Networking', link: 'https://wireshark.org', color: 'cyan', verified: true },
  { name: 'Nmap', desc: 'Network discovery and security auditing tool', category: 'Networking', link: 'https://nmap.org', color: 'blue', verified: true },
  { name: 'Netcat', desc: 'TCP/IP utility for reading/writing network data', category: 'Networking', link: 'https://github.com/Zer0Mem0ry/netcat', color: 'purple', verified: true },

  // Linux
  { name: 'Kali Linux', desc: 'Penetration testing and security auditing OS', category: 'Linux', link: 'https://kali.org', color: 'teal', verified: true },
  { name: 'Parrot Security', desc: 'Security-focused Linux distribution', category: 'Linux', link: 'https://parrotsec.org', color: 'green', verified: true },
  { name: 'Ubuntu Server', desc: 'Secure and stable Linux server OS', category: 'Linux', link: 'https://ubuntu.com/download/server', color: 'orange', verified: true },

  // Digital Forensics
  { name: 'Autopsy', desc: 'Digital forensics platform and GUI for The Sleuth Kit', category: 'Digital Forensics', link: 'https://www.sleuthkit.org/autopsy/', color: 'red', verified: true },
  { name: 'Volatility', desc: 'Memory forensics framework', category: 'Digital Forensics', link: 'https://www.volatilityfoundation.org', color: 'purple', verified: true },
  { name: 'FTK Imager', desc: 'Data preview and disk imaging tool', category: 'Digital Forensics', link: 'https://accessdata.com', color: 'orange', verified: false },

  // Malware Analysis
  { name: 'Ghidra', desc: 'Reverse engineering framework by NSA', category: 'Malware Analysis', link: 'https://ghidra-sre.org', color: 'cyan', verified: true },
  { name: 'IDA Pro', desc: 'Interactive disassembler for binary analysis', category: 'Malware Analysis', link: 'https://www.hex-rays.com/ida-pro/', color: 'yellow', verified: false },
  { name: 'Cuckoo Sandbox', desc: 'Automated malware analysis system', category: 'Malware Analysis', link: 'https://cuckoosandbox.org', color: 'red', verified: true },

  // Threat Intelligence
  { name: 'MITRE ATT&CK', desc: 'Knowledge base of attacker tactics and techniques', category: 'Threat Intelligence', link: 'https://attack.mitre.org', color: 'red', verified: true },
  { name: 'VirusTotal', desc: 'Multi-engine malware analysis service', category: 'Threat Intelligence', link: 'https://virustotal.com', color: 'orange', verified: true },
  { name: 'AlienVault OTX', desc: 'Open threat exchange platform', category: 'Threat Intelligence', link: 'https://otx.alienvault.com', color: 'purple', verified: true },

  // Password Security
  { name: 'Hashcat', desc: 'Advanced password recovery utility', category: 'Password Security', link: 'https://hashcat.net', color: 'red', verified: true },
  { name: 'John the Ripper', desc: 'Password cracking software', category: 'Password Security', link: 'https://www.openwall.com/john/', color: 'yellow', verified: true },
  { name: 'Bitwarden', desc: 'Open-source password manager', category: 'Password Security', link: 'https://bitwarden.com', color: 'green', verified: true },

  // Learning Platforms
  { name: 'TryHackMe', desc: 'Interactive cybersecurity training', category: 'Learning Platforms', link: 'https://tryhackme.com', color: 'cyan', verified: true },
  { name: 'Hack The Box', desc: 'Penetration testing labs platform', category: 'Learning Platforms', link: 'https://hackthebox.com', color: 'green', verified: true },
  { name: 'PortSwigger Academy', desc: 'Free web security training', category: 'Learning Platforms', link: 'https://portswigger.net/web-security', color: 'blue', verified: true },
];

const categories = ['All', ...new Set(toolsDatabase.map(t => t.category))];

const colorMap: Record<string, string> = {
  red: 'border-red-500/20 hover:border-red-500/40 bg-red-500/5',
  orange: 'border-orange-500/20 hover:border-orange-500/40 bg-orange-500/5',
  yellow: 'border-yellow-500/20 hover:border-yellow-500/40 bg-yellow-500/5',
  green: 'border-green-500/20 hover:border-green-500/40 bg-green-500/5',
  cyan: 'border-cyan-500/20 hover:border-cyan-500/40 bg-cyan-500/5',
  blue: 'border-blue-500/20 hover:border-blue-500/40 bg-blue-500/5',
  purple: 'border-purple-500/20 hover:border-purple-500/40 bg-purple-500/5',
  teal: 'border-teal-500/20 hover:border-teal-500/40 bg-teal-500/5',
};

export default function ToolsExplorer() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = useMemo(() => {
    return toolsDatabase.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
                           tool.desc.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const toggleFavorite = (name: string) => {
    setFavorites(prev => prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-green-500/20 text-xs text-green-400 font-mono mb-6 tracking-widest uppercase">
            <Search className="w-3.5 h-3.5" />
            Tools Database
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Cybersecurity <span className="text-gradient-green">Tools Explorer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Searchable database of professional security tools organized by category.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search tools by name or description..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-green-500/5 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? 'bg-green-500 text-black border border-green-400'
                      : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* View toggle */}
            <div className="ml-auto flex items-center gap-2 glass rounded-lg border border-white/10 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-green-500/20 text-green-400' : 'text-gray-600'}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-green-500/20 text-green-400' : 'text-gray-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results info */}
          <div className="text-xs text-gray-600 font-mono">
            Found <span className="text-green-400 font-bold">{filtered.length}</span> tools
            {favorites.length > 0 && ` • <span class="text-cyan-400">${favorites.length} favorited</span>`}
          </div>
        </motion.div>

        {/* Tools grid/list */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="tools"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}
            >
              {filtered.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`glass rounded-xl border p-5 transition-all cursor-pointer group ${colorMap[tool.color]}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors">{tool.name}</h3>
                      <p className="text-xs text-gray-600 font-mono mt-0.5">{tool.category}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {tool.verified && (
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 font-mono">Verified</span>
                      )}
                      <motion.button
                        onClick={() => toggleFavorite(tool.name)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-1.5 rounded-lg transition-all ${
                          favorites.includes(tool.name)
                            ? 'bg-red-500/20 text-red-400'
                            : 'text-gray-600 hover:text-gray-400'
                        }`}
                      >
                        <Heart className="w-4 h-4" fill="currentColor" />
                      </motion.button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">{tool.desc}</p>

                  <motion.a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-mono text-xs rounded-lg transition-all"
                  >
                    Visit <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <X className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No tools found matching your search.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
