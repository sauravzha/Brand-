import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Editorial Hero */}
        <section className="py-16 sm:py-20 border-b border-border/60 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                The Growth Dispatch
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight text-foreground">
                Strategies, teardowns, and tactical growth guides.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Written by the growth engineers and creative strategists running high-performance campaigns daily at BrandYatra.
              </p>

              {/* Search */}
              <div className="pt-4 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles, guides, teardowns..."
                    className="pl-10 h-11 bg-card border-border text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="py-6 border-b border-border/60 sticky top-20 bg-background/95 backdrop-blur-md z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide text-xs font-medium">
              {categories.map((cat) => {
                const isActive = cat === selectedCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-foreground text-background font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 space-y-3">
                <p className="text-lg font-medium text-foreground">No articles match your search.</p>
                <p className="text-sm text-muted-foreground">Try clearing your filters or searching a different term.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
