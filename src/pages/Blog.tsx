
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import BlogList from "@/components/blog/BlogList";
import SectionHeading from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-28">
        {/* Header */}
        <section className="bg-gradient-to-r from-basil-50 to-white py-20 md:py-28">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-gradient">Insights & Expertise</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stay ahead with our latest thoughts on data science, analytics, and emerging technology trends
                that are reshaping industries.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <a href="#featured" className="group inline-flex items-center text-basil-600 font-medium">
                  Explore articles 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Blog List Section */}
        <section id="featured" className="py-20 md:py-28">
          <Container>
            <SectionHeading 
              title="Latest Articles" 
              subtitle="Discover our most recent insights, case studies, and thought leadership content"
              centered={true}
              className="mb-16"
            />
            <BlogList />
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
