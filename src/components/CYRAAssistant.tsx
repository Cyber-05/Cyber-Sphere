import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'cyra';
}

const aiResponses: Record<string, string> = {
  'dns': 'DNS translates domain names into IP addresses. It\'s the internet\'s phonebook!',
  'firewall': 'A firewall controls network traffic. It acts as a barrier between your device and untrusted networks.',
  'linux': 'Linux is a free, open-source OS. Master commands like cd, ls, chmod, and you\'re good!',
  'networking': 'Networking basics: TCP/IP, DNS, HTTP, routing. Start with the OSI model!',
  'security': 'Security awareness: strong passwords, MFA, phishing awareness, regular updates.',
};

export default function CYRAAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: '1', text: 'Hi! I\'m CYRA. Ask me anything about cybersecurity!', sender: 'cyra' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { id: Date.now().toString(), text: input, sender: 'user' }]);

    const response = Object.entries(aiResponses).find(([key]) => input.toLowerCase().includes(key))?.[1] || 'Great question! Learn more in the academy.';

    setTimeout(() => {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: response, sender: 'cyra' }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 text-black font-bold shadow-lg flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed bottom-24 right-6 z-40 w-96 glass rounded-2xl border border-cyan-500/20 overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-b border-cyan-500/20 p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">CYRA Assistant</h3>
                <p className="text-xs text-gray-500 font-mono">Online</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsMinimized(!isMinimized)} className="p-2 hover:bg-white/10 rounded-lg">
                  {isMinimized ? <Maximize2 className="w-4 h-4 text-gray-400" /> : <Minimize2 className="w-4 h-4 text-gray-400" />}
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
                  <X className="w-4 h-4 text-gray-400" />
                </motion.button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map(msg => (
                    <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-4 py-2 rounded-lg text-sm ${msg.sender === 'user' ? 'bg-cyan-500/20 text-cyan-100' : 'bg-white/10 text-gray-200'}`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/5 p-3 flex gap-2">
                  <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask CYRA..." className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50" />
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSend} className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg">
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
