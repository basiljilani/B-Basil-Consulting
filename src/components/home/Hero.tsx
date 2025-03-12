
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content column */}
          <div className="text-left">            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Turning Data into Business Advantage
            </h1>
            
            <p className="mt-6 text-lg text-gray-600">
              Leverage your data's full potential with our expert consulting services. 
              We turn information into insights that drive growth.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
              >
                Explore Our Solutions
              </Button>
            </div>
          </div>
          
          {/* Right stats column */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Key Industry Metrics</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded border">
                <h3 className="font-semibold">AI Impact</h3>
                <p className="text-2xl font-bold mt-2">$13T</p>
                <p className="text-sm text-gray-600">Projected global economic value by 2030</p>
              </div>
              
              <div className="p-4 bg-white rounded border">
                <h3 className="font-semibold">Fintech Growth</h3>
                <p className="text-2xl font-bold mt-2">$1.8T</p>
                <p className="text-sm text-gray-600">Global fintech industry revenue by 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
