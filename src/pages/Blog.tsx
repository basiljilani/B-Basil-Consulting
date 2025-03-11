
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import BlogList from "@/components/blog/BlogList";
import { SidebarProvider } from "@/components/ui/sidebar";
import BlogSidebar from "@/components/blog/BlogSidebar";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <BlogSidebar />
            <div className="flex-1">
              <Container>
                <BlogList />
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
