import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, Twitter, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Bell } from 'lucide-react';

const socials = [
  { icon: Twitter, label: 'Twitter', handle: '@CyberSphereHQ', color: 'text-sky-400 hover:bg-sky-500/10' },
  { icon: Github, label: 'GitHub', handle: 'Cyber-05', href: 'https://github.com/Cyber-05', color: 'text-gray-400 hover:bg-gray-500/10' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Sai Kulwanth Kotagiri', href: 'https://www.linkedin.com/in/sai-kulwanth-kotagiri-3555ab320/', color: 'text-blue-400 hover:bg-blue-500/10' },
  { icon: Instagram, label: 'Instagram', handle: '@_kulwanth__', href: 'https://www.instagram.com/_kulwanth__/', color: 'text-pink-400 hover:bg-pink-500/10' },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletter, setNewsletter] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 4000);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletter.includes('@')) {
      setNewsletterStatus('success');
      setNewsletter('');
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-500/20 text-xs text-cyan-400 font-mono mb-6 tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Contact <span className="text-gradient-cyan">CyberSphere</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions, suggestions, or want to contribute? Reach out to the community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl border border-cyan-500/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-gray-500 font-mono">We read every message</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Name</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                    placeholder="What's this about?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 rounded-xl px-4 py-3 border border-green-500/20">
                    <CheckCircle className="w-4 h-4" /> Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 rounded-xl px-4 py-3 border border-red-500/20">
                    <AlertCircle className="w-4 h-4" /> Please fill all required fields.
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold rounded-xl cyber-btn"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right side — socials + newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social links */}
            <div className="glass rounded-2xl border border-white/5 p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Follow CyberSphere
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03, x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 ${social.color} transition-all`}
                  >
                    <social.icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">{social.label}</div>
                      <div className="text-xs text-gray-600 font-mono">{social.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass rounded-2xl border border-cyan-500/10 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Bell className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Get the latest cybersecurity news, tool updates, and learning resources delivered to your inbox.
              </p>

              {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 rounded-xl px-4 py-3 border border-green-500/20">
                  <CheckCircle className="w-4 h-4" /> You're subscribed! Welcome to CyberSphere.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletter}
                    onChange={e => setNewsletter(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-bold rounded-xl flex items-center gap-1.5 text-sm cyber-btn"
                  >
                    <Bell className="w-4 h-4" />
                    Subscribe
                  </motion.button>
                </form>
              )}

              <p className="text-xs text-gray-700 mt-3 font-mono">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Info card */}
            <div className="glass rounded-2xl border border-white/5 p-6">
              <h3 className="font-bold text-white mb-3 text-sm">About CyberSphere</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                CyberSphere is a community-driven cybersecurity education platform providing free resources,
                tool directories, and learning paths for security enthusiasts and professionals worldwide.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Education', 'Ethical Hacking', 'Open Source', 'Community'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
