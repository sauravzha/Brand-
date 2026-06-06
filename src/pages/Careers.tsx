import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Rocket, Heart, Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const teamMembers = [
    {
        name: "Aarav Patel",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
    },
    {
        name: "Zara Khan",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
    },
    {
        name: "Rohan Gupta",
        role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
    },
    {
        name: "Ishita Singh",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop",
    },
];

const openPositions = [
    {
        title: "Senior Performance Marketer",
        department: "Marketing",
        location: "Mumbai / Remote",
        type: "Full-time",
    },
    {
        title: "Content Strategist",
        department: "Content",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "UI/UX Designer",
        department: "Design",
        location: "Bangalore",
        type: "Contract",
    },
];

const Careers = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 sm:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <FadeIn direction="up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-primary mb-6">
                                <Rocket className="w-4 h-4" />
                                <span>Join the Crew</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6">
                                Build the Future of <span className="text-gradient">Digital</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                                We're a team of dreamers, doers, and digital explorers. Join us on our mission to transform brands across the globe.
                            </p>
                            <Button className="h-12 px-8 text-lg bg-gradient-to-r from-primary via-pink-500 to-orange-500 hover:shadow-lg hover:shadow-primary/50">
                                View Openings <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </FadeIn>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FadeIn direction="up" delay={0.1}>
                                <div className="p-8 rounded-3xl bg-secondary/20 text-center">
                                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <Heart className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Passion First</h3>
                                    <p className="text-muted-foreground">We love what we do, and it shows in our work.</p>
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.2}>
                                <div className="p-8 rounded-3xl bg-secondary/20 text-center">
                                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <Users className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Better Together</h3>
                                    <p className="text-muted-foreground">Collaboration is the key to our innovative solutions.</p>
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.3}>
                                <div className="p-8 rounded-3xl bg-secondary/20 text-center">
                                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <Globe className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Global Impact</h3>
                                    <p className="text-muted-foreground">We think big and aim to make a difference worldwide.</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-secondary/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn direction="up">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">Meet the <span className="text-gradient">Pilots</span></h2>
                                <p className="text-muted-foreground">The minds behind the magic.</p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <FadeIn key={index} direction="up" delay={index * 0.1}>
                                    <div className="group relative overflow-hidden rounded-2xl">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <h3 className="text-white text-xl font-bold">{member.name}</h3>
                                            <p className="text-white/80">{member.role}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <FadeIn direction="up">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">Open <span className="text-gradient">Positions</span></h2>
                                <p className="text-muted-foreground">Ready to start your journey?</p>
                            </div>
                        </FadeIn>

                        <div className="space-y-4">
                            {openPositions.map((job, index) => (
                                <FadeIn key={index} direction="up" delay={index * 0.1}>
                                    <div className="group p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col sm:flex-row items-center justify-between gap-4 bg-card/50 backdrop-blur-sm">
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span>{job.department}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                                <span>•</span>
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            Apply Now
                                        </Button>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Careers;
