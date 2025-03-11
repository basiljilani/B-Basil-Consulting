
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import BlogList from "@/components/blog/BlogList";
import { SidebarProvider } from "@/components/ui/sidebar";
import BlogSidebar from "@/components/blog/BlogSidebar";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-16 pb-20">
        <Container>
          <div className="flex flex-col mt-8 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Our Blog</h1>
            <p className="text-gray-600 mt-2">
              Insights, updates, and stories from the Basil team
            </p>
          </div>
        </Container>
        
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <BlogSidebar 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <div className="flex-1 bg-white">
              <Container>
                <BlogList 
                  category={activeCategory}
                  searchQuery={searchQuery}
                />
              </Container>
            </div>
          </div>
        </SidebarProvider>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
