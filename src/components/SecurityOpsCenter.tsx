import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Activity, Shield, Users, BarChart3, Zap, Radar } from 'lucide-react';

const socWidgets = [
  {
    title: 'Active Threats',
    value: '12,847',
    change: '+23%',
    trend: 'up',
    icon: AlertTriangle,
    color: 'red',
    data: [45, 52, 48, 61, 55, 67, 72],
  },
  {
    title: 'Security Alerts',
    value: '2,341',
    change: '-15%',
    trend: 'down',
    icon: Zap,
    color: 'yellow',
    data: [85, 72, 68, 74, 62, 55, 45],
  },
  {
    title: 'Network Health',
    value: '98.7%',
    change: '+2%',
    trend: 'up',
    icon: Activity,
    color: 'green',
    data: [90, 93, 95, 94, 96, 98, 99],
  },
  {
    title: 'Protected Assets',
    value: '15,234',
    change: '+8',
    trend: 'up',
    icon: Shield,
    color: 'cyan',
    data: [14000, 14200, 14500, 14800, 15000, 15150, 15234],
  },
  {
    title: 'Malware Blocked',
    value: '847',
    change: '+142',
    trend: 'up',
    icon: Radar,
    color: 'purple',
    data: [300, 400, 520, 600, 680, 750, 847],
  },
  {
    title: 'User Activity',
    value: '4.2M',
    change: '+18%',
    trend: 'up',
    icon: Users,
    color: 'blue',
    data: [3000, 3300, 3600, 3900, 4000, 4100, 4200],
  },
];

const colorMap: Record<string, { border: string; icon: string; bar: string; text: string }> = {
  red: { border: 'border-red-500/20', icon: 'text-red-400 bg-red-500/10', bar: 'bg-red-500', text: 'text-red-400' },
  yellow: { border: 'border-yellow-500/20', icon: 'text-yellow-400 bg-yellow-500/10', bar: 'bg-yellow-500', text: 'text-yellow-400' },
  green: { border: 'border-green-500/20', icon: 'text-green-400 bg-green-500/10', bar: 'bg-green-500', text: 'text-green-400' },
  cyan: { border: 'border-cyan-500/20', icon: 'text-cyan-400 bg-cyan-500/10', bar: 'bg-cyan-500', text: 'text-cyan-400' },
  purple: { border: 'border-purple-500/20', icon: 'text-purple-400 bg-purple-500/10', bar: 'bg-purple-500', text: 'text-purple-400' },
  blue: { border: 'border-blue-500/20', icon: 'text-blue-400 bg-blue-500/10', bar: 'bg-blue-500', text: 'text-blue-400' },
};

export default function SecurityOpsCenter() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-500/20 text-xs text-cyan-400 font-mono mb-6 tracking-widest uppercase">
            <Radar className="w-3.5 h-3.5" />
            Real-Time Operations
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Global Security <span className="text-gradient-cyan">Operations Center</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Live threat intelligence and security metrics across the global infrastructure.
          </p>
        </motion.div>

        {/* Dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {socWidgets.map((widget, i) => {
            const c = colorMap[widget.color];
            const Icon = widget.icon;
            return (
              <motion.div
                key={widget.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`glass rounded-2xl border ${c.border} p-6 overflow-hidden group`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className={`text-xs font-mono px-2.5 py-1 rounded-full ${c.text} bg-black/30`}
                  >
                    LIVE
                  </motion.div>
                </div>

                {/* Title & Value */}
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">{widget.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className={`text-2xl font-black ${c.text}`}>{widget.value}</span>
                  <span className={`text-xs font-mono ${widget.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {widget.trend === 'up' ? '▲' : '▼'} {widget.change}
                  </span>
                </div>

                {/* Mini chart */}
                <div className="h-8 flex items-end gap-1 mb-3 opacity-60">
                  {widget.data.map((val, j) => (
                    <motion.div
                      key={j}
                      className={`flex-1 rounded-t ${c.bar}`}
                      style={{ height: `${(val / Math.max(...widget.data)) * 100}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(val / Math.max(...widget.data)) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.05 }}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={c.bar}
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 font-mono">85%</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Activity timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl border border-cyan-500/10 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-white">24-Hour Activity Timeline</h3>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-auto" />
          </div>

          <div className="space-y-4">
            {[
              { time: '00:00', event: 'DDoS attack detected and mitigated', severity: 'critical', duration: '12 min' },
              { time: '04:30', event: 'Malware signature database updated', severity: 'info', duration: '2 min' },
              { time: '08:15', event: 'Phishing campaign blocked', severity: 'high', duration: '45 sec' },
              { time: '12:00', event: 'System backup completed successfully', severity: 'success', duration: '18 min' },
              { time: '16:45', event: 'Vulnerability scan in progress', severity: 'warning', duration: 'Ongoing' },
              { time: '20:30', event: 'Security audit passed all checks', severity: 'success', duration: '30 min' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="font-mono text-sm text-gray-600 w-14">{item.time}</div>
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    item.severity === 'critical'
                      ? 'bg-red-500'
                      : item.severity === 'high'
                        ? 'bg-orange-500'
                        : item.severity === 'warning'
                          ? 'bg-yellow-500'
                          : item.severity === 'success'
                            ? 'bg-green-500'
                            : 'bg-cyan-500'
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-300">{item.event}</p>
                  <p className="text-xs text-gray-600 font-mono mt-0.5">Duration: {item.duration}</p>
                </div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">{item.severity}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
