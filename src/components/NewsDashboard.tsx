import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, AlertTriangle, Eye, Clock, User, Share2, ChevronRight, Flame } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'New Zero-Day Vulnerability Discovered in Chrome — Patch Released Immediately',
    excerpt: 'Google announces critical security patch addressing a zero-day vulnerability affecting over 2 billion Chrome users. Immediate update recommended.',
    category: 'Threats',
    author: 'Security Research Team',
    date: 'Jun 3, 2025',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '245K',
    featured: true,
  },
  {
    id: 2,
    title: 'Ransomware Attacks Surge 42% in Q2 — Understanding the Trends',
    excerpt: 'New report shows dramatic increase in ransomware targeting critical infrastructure. Healthcare and financial sectors most affected.',
    category: 'Intelligence',
    author: 'Threat Analysis',
    date: 'Jun 2, 2025',
    image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '189K',
  },
  {
    id: 3,
    title: 'AI-Powered Security Tools: The Future of Threat Detection',
    excerpt: 'Exploring how artificial intelligence and machine learning are revolutionizing cybersecurity defense mechanisms.',
    category: 'Technology',
    author: 'Innovation Lab',
    date: 'Jun 1, 2025',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '156K',
  },
  {
    id: 4,
    title: 'Master Linux Security: Essential Commands Every Admin Must Know',
    excerpt: 'Complete guide to securing Linux systems with practical commands and real-world scenarios.',
    category: 'Education',
    author: 'Linux Security',
    date: 'May 31, 2025',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: '132K',
  },
];

const trendingTopics = [
  { tag: 'Zero-Day Exploits', count: '1.2K' },
  { tag: 'APT Groups', count: '892' },
  { tag: 'Data Breaches', count: '756' },
  { tag: 'Cloud Security', count: '645' },
  { tag: 'Ransomware', count: '534' },
];

const categoryColors: Record<string, string> = {
  Threats: 'text-red-400 bg-red-500/10 border-red-500/20',
  Intelligence: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  Technology: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Education: 'text-green-400 bg-green-500/10 border-green-500/20',
};

export default function NewsDashboard() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-orange-500/20 text-xs text-orange-400 font-mono mb-6 tracking-widest uppercase">
            <TrendingUp className="w-3.5 h-3.5" />
            Security News & Insights
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Cyber <span className="text-gradient-fire">News Dashboard</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest cybersecurity news, threat intelligence, and industry insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured article + regular articles */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl border border-red-500/20 overflow-hidden group cursor-pointer hover:border-red-500/40 transition-all"
            >
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between md:w-3/5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${categoryColors[newsArticles[0].category]}`}>
                        {newsArticles[0].category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-600 font-mono">
                        <Flame className="w-3 h-3 text-red-400" />
                        FEATURED
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {newsArticles[0].title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{newsArticles[0].excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4 text-xs text-gray-600 font-mono">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {newsArticles[0].author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {newsArticles[0].date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-cyan-400 text-sm font-mono group-hover:gap-2 transition-all">
                      Read <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent articles */}
            <div className="space-y-4">
              {newsArticles.slice(1).map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl border border-white/5 hover:border-white/10 p-5 flex gap-4 group cursor-pointer transition-all"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-24 h-24 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-600 font-mono">{article.date}</span>
                    </div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-600 font-mono">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {article.views}
                      </span>
                      <span className="text-cyan-400">Read More →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar - Trending topics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Trending */}
            <div className="glass rounded-2xl border border-white/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <h3 className="font-bold text-white">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, i) => (
                  <motion.button
                    key={topic.tag}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all group"
                  >
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{topic.tag}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 font-mono font-bold">
                      {topic.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl border border-cyan-500/20 p-6 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-white">Daily Briefing</h4>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Get security insights delivered to your inbox every morning.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold text-sm rounded-lg cyber-btn"
              >
                Subscribe Now
              </motion.button>
            </motion.div>

            {/* Quick stats */}
            <div className="glass rounded-2xl border border-white/5 p-6">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                Quick Stats
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'News Published', value: '1,247' },
                  { label: 'Active Threats', value: '847' },
                  { label: 'Researchers', value: '345+' },
                ].map(stat => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ x: 2 }}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5"
                  >
                    <span className="text-xs text-gray-500 font-mono">{stat.label}</span>
                    <span className="text-sm font-bold text-cyan-400">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
