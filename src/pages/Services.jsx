import { motion } from 'framer-motion';
import { Bot, Code2, HeadphonesIcon, LineChart, MessageSquare, Zap, Search, Database, Settings, CheckCircle, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Bot size={32}/>, title: "Custom Bot Development", desc: "We build bespoke chatbots trained specifically on your company's data and workflows." },
    { icon: <MessageSquare size={32}/>, title: "Omnichannel Support", desc: "Deploy your AI assistant across WhatsApp, Messenger, Website, and SMS simultaneously." },
    { icon: <HeadphonesIcon size={32}/>, title: "Automated Customer Service", desc: "Resolve up to 80% of routine customer inquiries instantly without human intervention." },
    { icon: <LineChart size={32}/>, title: "Lead Generation", desc: "Intelligently qualify leads and book meetings directly into your sales team's calendar." },
    { icon: <Code2 size={32}/>, title: "CRM Integration", desc: "Seamlessly connect your chatbot with Salesforce, HubSpot, or any custom API." },
    { icon: <Zap size={32}/>, title: "Analytics & Optimization", desc: "Get detailed insights into conversation metrics and continuous bot performance tuning." },
  ];

  const methodology = [
    { icon: <Search size={24}/>, step: "Step 01", title: "Discovery & Strategy", desc: "We analyze your business goals, customer pain points, and current tech stack to design the perfect automation strategy." },
    { icon: <Database size={24}/>, step: "Step 02", title: "Data Ingestion & Training", desc: "We securely ingest your company's FAQs, knowledge bases, and CRM data to train a highly specialized AI model." },
    { icon: <Settings size={24}/>, step: "Step 03", title: "Development & Integration", desc: "Our engineers build the chatbot and integrate it seamlessly into your existing platforms (Website, WhatsApp, etc)." },
    { icon: <CheckCircle size={24}/>, step: "Step 04", title: "QA & Testing", desc: "Rigorous testing in a staging environment ensures the bot handles edge cases gracefully and provides accurate responses." },
    { icon: <Rocket size={24}/>, step: "Step 05", title: "Deployment & Optimization", desc: "We launch the bot live and use real-time analytics to continuously optimize its conversational flows." }
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

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Our Complete <span className="gradient-text">Methodology</span></h2>
            <p className="section-subtitle">A transparent, proven process to guarantee your success.</p>
          </motion.div>

          <div className="timeline-container">
            {methodology.map((item, i) => (
              <motion.div 
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="timeline-icon-wrapper">
                  {item.icon}
                </div>
                <div className="timeline-content">
                  <span className="timeline-step-num">{item.step}</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
