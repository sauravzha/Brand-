import { ArrowLeft, Scale, Shield, FileCheck, CheckCircle2, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[550px] h-[550px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Breadcrumb & Navigation */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors glass-pill-3d px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4">
            <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-primary">
              <Scale className="w-3.5 h-3.5 text-orange-400" />
              <span>Service Agreement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins tracking-tight text-foreground">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-light">
              Last updated: October 27, 2026 • Governing all client engagements with BrandYatra.
            </p>
          </div>

          {/* Main Content 3D Glass Container */}
          <div className="glass-card-3d p-8 sm:p-12 rounded-3xl border border-white/10 space-y-10 leading-relaxed text-foreground/90 font-light">
            
            {/* 1. Agreement to Terms */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">01.</span> Agreement to Terms
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                These Terms and Conditions constitute a legally binding agreement between you (whether personally or on behalf of an entity, "Client" or "you") and <strong>BrandYatra</strong> ("Brandयात्रा", "we", "us", or "our"), regarding your access to and use of <a href="https://brandyatra.online" className="text-primary hover:underline">brandyatra.online</a> and the professional services we provide.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                By retaining our services, approving an estimate or proposal, or utilizing our website, you expressly acknowledge that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
              </p>
            </section>

            {/* 2. Scope of Services */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">02.</span> Scope of Services
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                BrandYatra provides full-service digital agency capabilities across 10 specialized disciplines:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-foreground/90">
                {[
                  "01. Website Design & Development",
                  "02. Branding & Brand Identity",
                  "03. Social Media Marketing & Management",
                  "04. Influencer Marketing & Collaborations",
                  "05. Paid Advertising & Performance Marketing",
                  "06. Graphic Design & Creative Production",
                  "07. AI Automation & Workflow Automation",
                  "08. AI Integration & Intelligent Solutions",
                  "09. SEO & Search Visibility",
                  "10. Lead Generation & Business Growth"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground pt-1">
                Specific milestones, timelines, and deliverables for each project will be documented in a mutual Project Proposal, Statement of Work (SOW), or written agreement.
              </p>
            </section>

            {/* 3. Client Responsibilities & Ad Spend */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">03.</span> Client Responsibilities & Direct Ad Spend
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                <p>
                  To ensure project velocity, the Client agrees to provide prompt feedback, required brand materials, domain access, and catalog assets within mutually agreed timeframes.
                </p>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-1.5 text-foreground/90">
                  <strong className="text-primary font-semibold">Important Notice Regarding Advertising Spend:</strong>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    All advertising media spend (e.g. ad budgets paid to Meta, Google, TikTok, or YouTube) is billed directly by the respective platforms to the Client's credit card or payment profile. BrandYatra's service retainer covers professional media management, strategic testing, and creative production — we never take custody of your advertising spend or mark up platform ad costs.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Payment Terms & Invoicing */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">04.</span> Payment Terms & Invoicing
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>• <strong>Fixed Project Engagements (e.g., Website Development & Branding):</strong> Typically invoiced on a structured milestone basis (e.g., 50% deposit upon kickoff, 50% upon final QA and deployment).</li>
                <li>• <strong>Monthly Growth Retainers:</strong> Invoiced in advance at the start of each 30-day billing cycle. Invoices are due upon receipt.</li>
                <li>• <strong>Currency:</strong> Unless otherwise specified, all fees are quoted and payable in Indian Rupees (INR) or agreed foreign currency (USD/EUR) for international clients.</li>
                <li>• <strong>Transparent Pricing:</strong> Zero hidden fees, markups, or undisclosed surcharges.</li>
              </ul>
            </section>

            {/* 5. Intellectual Property Rights */}
            <section className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <span>100% Client Ownership of Deliverables</span>
              </h2>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                Upon full settlement of agreed project invoices:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>• The Client obtains <strong>100% full, exclusive, and unencumbered ownership</strong> of all custom design deliverables, developed source code, brand kits, advertising copy, and creative assets produced for the engagement.</li>
                <li>• BrandYatra retains the right to display non-confidential deliverables, logos, and anonymized performance case studies in our portfolio and marketing materials, unless an explicit white-label agreement is executed.</li>
              </ul>
            </section>

            {/* 6. Confidentiality & Non-Disclosure */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">05.</span> Confidentiality & Non-Disclosure
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Both parties agree that any proprietary information, client customer databases, financial margins, campaign metrics, trade secrets, and technical workflows disclosed during the engagement shall remain strictly confidential and shall not be disclosed to any third party without prior written authorization.
              </p>
            </section>

            {/* 7. Performance Disclaimers */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">06.</span> Performance Disclaimers
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                While BrandYatra applies battle-tested algorithms, senior creative direction, and data-driven optimization methodologies with a 98% client retention rate, the Client acknowledges that third-party advertising platforms (Meta, Google, YouTube, etc.) operate on dynamic auction mechanics and third-party algorithmic policies outside our direct control. We do not guarantee specific financial results, revenue guarantees, or third-party platform uptime.
              </p>
            </section>

            {/* 8. Cancellation & Termination */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">07.</span> Cancellation & Termination
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Ongoing monthly retainer services may be cancelled by either party with a written 30-day notice prior to the start of the subsequent billing cycle. Upon termination, all active campaigns will be smoothly handed over, and all client assets will be transferred without friction.
              </p>
            </section>

            {/* 9. Governing Law */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">08.</span> Governing Law & Jurisdiction
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of India.
              </p>
            </section>

            {/* 10. Contact */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">09.</span> Contact Us
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have any questions or require clarification regarding these Terms and Conditions, please reach out to our legal coordination desk:
              </p>
              <div className="glass-card-3d p-6 rounded-2xl border border-white/10 space-y-2">
                <p className="text-sm font-bold text-foreground">BrandYatra Digital Agency</p>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Email: <a href="mailto:hello.brandyatra@gmail.com" className="text-primary hover:underline">hello.brandyatra@gmail.com</a></span>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Location: India — Serving ventures worldwide</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default TermsConditions;
