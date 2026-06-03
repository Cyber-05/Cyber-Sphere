import { motion } from 'framer-motion';
import { BookOpen, Clock, ChevronRight, Tag, TrendingUp } from 'lucide-react';

const articles = [
  {
    title: 'Password Security: Building an Unbreakable Defense',
    excerpt: 'Learn how to create and manage strong passwords, understand hash cracking techniques, and implement password managers for organizations.',
    category: 'Security Basics',
    readTime: '8 min read',
    date: 'Jun 1, 2025',
    color: 'cyan',
    tags: ['Passwords', 'Authentication', 'Best Practices'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Phishing Awareness: How to Spot Modern Social Engineering',
    excerpt: 'Deep dive into phishing techniques used by attackers in 2025, including spear phishing, whaling, and how to protect your organization.',
    category: 'Social Engineering',
    readTime: '6 min read',
    date: 'May 28, 2025',
    color: 'red',
    tags: ['Phishing', 'Email Security', 'Awareness'],
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Malware Trends 2025: Ransomware Evolution',
    excerpt: 'Analyzing the latest malware families, ransomware-as-a-service platforms, and the tools defenders use to detect and analyze threats.',
    category: 'Malware Analysis',
    readTime: '10 min read',
    date: 'May 22, 2025',
    color: 'orange',
    tags: ['Malware', 'Ransomware', 'Threat Intel'],
    image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Linux Command Line for Security Professionals',
    excerpt: 'Essential Linux commands, networking tools, and scripting techniques every penetration tester and security analyst needs to master.',
    category: 'Linux Security',
    readTime: '12 min read',
    date: 'May 15, 2025',
    color: 'green',
    tags: ['Linux', 'CLI', 'Networking'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Web Security: Understanding the OWASP Top 10',
    excerpt: 'Complete guide to the OWASP Top 10 vulnerabilities, real-world examples, how to test for them, and defensive coding practices.',
    category: 'Web Security',
    readTime: '15 min read',
    date: 'May 10, 2025',
    color: 'teal',
    tags: ['OWASP', 'Web Apps', 'Penetration Testing'],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const colorMap: Record<string, { badge: string; tag: string; border: string; hover: string }> = {
  cyan: { badge: 'text-cyan-400 bg-cyan-500/10', tag: 'bg-cyan-500/10 text-cyan-400', border: 'hover:border-cyan-500/40', hover: 'hover:shadow-cyber' },
  red: { badge: 'text-red-400 bg-red-500/10', tag: 'bg-red-500/10 text-red-400', border: 'hover:border-red-500/40', hover: 'hover:shadow-red-glow' },
  orange: { badge: 'text-orange-400 bg-orange-500/10', tag: 'bg-orange-500/10 text-orange-400', border: 'hover:border-orange-500/40', hover: 'hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]' },
  green: { badge: 'text-green-400 bg-green-500/10', tag: 'bg-green-500/10 text-green-400', border: 'hover:border-green-500/40', hover: 'hover:shadow-green-glow' },
  teal: { badge: 'text-teal-400 bg-teal-500/10', tag: 'bg-teal-500/10 text-teal-400', border: 'hover:border-teal-500/40', hover: 'hover:shadow-[0_0_30px_rgba(0,255,204,0.2)]' },
};

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-orange-500/20 text-xs text-orange-400 font-mono mb-6 tracking-widest uppercase">
            <TrendingUp className="w-3.5 h-3.5" />
            Security Intelligence
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Latest <span className="text-gradient-fire">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            In-depth cybersecurity guides, threat analysis, and educational content for all skill levels.
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="glass rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all overflow-hidden group cursor-pointer">
            <div className="md:flex">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-between md:w-3/5">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full ${colorMap[articles[0].color].badge}`}>
                      {articles[0].category}
                    </span>
                    <span className="text-xs text-gray-600 font-mono">{articles[0].date}</span>
                    <span className="text-xs text-gray-600 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {articles[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {articles[0].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{articles[0].excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-wrap gap-2">
                    {articles[0].tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-1 rounded-md font-mono ${colorMap[articles[0].color].tag}`}>
                        <Tag className="w-3 h-3 inline mr-1" />{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-cyan-400 text-sm font-mono flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {articles.slice(1).map((article, i) => {
            const c = colorMap[article.color];
            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl border border-white/5 ${c.border} ${c.hover} transition-all duration-300 overflow-hidden group cursor-pointer`}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${c.badge}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-600 font-mono flex items-center gap-1 ml-auto">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 glass border border-cyan-500/30 text-cyan-400 font-bold rounded-xl hover:border-cyan-500/60 transition-all mx-auto cyber-btn"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
