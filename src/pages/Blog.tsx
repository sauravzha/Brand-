import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Instagram Reels vs Stories: Which Drives More Engagement in 2025?",
    excerpt: "Deep dive into the latest Instagram algorithm changes and how Indian brands can leverage short-form video content to maximize reach and conversions. Learn the winning strategies from top performers.",
    author: "Priya Sharma",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    category: "Social Media",
    slug: "instagram-reels-vs-stories-2025"
  },
  {
    title: "The AI Revolution in Digital Marketing: Tools Every Startup Needs",
    excerpt: "Discover how artificial intelligence is transforming marketing automation, content creation, and customer targeting. We break down the best AI tools that won't break your startup budget.",
    author: "Arjun Mehta",
    date: "Jan 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "AI & Tech",
    slug: "ai-revolution-digital-marketing"
  },
  {
    title: "Google Ads vs Facebook Ads: Where Should Startups Invest First?",
    excerpt: "A comprehensive cost-benefit analysis comparing Google Ads and Facebook Ads for Indian startups. Real data from 50+ campaigns showing which platform delivers better ROI for different industries.",
    author: "Vikram Desai",
    date: "Jan 8, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "PPC Advertising",
    slug: "google-ads-vs-facebook-ads"
  },
  {
    title: "SEO in 2025: The Ultimate Guide for Local Indian Businesses",
    excerpt: "Master the art of local SEO with our comprehensive guide tailored for Indian businesses. Learn keyword research, Google My Business optimization, and content strategies that actually work.",
    author: "Sneha Kapoor",
    date: "Jan 5, 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
    category: "SEO",
    slug: "seo-guide-2025-local-businesses"
  },
  {
    title: "Email Marketing Automation That Converts: A Step-by-Step Guide",
    excerpt: "Build powerful email sequences that nurture leads and drive sales on autopilot. Includes templates, best practices, and real examples from successful Indian e-commerce brands.",
    author: "Rahul Joshi",
    date: "Dec 28, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Email Marketing",
    slug: "email-marketing-automation-guide"
  },
  {
    title: "YouTube Marketing for Startups: From Zero to 10K Subscribers",
    excerpt: "Learn how to build a profitable YouTube channel for your business from scratch. Covers content strategy, SEO optimization, thumbnail design, and monetization tactics specific to Indian audience.",
    author: "Ananya Reddy",
    date: "Dec 22, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    category: "Video Marketing",
    slug: "youtube-marketing-startups-guide"
  }
];

const categories = ["All", "Social Media", "AI & Tech", "PPC Advertising", "SEO", "Email Marketing", "Video Marketing"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-primary">
                <TrendingUp className="w-4 h-4" />
                <span>Marketing Insights & Trends</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins">
                Our <span className="text-gradient">Blog</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay ahead with expert insights, proven strategies, and the latest trends in digital marketing
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto pt-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-12 pr-4 py-6 glass-effect border-border/50 focus:border-primary transition-colors text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={category === selectedCategory
                    ? "bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/50 whitespace-nowrap"
                    : "glass-effect border-border/50 hover:border-primary whitespace-nowrap"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-20 sm:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  {...post}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
