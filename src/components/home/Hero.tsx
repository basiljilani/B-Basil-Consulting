
import { ArrowRight, Award, BarChart2, Bookmark } from "lucide-react";
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content column */}
          <div className="text-left space-y-6">            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-basil-800 bg-clip-text text-transparent">
              Turning Data into Business Advantage
            </h1>
            
            <p className="text-lg text-gray-600">
              Leverage your data's full potential with our expert consulting services. 
              We turn information into insights that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-basil-600 hover:bg-basil-700">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
                className="border-basil-600 text-basil-600 hover:bg-basil-50"
              >
                Explore Our Solutions
              </Button>
            </div>
          </div>
          
          {/* Right stats column */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-basil-500 to-basil-600 flex items-center justify-center text-white">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Industry Impact</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900">AI Market Growth</h3>
                  <p className="text-3xl font-bold mt-2 text-basil-600">$1.5T</p>
                  <p className="text-sm text-gray-600">Expected market size by 2030</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900">Data Analytics ROI</h3>
                  <p className="text-3xl font-bold mt-2 text-basil-600">287%</p>
                  <p className="text-sm text-gray-600">Average return on investment</p>
                </div>
              </div>

              {/* Sources section */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  <Award className="h-4 w-4 text-basil-500" />
                  <h4 className="text-sm font-medium text-gray-900">Trusted Sources</h4>
                </div>
                
                <div className="grid gap-2">
                  <div className="flex items-start gap-2">
                    <Bookmark className="h-3 w-3 text-basil-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">Goldman Sachs Research</p>
                      <p className="text-xs text-gray-500">Global Investment Research, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bookmark className="h-3 w-3 text-basil-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">Gartner Analysis</p>
                      <p className="text-xs text-gray-500">Market Research Report, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
