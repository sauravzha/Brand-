export interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  whyChooseUs: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "Instagram Ads Management": {
    title: "Instagram Ads Management",
    description: "Transform your Instagram presence into a powerful sales engine with our data-driven ad campaigns designed for maximum engagement and conversions.",
    whyChooseUs: [
      "We create visually stunning ads that stop the scroll and capture attention in a crowded feed",
      "Our team understands Instagram's algorithm and uses it to maximize your organic and paid reach",
      "We target your ideal customers with precision using advanced audience segmentation and lookalike audiences",
      "Track every rupee spent with detailed analytics and transparent reporting on ROI",
      "Get dedicated support from Instagram-certified experts who stay updated with the latest platform changes"
    ],
    benefits: [
      "Increase brand awareness by 3-5x",
      "Drive qualified traffic to your website",
      "Boost engagement rates significantly",
      "Generate quality leads consistently",
      "Build a loyal community of followers",
      "Improve conversion rates"
    ],
    features: [
      "Strategic campaign planning aligned with your business goals",
      "Eye-catching creative design optimized for mobile viewing",
      "Story ads, feed ads, reels ads, and carousel campaigns",
      "A/B testing to find the best performing ad variations",
      "Audience research and targeting strategy",
      "Weekly performance reports with actionable insights",
      "Continuous optimization based on real-time data",
      "Influencer collaboration management (if needed)"
    ]
  },
  "Facebook Ads Management": {
    title: "Facebook Ads Management",
    description: "Leverage Facebook's massive user base and sophisticated targeting capabilities to reach your perfect customers and drive measurable business results.",
    whyChooseUs: [
      "We utilize Facebook's powerful Business Suite to create campaigns that convert browsers into buyers",
      "Our strategic approach combines demographic, interest, and behavioral targeting for laser-focused reach",
      "We optimize your ad spend using Facebook's advanced bidding strategies to get the best CPA",
      "Access to exclusive Facebook marketing tools and beta features through our agency partnership",
      "Proven track record of reducing cost-per-acquisition by 40-60% for our clients"
    ],
    benefits: [
      "Reach over 2 billion active users",
      "Target specific demographics precisely",
      "Retarget website visitors effectively",
      "Scale successful campaigns quickly",
      "Integrate with Instagram seamlessly",
      "Lower acquisition costs"
    ],
    features: [
      "Custom audience creation and lookalike audience development",
      "Multi-format ad creation (image, video, carousel, collection)",
      "Facebook Pixel implementation and event tracking",
      "Conversion-focused landing page recommendations",
      "Dynamic product ads for e-commerce",
      "Lead generation campaigns with instant forms",
      "Messenger chatbot integration for customer engagement",
      "Cross-platform campaign management (Facebook + Instagram)"
    ]
  },
  "YouTube Ads": {
    title: "YouTube Ads",
    description: "Tell your brand story through compelling video content and reach millions of potential customers on the world's second-largest search engine.",
    whyChooseUs: [
      "We create video content that resonates with Indian audiences and drives action",
      "Our team includes professional video editors and storytellers who know what works on YouTube",
      "We understand YouTube's unique ad formats and placement strategies for maximum impact",
      "Get access to YouTube's advanced targeting including in-market audiences and custom intent",
      "We optimize for watch time, engagement, and conversions - not just views"
    ],
    benefits: [
      "Massive reach with 2+ billion users",
      "Higher engagement with video content",
      "Build brand credibility and trust",
      "Drive traffic to your channel",
      "Educate customers effectively",
      "Cost-effective CPV rates"
    ],
    features: [
      "Professional video ad script writing and storyboarding",
      "TrueView in-stream and discovery ads",
      "Bumper ads for maximum brand recall",
      "Skippable and non-skippable ad formats",
      "YouTube channel optimization",
      "Thumbnail design that drives clicks",
      "Audience targeting based on interests and behavior",
      "Remarketing to engaged viewers",
      "Performance tracking with YouTube Analytics"
    ]
  },
  "Google Ads (Search & Display)": {
    title: "Google Ads (Search & Display)",
    description: "Capture high-intent customers actively searching for your products or services with strategic Google Ads campaigns that deliver exceptional ROI.",
    whyChooseUs: [
      "We are Google Ads certified experts with years of experience managing six-figure budgets",
      "Our keyword research process uncovers high-converting, low-competition opportunities",
      "We write compelling ad copy that achieves high Quality Scores and lower CPCs",
      "Advanced conversion tracking implementation to measure every lead and sale",
      "We continuously A/B test and optimize to improve your campaign performance month over month"
    ],
    benefits: [
      "Appear at the top of search results",
      "Pay only when people click",
      "Target customers ready to buy",
      "Measure results precisely",
      "Outrank competitors strategically",
      "Scale campaigns profitably"
    ],
    features: [
      "Comprehensive keyword research and competitor analysis",
      "Search campaign setup and management",
      "Display Network remarketing campaigns",
      "Google Shopping ads for e-commerce",
      "Responsive search ads optimization",
      "Negative keyword management",
      "Landing page recommendations and optimization",
      "Conversion tracking setup (GA4, Google Tag Manager)",
      "Monthly strategy calls and performance reviews",
      "Bid strategy optimization for maximum ROI"
    ]
  },
  "Social Media Management": {
    title: "Social Media Management",
    description: "Build a strong, consistent social media presence across all platforms with strategic content that engages your audience and grows your brand.",
    whyChooseUs: [
      "We create content calendars tailored to your brand voice and business objectives",
      "Our team includes content creators, graphic designers, and community managers",
      "We engage with your audience in real-time to build meaningful relationships",
      "Monthly strategy sessions to keep your social media aligned with business goals",
      "Access to professional design tools and stock libraries for premium content"
    ],
    benefits: [
      "Consistent brand presence online",
      "Increased follower engagement",
      "Better customer relationships",
      "Higher website traffic",
      "Improved brand awareness",
      "Enhanced brand loyalty"
    ],
    features: [
      "Content strategy development and planning",
      "Daily post creation (graphics, videos, stories)",
      "Platform management (Instagram, Facebook, LinkedIn, Twitter)",
      "Community management and customer response",
      "Hashtag research and optimization",
      "Influencer outreach and collaboration",
      "Social listening and trend monitoring",
      "Monthly analytics reports",
      "Crisis management support",
      "Profile optimization across all platforms"
    ]
  },
  "SEO Optimization": {
    title: "SEO Optimization",
    description: "Dominate search engine rankings and drive organic traffic to your website with our comprehensive, white-hat SEO strategies that deliver long-term results.",
    whyChooseUs: [
      "We follow Google's latest guidelines and best practices to ensure sustainable rankings",
      "Our technical SEO experts fix issues that prevent your site from ranking",
      "We create content strategies that attract both users and search engines",
      "Transparent reporting showing exactly where your rankings improve month over month",
      "Proven methodology that has helped 50+ businesses achieve page 1 rankings"
    ],
    benefits: [
      "Increase organic traffic 5-10x",
      "Improve search rankings",
      "Build long-term visibility",
      "Reduce dependency on paid ads",
      "Establish domain authority",
      "Better user experience"
    ],
    features: [
      "Comprehensive SEO audit and competitor analysis",
      "Keyword research and mapping strategy",
      "On-page optimization (titles, meta descriptions, headers)",
      "Technical SEO fixes (site speed, mobile optimization, schema markup)",
      "High-quality backlink building through white-hat methods",
      "Content optimization and strategy",
      "Local SEO for location-based businesses",
      "Google Business Profile optimization",
      "Monthly ranking reports and traffic analysis",
      "Core Web Vitals optimization for better UX"
    ]
  },
  "Email Marketing & Automation": {
    title: "Email Marketing & Automation",
    description: "Nurture leads and retain customers with personalized email campaigns that drive engagement, conversions, and repeat business on autopilot.",
    whyChooseUs: [
      "We design beautiful, mobile-responsive email templates that reflect your brand",
      "Our automation workflows nurture leads 24/7 without manual effort",
      "Advanced segmentation ensures your message reaches the right person at the right time",
      "We write compelling copy that gets opened, read, and acted upon",
      "Track everything with detailed analytics on opens, clicks, and conversions"
    ],
    benefits: [
      "High ROI (₹40 for every ₹1 spent)",
      "Automated customer nurturing",
      "Increased customer retention",
      "Personalized communication",
      "Better conversion rates",
      "Stronger customer relationships"
    ],
    features: [
      "Email marketing strategy development",
      "Custom email template design",
      "List segmentation and management",
      "Welcome sequence automation",
      "Abandoned cart recovery emails",
      "Re-engagement campaigns",
      "Newsletter creation and scheduling",
      "A/B testing for subject lines and content",
      "Integration with CRM and e-commerce platforms",
      "Deliverability optimization and list cleaning"
    ]
  },
  "Brand Strategy & Consulting": {
    title: "Brand Strategy & Consulting",
    description: "Define your unique brand identity and create a strategic roadmap for growth with expert consulting that aligns your marketing with business objectives.",
    whyChooseUs: [
      "We help startups find their unique voice in crowded markets",
      "Our strategic approach is based on deep market research and competitor analysis",
      "We create actionable brand guidelines that keep your marketing consistent",
      "Get direct access to marketing strategists with 10+ years of experience",
      "We've helped 30+ startups successfully launch and position themselves in the market"
    ],
    benefits: [
      "Clear brand positioning",
      "Consistent brand messaging",
      "Better market differentiation",
      "Stronger customer connection",
      "Strategic growth roadmap",
      "Higher perceived value"
    ],
    features: [
      "Brand discovery workshops and stakeholder interviews",
      "Market research and competitive analysis",
      "Target audience persona development",
      "Brand positioning and messaging framework",
      "Visual identity recommendations (colors, typography, imagery)",
      "Brand voice and tone guidelines",
      "Content strategy and pillar development",
      "Go-to-market strategy planning",
      "Marketing channel recommendations",
      "Quarterly strategy review sessions",
      "Crisis communication planning"
    ]
  }
};
