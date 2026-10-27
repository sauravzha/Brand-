import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, author, date, readTime, image, category, slug }: BlogCardProps) => {
  return (
    <article className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all flex flex-col shadow-xs">
      {/* Image with subtle zoom on hover */}
      <Link to={`/blog/${slug}`} className="relative h-48 sm:h-52 overflow-hidden bg-muted block">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-background/80 backdrop-blur-md text-foreground text-xs font-semibold rounded-md border border-border/60">
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Meta Info */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">{author}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <Link to={`/blog/${slug}`}>
            <h3 className="text-lg sm:text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-2 border-t border-border/60">
          <Link
            to={`/blog/${slug}`}
            className="inline-flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
          >
            Read Full Article
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
