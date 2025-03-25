import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { ChevronRight, Lightbulb, Rocket, LineChart, Code } from "lucide-react";
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
  },
  {
    id: "innovation-labs",
    title: "Innovation Labs",
    description: "Accelerate your startup journey with our end-to-end development and data solutions",
    details: [
      "Rapid MVP development and prototyping",
      "Custom web application development",
      "Interactive data analytics dashboards",
      "Scalable data infrastructure setup",
      "Technical co-founding and advisory"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="harmony-section section-padding">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="We provide comprehensive data consulting services to help you leverage the full potential of your data assets."
          centered
        />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Service Navigation */}
          <div className="lg:w-1/3">
            <motion.div 
              className="bg-gray-50 p-2 rounded-xl" 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg mb-2 transition-all",
                    activeService === service.id
                      ? "bg-white shadow-md border-l-4 border-basil-500" 
                      : "hover:bg-white/50 border-l-4 border-transparent"
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
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
                </motion.button>
              ))}
            </motion.div>
          </div>
          
          {/* Service Details */}
          <motion.div 
            className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    className="p-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-2xl font-semibold text-gradient mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    {service.id === "innovation-labs" ? (
                      <>
                        <motion.div 
                          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <div className="bg-gradient-to-br from-basil-50 to-basil-100 p-5 rounded-lg flex flex-col items-center text-center">
                            <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                              <Rocket className="h-6 w-6 text-basil-500" />
                            </div>
                            <h4 className="font-medium mb-2">Startup Acceleration</h4>
                            <p className="text-sm text-gray-600">From concept to launch, we help startups build and scale their tech solutions rapidly.</p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-basil-50 to-basil-100 p-5 rounded-lg flex flex-col items-center text-center">
                            <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                              <Code className="h-6 w-6 text-basil-500" />
                            </div>
                            <h4 className="font-medium mb-2">Web Applications</h4>
                            <p className="text-sm text-gray-600">Custom web solutions built with modern frameworks and best practices.</p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-basil-50 to-basil-100 p-5 rounded-lg flex flex-col items-center text-center">
                            <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                              <LineChart className="h-6 w-6 text-basil-500" />
                            </div>
                            <h4 className="font-medium mb-2">Data Dashboards</h4>
                            <p className="text-sm text-gray-600">Interactive analytics dashboards that transform raw data into actionable insights.</p>
                          </div>
                          
                          <div className="bg-gradient-to-br from-basil-50 to-basil-100 p-5 rounded-lg flex flex-col items-center text-center">
                            <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                              <Lightbulb className="h-6 w-6 text-basil-500" />
                            </div>
                            <h4 className="font-medium mb-2">Technical Advisory</h4>
                            <p className="text-sm text-gray-600">Strategic guidance on technology choices, architecture, and scaling considerations.</p>
                          </div>
                        </motion.div>
                        
                        <motion.h4 
                          className="font-medium mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          Our Approach:
                        </motion.h4>
                      </>
                    ) : (
                      <motion.h4 
                        className="font-medium mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        Key Offerings:
                      </motion.h4>
                    )}
                    
                    <ul className="space-y-3">
                      {service.details.map((detail, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        >
                          <div className="rounded-full bg-basil-100 p-1 mt-0.5">
                            <ChevronRight className="h-3 w-3 text-basil-600" />
                          </div>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div 
                      className="mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <Link
                        to="/services"
                        className="inline-flex items-center text-basil-500 hover:text-basil-600 font-medium group"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
