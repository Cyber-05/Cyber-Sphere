import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Activity } from 'lucide-react';

// Attack origin/destination pairs (simplified lat/lng to SVG coords)
const cyberNodes = [
  { id: 'us', x: 22, y: 38, label: 'United States', active: true, color: '#00d4ff' },
  { id: 'uk', x: 48, y: 28, label: 'United Kingdom', active: true, color: '#00ffcc' },
  { id: 'de', x: 51, y: 27, label: 'Germany', active: false, color: '#00d4ff' },
  { id: 'ru', x: 62, y: 24, label: 'Russia', active: true, color: '#ff2244' },
  { id: 'cn', x: 76, y: 36, label: 'China', active: true, color: '#ff6b00' },
  { id: 'jp', x: 83, y: 35, label: 'Japan', active: true, color: '#00d4ff' },
  { id: 'au', x: 82, y: 70, label: 'Australia', active: false, color: '#00ff88' },
  { id: 'br', x: 30, y: 60, label: 'Brazil', active: true, color: '#ffcc00' },
  { id: 'in', x: 68, y: 43, label: 'India', active: true, color: '#00d4ff' },
  { id: 'za', x: 54, y: 68, label: 'South Africa', active: false, color: '#00ffcc' },
  { id: 'ca', x: 18, y: 28, label: 'Canada', active: false, color: '#00d4ff' },
  { id: 'sg', x: 78, y: 52, label: 'Singapore', active: true, color: '#00ff88' },
];

const connections = [
  { from: 'us', to: 'uk' },
  { from: 'us', to: 'ru' },
  { from: 'cn', to: 'us' },
  { from: 'uk', to: 'de' },
  { from: 'ru', to: 'cn' },
  { from: 'jp', to: 'us' },
  { from: 'in', to: 'uk' },
  { from: 'br', to: 'us' },
  { from: 'sg', to: 'jp' },
];

const threatStats = [
  { label: 'Active Threats', value: '2,847', change: '+12%', color: 'text-red-400' },
  { label: 'Blocked Attacks', value: '98.7%', change: '24h', color: 'text-green-400' },
  { label: 'Countries Monitored', value: '195', change: 'Global', color: 'text-cyan-400' },
  { label: 'Data Breaches Today', value: '23', change: 'Live', color: 'text-orange-400' },
];

