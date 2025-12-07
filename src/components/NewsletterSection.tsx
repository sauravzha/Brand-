import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
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
        <section id="newsletter" className="py-20 sm:py-32 relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn direction="up">
                    <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-lg border border-border/50 rounded-[2rem] p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-primary/5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Join the Inner Circle
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-6">
                            Get the <span className="text-gradient">Digital Edge</span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                            Join 10,000+ founders and marketers receiving our weekly "Growth Checklist" — actionable tips to scale your brand.
                        </p>

                        {isSubscribed ? (
                            <div className="flex flex-col items-center justify-center space-y-4 animate-fade-in">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold">Welcome Aboard!</h3>
                                <p className="text-muted-foreground">Check your inbox for your free Growth Checklist.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-12 bg-background/50 border-border/50 focus:border-primary text-base"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button
                                    type="submit"
                                    className="h-12 px-8 bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                >
                                    Subscribe <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        )}

                        <p className="text-xs text-muted-foreground mt-6">
                            No spam, ever. Unsubscribe at any time.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default NewsletterSection;
