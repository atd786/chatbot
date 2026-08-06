export const projects = [
  {
    slug: "global-ecommerce-assistant",
    title: "Global E-Commerce Assistant",
    category: "Retail",
    description: "A multilingual chatbot deployed across 15 countries that handles product recommendations and order tracking.",
    metric: "45% Ticket Reduction",
    color: "#2563eb",
    challenge: "A rapidly scaling international retailer was drowning in basic customer support tickets (WISMO - 'Where is my order?'). Their human agents were overwhelmed, leading to 24+ hour response times, plunging CSAT scores, and high cart abandonment rates due to language barriers across 15 different European and Asian markets.",
    solution: "We engineered a multilingual AI Assistant using GPT-4o, directly integrated with their Shopify Plus and ERP systems. The bot automatically detects the user's language, pulls real-time shipping data via API, and intelligently handles returns processing. We also implemented a vector database (RAG) containing their entire product catalog, allowing the bot to act as a personal shopper, recommending products based on user descriptions.",
    results: [
      "45% reduction in total human-handled support tickets.",
      "Average response time dropped from 24 hours to < 2 seconds.",
      "$1.2M saved annually in customer support overhead.",
      "12% increase in average order value (AOV) via AI upsells."
    ]
  },
  {
    slug: "fintech-lead-qualifier",
    title: "FinTech Lead Qualifier",
    category: "Finance",
    description: "An intelligent bot integrated with Salesforce that pre-qualifies mortgage leads and books appointments.",
    metric: "300% More Qualified Leads",
    color: "#059669",
    challenge: "A leading mortgage brokerage was spending thousands on Facebook Ads, generating high traffic but terrible lead quality. Loan officers were wasting 60% of their day calling unqualified leads who didn't meet minimum credit score requirements or lacked down payments. The drop-off rate on their static web forms was over 85%.",
    solution: "We replaced their static forms with a conversational AI agent. Instead of filling out a boring 15-field form, prospects have a natural conversation with the bot. The AI stealthily collects required data (income, credit score estimate, location), scores the lead in real-time, and automatically pushes qualified data into Salesforce. For highly qualified leads, the bot instantly drops a Calendly link to book a call with the right regional officer.",
    results: [
      "Form abandonment dropped by 72% thanks to conversational UI.",
      "300% increase in highly qualified appointments booked.",
      "Loan officers reclaimed 25 hours per week previously spent on dead-end calls."
    ]
  },
  {
    slug: "healthcare-triage-bot",
    title: "Healthcare Triage Bot",
    category: "Healthcare",
    description: "A HIPAA-compliant assistant that securely triages patient symptoms and routes urgent cases.",
    metric: "2M+ Patients Served",
    color: "#7c3aed",
    challenge: "A regional hospital network's call center was frequently bottlenecked, causing patients to wait up to 45 minutes on hold just to ask basic questions about clinic hours, COVID-19 protocols, or prescription refills. They needed a way to deflect non-urgent calls while strictly maintaining HIPAA compliance and patient data security.",
    solution: "We developed a secure, on-premise AI triage system. The bot was trained exclusively on the hospital's verified medical protocols and administrative FAQs. When patients interact via the website or SMS, the bot securely authenticates them, answers routine questions, and uses natural language processing to detect urgent symptoms (like chest pain), instantly routing those specific chats to a live human triage nurse.",
    results: [
      "Over 2 million patient queries handled successfully in year one.",
      "Call center hold times reduced by 85%.",
      "Zero HIPAA violations or data breaches.",
      "Saved 50,000+ nursing hours previously spent on administrative tasks."
    ]
  },
  {
    slug: "property-matchmaker-ai",
    title: "Property Matchmaker AI",
    category: "Real Estate",
    description: "A virtual real estate agent that asks buyers about their preferences and instantly shows matching MLS listings.",
    metric: "1.5x Conversion Rate",
    color: "#f59e0b",
    challenge: "A luxury real estate agency found that visitors to their website were overwhelmed by the thousands of active listings. Bounce rates were high because users couldn't easily filter for nuanced requirements like 'open concept kitchen with natural light' or 'within a 10-minute walk to a train station' using traditional drop-down menus.",
    solution: "We built an AI 'Virtual Realtor' connected directly to the agency's live MLS feed. Users can now type natural, complex queries like 'I want a 3-bedroom house in Austin under $800k that has a big backyard for my dogs.' The AI parses the semantic meaning, filters the live database, and returns gorgeous image carousels of exact matches within the chat interface, capturing the lead's email in the process.",
    results: [
      "1.5x increase in website visitor-to-lead conversion rate.",
      "Average time on site increased by 400%.",
      "Generated over $50M in pipeline property viewings in Q1."
    ]
  },
  {
    slug: "saas-onboarding-guide",
    title: "SaaS Onboarding Guide",
    category: "SaaS",
    description: "An in-app AI assistant that walks new users through software setup, significantly reducing time-to-value.",
    metric: "60% Less Churn",
    color: "#ec4899",
    challenge: "A B2B SaaS company had a powerful but complex software platform. Their 14-day free trial had a dismal 8% conversion rate because new users were overwhelmed by the dashboard and didn't know how to set up their first campaign. Traditional tooltip tours were being ignored or skipped.",
    solution: "We deployed an intelligent, context-aware AI assistant inside their application. When a user logs in, the bot doesn't just show tooltips; it asks, 'What is your main goal today?' If the user says 'I want to set up an email sequence,' the bot securely uses the app's internal APIs to draft the sequence for them, essentially doing the work on their behalf while explaining the steps.",
    results: [
      "Time-to-first-value (TTFV) decreased from 3 days to 45 minutes.",
      "Free trial to paid conversion rate jumped from 8% to 22%.",
      "First-month user churn was reduced by 60%."
    ]
  },
  {
    slug: "logistics-tracking-bot",
    title: "Logistics Tracking Bot",
    category: "Logistics",
    description: "WhatsApp bot for a global shipping company allowing users to track freight via natural language queries.",
    metric: "10M+ Queries Handled",
    color: "#14b8a6",
    challenge: "A multinational freight forwarder was dealing with a massive volume of customer emails and calls simply asking for status updates on cargo ships and trucks. Their legacy tracking portal was notoriously difficult to use on mobile devices, leading frustrated customers back to the phone lines.",
    solution: "We launched an official WhatsApp Business AI. Customers simply send a message like 'Where is container #12345?' or 'When will the shipment for Acme Corp arrive?' The bot authenticates the user, queries the company's complex legacy logistics database via a custom API wrapper, and provides real-time GPS updates, ETA changes, and even PDF customs documents directly in WhatsApp.",
    results: [
      "Handled over 10 million tracking queries automatically.",
      "Reduced customer support call volume by 68%.",
      "Achieved a 95% user satisfaction score (CSAT) for tracking inquiries."
    ]
  },
  {
    slug: "retail-inventory-guru",
    title: "Retail Inventory Guru",
    category: "Retail",
    description: "Internal team bot that allows store managers to check stock levels across nationwide warehouses instantly.",
    metric: "2 Hrs Saved per Manager",
    color: "#2563eb",
    challenge: "Store managers at a national hardware chain were spending hours every week navigating a clunky, 15-year-old inventory management system just to check if nearby branches had specific items in stock. This delayed customer service on the floor and frustrated employees.",
    solution: "We created an internal Slack/Microsoft Teams bot trained on their inventory API. A manager can now type, 'Do we have any DeWalt 20V drills in stock in the Chicago area?' The bot instantly returns stock levels across all local branches, provides the exact aisle numbers, and can even initiate a warehouse transfer request via a simple button click in the chat.",
    results: [
      "Saved each store manager an average of 2 hours per week in administrative tasks.",
      "Improved in-store customer wait times for stock checks by 90%.",
      "Zero training required for new employees to use the inventory system."
    ]
  },
  {
    slug: "crypto-support-agent",
    title: "Crypto Support Agent",
    category: "Finance",
    description: "24/7 support bot for a crypto exchange handling account lockouts, KYC queries, and basic trading FAQs.",
    metric: "99.9% Uptime",
    color: "#059669",
    challenge: "During a massive crypto bull run, an exchange saw their user base triple in a month. Support tickets skyrocketed, with users panicking over KYC (Know Your Customer) verifications taking days, and password resets failing. The support backlog reached 14 days, risking severe reputational damage.",
    solution: "We rapidly deployed an AI agent trained on their vast knowledge base of crypto trading rules, security protocols, and API documentation. The bot was granted secure, limited access to check KYC status. It was able to instantly walk users through the exact steps to fix rejected ID photos, explain gas fees in real-time, and automate the password reset flow.",
    results: [
      "Cleared a backlog of 50,000 support tickets in under 48 hours.",
      "Successfully automated 75% of all Tier 1 support requests.",
      "Maintained 99.9% uptime during massive traffic spikes."
    ]
  },
  {
    slug: "dental-clinic-scheduler",
    title: "Dental Clinic Scheduler",
    category: "Healthcare",
    description: "Voice and text bot that handles rescheduling, cancellations, and sends automated reminders to patients.",
    metric: "80% No-Show Reduction",
    color: "#7c3aed",
    challenge: "A network of 12 dental clinics was losing significant revenue due to patient no-shows and last-minute cancellations. Receptionists were spending their entire shifts playing phone tag trying to fill empty slots, leading to burnout and missed new patient calls.",
    solution: "We implemented an omnichannel AI scheduling assistant integrated with their practice management software. The bot sends interactive SMS reminders 48 hours before an appointment. If a patient replies 'Cancel', the bot instantly cancels the slot, and immediately texts waitlisted patients to offer them the newly opened time slot, filling it automatically.",
    results: [
      "Reduced patient no-shows by 80% across all 12 clinics.",
      "Automatically recovered $120,000 in revenue from filled cancellation slots.",
      "Receptionists completely freed from outbound reminder calls."
    ]
  },
  {
    slug: "luxury-condo-concierge",
    title: "Luxury Condo Concierge",
    category: "Real Estate",
    description: "Resident-facing app bot for booking amenities, reporting maintenance, and local community updates.",
    metric: "5-Star Resident Rating",
    color: "#f59e0b",
    challenge: "Property managers at a high-end residential tower were overwhelmed with resident requests for booking the freight elevator, reporting minor maintenance issues, and asking about guest parking rules. Managing these via email and phone was inefficient and provided a poor luxury experience.",
    solution: "We built an AI 'Digital Concierge' accessible via SMS and the building's web portal. Residents can text 'Book the tennis court for 4pm tomorrow' or send a photo of a leaky faucet. The bot uses visual AI to categorize the maintenance issue, automatically logs a ticket with the exact urgency level, and books amenities by checking the building's shared calendar.",
    results: [
      "95% of amenity bookings are now fully automated.",
      "Maintenance response times improved by 40% due to accurate automated triaging.",
      "Property management overhead reduced, allowing them to manage 2 additional towers."
    ]
  },
  {
    slug: "b2b-software-sales-rep",
    title: "B2B Software Sales Rep",
    category: "SaaS",
    description: "Proactive website bot that engages enterprise visitors, answers pricing questions, and collects emails.",
    metric: "$2.5M Pipeline Generated",
    color: "#ec4899",
    challenge: "An enterprise SaaS company had high traffic on their pricing and features pages, but a low conversion rate for 'Book a Demo' calls. Enterprise buyers often had highly specific, technical questions that static landing pages couldn't answer, causing them to leave before booking.",
    solution: "We deployed a highly technical AI Sales Engineer bot. When a visitor lingers on the pricing page for more than 30 seconds, the bot proactively engages. It is trained on the company's API docs, SOC2 compliance PDFs, and competitor battlecards. It can confidently answer questions like 'How does this compare to [Competitor]?' and instantly book meetings for qualified enterprise leads.",
    results: [
      "Generated $2.5M in highly qualified sales pipeline in 6 months.",
      "Increased demo bookings by 45%.",
      "Shortened the sales cycle by answering technical compliance questions immediately."
    ]
  },
  {
    slug: "fleet-dispatch-optimizer",
    title: "Fleet Dispatch Optimizer",
    category: "Logistics",
    description: "AI interface for dispatchers to route trucks based on real-time traffic and weather data.",
    metric: "15% Fuel Savings",
    color: "#14b8a6",
    challenge: "A mid-sized trucking company was relying on manual route planning by veteran dispatchers. Unexpected weather events and traffic caused massive delays, and rerouting trucks mid-journey via radio was chaotic, leading to high fuel costs and missed delivery windows.",
    solution: "We developed an internal AI co-pilot for dispatchers. By integrating real-time weather APIs, traffic data, and the GPS coordinates of their 500-truck fleet, the AI can instantly predict delays. Dispatchers simply ask, 'Which trucks are impacted by the snowstorm in Denver?' and the AI provides a list of trucks and automatically suggests optimized, alternate routes.",
    results: [
      "Reduced total fleet fuel consumption by 15%.",
      "On-time delivery rates increased from 82% to 96%.",
      "Allowed junior dispatchers to perform at the level of 10-year veterans."
    ]
  },
  {
    slug: "fashion-stylist-bot",
    title: "Fashion Stylist Bot",
    category: "Retail",
    description: "Instagram DM bot that recommends outfits based on user uploaded photos and past purchase history.",
    metric: "22% Upsell Rate",
    color: "#2563eb",
    challenge: "A fast-fashion brand wanted to capitalize on their massive Instagram following. They were getting thousands of DMs asking 'Do you have this in blue?' or 'What shoes go with this dress?', but their social media team couldn't keep up, leaving money on the table.",
    solution: "We built an AI stylist integrated directly into Instagram Direct Messages using the official API. Utilizing computer vision, a user can DM a photo of a jacket they like, and the AI will find the exact or visually similar items in the store's catalog. It also uses past purchase data to suggest matching accessories, dropping direct add-to-cart links in the chat.",
    results: [
      "Achieved a 22% upsell rate on accessory recommendations.",
      "Generated $500k in direct social commerce revenue in Q4.",
      "Turned Instagram DMs from a support headache into a primary sales channel."
    ]
  },
  {
    slug: "tax-prep-assistant",
    title: "Tax Prep Assistant",
    category: "Finance",
    description: "Guides freelance workers through deductible categorization before handing off to a human CPA.",
    metric: "4,000+ Returns Prep'd",
    color: "#059669",
    challenge: "A boutique accounting firm specializing in freelancers was turning away clients during tax season because their CPAs were spending hours manually sorting through clients' shoeboxes of receipts and confusing bank statements to find deductions.",
    solution: "We created a client-facing web application powered by AI. Freelancers upload their bank CSVs and photos of receipts. The AI agent uses OCR and transactional analysis to automatically categorize expenses (e.g., 'Uber = Travel', 'BestBuy = Equipment'). The bot chats with the client to resolve any ambiguous transactions before compiling a neat dossier for the CPA to review.",
    results: [
      "Reduced CPA prep time per client from 4 hours to 30 minutes.",
      "Allowed the firm to take on 3x more clients during tax season without hiring.",
      "Clients praised the 'gamified' and easy chat-based categorization process."
    ]
  },
  {
    slug: "mental-health-check-in",
    title: "Mental Health Check-in",
    category: "Healthcare",
    description: "A companion bot that asks daily wellness questions and flags severe responses to human therapists.",
    metric: "10,000+ Daily Users",
    color: "#7c3aed",
    challenge: "A digital telehealth platform needed a way to monitor patients with mild depression and anxiety between their monthly therapy sessions, as patients rarely self-reported their daily mood shifts, making it hard for therapists to track progress.",
    solution: "We designed a highly empathetic, conversational AI companion. It reaches out via SMS once a day with a gentle, non-intrusive check-in. Using sentiment analysis, if the AI detects keywords or patterns indicating a severe depressive episode or crisis, it immediately alerts the assigned human therapist and provides the patient with emergency hotline resources.",
    results: [
      "Scaled to over 10,000 active daily users with high engagement.",
      "Successfully flagged over 400 crisis events for immediate human intervention.",
      "Therapists reported significantly better session outcomes due to having daily mood logs."
    ]
  },
  {
    slug: "commercial-lease-analyzer",
    title: "Commercial Lease Analyzer",
    category: "Real Estate",
    description: "Internal tool that extracts key dates and clauses from PDF lease agreements and updates the CRM.",
    metric: "90% Faster Review",
    color: "#f59e0b",
    challenge: "A commercial real estate firm employed a team of paralegals just to read through 100-page PDF lease agreements to find and manually enter renewal dates, escalation clauses, and tenant liabilities into their central database. It was slow, expensive, and prone to human error.",
    solution: "We built a custom RAG (Retrieval-Augmented Generation) pipeline. Users drag and drop lease PDFs into the secure platform. The AI instantly reads the document, extracts 25 specific data points (dates, financial figures, liability limits), highlights the exact clauses in the text for verification, and automatically syncs the structured data to Salesforce.",
    results: [
      "Document processing time reduced from 3 hours to 45 seconds per lease.",
      "Eliminated data entry errors entirely.",
      "Saved the firm over $200,000 annually in legal outsourcing costs."
    ]
  },
  {
    slug: "api-documentation-bot",
    title: "API Documentation Bot",
    category: "SaaS",
    description: "Developer-focused bot trained on extensive API docs to provide instant code snippets and troubleshooting.",
    metric: "Zero L1 Support Tickets",
    color: "#ec4899",
    challenge: "A payment gateway startup had incredible tech but terrible developer documentation. Integration times were taking weeks, and their expensive Tier 2 engineers were wasting time answering basic questions from clients' developers on Discord and email.",
    solution: "We scraped their entire GitHub repository, API references, and old support tickets to train a developer-focused AI agent. Integrated directly into their developer portal, the bot can write custom code snippets in Python, Node.js, or Go based on the developer's specific edge case, and instantly debug error codes pasted into the chat.",
    results: [
      "Tier 1 integration support tickets dropped to literally zero.",
      "Average client integration time shortened from 14 days to 3 days.",
      "Developer NPS (Net Promoter Score) skyrocketed."
    ]
  },
  {
    slug: "last-mile-delivery-support",
    title: "Last-Mile Delivery Support",
    category: "Logistics",
    description: "SMS bot that updates customers on delivery windows and allows them to leave drop-off instructions.",
    metric: "98% Positive Feedback",
    color: "#14b8a6",
    challenge: "A regional courier service struggled with failed deliveries (requiring expensive redeliveries) because customers weren't home. Drivers had no efficient way to communicate with customers on the fly, and the support team couldn't relay messages fast enough.",
    solution: "We built a real-time SMS orchestration bot. On the morning of delivery, the AI texts the customer a tight delivery window. If the customer replies 'I won't be home', the AI asks for a safe drop-off location (e.g., 'leave behind the side gate'). The bot instantly translates this and updates the driver's mobile routing app in real-time.",
    results: [
      "Failed delivery attempts dropped by 42%.",
      "Driver satisfaction increased due to fewer route disruptions.",
      "Achieved a 98% positive feedback rating from end consumers."
    ]
  },
  {
    slug: "grocer-refund-automator",
    title: "Grocer Refund Automator",
    category: "Retail",
    description: "Automatically issues micro-refunds for damaged grocery items based on image recognition.",
    metric: "$50k Saved in Agent Hours",
    color: "#2563eb",
    challenge: "An online grocery delivery service was spending more money paying support agents to manually process $3 refunds for bruised apples or spilled milk than the items were actually worth. They needed a way to automate micro-claims without increasing fraud.",
    solution: "We integrated a computer vision AI agent into their customer app. If a customer reports a damaged item, the bot asks for a photo. The AI analyzes the image, cross-references it with the receipt, checks the user's past refund history for fraud patterns, and instantly issues store credit without human intervention if the claim is valid and under $15.",
    results: [
      "Fully automated 85% of all grocery refund claims.",
      "Saved over $50,000 per month in support agent hourly costs.",
      "Customer satisfaction for issue resolution reached an all-time high."
    ]
  },
  {
    slug: "insurance-claim-filer",
    title: "Insurance Claim Filer",
    category: "Finance",
    description: "Walks users through filing a first-notice-of-loss auto claim using their smartphone camera.",
    metric: "Claim Filed in < 3 Mins",
    color: "#059669",
    challenge: "An auto insurance company found that customers who had just been in an accident were highly stressed and struggled to navigate their complex mobile app to file a First Notice of Loss (FNOL). Incomplete claims led to lengthy follow-up calls and delayed payouts.",
    solution: "We built an empathetic, voice-enabled AI assistant accessible via a simple web link texted to the user. The bot gently talks the user through the process, asks them to point their camera at the damage to capture necessary angles automatically, and uses geolocation to log the incident. It compiles all data into a complete FNOL report for the adjuster.",
    results: [
      "Average time to file a complete claim reduced from 25 minutes to under 3 minutes.",
      "Accuracy of initial claim data increased by 60%.",
      "Massive reduction in customer stress and anxiety during the filing process."
    ]
  }
];
