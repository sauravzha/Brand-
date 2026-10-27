import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-[550px] h-[550px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />

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
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Legal Transparency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins tracking-tight text-foreground">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-light">
              Last updated: October 27, 2026 • Effective immediately across all BrandYatra services.
            </p>
          </div>

          {/* Main Content 3D Glass Container */}
          <div className="glass-card-3d p-8 sm:p-12 rounded-3xl border border-white/10 space-y-10 leading-relaxed text-foreground/90 font-light">
            
            {/* 1. Introduction */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">01.</span> Introduction & Scope
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Welcome to <strong>BrandYatra</strong> ("Brandयात्रा", "we", "us", or "our"), operated by founders Saurav Jha and Shruti Choudhary, accessible via <a href="https://brandyatra.online" className="text-primary hover:underline">brandyatra.online</a>. We provide full-stack website design & development, brand strategy, paid performance advertising, social media management, creative production, and AI-driven business automation solutions.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                This Privacy Policy outlines our transparent commitment to safeguarding the personal, proprietary, and commercial information of our clients, website visitors, and prospective partners in compliance with the Indian Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and globally accepted data privacy principles (including GDPR and CCPA standards).
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">02.</span> Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We only collect data necessary to communicate with you, evaluate your project, and deliver high-performance growth services:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground font-poppins">A. Information You Voluntarily Provide</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    When you contact us, book an audit, subscribe to our newsletter, or partner with us: Full name, business email address, phone number, company name, website/social media URLs, current monthly advertising spend, and project specifications.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground font-poppins">B. Client Operational & Access Data</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    During active service engagements: Partner access to advertising accounts (Meta Business Manager, Google Ads), hosting portals, analytics dashboards, and product catalogs. We access these assets strictly via delegated agency roles (Partner Access) without taking ownership of your login credentials.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground font-poppins">C. Automated Technical & Analytics Data</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    IP address, browser type and version, operating system, pages visited, time spent, referral sources, and cookie session identifiers collected via secure Google Analytics 4 and Meta Pixel tracking.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">03.</span> How We Use Your Information
              </h2>
              <ul className="space-y-2.5 pt-1">
                {[
                  "Architecting, coding, and launching custom website development and dashboard applications",
                  "Formulating and executing data-driven paid advertising (Meta, Google, YouTube, Instagram) campaigns",
                  "Automating marketing and operational workflows via WhatsApp Cloud API, email sequences, and CRM integrations",
                  "Responding to inquiries, delivering customized proposals, and providing ongoing sprint updates",
                  "Transmitting the weekly confidential 'Friday Growth Dispatch' newsletter (with 1-click unsubscribe)",
                  "Ensuring website integrity, preventing fraudulent submissions, and satisfying statutory legal duties"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Client Account Ownership & Strict NDA */}
            <section className="space-y-3 p-5 rounded-2xl bg-primary/5 border border-primary/20">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-primary" />
                <span>100% Client Ownership & Non-Disclosure Guarantee</span>
              </h2>
              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                BrandYatra upholds an uncompromising standard of client data sovereignty:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>• <strong>100% Account Ownership:</strong> All ad accounts, pixel data, custom audiences, web assets, and CRM records remain 100% owned by the client at all times.</li>
                <li>• <strong>Strict Confidentiality:</strong> All business metrics, customer margins, conversion rates, and creative IP are held under strict non-disclosure. We never disclose your revenue or proprietary formulas without explicit written consent.</li>
                <li>• <strong>No Data Reselling:</strong> We never sell, lease, rent, or monetize your personal or commercial data to third-party data brokers.</li>
              </ul>
            </section>

            {/* 5. Third-Party Integrations */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">04.</span> Third-Party Service Providers
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To execute digital campaigns, we integrate with industry-leading secure enterprise infrastructure:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-muted-foreground">
                <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <strong className="text-foreground">Meta Platforms (Facebook & Instagram):</strong> Conversion API, ad delivery, audience retargeting.
                </li>
                <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <strong className="text-foreground">Google LLC (Google Ads, GA4, YouTube):</strong> Search indexing, PPC bidding, analytics metrics.
                </li>
                <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <strong className="text-foreground">WhatsApp Business API:</strong> Automated notifications, reminders, and customer messaging.
                </li>
                <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <strong className="text-foreground">Vercel / Cloudflare:</strong> Enterprise web hosting, DDoS mitigation, and SSL encryption.
                </li>
              </ul>
            </section>

            {/* 6. Cookies Policy */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">05.</span> Cookie & Tracking Policy
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our website utilizes first-party and third-party cookies to remember your preferences (such as dark/light theme choices), measure user flow, and deliver relevant campaign teasers. You may decline non-essential cookies via our Cookie Consent banner upon your first visit, or configure your browser to block cookies entirely.
              </p>
            </section>

            {/* 7. Your Statutory Rights */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">06.</span> Your Data Rights
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                You retain full legal authority over your information, including the right to:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground pl-4 list-disc">
                <li>Request a complete copy of the personal information we hold about you.</li>
                <li>Request rectification or correction of inaccurate business or contact records.</li>
                <li>Request permanent erasure of your inquiry data from our active CRM systems.</li>
                <li>Withdraw consent for promotional newsletter correspondence with immediate effect.</li>
              </ul>
            </section>

            {/* 8. Contact & Grievance Redressal */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold font-poppins text-foreground flex items-center gap-2.5">
                <span className="text-gradient font-black">07.</span> Contact & Grievance Officer
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                For privacy inquiries, data deletion requests, or formal communications regarding this policy, please reach out to our dedicated privacy desk:
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
                <p className="text-xs text-muted-foreground pt-1">
                  Response SLA: Under 24–48 business hours.
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

export default PrivacyPolicy;
