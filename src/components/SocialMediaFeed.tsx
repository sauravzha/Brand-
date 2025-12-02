import { Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "./FadeIn";

const posts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop",
        likes: "1.2k",
        comments: "45",
        caption: "Behind the scenes of our latest campaign shoot! 📸 #BrandYatra #DigitalMarketing",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop",
        likes: "856",
        comments: "32",
        caption: "Strategy sessions that turn into success stories. 💡 #GrowthMindset #MarketingStrategy",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
        likes: "2.1k",
        comments: "128",
        caption: "Team lunch! celebrating another milestone. 🍕 #CompanyCulture #TeamWork",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
        likes: "945",
        comments: "56",
        caption: "Data never lies. Check out these ROI stats! 📈 #DataDriven #MarketingAnalytics",
    },
];

const SocialMediaFeed = () => {
    return (
        <section className="py-20 sm:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-primary mb-6">
                            <Instagram className="w-4 h-4" />
                            <span>@brandyatra</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-6">
                            Follow the <span className="text-gradient">Journey</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Join our community of 50k+ digital enthusiasts. Daily tips, behind-the-scenes, and marketing magic.
                        </p>
                        <a href="https://www.instagram.com/brand_yatraa/" target="_blank" rel="noopener noreferrer">
                            <Button className="h-12 px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
                                <Instagram className="mr-2 w-5 h-5" /> Follow on Instagram
                            </Button>
                        </a>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post, index) => (
                        <FadeIn key={post.id} direction="up" delay={index * 0.1}>
                            <div className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary/20">
                                <img
                                    src={post.image}
                                    alt="Instagram Post"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                                    <div className="flex items-center gap-6 text-white mb-4">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-5 h-5 fill-white" />
                                            <span className="font-bold">{post.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageCircle className="w-5 h-5 fill-white" />
                                            <span className="font-bold">{post.comments}</span>
                                        </div>
                                    </div>
                                    <p className="text-white/90 text-sm line-clamp-3">
                                        {post.caption}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialMediaFeed;
