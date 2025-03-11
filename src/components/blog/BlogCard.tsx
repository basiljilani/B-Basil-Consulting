
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blog-data";

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
        "hover:shadow-md hover:-translate-y-1",
        featured ? "shadow-sm" : ""
      )}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium px-2.5 py-0.5 bg-basil-50 text-basil-600 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">
              {post.date}
            </span>
          </div>
          
          <h3 className={cn(
            "font-semibold transition-colors group-hover:text-basil-500",
            featured ? "text-xl md:text-2xl" : "text-lg"
          )}>
            {post.title}
          </h3>
          
          {(!featured || (featured && post.excerpt)) && (
            <p className={cn(
              "mt-2 text-muted-foreground line-clamp-2",
              featured ? "text-base" : "text-sm"
            )}>
              {post.excerpt}
            </p>
          )}
          
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium">{post.author}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
