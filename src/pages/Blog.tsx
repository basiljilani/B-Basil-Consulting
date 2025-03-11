
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import BlogList from "@/components/blog/BlogList";
import SectionHeading from "@/components/ui/section-heading";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-28">
        {/* Header */}
        <section className="bg-gray-50 py-16 md:py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
              <p className="text-lg text-muted-foreground">
                Insights, thoughts, and expert advice on data science, analytics, and technology trends.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Blog List Section */}
        <section className="py-16 md:py-20">
          <Container>
            <BlogList />
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
