import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

// Mock data - in a real app this would come from an API or CMS
const blogPosts = [
    {
        title: "Instagram Reels vs Stories: Which Drives More Engagement in 2025?",
        excerpt: "Deep dive into the latest Instagram algorithm changes and how Indian brands can leverage short-form video content to maximize reach and conversions. Learn the winning strategies from top performers.",
        author: "Priya Sharma",
        date: "Jan 15, 2025",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        category: "Social Media",
        slug: "instagram-reels-vs-stories-2025",
        content: `
      <p class="mb-6">The landscape of social media marketing in India is evolving rapidly, and Instagram remains at the forefront of this revolution. As we step into 2025, the battle between Reels and Stories for engagement supremacy continues to intensify.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Rise of Reels in India</h2>
      <p class="mb-6">Since the ban of TikTok, Instagram Reels has become the de facto short-form video platform for millions of Indians. The algorithm now heavily favors original video content, giving Reels a significant reach advantage over static posts and even Stories.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Stories: The Retention King</h2>
      <p class="mb-6">While Reels are excellent for discovery and reaching new audiences, Stories remain the champion of retention. They allow brands to maintain a daily connection with their existing followers through interactive stickers, polls, and behind-the-scenes content.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Verdict for 2025</h2>
      <p class="mb-6">For Indian brands looking to grow, a hybrid strategy is essential. Use Reels to cast a wide net and attract new followers, then use Stories to nurture that audience and drive conversions. The data shows that accounts posting 4-5 Reels per week see a 300% higher reach compared to those relying solely on static posts.</p>
    `
    },
    {
        title: "The AI Revolution in Digital Marketing: Tools Every Startup Needs",
        excerpt: "Discover how artificial intelligence is transforming marketing automation, content creation, and customer targeting. We break down the best AI tools that won't break your startup budget.",
        author: "Arjun Mehta",
        date: "Jan 12, 2025",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        category: "AI & Tech",
        slug: "ai-revolution-digital-marketing",
        content: `
      <p class="mb-6">Artificial Intelligence is no longer a futuristic concept; it's the present reality of digital marketing. For startups in India, leveraging AI tools can be the great equalizer, allowing small teams to compete with industry giants.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Content Creation on Autopilot</h2>
      <p class="mb-6">Tools like ChatGPT and Jasper have revolutionized copywriting, but the real magic happens when you combine them with human creativity. AI can generate ideas, outlines, and first drafts, saving hours of time.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Predictive Analytics</h2>
      <p class="mb-6">AI-driven analytics platforms can now predict customer behavior with frightening accuracy. By analyzing past purchase data, these tools can tell you exactly when a customer is most likely to buy again.</p>
    `
    },
    // Add other posts here with similar structure...
];

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-20">
                <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <FadeIn direction="up">
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/blog")}
                            className="mb-8 hover:bg-primary/10"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Button>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.1}>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-muted-foreground text-sm">•</span>
                                <span className="text-muted-foreground text-sm">{post.readTime}</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-between border-y border-border/50 py-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <User className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{post.author}</p>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="w-3 h-3" />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                                        <Bookmark className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <div
                            className="prose prose-invert max-w-none prose-lg prose-headings:font-poppins prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                            dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Full content coming soon...</p>` }}
                        />
                    </FadeIn>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
