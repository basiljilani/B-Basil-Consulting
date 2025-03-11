
import { useState } from "react";
import { blogPosts } from "@/data/blog-data";
import BlogCard from "@/components/blog/BlogCard";

const BlogList = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const displayedPosts = blogPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < blogPosts.length;
  
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <div className="py-8">
      {/* Featured Post */}
      {displayedPosts.length > 0 && (
        <div className="mb-16">
          <BlogCard post={displayedPosts[0]} featured />
        </div>
      )}
      
      {/* Post Grid */}
      {displayedPosts.length > 1 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.slice(1).map((post, index) => (
              <div key={post.id} className="transition-all animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
          
          {hasMorePosts && (
            <div className="mt-16 text-center">
              <button 
                onClick={loadMorePosts}
                className="rounded-full px-8 py-3 text-base font-medium border border-basil-200 text-basil-700 hover:bg-basil-50 hover:text-basil-800 hover:border-basil-300 transition-colors"
              >
                Load More Articles
              </button>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default BlogList;
