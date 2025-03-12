
import { ArrowRight, Award, BarChart2, LineChart, TrendingUp } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content column - 7 columns wide */}
          <div className="lg:col-span-6 text-left space-y-6">            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="relative">
                Turning Data 
                <span className="absolute bottom-2 left-0 w-full h-3 bg-basil-500/20 -z-10 animate-[pulse_4s_ease-in-out_infinite]"></span>
              </span>
              <br />into<br /> 
              <span className="relative">
                Business
                <span className="absolute bottom-2 left-0 w-full h-3 bg-basil-500/20 -z-10 animate-[pulse_4s_ease-in-out_infinite]"></span>
              </span>
              <br />
              <span className="relative">
                Advantage
                <span className="absolute bottom-2 left-0 w-full h-3 bg-basil-500/20 -z-10 animate-[pulse_4s_ease-in-out_infinite]"></span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Leverage your data's full potential with our expert consulting services. We turn information into insights that drive growth.
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
          
          {/* Right stats column - 5 columns wide */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* AI Impact Card */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="h-6 w-6 text-basil-500" />
                  <h2 className="text-lg font-semibold">AI Impact</h2>
                </div>
                
                <div className="space-y-2">
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-basil-500 w-4/5 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-3xl font-bold text-gray-900">$13T</p>
                    <p className="text-sm text-basil-600 font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      By 2030
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Projected global economic value added by AI
                  </p>
                </div>
              </div>
              
              {/* Fintech Growth Card */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <LineChart className="h-6 w-6 text-basil-500" />
                  <h2 className="text-lg font-semibold">Fintech Growth</h2>
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div 
                        key={i} 
                        className={`h-6 w-full rounded bg-basil-${300 + (i * 50)} ${i === 7 ? "" : "opacity-60"}`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-3xl font-bold text-gray-900">$1.8T</p>
                    <p className="text-sm text-basil-600 font-medium">
                      Revenue by 2025
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Global fintech industry projected revenue
                  </p>
                </div>
              </div>
              
              {/* Digital Transformation ROI */}
              <div className="md:col-span-2 bg-white rounded-xl shadow-md border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-basil-500" />
                  <h2 className="text-lg font-semibold">Digital Transformation ROI</h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Digitally mature companies outperform
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-basil-600">3x</p>
                    <p className="text-sm text-gray-600">Revenue</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-basil-600">4.1x</p>
                    <p className="text-sm text-gray-600">Profit</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-basil-600">5.8x</p>
                    <p className="text-sm text-gray-600">Growth</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sources section */}
            <div className="mt-4 text-right">
              <div className="inline-block bg-basil-600 text-white text-xs px-3 py-1 rounded">
                Sources: McKinsey, Goldman Sachs 2024
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
