
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, categories } from "@/data/blog-data";

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;
  
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-12 space-y-6 max-w-3xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for articles, topics, or categories..."
            className="pl-10 h-12 text-base rounded-full bg-gray-50 border-gray-200 focus:border-basil-300 focus:ring focus:ring-basil-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-2 px-2 justify-center flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm whitespace-nowrap transition-colors font-medium",
                category === activeCategory
                  ? "bg-basil-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Post */}
      {displayedPosts.length > 0 && (
        <div className="mb-16 transition-all animate-fade-in-up">
          <BlogCard post={displayedPosts[0]} featured />
        </div>
      )}
      
      {/* Post Grid */}
      {displayedPosts.length > 1 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.slice(1).map((post, index) => (
              <div key={post.id} className={`transition-all animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMorePosts && (
            <div className="mt-16 text-center">
              <Button 
                variant="outline" 
                onClick={loadMorePosts}
                className="rounded-full px-8 py-6 text-base font-medium border-basil-200 text-basil-700 hover:bg-basil-50 hover:text-basil-800 hover:border-basil-300"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </>
      ) : displayedPosts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-medium">No articles found</h3>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-6 rounded-full"
          >
            Reset Filters
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default BlogList;
