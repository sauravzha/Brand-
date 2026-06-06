import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  whyChooseUs: string[];
}

interface ServiceDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: ServiceDetail | null;
}

const ServiceDetailsDialog = ({ open, onOpenChange, service }: ServiceDetailsDialogProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-effect border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-gradient font-poppins">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground pt-2">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Why Choose Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Why Choose Us?</h3>
            <div className="space-y-3">
              {service.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground/90">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 glass-effect p-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">What We Deliver</h3>
            <div className="space-y-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base text-foreground/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsDialog;
