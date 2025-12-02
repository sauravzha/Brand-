import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

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
    <article className="group glass-effect rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-slide-in">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-poppins group-hover:text-gradient transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Button */}
        <Link to={`/blog/${slug}`}>
          <Button
            variant="ghost"
            className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent"
          >
            Read Full Article
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
