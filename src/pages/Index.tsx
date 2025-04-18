import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Basil Consulting"
        description="Transforming data into strategic assets for businesses worldwide. Expert consulting in data infrastructure, analytics, security, and custom solutions."
        canonical="/"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
