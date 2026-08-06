import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Retail', 'Finance', 'Healthcare', 'Real Estate', 'SaaS', 'Logistics'];

  const projects = [
    {
      title: "Global E-Commerce Assistant",
      category: "Retail",
      description: "A multilingual chatbot deployed across 15 countries that handles product recommendations and order tracking.",
      metric: "45% Ticket Reduction",
      color: "#2563eb"
    },
    {
      title: "FinTech Lead Qualifier",
      category: "Finance",
      description: "An intelligent bot integrated with Salesforce that pre-qualifies mortgage leads and books appointments.",
      metric: "300% More Qualified Leads",
      color: "#059669"
    },
    {
      title: "Healthcare Triage Bot",
      category: "Healthcare",
      description: "A HIPAA-compliant assistant that securely triages patient symptoms and routes urgent cases.",
      metric: "2M+ Patients Served",
      color: "#7c3aed"
    },
    {
      title: "Property Matchmaker AI",
      category: "Real Estate",
      description: "A virtual real estate agent that asks buyers about their preferences and instantly shows matching MLS listings.",
      metric: "1.5x Conversion Rate",
      color: "#f59e0b"
    },
    {
      title: "SaaS Onboarding Guide",
      category: "SaaS",
      description: "An in-app AI assistant that walks new users through software setup, significantly reducing time-to-value.",
      metric: "60% Less Churn",
      color: "#ec4899"
    },
    {
      title: "Logistics Tracking Bot",
      category: "Logistics",
      description: "WhatsApp bot for a global shipping company allowing users to track freight via natural language queries.",
      metric: "10M+ Queries Handled",
      color: "#14b8a6"
    },
    {
      title: "Retail Inventory Guru",
      category: "Retail",
      description: "Internal team bot that allows store managers to check stock levels across nationwide warehouses instantly.",
      metric: "2 Hrs Saved per Manager/Day",
      color: "#2563eb"
    },
    {
      title: "Crypto Support Agent",
      category: "Finance",
      description: "24/7 support bot for a crypto exchange handling account lockouts, KYC queries, and basic trading FAQs.",
      metric: "99.9% Uptime",
      color: "#059669"
    },
    {
      title: "Dental Clinic Scheduler",
      category: "Healthcare",
      description: "Voice and text bot that handles rescheduling, cancellations, and sends automated reminders to patients.",
      metric: "80% No-Show Reduction",
      color: "#7c3aed"
    },
    {
      title: "Luxury Condo Concierge",
      category: "Real Estate",
      description: "Resident-facing app bot for booking amenities, reporting maintenance, and local community updates.",
      metric: "5-Star Resident Rating",
      color: "#f59e0b"
    },
    {
      title: "B2B Software Sales Rep",
      category: "SaaS",
      description: "Proactive website bot that engages enterprise visitors, answers pricing questions, and collects emails.",
      metric: "$2.5M Pipeline Generated",
      color: "#ec4899"
    },
    {
      title: "Fleet Dispatch Optimizer",
      category: "Logistics",
      description: "AI interface for dispatchers to route trucks based on real-time traffic and weather data.",
      metric: "15% Fuel Savings",
      color: "#14b8a6"
    },
    {
      title: "Fashion Stylist Bot",
      category: "Retail",
      description: "Instagram DM bot that recommends outfits based on user uploaded photos and past purchase history.",
      metric: "22% Upsell Rate",
      color: "#2563eb"
    },
    {
      title: "Tax Prep Assistant",
      category: "Finance",
      description: "Guides freelance workers through deductible categorization before handing off to a human CPA.",
      metric: "4,000+ Tax Returns Prep'd",
      color: "#059669"
    },
    {
      title: "Mental Health Check-in",
      category: "Healthcare",
      description: "A companion bot that asks daily wellness questions and flags severe responses to human therapists.",
      metric: "10,000+ Daily Users",
      color: "#7c3aed"
    },
    {
      title: "Commercial Lease Analyzer",
      category: "Real Estate",
      description: "Internal tool that extracts key dates and clauses from PDF lease agreements and updates the CRM.",
      metric: "90% Faster Document Review",
      color: "#f59e0b"
    },
    {
      title: "API Documentation Bot",
      category: "SaaS",
      description: "Developer-focused bot trained on extensive API docs to provide instant code snippets and troubleshooting.",
      metric: "Zero Support Tickets for API",
      color: "#ec4899"
    },
    {
      title: "Last-Mile Delivery Support",
      category: "Logistics",
      description: "SMS bot that updates customers on delivery windows and allows them to leave drop-off instructions.",
      metric: "98% Positive Feedback",
      color: "#14b8a6"
    },
    {
      title: "Grocer Refund Automator",
      category: "Retail",
      description: "Automatically issues micro-refunds for damaged grocery items based on image recognition.",
      metric: "$50k Saved in Agent Hours",
      color: "#2563eb"
    },
    {
      title: "Insurance Claim Filer",
      category: "Finance",
      description: "Walks users through filing a first-notice-of-loss auto claim using their smartphone camera.",
      metric: "Claim Filed in < 3 Mins",
      color: "#059669"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <h1 className="section-title">Our <span className="gradient-text">Portfolio</span></h1>
            <p className="section-subtitle">Real-world AI automation success stories from our global enterprise clients.</p>
          </motion.div>

          {/* Filter Bar */}
          <div className="filter-bar">
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div layout className="portfolio-grid">
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card compact-project-card"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                >
                  <div className="project-color-bar" style={{ backgroundColor: project.color }}></div>
                  <div className="project-content">
                    <span className="project-category" style={{ color: project.color }}>{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    
                    <div className="project-metric">
                      <div className="metric-dot" style={{ backgroundColor: project.color }}></div>
                      <span>{project.metric}</span>
                    </div>

                    <Link to="/contact" className="project-link">
                      View Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Ready to be our next success story?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
              Let's discuss how custom AI automation can transform your business operations.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
