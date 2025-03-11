
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blog-data";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

const BlogCard = ({ post, featured = false, className }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className={cn(
        "block group",
        className
      )}
    >
      <div className={cn(
        "bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 h-full",
        "hover:shadow-lg hover:-translate-y-1",
        featured ? "shadow-md" : "",
        featured ? "flex flex-col md:flex-row" : ""
      )}>
        {/* Color Band */}
        <div className={cn(
          "h-2 bg-gradient-to-r from-basil-400 to-basil-500",
          featured ? "w-full md:w-2 md:h-auto" : ""
        )} />
        
        <div className={cn(
          "p-7",
          featured ? "flex-1" : ""
        )}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold px-3 py-1 bg-basil-50 text-basil-600 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">
              {post.date}
            </span>
          </div>
          
          <h3 className={cn(
            "font-bold transition-colors group-hover:text-basil-500 tracking-tight",
            featured ? "text-2xl md:text-3xl mb-4" : "text-xl mb-3"
          )}>
            {post.title}
          </h3>
          
          {(!featured || (featured && post.excerpt)) && (
            <p className={cn(
              "text-muted-foreground line-clamp-2 mb-5",
              featured ? "text-base md:text-lg" : "text-sm"
            )}>
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <span className="font-semibold text-gray-800">{post.author}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>
            
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-basil-500">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
