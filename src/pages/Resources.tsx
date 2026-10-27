import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import NewsletterSection from "@/components/NewsletterSection";
import { BookOpen, FileText, CheckCircle, Download, Lightbulb, Zap, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: "Playbook" | "Template" | "Checklist" | "Framework";
  readTime: string;
}

const allResources: ResourceItem[] = [
  {
    id: "dtc-scale",
    title: "The 2026 DTC Performance Scaling Playbook",
    description: "Our exact operating framework for taking Indian DTC brands from ₹5L to ₹50L monthly GMV profitably.",
    category: "Playbook",
    readTime: "15 min read",
  },
  {
    id: "brand-identity",
    title: "Brand Positioning & Hook Architecture",
    description: "Define your brand voice, visual identity, and messaging framework from scratch with customer voice mining prompts.",
    category: "Framework",
    readTime: "Strategic Canvas",
  },
  {
    id: "email-templates",
    title: "10 High-Converting E-Commerce Email Flows",
    description: "Battle-tested email sequences for abandoned carts, post-purchase onboarding, VIP rewards, and win-back offers.",
    category: "Template",
    readTime: "10 Ready Templates",
  },
  {
    id: "google-ads-checklist",
    title: "Google Ads & Search Audit Checklist",
    description: "Step-by-step 47-point checklist to audit your Google search structure and negative keywords in 20 minutes.",
    category: "Checklist",
    readTime: "20 min audit",
  },
  {
    id: "b2b-lead-engine",
    title: "B2B LinkedIn & Search Lead Engine",
    description: "The pipeline we use to book 40+ qualified product demos monthly with zero cold calling and high-intent keyword groups.",
    category: "Framework",
    readTime: "Framework & SOP",
  },
  {
    id: "video-ads-toolkit",
    title: "Short-Form Video & UGC Hook Architecture",
    description: "Scripts, storyboard templates, and editing checklists for creating thumb-stopping video ads on Meta & Reels.",
    category: "Playbook",
    readTime: "Creative SOP",
  },
  {
    id: "landing-page-cro",
    title: "Landing Page Conversion Rate Optimization Guide",
    description: "Visual hierarchy principles, above-the-fold copywriting formulas, and mobile checkout friction teardowns.",
    category: "Checklist",
    readTime: "Actionable Guide",
  },
  {
    id: "competitor-framework",
    title: "Competitor Creative & Whitespace Analysis Matrix",
    description: "A structured spreadsheet to track your top 5 competitors' ad spend, active creatives, and messaging angles.",
    category: "Template",
    readTime: "Google Sheets",
  },
];

const categories = ["All", "Playbook", "Template", "Checklist", "Framework"];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = allResources.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleDownload = (item: ResourceItem) => {
    toast.success(`Access granted to "${item.title}"`, {
      description: "Sample framework file downloaded. Save a copy to your drive.",
    });
    const sampleContent = `# ${item.title}\nCategory: ${item.category}\nRead Time: ${item.readTime}\n\nDescription:\n${item.description}\n\n---\nPublished freely by BrandYatra Digital (https://brandyatra.com)`;
    const blob = new Blob([sampleContent], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${item.id}-framework.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 border-b border-border/60 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                Growth Knowledge Base
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight text-foreground">
                Free marketing frameworks, templates & playbooks.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We document our real agency processes into plug-and-play resources. Use them to audit your ads, optimize your conversion rate, and scale customer acquisition.
              </p>

              {/* Search */}
              <div className="pt-4 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search frameworks, SOPs, checklists..."
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

        {/* Resources Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredResources.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 transition-all shadow-xs group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                        <span className="px-2.5 py-1 rounded-md bg-muted text-foreground font-semibold">
                          {item.category}
                        </span>
                        <span>{item.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border/60">
                      <Button
                        onClick={() => handleDownload(item)}
                        variant="outline"
                        className="w-full text-xs font-semibold h-10 border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 mr-2" />
                        Download Free Copy
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 space-y-3">
                <p className="text-lg font-medium text-foreground">No resources found.</p>
                <p className="text-sm text-muted-foreground">Try searching for "DTC", "Ads", or "SEO".</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <NewsletterSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Resources;
