import { ArrowRight, BarChart3, Database, LineChart, PieChart, Server, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const servicesData = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Architecture Design",
    description: "Build scalable, efficient data infrastructures that can grow with your business and support advanced analytics capabilities.",
    features: [
      "Database system selection and optimization",
      "Data warehouse and lake implementation",
      "ETL/ELT pipeline development",
      "Cloud migration strategies",
      "Scalability planning and execution"
    ]
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Business Intelligence",
    description: "Transform your raw data into actionable insights with custom dashboards and visualizations that drive decision-making.",
    features: [
      "Interactive dashboard creation",
      "KPI definition and tracking systems",
      "Custom report development",
      "Self-service analytics enablement",
      "Data visualization optimization"
    ]
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Machine Learning Implementation",
    description: "Leverage AI and machine learning to uncover patterns, make predictions, and automate complex decision processes.",
    features: [
      "Custom ML model development",
      "Predictive analytics solutions",
      "Natural language processing",
      "Computer vision applications",
      "Model deployment and monitoring"
    ]
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Data Integration",
    description: "Connect disparate data sources to create a unified view of your business information across all systems.",
    features: [
      "API development and integration",
      "Legacy system connectivity",
      "Real-time data streaming",
      "Master data management",
      "Data quality assurance"
    ]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Data Security & Compliance",
    description: "Protect your valuable data assets while ensuring compliance with industry regulations and standards.",
    features: [
      "Security assessment and implementation",
      "Compliance framework development",
      "Data privacy solutions",
      "Access control systems",
      "Security monitoring and incident response"
    ]
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Go beyond basic reporting with sophisticated analytics techniques that reveal deeper insights.",
    features: [
      "Statistical analysis and modeling",
      "Prescriptive analytics solutions",
      "Time series analysis and forecasting",
      "Anomaly detection systems",
      "Network and graph analytics"
    ]
  }
];

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Services"
        description="Explore Basil Consulting's comprehensive data services including data infrastructure, analytics & insights, security & compliance, and custom solutions."
        keywords="data consulting services, data infrastructure, analytics insights, security compliance, custom data solutions"
        canonical="/services"
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive data solutions tailored to transform your business through
                innovation, efficiency, and strategic insights.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Services Grid */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-basil-50 flex items-center justify-center mb-5 text-basil-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-5">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-basil-500 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* CTA Section */}
        <section className="bg-basil-500 py-16 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Data Strategy?
              </h2>
              <p className="text-basil-50 mb-8">
                Contact us today to discuss how our services can help you achieve your business goals.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <a href="mailto:info@basilconsulting.com">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
