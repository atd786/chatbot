import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGroq } from '../services/aiService';

const LeadBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm the AI Assistant for Azitics. How can I help you scale your business today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Listen for custom event to open bot from other components (like Contact page)
  useEffect(() => {
    const handleOpenChatbot = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpenChatbot);
    return () => window.removeEventListener('open-chatbot', handleOpenChatbot);
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    const updatedMessages = [...messages, userMsg];
    
    setMessages(updatedMessages);
    setInputValue('');
    setIsTyping(true);

    // Call Groq API
    const aiResponseText = await sendMessageToGroq(updatedMessages);

    setIsTyping(false);
    setMessages(prev => [...prev, { id: Date.now(), text: aiResponseText, sender: 'bot' }]);
  };

  return (
    <>
      <button 
        className="bot-toggle-btn premium-shadow"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="bot-window premium-glass"
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 250, damping: 20 }}
          >
            <div className="bot-header premium-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="bot-avatar">
                  <Bot size={22} color="white" />
                  <div className="online-indicator"></div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Azitics AI <Sparkles size={14} color="#fbbf24" />
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', fontWeight: '500' }}>
                    Typically replies instantly
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="bot-messages" ref={chatContainerRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className={`message-bubble-premium ${msg.sender}`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message-wrapper bot">
                  <div className="message-bubble-premium bot typing-bubble">
                    <Loader2 size={16} className="spin" color="var(--accent-primary)" />
                    <span>Analyzing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="bot-input-area premium-input-area" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
                className="premium-input"
              />
              <button type="submit" disabled={!inputValue.trim() || isTyping} className="premium-send-btn">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadBot;
