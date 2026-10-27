import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, MapPin, Briefcase, Clock, Send, HeartHandshake, ShieldCheck, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const principles = [
  {
    title: "Extreme Ownership",
    description: "No micromanagement. You own your campaigns, client outcomes, and experiments from hypothesis to post-mortem.",
    icon: Zap,
  },
  {
    title: "Data Rigor + Creative Taste",
    description: "We don't guess. We combine strict unit economics (CAC, ROAS, LTV) with bold, thumb-stopping creative production.",
    icon: ShieldCheck,
  },
  {
    title: "Direct Client & Founder Access",
    description: "No layers of account managers slowing communication down. You interact directly with ambitious founders.",
    icon: HeartHandshake,
  },
];

const openPositions = [
  {
    id: "lead-perf-marketer",
    title: "Lead Performance Marketer (Meta & Google)",
    department: "Paid Acquisition",
    location: "Mumbai / Remote",
    type: "Full-Time",
    experience: "3-5 Years",
    salary: "₹12L - ₹18L + Performance Bonus",
    description: "Manage and scale monthly ad budgets across DTC and B2B SaaS accounts with rigorous CRO and attribution analysis.",
  },
  {
    id: "creative-strategist",
    title: "Creative Strategist & UGC Director",
    department: "Creative Studio",
    location: "Bangalore / Remote",
    type: "Full-Time",
    experience: "2-4 Years",
    salary: "₹9L - ₹14L",
    description: "Conceptualize, script, and direct high-converting short-form video hooks, founder ads, and viral social campaigns.",
  },
  {
    id: "seo-cro-specialist",
    title: "SEO & Growth Engineer",
    department: "Organic Growth",
    location: "Remote (India)",
    type: "Full-Time",
    experience: "2-4 Years",
    salary: "₹8L - ₹13L",
    description: "Own technical SEO audits, programmatic content pipelines, and interactive conversion rate optimization landing experiments.",
  },
  {
    id: "social-lead",
    title: "Senior Social Media & Community Manager",
    department: "Brand & Social",
    location: "Remote (India)",
    type: "Full-Time",
    experience: "1-3 Years",
    salary: "₹6L - ₹10L",
    description: "Build engaged communities, manage creator collaborations, and steer visual storytelling across LinkedIn & Instagram.",
  },
];

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState<typeof openPositions[0] | null>(null);
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePortfolio, setCandidatePortfolio] = useState("");
  const [candidateNote, setCandidateNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail) {
      toast.error("Please provide your name and email.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted successfully!", {
        description: `Thank you, ${candidateName}. Our hiring team will review your profile for ${selectedRole?.title} within 48 hours.`,
      });
      setSelectedRole(null);
      setCandidateName("");
      setCandidateEmail("");
      setCandidatePortfolio("");
      setCandidateNote("");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="py-16 sm:py-24 border-b border-border/60 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                Join Our Core Team
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight text-foreground">
                Do the best work of your career with ambitious brands.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We're a fast-moving, high-conviction growth agency helping India's most exciting startups scale profitably. If you love marketing craft and ownership, you'll feel right at home.
              </p>

              <div className="pt-4">
                <Button
                  onClick={() => {
                    const openings = document.getElementById("open-positions");
                    openings?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-semibold h-11 px-6"
                >
                  View Open Roles ({openPositions.length})
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Values */}
        <section className="py-20 border-b border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-foreground">
                How we work at BrandYatra
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                We value autonomy, craftsmanship, and speed over bureaucracy and endless meetings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-border bg-card space-y-3 shadow-xs">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions List */}
        <section id="open-positions" className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-foreground">
                  Current Open Roles
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">
                  All positions include flexible remote working, healthcare coverage, and annual learning budgets.
                </p>
              </div>
              <div className="text-xs text-muted-foreground">
                Don't see your role? Email us directly at <a href="mailto:careers@brandyatra.com" className="text-primary font-semibold underline">careers@brandyatra.com</a>
              </div>
            </div>

            <div className="space-y-4 max-w-4xl">
              {openPositions.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span className="px-2.5 py-0.5 rounded-md bg-muted text-foreground font-semibold">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                      <span>•</span>
                      <span>{job.salary}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {job.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedRole(job)}
                    className="self-start md:self-center text-xs font-semibold flex-shrink-0"
                  >
                    Apply for Role
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Application Dialog */}
      <Dialog open={!!selectedRole} onOpenChange={() => setSelectedRole(null)}>
        {selectedRole && (
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                Application
              </div>
              <DialogTitle className="text-xl font-bold font-poppins text-foreground">
                Apply for {selectedRole.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                {selectedRole.department} • {selectedRole.location} • {selectedRole.salary}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleApplySubmit} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Full Name *</label>
                <Input
                  required
                  placeholder="e.g. Aditi Rao"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="h-10 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Email Address *</label>
                <Input
                  required
                  type="email"
                  placeholder="aditi@example.com"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  className="h-10 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">LinkedIn / Portfolio URL *</label>
                <Input
                  required
                  placeholder="https://linkedin.com/in/... or portfolio link"
                  value={candidatePortfolio}
                  onChange={(e) => setCandidatePortfolio(e.target.value)}
                  className="h-10 text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Why do you want to join BrandYatra?</label>
                <Textarea
                  placeholder="Tell us about a campaign or project you are proud of..."
                  value={candidateNote}
                  onChange={(e) => setCandidateNote(e.target.value)}
                  rows={3}
                  className="text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-xs font-semibold h-10"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  <Send className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </form>
          </DialogContent>
        )}
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
