
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/container";

const BlogHero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-basil-50 text-basil-700 rounded-full border border-basil-100">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Insights & Perspectives</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Data Insights for <span className="text-basil-600">Forward-Thinking</span> Businesses
            </h1>
            
            <p className="text-lg text-gray-600">
              Explore our latest insights, case studies, and expert advice on data infrastructure, 
              analytics, and strategic data management.
            </p>
            
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center text-basil-600 font-medium hover:text-basil-700">
                Contact our experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-basil-100 to-basil-50 p-6 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Data analytics dashboard" 
                className="w-full h-full object-cover rounded-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogHero;
