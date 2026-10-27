export interface ServiceDetail {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  benefits: string[];
  features: string[];
  whyChooseUs: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "Website Design & Development": {
    title: "Website Design & Development",
    tagline: "From simple websites to powerful full-stack applications.",
    description: "We design and develop fast, responsive, modern websites that turn visitors into customers and help businesses build a strong online presence.",
    deliverables: [
      "Business & Company Websites",
      "Landing Pages & Lead Generation Websites",
      "E-commerce Websites & Online Stores",
      "Portfolio & Personal Websites",
      "Custom Full-Stack Web Applications",
      "Web App Development & Dashboard Systems",
      "Website Redesign, Maintenance & Optimization"
    ],
    whyChooseUs: [
      "Custom-crafted modern 3D UI/UX designs that elevate perceived brand value",
      "Mobile-first, lightning-fast Core Web Vitals optimization (>90 Google PageSpeed scores)",
      "Engineered for high conversion rate optimization (CRO) from day one",
      "Full stack scalability using modern frameworks (Next.js, React, Vite, Node, Tailwind)",
      "Ongoing security monitoring, hosting architecture, and dedicated maintenance"
    ],
    benefits: [
      "Turn traffic into high-intent paying customers",
      "Unmatched credibility that outclasses competitors",
      "Flawless responsiveness across all mobile, tablet, and desktop screens",
      "Integrated SEO foundation for top Google search visibility",
      "Seamless integration with CRM, payment gateways, and analytics"
    ],
    features: [
      "Bespoke wireframing and interactive Figma prototypes",
      "Clean, maintainable, modular codebase with zero bloat",
      "E-commerce checkout architecture (Shopify / WooCommerce / Custom)",
      "Interactive 3D micro-animations and smooth scroll transitions",
      "Admin dashboard systems for effortless content and order management",
      "Google Analytics 4, Meta Pixel, and heatmaps pre-installed"
    ]
  },

  "Branding & Brand Identity": {
    title: "Branding & Brand Identity",
    tagline: "Build a brand people recognize and remember.",
    description: "We help businesses create a distinctive identity that communicates their vision, stands out from competitors and connects with their target audience.",
    deliverables: [
      "Brand Strategy & Positioning",
      "Logo Design & Visual Identity",
      "Brand Guidelines & Brand Kits",
      "Brand Naming & Taglines",
      "Marketing Collateral Design",
      "Brand Launch & Promotion Strategy"
    ],
    whyChooseUs: [
      "Deep emotional storytelling combined with strategic market whitespace analysis",
      "Comprehensive design systems built for cross-platform longevity",
      "Founder-level collaboration to encapsulate your company's true mission",
      "Complete vector asset kits ready for web, print, merchandise, and billboards",
      "Proven track record crafting high-recall identities for modern ventures"
    ],
    benefits: [
      "Command premium pricing with an authoritative market presence",
      "Instant recognition across social feeds, packaging, and digital ads",
      "Consistent team alignment with comprehensive brand guidelines",
      "Emotional customer loyalty that drives word-of-mouth growth",
      "Eliminate design fragmentation across marketing channels"
    ],
    features: [
      "Primary, secondary, and sub-mark logo systems",
      "Harmonious chromatic typography and color psychology palettes",
      "Extensive brand rulebooks (dos and don'ts, spacing, iconography)",
      "Business cards, pitch deck templates, and letterheads",
      "Social media brand kits (avatars, banners, story templates)",
      "Trademark-ready vector exports in all industry formats (SVG, EPS, PDF, PNG)"
    ]
  },

  "Social Media Marketing & Management": {
    title: "Social Media Marketing & Management",
    tagline: "Turn your social media into a growth channel.",
    description: "We help brands build an active online community, create engaging content and maintain a consistent presence across major social platforms.",
    deliverables: [
      "Instagram & Facebook Page Management",
      "Social Media Strategy & Content Calendars",
      "Content Creation & Publishing",
      "Reels, Posts, Stories & Short-Form Content",
      "Audience Engagement & Community Building",
      "Social Media Performance Reporting"
    ],
    whyChooseUs: [
      "Hook-first creative formats designed to stop the thumb in the first 2 seconds",
      "Daily algorithm monitoring across Instagram, Meta, and LinkedIn",
      "End-to-end production: scripting, graphic design, video editing, and scheduling",
      "Active DM and comment community management that turns followers into leads",
      "Data-backed monthly review sessions with actionable growth insights"
    ],
    benefits: [
      "Consistent, active daily presence without consuming your team's time",
      "Explosive organic reach through viral short-form Reels and video hooks",
      "Build a loyal brand tribe that advocates for your products",
      "Direct inbound pipeline for business inquiries and customer orders",
      "Elevate brand reputation through authentic community dialogues"
    ],
    features: [
      "Monthly 30-day content roadmaps aligned with business milestones",
      "High-production carousel decks and motion graphic graphics",
      "Short-form 9:16 vertical video editing with dynamic kinetic captions",
      "Story campaigns with polls, quizzes, and conversion stickers",
      "Hashtag and audio trend research for maximum algorithmic velocity",
      "Comprehensive monthly performance dossiers with follower demographics"
    ]
  },

  "Influencer Marketing & Brand Collaborations": {
    title: "Influencer Marketing & Brand Collaborations",
    tagline: "Connect your brand with the right creators.",
    description: "We find relevant influencers and content creators based on your brand, audience, budget and campaign objectives to help you increase visibility and build trust.",
    deliverables: [
      "Influencer & Creator Discovery",
      "Micro, Mid-Tier & Macro Influencer Campaigns",
      "Brand Collaborations & Sponsored Content",
      "Influencer Outreach & Negotiation",
      "Campaign Planning & Coordination",
      "Reach, Engagement & Campaign Performance Tracking"
    ],
    whyChooseUs: [
      "Proprietary vetting process to eliminate creators with fake followers or poor engagement",
      "Negotiation specialists securing creator usage rights for performance ad scaling",
      "Creative brief frameworks that maintain authenticity while enforcing key brand hooks",
      "Full logistical coordination from product seeding to live posting verification",
      "Trackable UTM links and discount codes to measure exact sales attribution"
    ],
    benefits: [
      "Instant social proof and credibility through trusted niche voices",
      "Overcome ad blindness through natural, peer-to-peer recommendations",
      "Cost-effective CAC through high-converting micro-influencer clusters",
      "Library of organic user-generated content (UGC) for paid ad repurposing",
      "Rapid reach into untapped demographic segments"
    ],
    features: [
      "Niche demographic and engagement audit for every shortlisted creator",
      "Legal contracts covering deliverables, timelines, and commercial IP rights",
      "Custom creative briefs with sample hooks, visual angles, and dos/don'ts",
      "Sample product shipping and delivery tracking management",
      "Post-campaign sentiment analysis and ROI performance reporting",
      "Whitelisting / Meta Partnership Ad integration support"
    ]
  },

  "Paid Advertising & Performance Marketing": {
    title: "Paid Advertising & Performance Marketing",
    tagline: "Reach the right audience. Generate measurable results.",
    description: "We plan, launch and optimize digital advertising campaigns designed to increase brand awareness, generate qualified leads and drive sales.",
    deliverables: [
      "Instagram & Facebook Ads",
      "YouTube Video Advertising",
      "Meta Ads Campaign Management",
      "Lead Generation Campaigns",
      "E-commerce & Sales Campaigns",
      "Retargeting & Audience Remarketing",
      "Ad Creative Testing & Campaign Optimization",
      "Conversion Tracking & Performance Reporting"
    ],
    whyChooseUs: [
      "Certified Meta & Google media buyers managing high-efficiency budgets",
      "Relentless creative testing framework shipping 15–20 ad variations weekly",
      "Advanced attribution tracking (Meta Conversions API, GA4, offline routing)",
      "Strict cost-cap and ROAS target bidding preventing wasted ad spend",
      "Transparent live performance dashboards with zero vanity metrics"
    ],
    benefits: [
      "Predictable, scalable customer acquisition machine",
      "Lower blended Cost Per Acquisition (CPA) and higher Average Order Value (AOV)",
      "Reach high-intent buyers ready to purchase right now",
      "Recapture 98% of lost website drop-offs via dynamic remarketing",
      "Maximize every single rupee of your advertising budget"
    ],
    features: [
      "Broad, interest, lookalike, and custom customer audience architectures",
      "Dynamic product ads (DPA) synced directly to your inventory catalog",
      "High-converting instant lead forms with CRM webhook auto-sync",
      "Omnichannel retargeting across Meta, Google Search, and YouTube",
      "A/B split testing on ad hooks, video formats, headlines, and call-to-actions",
      "Bi-weekly strategic sprint reviews and real-time ad budget reallocation"
    ]
  },

  "Graphic Design & Creative Production": {
    title: "Graphic Design & Creative Production",
    tagline: "Creative visuals that make your brand stand out.",
    description: "We create visually compelling designs and marketing assets that communicate your message and maintain a consistent brand identity.",
    deliverables: [
      "Social Media Posts & Carousel Designs",
      "Advertising Creatives & Campaign Banners",
      "Posters, Flyers & Brochures",
      "Brand Presentation & Pitch Deck Design",
      "Thumbnail & YouTube Channel Graphics",
      "Product & Promotional Creatives",
      "Video Editing, Reels & Motion Graphics"
    ],
    whyChooseUs: [
      "Designers who understand marketing psychology and conversion aesthetics",
      "High-fidelity visual polish with 3D elements, typography hierarchy, and color theory",
      "Rapid turnaround times to capitalize on trending moments and fast sprints",
      "Print-ready CMYK files as well as web-optimized responsive digital assets",
      "Unlimited revisions until your vision is completely realized"
    ],
    benefits: [
      "Establish an unmistakable, premium market visual standard",
      "Significantly boost click-through rates (CTR) on paid ad campaigns",
      "Impress investors and enterprise clients with cinematic pitch decks",
      "Eliminate the need to recruit and manage internal design staff",
      "Consistent visual language across all digital and print customer touchpoints"
    ],
    features: [
      "High-CTR social carousel slides engineered for swipe retention",
      "Static and animated HTML5 / MP4 advertising banners",
      "High-impact YouTube thumbnails optimized for 10%+ CTRs",
      "Investor pitch decks with data charts, infographics, and mockups",
      "Packaging, label, merchandise, and exhibition banner designs",
      "Motion graphics, kinetic typography, and sound design for video reels"
    ]
  },

  "AI Automation & Business Workflow Automation": {
    title: "AI Automation & Business Workflow Automation",
    tagline: "Work smarter. Reduce repetitive tasks. Save time.",
    description: "We help businesses automate routine processes, connect their tools and build efficient workflows so teams can focus on work that matters.",
    deliverables: [
      "Automated Lead Capture & Follow-Ups",
      "WhatsApp & Email Workflow Automation",
      "Automated Notifications & Reminders",
      "CRM & Customer Data Workflow Automation",
      "Form-to-Sheet and Form-to-CRM Integrations",
      "Appointment Booking & Follow-Up Systems",
      "Reporting & Repetitive Task Automation",
      "Business Process Automation"
    ],
    whyChooseUs: [
      "Expert integration specialists in Make, Zapier, n8n, and custom webhooks",
      "Zero manual data re-entry: 100% automated synchronization across tools",
      "Instant 24/7 lead responses reducing lead drop-off by up to 70%",
      "Custom logic tailored to your exact business operations and team roles",
      "Fault-tolerant architectures with automatic error alerts and backups"
    ],
    benefits: [
      "Save 20–40+ team hours every week on mundane manual tasks",
      "Zero leads lost through the cracks with instant automated follow-ups",
      "Seamless customer onboarding and appointment reminder sequences",
      "Drastically reduce human data entry errors and response latency",
      "Scale operations smoothly without immediately hiring more administrative staff"
    ],
    features: [
      "Official WhatsApp Cloud API automation with customized interactive buttons",
      "Automated multi-channel sequences (Email + SMS + WhatsApp)",
      "Two-way synchronization between ad platforms, website forms, and CRMs",
      "Automated client invoicing, payment receipt, and reminder triggers",
      "Automated weekly executive reporting spreadsheets compiled on autopilot",
      "Custom webhook connectors linking custom web apps to internal tools"
    ]
  },

  "AI Integration & Intelligent Solutions": {
    title: "AI Integration & Intelligent Solutions",
    tagline: "Bring the power of AI into your business.",
    description: "We integrate AI capabilities into websites, applications and business workflows to improve customer support, information access and operational efficiency.",
    deliverables: [
      "AI Chatbots for Websites",
      "AI-Powered Customer Support",
      "Custom AI Assistants",
      "AI Knowledge Bases & Document Search",
      "AI Content & Data Processing Workflows",
      "AI Integration with Existing Applications",
      "API Integration with AI Models",
      "Custom AI-Powered Web Applications"
    ],
    whyChooseUs: [
      "State-of-the-art model integration (OpenAI GPT-4o, Claude 3.5, Gemini, DeepSeek)",
      "RAG (Retrieval-Augmented Generation) architectures trained exclusively on your business docs",
      "Guardrails preventing hallucinations and keeping responses professional and accurate",
      "Omnichannel deployment across websites, mobile apps, and WhatsApp",
      "Continuous prompt optimization and conversation analytics"
    ],
    benefits: [
      "Resolve up to 80% of customer support tickets instantly, 24/7",
      "Empower employees with instant enterprise knowledge base search",
      "Dramatically reduce support staffing overheads and ticket backlog",
      "Deliver tailored recommendations that guide website visitors to purchase",
      "Modernize your company into an AI-first competitive leader"
    ],
    features: [
      "Custom-branded floating AI chat widgets matching your 3D website design",
      "Vector database embeddings for PDFs, FAQs, catalogs, and documentation",
      "Human-handoff escalation workflows when complex inquiries arise",
      "Automated sentiment analysis and conversation categorization",
      "RESTful API integration connecting AI models to your proprietary backend",
      "Strict data privacy controls ensuring your private IP is never used for training"
    ]
  },

  "SEO & Search Visibility": {
    title: "SEO & Search Visibility",
    tagline: "Help your customers discover you online.",
    description: "We improve your website's search visibility through technical improvements, relevant content and structured search optimization.",
    deliverables: [
      "Technical SEO & Website Audits",
      "Keyword Research & Competitor Analysis",
      "On-Page SEO & Content Optimization",
      "SEO Landing Pages & Website Content",
      "Local SEO & Google Business Profile Optimization",
      "Performance Tracking & SEO Reporting"
    ],
    whyChooseUs: [
      "Strict 100% white-hat methodologies built for Google's latest AI search updates",
      "Deep technical audits fixing crawl errors, indexation, and Core Web Vitals",
      "Revenue-focused keyword mapping targeting high commercial buying intent",
      "Structured data & schema markup integration ensuring rich snippets and knowledge panels",
      "Transparent monthly reporting tracking organic impressions, clicks, and rank changes"
    ],
    benefits: [
      "Continuous free organic traffic stream compounding month over month",
      "Permanent market authority that paid ads cannot replace",
      "Capture customers right at the moment they search for your solutions",
      "Dominate local map pack rankings for regional in-store or service queries",
      "Lower long-term blended customer acquisition costs"
    ],
    features: [
      "In-depth 45-point technical SEO diagnostic audit",
      "Commercial and informational keyword research with search volume analytics",
      "Meta tags, Open Graph, header hierarchy, and semantic HTML optimization",
      "XML sitemap, robots.txt, canonicalization, and redirect management",
      "Google Business Profile optimization for local 3-pack prominence",
      "GA4 and Google Search Console integration with custom automated dashboards"
    ]
  },

  "Lead Generation & Business Growth": {
    title: "Lead Generation & Business Growth",
    tagline: "Turn attention into opportunities.",
    description: "We help businesses build a systematic approach to attracting potential customers, capturing leads and improving conversion opportunities.",
    deliverables: [
      "Lead Generation Strategy",
      "Landing Pages & Conversion Funnels",
      "Lead Capture Forms",
      "CRM Setup & Lead Organization",
      "Automated Lead Follow-Ups",
      "Campaign Tracking & Conversion Optimization"
    ],
    whyChooseUs: [
      "Full-funnel growth architecture aligning marketing directly with sales team closing rates",
      "High-converting copy and behavioral psychological triggers",
      "Lead scoring and qualification filters filtering out tire-kickers and low-budget leads",
      "Rapid deployment of landing page split tests to optimize cost-per-lead",
      "Proven track record generating thousands of high-ticket B2B and consumer leads"
    ],
    benefits: [
      "Consistent pipeline of qualified prospects ready for sales calls",
      "Higher conversion rates through streamlined, friction-free funnels",
      "Organized CRM pipelines eliminating lost deals and chaotic spreadsheets",
      "Measurable ROI on every acquisition channel and campaign sprint",
      "Predictable revenue forecasting for business scaling"
    ],
    features: [
      "High-speed dedicated landing pages designed with 3D glassmorphism",
      "Multi-step interactive quiz and assessment funnels that pre-qualify leads",
      "Seamless CRM setup (HubSpot, Zoho, LeadSquared, Notion)",
      "Instant SMS and WhatsApp alert notifications sent directly to sales reps",
      "A/B testing on headlines, social proof testimonials, and form fields",
      "Full attribution modeling showing exact revenue generated per marketing source"
    ]
  }
};
