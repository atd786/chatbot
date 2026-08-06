import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

const LeadBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Hi there! 👋 Welcome to Azitics. I'm your AI assistant. To get started, what's your full name?" }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0:Name, 1:Email, 2:Company, 3:Message
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const chatContainerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (text, delay = 600) => {
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text }]);
    }, delay);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isSubmitting) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userMessage }]);
    setInput('');

    let updatedData = { ...formData };

    if (step === 0) {
      updatedData.name = userMessage;
      setStep(1);
      addBotMessage(`Great to meet you, ${userMessage}! What's the best email address to reach you at?`);
    } else if (step === 1) {
      // Basic email validation
      if (!userMessage.includes('@')) {
        addBotMessage("That doesn't look like a valid email. Could you try again?");
        return;
      }
      updatedData.email = userMessage;
      setStep(2);
      addBotMessage("Thanks! Do you have a company name you're representing? (You can say 'no' if you don't)");
    } else if (step === 2) {
      updatedData.company = userMessage.toLowerCase() === 'no' ? '' : userMessage;
      setStep(3);
      addBotMessage("Perfect. Lastly, how can our team help you today?");
    } else if (step === 3) {
      updatedData.message = userMessage;
      setStep(4);
      addBotMessage("Thank you! I'm sending your inquiry to our team now...");
      
      setIsSubmitting(true);
      try {
        const res = await fetch('http://localhost:5000/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData)
        });
        
        if (res.ok) {
          addBotMessage("All done! Our team will reach out to you shortly. Have a great day!", 1500);
        } else {
          addBotMessage("Oops, something went wrong on our end. Please try again later.", 1500);
        }
      } catch (err) {
        addBotMessage("Oops, something went wrong. Could not connect to the server.", 1500);
      }
      setIsSubmitting(false);
    }
    
    setFormData(updatedData);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      background: '#fff',
      borderRadius: '24px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      border: '1px solid var(--border-color)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '600px'
    }}>
      
      {/* Chat Header */}
      <div style={{
        padding: '20px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'var(--accent-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          <Bot size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Azitics Assistant</h3>
          <div style={{ fontSize: '0.85rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
            Online
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        background: '#f8fafc'
      }}>
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{
                display: 'flex',
                gap: '10px',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                maxWidth: '80%'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: msg.sender === 'user' ? '#e2e8f0' : 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: msg.sender === 'user' ? '#64748b' : 'white',
                flexShrink: 0
              }}>
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div style={{
                background: msg.sender === 'user' ? 'var(--accent-primary)' : 'white',
                color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                padding: '12px 16px',
                borderRadius: '16px',
                borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
                borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
                border: msg.sender === 'bot' ? '1px solid var(--border-color)' : 'none',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSend} style={{
        padding: '20px',
        background: 'white',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        gap: '10px'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={step >= 4 ? "Chat finished" : "Type your message..."}
          disabled={step >= 4 || isSubmitting}
          style={{
            flex: 1,
            padding: '14px 20px',
            borderRadius: '50px',
            border: '1px solid var(--border-color)',
            outline: 'none',
            fontSize: '0.95rem',
            background: 'var(--bg-secondary)'
          }}
        />
        <button 
          type="submit" 
          aria-label="Send message"
          disabled={!input.trim() || step >= 4 || isSubmitting}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: input.trim() ? 'var(--accent-primary)' : '#e2e8f0',
            color: 'white',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: input.trim() ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s'
          }}
        >
          <Send size={20} style={{ marginLeft: '2px' }} />
        </button>
      </form>
    </div>
  );
};

export default LeadBot;
