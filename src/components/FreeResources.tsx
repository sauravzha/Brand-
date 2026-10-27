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
      // Trigger a clean sample text download or open
      const sampleContent = `# ${resource.title}\nBrandYatra Growth Framework\n\nCategory: ${resource.category}\nFormat: ${resource.format}\n\nSummary:\n${resource.description}\n\nKey Takeaways:\n${resource.highlights.map(h => `- ${h}`).join('\n')}\n\n---\nCreated with care by BrandYatra Digital (https://brandyatra.com)\nNeed personalized growth advisory? Contact us at info@brandyatra.com`;
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
    <section id="resources" className="py-24 sm:py-32 relative bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Open Source Frameworks
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-tight text-foreground">
              Battle-tested playbooks, freely shared.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We publish our internal agency SOPs, spreadsheets, and audit checklists. No gatekeeping, no fake paywalls.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => {
              const newsletter = document.getElementById('newsletter');
              newsletter?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="self-start md:self-auto text-xs font-semibold"
          >
            Get Weekly Playbooks in Inbox
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesList.map((resource) => (
            <div
              key={resource.id}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between hover:border-primary/40 transition-all shadow-xs group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-md bg-muted text-foreground font-semibold">
                    {resource.category}
                  </span>
                  <span>{resource.format}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-border/60">
                  <p className="text-xs font-semibold text-foreground/80">Includes:</p>
                  {resource.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 flex items-center gap-3">
                <Button
                  onClick={() => handleDownload(resource)}
                  disabled={downloadingId === resource.id}
                  className="flex-1 text-xs font-semibold h-10"
                >
                  <Download className="w-3.5 h-3.5 mr-2" />
                  {downloadingId === resource.id ? 'Preparing Download...' : 'Download Free Copy'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedResource(resource)}
                  className="h-10 px-3 text-xs"
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
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
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
              <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Key Framework Elements:
                </h4>
                <ul className="space-y-2">
                  {selectedResource.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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
                className="flex-1 text-xs font-semibold"
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
