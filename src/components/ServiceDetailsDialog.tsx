import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Sparkles, Layers, ArrowRight } from "lucide-react";
import { ServiceDetail } from "@/data/serviceDetails";

interface ServiceDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: ServiceDetail | null;
}

const ServiceDetailsDialog = ({ open, onOpenChange, service }: ServiceDetailsDialogProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-card-3d border border-white/20 bg-slate-950/95 backdrop-blur-3xl text-foreground">
        <DialogHeader>
          <div className="glass-pill-3d inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>BrandYatra Specialization</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold font-poppins text-foreground">
            {service.title}
          </DialogTitle>
          <p className="text-sm sm:text-base font-medium text-gradient">
            {service.tagline}
          </p>
          <DialogDescription className="text-sm text-muted-foreground pt-1 leading-relaxed">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-3">
          {/* Deliverables / Scope Section */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div className="glass-card-3d p-5 rounded-2xl border border-white/10">
              <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2 font-poppins">
                <Layers className="w-4 h-4 text-primary" />
                <span>Core Deliverables & Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90 py-1">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why Choose Us Section */}
          <div>
            <h3 className="text-base font-bold mb-3 text-foreground font-poppins">
              Why Partner With BrandYatra?
            </h3>
            <div className="space-y-2.5">
              {service.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-base font-bold mb-3 text-foreground font-poppins">
              Key Strategic Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2.5 glass-card-3d p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Ready to scale with this service? Let's discuss your project.
            </p>
            <button
              onClick={() => {
                onOpenChange(false);
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-3d-gradient w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-white inline-flex items-center justify-center gap-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsDialog;