export default function GlobalCyberMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <section id="community" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-red-500/20 text-xs text-red-400 font-mono mb-6 tracking-widest uppercase">
            <Activity className="w-3.5 h-3.5" />
            Live Threat Intelligence
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Global <span className="text-gradient-fire">Cyber Map</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time visualization of global cyber activity, threat vectors, and security nodes.
          </p>
        </motion.div>

        {/* Threat stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {threatStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-4 border border-white/5 text-center"
            >
              <div className={`text-2xl font-black ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono mb-1 uppercase tracking-wider">{stat.label}</div>
              <div className={`text-xs font-mono ${stat.color} opacity-70`}>{stat.change}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl border border-cyan-500/10 overflow-hidden relative"
        >
          {/* Map header */}
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Cybersphere Global Network</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Defensive
              </span>
              <span className="flex items-center gap-1.5 text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-400" /> Threat
              </span>
              <span className="flex items-center gap-1.5 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400" /> Secure
              </span>
            </div>
          </div>

          {/* SVG World Map */}
          <div className="relative bg-gradient-to-b from-slate-950 to-blue-950/30 p-4" style={{ minHeight: '400px' }}>
            <svg
              ref={svgRef}
              viewBox="0 0 100 80"
              className="w-full"
              style={{ height: '360px' }}
            >
              {/* Grid lines */}
              {Array.from({ length: 9 }, (_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#00d4ff08" strokeWidth="0.2" />
              ))}
              {Array.from({ length: 11 }, (_, i) => (
                <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="80" stroke="#00d4ff08" strokeWidth="0.2" />
              ))}

              {/* Equator */}
              <line x1="0" y1="40" x2="100" y2="40" stroke="#00d4ff15" strokeWidth="0.3" strokeDasharray="1,2" />

              {/* Simplified continent shapes */}
              {/* North America */}
              <ellipse cx="22" cy="36" rx="14" ry="12" fill="#0a2a1a" stroke="#00ff8820" strokeWidth="0.3" />
              {/* South America */}
              <ellipse cx="28" cy="58" rx="8" ry="12" fill="#0a2a1a" stroke="#00ff8820" strokeWidth="0.3" />
              {/* Europe */}
              <ellipse cx="50" cy="26" rx="7" ry="8" fill="#0a2a1a" stroke="#00ff8820" strokeWidth="0.3" />
              {/* Africa */}
              <ellipse cx="52" cy="52" rx="9" ry="14" fill="#0a2a1a" stroke="#00ff8820" strokeWidth="0.3" />
              {/* Asia */}
              <ellipse cx="72" cy="30" rx="20" ry="14" fill="#0a2a1a" stroke="#00ff8820" strokeWidth="0.3" />
              {/* Australia */}
              <ellipse cx="82" cy="64" rx="8" ry="6" fill="#0a2a1a" stroke="#00ff8820" strokeWidth="0.3" />

              {/* Connection lines */}
              {connections.map((conn, i) => {
                const from = cyberNodes.find(n => n.id === conn.from)!;
                const to = cyberNodes.find(n => n.id === conn.to)!;
                const isAttack = from.color === '#ff2244' || to.color === '#ff2244' || from.color === '#ff6b00';
                return (
                  <g key={i}>
                    <line
                      x1={from.x} y1={from.y}
                      x2={to.x} y2={to.y}
                      stroke={isAttack ? '#ff224430' : '#00d4ff20'}
                      strokeWidth="0.3"
                      strokeDasharray="1,1"
                    />
                    {/* Animated data packet */}
                    <circle r="0.5" fill={isAttack ? '#ff2244' : '#00d4ff'} opacity="0.8">
                      <animateMotion
                        dur={`${2 + i * 0.5}s`}
                        repeatCount="indefinite"
                        path={`M${from.x},${from.y} L${to.x},${to.y}`}
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Nodes */}
              {cyberNodes.map((node) => (
                <g key={node.id}>
                  {/* Outer ring */}
                  <circle
                    cx={node.x} cy={node.y} r="2.5"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="0.3"
                    opacity="0.4"
                  >
                    <animate attributeName="r" values="2;3.5;2" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  {/* Inner dot */}
                  <circle cx={node.x} cy={node.y} r="1" fill={node.color} opacity="0.9" />
                  {/* Label */}
                  <text
                    x={node.x} y={node.y - 2}
                    textAnchor="middle"
                    fontSize="1.8"
                    fill={node.color}
                    opacity="0.7"
                    fontFamily="monospace"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Scan overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-2xl">
              <div
                className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                style={{ animation: 'scanline 4s linear infinite' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom activity feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 glass rounded-xl border border-white/5 p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Live Activity Feed</span>
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse ml-auto" />
          </div>
          <div className="space-y-1.5">
            {[
              { time: '00:01', event: 'DDoS attempt blocked from 192.168.x.x → US East Coast servers', type: 'red' },
              { time: '00:02', event: 'SSH brute force detected — Origin: Eastern Europe', type: 'orange' },
              { time: '00:03', event: 'Malware signature database updated — 847 new signatures', type: 'green' },
              { time: '00:04', event: 'Phishing campaign intercepted — 2,300 emails blocked', type: 'red' },
              { time: '00:05', event: 'Vulnerability scan completed — 0 critical findings', type: 'green' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-mono">
                <span className="text-gray-700 w-10">{item.time}</span>
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  item.type === 'red' ? 'bg-red-400' : item.type === 'orange' ? 'bg-orange-400' : 'bg-green-400'
                }`} />
                <span className="text-gray-500 truncate">{item.event}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
