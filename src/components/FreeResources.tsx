import { useState } from 'react';
import { Download, FileSpreadsheet, BookOpen, CheckCircle, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { toast } from 'sonner';

interface ResourceItem {
  id: string;
  title: string;
  category: string;
  format: string;
  readTime: string;
  description: string;
  highlights: string[];
}

const resourcesList: ResourceItem[] = [
  {
    id: 'dtc-playbook',
    title: 'The 2026 DTC Performance Scaling Playbook',
    category: 'E-Commerce Growth',
    format: 'PDF Guide • 38 Pages',
    readTime: '15 min read',
    description: 'Our exact operating framework for taking Indian DTC brands from ₹5L to ₹50L monthly GMV profitably.',
    highlights: [
      'High-converting UGC video hook formulas with script templates',
      'The 3-stage ad budget testing architecture (Cold, Warm, Retention)',
      'WhatsApp automated sequence flows with 30%+ recovered cart benchmarks',
    ],
  },
  {
    id: 'b2b-framework',
    title: 'B2B LinkedIn & Search Lead Engine',
    category: 'SaaS & Enterprise',
    format: 'Notion & Google Sheets',
    readTime: 'Framework & SOP',
    description: 'The step-by-step pipeline we use to book 40+ qualified product demos monthly with zero cold calling.',
    highlights: [
      'High-intent search keyword negative lists (saving 30% wasted ad spend)',
      'Founder-led content calendar with 24 proven post archetypes',
      'Account-Based Marketing (ABM) ad targeting setup guidelines',
    ],
  },
  {
    id: 'ad-audit-checklist',
    title: '47-Point Meta & Google Ads Audit Checklist',
    category: 'Performance Audit',
    format: 'Interactive Sheet',
    readTime: 'Quick Audit Tool',
    description: 'A comprehensive checklist to identify hidden budget leaks, tracking errors, and creative fatigue in 20 minutes.',
    highlights: [
      'Conversions API (CAPI) and GA4 event tracking verification',
      'Creative diversity scorecard (static vs motion vs founder-led)',
      'Bid strategy diagnostics (Cost Cap vs Max Conversions)',
    ],
  },
  {
    id: 'brand-positioning',
    title: 'Brand Positioning & Hook Architecture',
    category: 'Brand Strategy',
    format: 'Miro Board & Guide',
    readTime: 'Strategic Canvas',
    description: 'How to craft an irresistible unique selling proposition that turns commoditized products into category leaders.',
    highlights: [
      'The 5-layer value proposition teardown',
      'Competitor whitespace identification matrix',
      'Customer voice mining prompt templates for customer reviews',
    ],
  },
];

const FreeResources = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (resource: ResourceItem) => {
    setDownloadingId(resource.id);
    setTimeout(() => {
      setDownloadingId(null);
      toast.success(`Access granted to "${resource.title}"`, {
        description: 'Resource link opened. Save a copy to your workspace.',
      });
      // Trigger a clean sample text download
      const sampleContent = `# ${resource.title}\nBrandYatra Growth Framework\n\nCategory: ${resource.category}\nFormat: ${resource.format}\n\nSummary:\n${resource.description}\n\nKey Takeaways:\n${resource.highlights.map(h => `- ${h}`).join('\n')}\n\n---\nCreated with care by BrandYatra Digital (https://brandyatra.com)\nNeed personalized growth advisory? Contact us at hello.brandyatra@gmail.com`;
      const blob = new Blob([sampleContent], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${resource.id}-brandyatra-guide.md`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 600);
  };

  return (
    <section id="resources" className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-[-5%] w-[450px] h-[450px] bg-gradient-to-br from-pink-600/15 via-orange-600/10 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-foreground/90">Agency Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-tight text-foreground">
              Battle-tested playbooks, <span className="text-gradient">freely shared</span>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              We publish our internal agency SOPs, spreadsheets, and audit checklists. 100% open-source growth architectures.
            </p>
          </div>

          <a
            href="#newsletter"
            className="self-start md:self-auto"
          >
            <button className="btn-3d-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white group">
              <span>Get Weekly Playbooks in Inbox</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {resourcesList.map((resource) => (
            <div
              key={resource.id}
              className="glass-card-3d rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-500 group border border-white/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold">
                    {resource.category}
                  </span>
                  <span className="text-muted-foreground/80">{resource.format}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors font-poppins">
                  {resource.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>

                <div className="pt-3 space-y-2.5 border-t border-white/[0.08]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Includes In Blueprint:</p>
                  {resource.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center gap-3">
                <Button
                  onClick={() => handleDownload(resource)}
                  disabled={downloadingId === resource.id}
                  className="btn-3d-gradient flex-1 text-xs font-semibold h-11 text-white"
                >
                  <Download className="w-3.5 h-3.5 mr-2" />
                  {downloadingId === resource.id ? 'Packaging Download...' : 'Download Free Copy'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedResource(resource)}
                  className="h-11 px-4 text-xs font-semibold border-white/20 hover:bg-white/[0.06] hover:border-primary/40 rounded-xl"
                >
                  Preview
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Dialog */}
      <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
        {selectedResource && (
          <DialogContent className="max-w-lg glass-card-3d border border-white/20 bg-slate-950/90 backdrop-blur-2xl">
            <DialogHeader>
              <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                {selectedResource.category}
              </div>
              <DialogTitle className="text-xl font-bold font-poppins text-foreground">
                {selectedResource.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground pt-1">
                {selectedResource.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Framework Elements:
                </h4>
                <ul className="space-y-2.5">
                  {selectedResource.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/30">
                        {i + 1}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => {
                  handleDownload(selectedResource);
                  setSelectedResource(null);
                }}
                className="btn-3d-gradient flex-1 text-xs font-semibold text-white h-11"
              >
                <Download className="w-3.5 h-3.5 mr-2" />
                Download Complete Guide
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default FreeResources;

