
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "architecture",
    title: "Data Architecture Design",
    description: "Create scalable data infrastructures tailored to your specific business needs",
    details: [
      "Database system selection and implementation",
      "Data warehouse and lake design",
      "ETL/ELT pipeline development",
      "Cloud migration strategies",
      "Scalability planning"
    ]
  },
  {
    id: "intelligence",
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with powerful BI tools and dashboards",
    details: [
      "Interactive dashboard creation",
      "KPI definition and tracking",
      "Custom report development",
      "Data visualization best practices",
      "Self-service analytics enablement"
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning Implementation",
    description: "Harness the power of AI to unlock predictive capabilities within your organization",
    details: [
      "Custom model development",
      "Predictive analytics solutions",
      "ML model deployment and monitoring",
      "Computer vision applications",
      "Natural language processing solutions"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="We provide comprehensive data consulting services to help you leverage the full potential of your data assets."
          centered
        />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Service Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-1 rounded-xl">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg mb-1 transition-all",
                    activeService === service.id
                      ? "bg-white shadow-md" 
                      : "hover:bg-white/50"
                  )}
                >
                  <h3 className={cn(
                    "text-lg font-medium",
                    activeService === service.id && "text-basil-500"
                  )}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Details */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {services.map((service) => (
              <div
                key={service.id}
                className={cn(
                  "p-8",
                  activeService === service.id ? "block" : "hidden"
                )}
              >
                <h3 className="text-2xl font-semibold text-gradient mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <h4 className="font-medium mb-4">Key Offerings:</h4>
                <ul className="space-y-3">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-basil-100 p-1 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-basil-600" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-basil-500 hover:text-basil-600 font-medium"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
