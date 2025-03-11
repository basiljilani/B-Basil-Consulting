
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/blog-data";
import { cn } from "@/lib/utils";

interface BlogHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const BlogHeader = ({ 
  activeCategory, 
  onCategoryChange,
  searchQuery,
  onSearchChange
}: BlogHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col mt-8 mb-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Our Blog</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Insights, updates, and stories from the Basil team
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-between">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 py-2 bg-white border-gray-200 rounded-full shadow-sm"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
                activeCategory === category 
                  ? "bg-basil-500 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
