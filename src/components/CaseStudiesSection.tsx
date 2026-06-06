import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "./FadeIn";

const caseStudies = [
    {
        client: "TechFlow Solutions",
        industry: "SaaS",
        title: "Scaling ARR from $1M to $5M in 12 Months",
        description: "Implemented a full-funnel ABM strategy combined with technical SEO overhaul.",
        metrics: [
            { label: "Pipeline Growth", value: "400%", icon: TrendingUp },
            { label: "Lead Quality", value: "+85%", icon: Users },
            { label: "ROI", value: "12x", icon: DollarSign },
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
        client: "Urban Style",
        industry: "E-commerce",
        title: "Dominating the Fashion Niche with Viral Content",
        description: "Leveraged Instagram Reels and influencer partnerships to create a cult following.",
        metrics: [
            { label: "Social Reach", value: "2.5M+", icon: Users },
            { label: "Sales Increase", value: "300%", icon: TrendingUp },
            { label: "Ad ROAS", value: "8.5", icon: DollarSign },
        ],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    },
    {
        client: "GreenEarth",
        industry: "Sustainability",
        title: "Building a Community-Led Brand Movement",
        description: "Focused on storytelling and community engagement to drive organic growth.",
        metrics: [
            { label: "Community Size", value: "50k+", icon: Users },
            { label: "Engagement", value: "15%", icon: TrendingUp },
            { label: "Donations", value: "$100k+", icon: DollarSign },
        ],
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    },
];

const CaseStudiesSection = () => {
    return (
        <section className="py-20 sm:py-32 bg-secondary/20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn direction="up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-primary mb-6">
                            <TrendingUp className="w-4 h-4" />
                            <span>Success Stories</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-6">
                            Real Results for <span className="text-gradient">Real Brands</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We don't just promise growth; we deliver it. Explore how we've transformed businesses across industries.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <FadeIn key={index} direction="up" delay={index * 0.2}>
                            <div className="group bg-background border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.client}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                            {study.industry}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-primary transition-colors">
                                        {study.client}
                                    </h3>
                                    <p className="text-lg font-semibold mb-4 text-foreground/90">
                                        {study.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                                        {study.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/50 mb-6">
                                        {study.metrics.map((metric, i) => (
                                            <div key={i} className="text-center">
                                                <div className="flex justify-center mb-1 text-primary">
                                                    <metric.icon className="w-4 h-4" />
                                                </div>
                                                <p className="text-lg font-bold text-foreground">{metric.value}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <Button variant="ghost" className="w-full group/btn hover:bg-primary/5">
                                        View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
