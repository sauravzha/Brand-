import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
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
            }, 1000);
        }
    };

    return (
        <section id="newsletter" className="py-20 sm:py-28 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn direction="up">
                    <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-card/50 to-accent/5 p-8 sm:p-12 md:p-14 text-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.05] rounded-full blur-[60px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/[0.05] rounded-full blur-[60px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary mb-6 tracking-wide">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                </span>
                                Weekly newsletter
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-4 tracking-tight">
                                Get the <span className="text-gradient">growth playbook</span>
                            </h2>

                            <p className="text-muted-foreground text-base mb-8 max-w-lg mx-auto">
                                Join 10,000+ founders receiving our weekly tips on scaling brands with actionable digital marketing strategies.
                            </p>

                            {isSubscribed ? (
                                <div className="flex flex-col items-center justify-center space-y-3">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">You're in!</h3>
                                    <p className="text-sm text-muted-foreground">Check your inbox for your free Growth Checklist.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="you@company.com"
                                        className="h-11 bg-background/80 border-border/50 focus:border-primary text-sm flex-1"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        className="h-11 px-6 bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                                    >
                                        Subscribe
                                        <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Button>
                                </form>
                            )}

                            <p className="text-xs text-muted-foreground/60 mt-5">
                                No spam, ever. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default NewsletterSection;
