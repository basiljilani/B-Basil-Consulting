
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogHero from "@/components/blog/BlogHero";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <BlogHero />
      <main className="flex-grow py-16">
        <Container>
          <BlogHeader 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <BlogList 
            category={activeCategory}
            searchQuery={searchQuery}
          />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
