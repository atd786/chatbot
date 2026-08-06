import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe2, Zap, Sparkles, ShieldCheck, CheckCircle2, Building2, Stethoscope, ShoppingCart, Truck, Cpu } from 'lucide-react';

const Home = () => {
  const brands = [
    { icon: <Stethoscope size={18} />, name: "HealthTech Global" },
    { icon: <Building2 size={18} />, name: "Apex Real Estate" },
    { icon: <ShoppingCart size={18} />, name: "EComScale Inc" },
    { icon: <Truck size={18} />, name: "LogiFlow Solutions" },
    { icon: <Cpu size={18} />, name: "SaaSify Cloud" },
    { icon: <Bot size={18} />, name: "NextGen AI" },
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ paddingTop: '90px', minHeight: '88vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="hero-ambient-glow"></div>

        <div className="container perspective-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                <Sparkles size={14} color="var(--accent-primary)" />
                <span>Previous Gen AI Platform v2.0</span>
              </div>

              <h1 className="hero-title-responsive" style={{ fontSize: '4.2rem', fontWeight: '800', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1.5px' }}>
                Previous Gen AI <br/>
                <span className="gradient-text">Automation</span>
              </h1>

              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '520px', lineHeight: 1.6 }}>
                Transform your customer experience with intelligent, human-like conversational agents. We build bots that acquire clients, boost sales, and operate 24/7.
              </p>

              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Start Project <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} color="#10b981" /> No Credit Card Required
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} color="#10b981" /> 48-Hour Setup
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              {/* Floating Stat Badges */}
              <div className="stat-pill-floating stat-pill-top-left">
                <Zap size={16} color="#eab308" />
                <span>180ms Latency</span>
              </div>

              <div className="stat-pill-floating stat-pill-top-right">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                <span>99.4% Resolution Rate</span>
              </div>

              <div className="stat-pill-floating stat-pill-bottom-left">
                <ShieldCheck size={16} color="var(--accent-primary)" />
                <span>Enterprise CRM Sync</span>
              </div>

              {/* Live Interactive AI Control Card */}
              <div className="hero-control-card">
                <div className="hero-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                    <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>Azitics Sales Engine AI</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.15)', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>Live Simulation</span>
                </div>

                <div className="hero-card-body">
                  <div className="hero-chat-msg bot">
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-primary)', display: 'block', marginBottom: '4px' }}>Azitics Agent</span>
                    Hi there! 👋 How can Azitics help automate your lead generation today?
                  </div>

                  <div className="hero-chat-msg user">
                    Can your AI bot integrate with HubSpot CRM and qualify inbound leads automatically?
                  </div>

                  <div className="hero-chat-msg bot">
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-primary)', display: 'block', marginBottom: '4px' }}>Azitics Agent</span>
                    Yes! We offer zero-code instant sync with HubSpot, Salesforce & WhatsApp, converting 3x more leads 24/7. 🚀
                  </div>
                </div>

                <div className="hero-card-footer">
                  <span>💬 1,420+ Active Conversations</span>
                  <span>⚡ 99.99% Uptime</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Logo Marquee */}
      <section className="trust-marquee-section">
        <div className="trust-marquee-title">Trusted by Scaling Enterprises & Startups Worldwide</div>
        <div className="trust-marquee-track">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="trust-brand-pill">
              <span style={{ color: 'var(--accent-primary)' }}>{brand.icon}</span>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Azitics Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose <span className="gradient-text">Azitics</span>?</h2>
            <p className="section-subtitle">We deliver premium, robust AI solutions that integrate seamlessly into your business.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { icon: <Bot size={40}/>, title: "Intelligent Custom Bots", desc: "Train your AI on your specific business data for accurate, human-like responses." },
              { icon: <Globe2 size={40}/>, title: "Global Multilingual Reach", desc: "Multilingual capabilities ensure you can acquire clients from anywhere in the world." },
              { icon: <Zap size={40}/>, title: "Lightning Fast Speed", desc: "Zero wait times. Your customers get the answers they need instantly, 24/7." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ color: 'var(--accent-primary)', marginBottom: '20px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '15px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
            <p className="section-subtitle">A seamless process from deployment to optimization.</p>
          </motion.div>

          <div className="steps-grid">
            {[
              { step: "01", title: "Integration", desc: "We connect our AI models directly to your CRM and website via secure APIs." },
              { step: "02", title: "Custom Training", desc: "The bot ingests your company's FAQs, products, and support history." },
              { step: "03", title: "Live Optimization", desc: "Our system continuously learns from live chats to improve response accuracy." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                style={{ 
                  padding: '40px', 
                  borderRadius: '24px', 
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(37, 99, 235, 0.1)', position: 'absolute', top: '20px', right: '30px' }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', position: 'relative', zIndex: 1 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', position: 'relative', zIndex: 1 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
