import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      desc: "Perfect for small businesses wanting to automate basic website FAQs.",
      setupFee: "$99 Setup Fee",
      popular: false,
      cta: "Get Started",
      features: ["1 Custom Chatbot", "Website Integration", "Up to 1,000 Messages/mo", "Basic Training Data"]
    },
    {
      name: "Pro",
      price: "97",
      desc: "For growing companies needing lead generation and omnichannel support.",
      setupFee: "$199 Setup Fee (Waived this month)",
      popular: true,
      cta: "Start Free Trial",
      features: ["Omnichannel (Web + WhatsApp)", "CRM Integration (HubSpot/Sales)", "Up to 5,000 Messages/mo", "Advanced Prompt Engineering"]
    },
    {
      name: "Enterprise",
      price: "199",
      desc: "Full-scale automation with priority support and unlimited capabilities.",
      setupFee: "Custom Setup",
      popular: false,
      cta: "Contact Sales",
      features: ["Unlimited Chatbots", "Custom API Integrations", "Unlimited Messages", "Dedicated Account Manager"]
    }
  ];

  const compareFeatures = [
    { category: "Core AI Capabilities", items: [
      { name: "LLM Model", starter: "GPT-3.5 Turbo", pro: "GPT-4o / Claude 3", enterprise: "Custom Fine-tuned Models" },
      { name: "Custom Knowledge Base Limits", starter: "Up to 50 Pages", pro: "Up to 500 Pages", enterprise: "Unlimited" },
      { name: "Context Memory", starter: "Basic Session Memory", pro: "Long-term User Memory", enterprise: "Cross-platform Memory" },
    ]},
    { category: "Integrations & Deployment", items: [
      { name: "Website Widget", starter: true, pro: true, enterprise: true },
      { name: "WhatsApp Business API", starter: false, pro: true, enterprise: true },
      { name: "Facebook Messenger / Instagram", starter: false, pro: true, enterprise: true },
      { name: "CRM Push (Salesforce, HubSpot)", starter: false, pro: true, enterprise: true },
    ]},
    { category: "Usage Limits", items: [
      { name: "Messages per month", starter: "1,000", pro: "5,000", enterprise: "Unlimited" },
      { name: "Live Agent Handoff", starter: false, pro: true, enterprise: true },
      { name: "Lead Capture Forms", starter: true, pro: true, enterprise: true },
    ]},
    { category: "Done-For-You Services", items: [
      { name: "Initial Setup & Integration", starter: true, pro: true, enterprise: true },
      { name: "Monthly Conversation Audits", starter: false, pro: true, enterprise: true },
      { name: "Continuous Retraining", starter: false, pro: true, enterprise: true },
      { name: "Support Response Time", starter: "48 Hours", pro: "12 Hours", enterprise: "1-Hour (Dedicated Slack)" },
    ]}
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title">Transparent <span className="gradient-text">Pricing</span></h1>
            <p className="section-subtitle">No hidden fees, no ambiguous offers. Know exactly what you are paying for with our fully managed DFY services.</p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                className={`glass-card pricing-card ${plan.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-desc">{plan.desc}</p>
                <div className="pricing-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/mo</span>
                </div>
                <div className="pricing-setup">{plan.setupFee}</div>
                
                <ul className="pricing-features-list">
                  {plan.features.map((feat, j) => (
                    <li key={j}><Check size={18} color="#10b981" /> {feat}</li>
                  ))}
                </ul>

                <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', marginTop: 'auto' }}>
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Complete Feature Breakdown</h2>
            <p className="section-subtitle">Exactly what you get in every package.</p>
          </div>

          <div className="compare-table-wrapper">
            <table className="compare-table">
              <thead>
                <tr>
                  <th style={{ width: '40%', textAlign: 'left' }}>Feature</th>
                  <th>Starter <br/><span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>$49/mo</span></th>
                  <th className="popular-col">Pro <br/><span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>$97/mo</span></th>
                  <th>Enterprise <br/><span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>$199/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((category, i) => (
                  <React.Fragment key={i}>
                    <tr className="category-row">
                      <td colSpan="4">{category.category}</td>
                    </tr>
                    {category.items.map((item, j) => (
                      <tr key={j}>
                        <td className="feature-name">
                          {item.name} 
                        </td>
                        <td>
                          {typeof item.starter === 'boolean' ? 
                            (item.starter ? <Check size={20} color="#10b981" /> : <X size={20} color="#94a3b8" />) 
                            : item.starter}
                        </td>
                        <td className="popular-col">
                          {typeof item.pro === 'boolean' ? 
                            (item.pro ? <Check size={20} color="#10b981" /> : <X size={20} color="#94a3b8" />) 
                            : item.pro}
                        </td>
                        <td>
                          {typeof item.enterprise === 'boolean' ? 
                            (item.enterprise ? <Check size={20} color="#10b981" /> : <X size={20} color="#94a3b8" />) 
                            : item.enterprise}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
