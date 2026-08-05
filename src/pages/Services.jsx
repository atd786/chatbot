import { motion } from 'framer-motion';
import { Bot, Code2, HeadphonesIcon, LineChart, MessageSquare, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Bot size={32}/>, title: "Custom Bot Development", desc: "We build bespoke chatbots trained specifically on your company's data and workflows." },
    { icon: <MessageSquare size={32}/>, title: "Omnichannel Support", desc: "Deploy your AI assistant across WhatsApp, Messenger, Website, and SMS simultaneously." },
    { icon: <HeadphonesIcon size={32}/>, title: "Automated Customer Service", desc: "Resolve up to 80% of routine customer inquiries instantly without human intervention." },
    { icon: <LineChart size={32}/>, title: "Lead Generation", desc: "Intelligently qualify leads and book meetings directly into your sales team's calendar." },
    { icon: <Code2 size={32}/>, title: "CRM Integration", desc: "Seamlessly connect your chatbot with Salesforce, HubSpot, or any custom API." },
    { icon: <Zap size={32}/>, title: "Analytics & Optimization", desc: "Get detailed insights into conversation metrics and continuous bot performance tuning." },
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title">Our <span className="gradient-text">Services</span></h1>
            <p className="section-subtitle">Comprehensive AI automation tailored for scale.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {services.map((srv, i) => (
              <motion.div 
                key={i}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, borderColor: 'var(--accent-primary)' }}
              >
                <div style={{ 
                  background: 'var(--bg-secondary)', 
                  width: '60px', height: '60px', 
                  borderRadius: '16px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  marginBottom: '20px'
                }}>
                  {srv.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '12px' }}>{srv.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
