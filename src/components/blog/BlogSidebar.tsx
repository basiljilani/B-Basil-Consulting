
import { Search } from "lucide-react";
import { categories } from "@/data/blog-data";
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface BlogSidebarProps {
  className?: string;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const BlogSidebar = ({ 
  className, 
  activeCategory = "All", 
  onCategoryChange 
}: BlogSidebarProps) => {
  return (
    <Sidebar className={cn("w-64 border-r border-gray-100 bg-gray-50/50", className)}>
      <SidebarContent className="py-6">
        <div className="px-6 mb-8">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-9 h-9 text-sm bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>
        </div>
        
        <div className="px-4">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 mb-3">
            Categories
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange?.(category)}
                className={cn(
                  "w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors",
                  activeCategory === category 
                    ? "bg-basil-50 text-basil-700 font-medium" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default BlogSidebar;
