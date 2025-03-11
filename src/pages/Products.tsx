
import { ArrowRight, BarChart3, Database, LineChart, Code, ServerCrash, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const productsData = [
  {
    title: "DataHub",
    icon: <Database className="h-8 w-8" />,
    description: "A unified data management platform that connects, organizes, and optimizes your data assets.",
    features: [
      "Centralized data catalog",
      "Automated data discovery",
      "Data lineage tracking",
      "Quality monitoring",
      "Integration with 50+ data sources"
    ],
    comingSoon: false
  },
  {
    title: "InsightIQ",
    icon: <LineChart className="h-8 w-8" />,
    description: "Advanced analytics dashboard solution with pre-built industry templates and customizable visualizations.",
    features: [
      "Interactive visualizations",
      "Real-time data processing",
      "Cross-platform compatibility",
      "Collaboration features",
      "Embedded analytics options"
    ],
    comingSoon: false
  },
  {
    title: "PredictML",
    icon: <BarChart3 className="h-8 w-8" />,
    description: "No-code machine learning platform that enables business users to build and deploy predictive models.",
    features: [
      "Automated model training",
      "Drag-and-drop interface",
      "Model performance monitoring",
      "Explainable AI features",
      "Integration with business systems"
    ],
    comingSoon: false
  },
  {
    title: "DataGuard",
    icon: <ShieldCheck className="h-8 w-8" />,
    description: "Comprehensive data security and compliance solution for protecting sensitive information.",
    features: [
      "Data encryption",
      "Access control management",
      "Compliance reporting",
      "Threat detection",
      "Privacy controls"
    ],
    comingSoon: true
  },
  {
    title: "StreamFlow",
    icon: <ServerCrash className="h-8 w-8" />,
    description: "Real-time data streaming and processing framework for building event-driven applications.",
    features: [
      "Low-latency processing",
      "Scalable architecture",
      "Built-in connectors",
      "Stream analytics",
      "Fault tolerance"
    ],
    comingSoon: true
  },
  {
    title: "APIForge",
    icon: <Code className="h-8 w-8" />,
    description: "API development platform for creating, testing, and deploying data services across your organization.",
    features: [
      "Auto-generated endpoints",
      "Authentication management",
      "Performance monitoring",
      "Documentation generation",
      "Version control"
    ],
    comingSoon: true
  }
];

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-muted-foreground">
                Powerful, enterprise-grade data solutions designed to accelerate your digital transformation.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Products Display */}
        <section className="py-20">
          <Container>
            <div className="space-y-16">
              {productsData.map((product, index) => (
                <div 
                  key={index} 
                  className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Product Info */}
                    <div className="p-8 md:p-10">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 rounded-lg bg-basil-50 flex items-center justify-center text-basil-500 mr-4">
                          {product.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{product.title}</h3>
                          {product.comingSoon && (
                            <span className="text-xs font-medium px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {product.description}
                      </p>
                      
                      {!product.comingSoon && (
                        <div className="mb-6">
                          <Button asChild className="rounded-full">
                            <Link to="/contact">
                              Request Demo
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    {/* Product Features */}
                    <div className="bg-gray-50 p-8 md:p-10">
                      <h4 className="font-medium mb-5 text-gray-900">Key Features</h4>
                      <ul className="space-y-4">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex">
                            <div className="w-6 h-6 rounded-full border-2 border-basil-200 flex items-center justify-center mr-3 flex-shrink-0">
                              <div className="w-2 h-2 bg-basil-500 rounded-full"></div>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-900 py-16 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-300 mb-8">
                Our team can develop tailored products to meet your specific business requirements.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
