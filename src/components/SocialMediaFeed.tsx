import { Instagram, Heart, MessageCircle, ArrowUpRight, Play, Eye, Sparkles } from 'lucide-react';
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
    <section className="py-24 sm:py-36 relative overflow-hidden">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/15 via-purple-600/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-[-5%] w-[450px] h-[450px] bg-gradient-to-br from-indigo-600/15 via-cyan-600/10 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="glass-pill-3d inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              <Instagram className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span className="text-foreground/90">Daily Live Growth Sprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins tracking-tight text-foreground">
              Real-time growth notes & <span className="text-gradient">ad teardowns</span>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              We document our testing wins, failed ad hooks, and behind-the-scenes strategy daily on Instagram.
            </p>
          </div>

          <a
            href="https://www.instagram.com/brandyatraa?cplk=anFkdWRodnE3ZG95"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto"
          >
            <button className="btn-3d-gradient inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-semibold text-white group">
              <Instagram className="w-4 h-4 text-pink-300" />
              <span>Follow @brandyatraa</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </a>
        </div>

        {/* Feed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-3d group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Preview with Overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3">
                  <span className="glass-pill-3d px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                    {post.badge}
                  </span>
                </div>

                {/* Metrics bottom-left */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs">
                  <span className="flex items-center gap-1 font-semibold text-xs drop-shadow-md">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" /> {post.viewsOrLikes}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-xs drop-shadow-md">
                    <MessageCircle className="w-3.5 h-3.5 text-pink-400" /> {post.comments}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors line-clamp-2 font-poppins">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  <span>View Breakdown on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
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
