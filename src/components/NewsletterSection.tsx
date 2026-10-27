import { useState } from "react";
import { Send, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FadeIn from "./FadeIn";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Simulate API call
            setTimeout(() => {
                setIsSubscribed(true);
                setEmail("");
            }, 800);
        }
    };

    return (
        <section id="newsletter" className="py-20 sm:py-28 relative overflow-hidden">
            {/* 3D Atmospheric Glowing Ambient Light */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-purple-600/15 via-pink-600/10 to-indigo-600/15 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn direction="up">
                    <div className="glass-card-3d max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 md:p-14 text-center relative border border-white/15">
                        <div className="relative z-10">
                            <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
                                <Sparkles className="w-3.5 h-3.5 text-primary" />
                                <span className="text-foreground/90">The Friday Growth Dispatch</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-4 tracking-tight">
                                Get the <span className="text-gradient">growth playbook</span>
                            </h2>

                            <p className="text-muted-foreground text-base mb-8 max-w-lg mx-auto font-light leading-relaxed">
                                Join 10,000+ founders receiving our weekly confidential teardowns on scaling DTC, SaaS, and modern brands.
                            </p>

                            {isSubscribed ? (
                                <div className="flex flex-col items-center justify-center space-y-3">
                                    <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                        <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground font-poppins">You're in! 🎉</h3>
                                    <p className="text-sm text-muted-foreground">Check your inbox for your instant Growth Audit SOP.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="founder@company.com"
                                        className="h-12 bg-white/[0.04] backdrop-blur-md border-white/15 focus:border-primary/80 focus:ring-2 focus:ring-primary/30 text-sm flex-1 rounded-xl text-foreground"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        className="btn-3d-gradient h-12 px-7 rounded-xl text-sm font-semibold text-white group"
                                    >
                                        <span>Subscribe</span>
                                        <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            )}

                            <p className="text-xs text-muted-foreground/70 mt-5">
                                Zero spam. High-signal growth breakdowns only. One-click unsubscribe.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default NewsletterSection;

