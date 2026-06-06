import { motion } from 'framer-motion';
import { Download, FileText, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const resources = [
  {
    title: 'Digital Marketing Starter Guide',
    description: 'Complete guide to getting started with digital marketing for startups',
    type: 'PDF Guide',
    icon: BookOpen,
    color: 'from-primary to-pink-500',
    downloadUrl: '#'
  },
  {
    title: 'Social Media Content Calendar Template',
    description: 'Ready-to-use monthly content calendar template for all platforms',
    type: 'Template',
    icon: FileText,
    color: 'from-pink-500 to-orange-500',
    downloadUrl: '#'
  },
  {
    title: 'SEO Checklist for Beginners',
    description: 'Comprehensive checklist to optimize your website for search engines',
    type: 'Checklist',
    icon: CheckCircle,
    color: 'from-orange-500 to-accent',
    downloadUrl: '#'
  },
  {
    title: 'Instagram Growth Playbook',
    description: 'Proven strategies to grow your Instagram following organically',
    type: 'Playbook',
    icon: Download,
    color: 'from-accent to-primary',
    downloadUrl: '#'
  }
];

const FreeResources = () => {
  const handleDownload = (resource: typeof resources[0]) => {
    // In a real implementation, this would trigger a download
    // For now, it could open a modal to capture email before download
    console.log('Download:', resource.title);
    // You can integrate with email capture service here
  };

  return (
    <section id="resources" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
            Free <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Download our free guides, templates, and checklists to kickstart your digital marketing journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform duration-300 space-y-4"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs font-semibold text-primary mb-2">
                  {resource.type}
                </div>
                <h3 className="text-lg font-bold font-poppins">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
                <Button
                  onClick={() => handleDownload(resource)}
                  variant="outline"
                  className="w-full mt-4 border-primary/50 hover:bg-primary/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want more resources? Subscribe to our newsletter for weekly tips and updates!
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('newsletter');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-primary via-pink-500 to-orange-500"
          >
            Subscribe Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeResources;

