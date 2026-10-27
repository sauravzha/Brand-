import { Instagram, Heart, MessageCircle, ArrowUpRight, Play, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialPost {
  id: number;
  type: 'video' | 'carousel' | 'breakdown';
  image: string;
  badge: string;
  viewsOrLikes: string;
  comments: string;
  title: string;
  snippet: string;
  link: string;
}

const socialPosts: SocialPost[] = [
  {
    id: 1,
    type: 'breakdown',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop',
    badge: 'Ad Teardown',
    viewsOrLikes: '24.2K views',
    comments: '184 comments',
    title: 'Why 90% of Meta Video Ads fail in the first 3 seconds',
    snippet: 'We analyzed 150 DTC ad hooks. Here are the 3 visual patterns that consistently hold thumb-stop rate above 42%.',
    link: 'https://www.instagram.com/brandyatraa?cplk=anFkdWRodnE3ZG95',
  },
  {
    id: 2,
    type: 'carousel',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop',
    badge: 'Case Study',
    viewsOrLikes: '18.6K views',
    comments: '96 comments',
    title: 'From ₹1.8L to ₹12.5L/month on Google Search',
    snippet: 'Exact negative keyword and single-theme ad group structure we used for our SaaS client last quarter.',
    link: 'https://www.instagram.com/brandyatraa?cplk=anFkdWRodnE3ZG95',
  },
  {
    id: 3,
    type: 'video',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop',
    badge: 'Agency Culture',
    viewsOrLikes: '31.5K views',
    comments: '230 comments',
    title: 'Behind the Sprint: 48-Hour Creative Testing',
    snippet: 'How our creative strategists and motion editors ship 20 new ad variations every Monday without burning out.',
    link: 'https://www.instagram.com/brandyatraa?cplk=anFkdWRodnE3ZG95',
  },
  {
    id: 4,
    type: 'carousel',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop',
    badge: 'Growth Framework',
    viewsOrLikes: '42.1K views',
    comments: '312 comments',
    title: 'The Modern Marketing Tech Stack for 2026',
    snippet: 'The 7 software tools we mandate across all client accounts for attribution, creative tracking, and CRM routing.',
    link: 'https://www.instagram.com/brandyatraa?cplk=anFkdWRodnE3ZG95',
  },
];

const SocialMediaFeed = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
              <Instagram className="w-3.5 h-3.5" />
              Follow Our Daily Sprints
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-tight text-foreground">
              Real-time growth notes & campaign breakdowns.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We document our testing wins, failed ad hooks, and behind-the-scenes strategy daily on Instagram and LinkedIn.
            </p>
          </div>

          <a
            href="https://www.instagram.com/brandyatraa?cplk=anFkdWRodnE3ZG95"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto"
          >
            <Button variant="outline" className="text-xs font-semibold flex items-center gap-2">
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>Follow @brandyatraa</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Feed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all flex flex-col shadow-xs"
            >
              {/* Image Preview with Overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white">
                    {post.badge}
                  </span>
                </div>

                {/* Metrics bottom-left */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs">
                  <span className="flex items-center gap-1 font-medium">
                    <Eye className="w-3.5 h-3.5" /> {post.viewsOrLikes}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  <span>View on Instagram</span>
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;
