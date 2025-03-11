
import { useState } from "react";
import { blogPosts } from "@/data/blog-data";
import BlogCard from "@/components/blog/BlogCard";

interface BlogListProps {
  category?: string;
  searchQuery?: string;
}

const BlogList = ({ category = "All", searchQuery = "" }: BlogListProps) => {
  const [visiblePosts, setVisiblePosts] = useState(7);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  // If no posts match the filters
  if (displayedPosts.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    );
  }
  
  return (
    <div className="py-4">
      {/* Featured Post */}
      {displayedPosts.length > 0 && (
        <div className="mb-12">
          <BlogCard post={displayedPosts[0]} featured />
        </div>
      )}
      
      {/* Post Grid */}
      {displayedPosts.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.slice(1).map((post, index) => (
            <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      )}
      
      {/* Load More Button */}
      {hasMorePosts && (
        <div className="mt-16 text-center">
          <button 
            onClick={() => setVisiblePosts((prev) => prev + 6)}
            className="rounded-full px-8 py-3 text-base font-medium bg-white border border-basil-200 text-basil-700 hover:bg-basil-50 hover:text-basil-800 hover:border-basil-300 transition-colors shadow-sm"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
