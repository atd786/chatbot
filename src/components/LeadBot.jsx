import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGroq } from '../services/aiService';

const LeadBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm the AI Assistant for this agency. How can I help you scale your business today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

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
        className="bot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="bot-window glass-card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bot-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: 'var(--accent-gradient)', padding: '8px', borderRadius: '50%' }}>
                  <Bot size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'white' }}>AI Solutions Expert</h3>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                    Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div className="bot-messages" ref={chatContainerRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  <div className="message-icon">
                    {msg.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className="message-bubble">
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot">
                  <div className="message-icon">
                    <Bot size={16} />
                  </div>
                  <div className="message-bubble typing-indicator" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px' }}>
                    <Loader2 size={16} className="spin" color="var(--accent-primary)" />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AI is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="bot-input-area" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Ask about our AI services..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
              />
              <button type="submit" disabled={!inputValue.trim() || isTyping}>
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
