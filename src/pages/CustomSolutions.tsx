
import { ArrowRight, CheckCircle2, Code, Database, LineChart, Server, Shield, UserCog } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const caseStudies = [
  {
    name: "HiFoodo",
    logo: "/lovable-uploads/fa66ce39-8dda-4305-81d7-181ca35ab9e6.png",
    description: "A revolutionary food delivery platform that uses AI to optimize delivery routes and minimize food waste.",
    industry: "Food Tech",
    technologies: ["AI/ML", "Mobile Apps", "Cloud Infrastructure", "Real-time Analytics"],
    outcomes: [
      "Reduced delivery times by 28%",
      "Decreased food waste by 35%",
      "Improved customer satisfaction by 42%",
      "Expanded to 18 major cities in 12 months"
    ],
    primaryColor: "bg-basil-500",
    quote: "Basil Consulting transformed our delivery logistics with their custom AI solution, allowing us to scale faster than we ever thought possible."
  },
  {
    name: "FinTech Pulse Network",
    logo: "/lovable-uploads/fa66ce39-8dda-4305-81d7-181ca35ab9e6.png",
    description: "A secure, compliant financial transaction network that enables real-time payments and fraud detection for financial institutions.",
    industry: "Financial Services",
    technologies: ["Blockchain", "AI Fraud Detection", "Secure APIs", "Compliance Automation"],
    outcomes: [
      "Processing $2.8B in daily transactions",
      "99.999% uptime reliability",
      "Fraud detection accuracy of 97.3%",
      "Compliance with regulations across 24 countries"
    ],
    primaryColor: "bg-blue-600",
    quote: "The scalable architecture Basil designed has allowed us to grow from a startup to processing billions in transactions without a single major outage."
  }
];

const capabilities = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Custom Software Development",
    description: "End-to-end development of bespoke software solutions tailored to your unique business requirements."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Infrastructure",
    description: "Scalable, secure data platforms that connect, organize, and optimize your critical data assets."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "AI & Analytics",
    description: "Advanced analytics and machine learning solutions that turn data into actionable business intelligence."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & Compliance",
    description: "Robust security frameworks and compliance automation for regulated industries."
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Cloud Architecture",
    description: "Cloud-native application design and migration services optimized for scalability and performance."
  },
  {
    icon: <UserCog className="h-6 w-6" />,
    title: "Digital Transformation",
    description: "Strategic consulting and implementation to modernize your technology stack and processes."
  }
];

const CustomSolutions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-gray-50 py-16 md:py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Solutions</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We build tailored technology solutions that solve your most complex business challenges.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>
        
        {/* Featured Case Studies */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading 
              title="Success Stories" 
              subtitle="Explore how we've helped businesses across industries with custom technology solutions that drive real results."
              centered
            />
            
            <div className="space-y-16 mt-12">
              {caseStudies.map((caseStudy, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-10">
                      <div className="flex items-center mb-6">
                        <div className={`h-12 w-12 rounded-lg ${caseStudy.primaryColor} flex items-center justify-center text-white mr-4`}>
                          {caseStudy.name === "HiFoodo" ? 
                            <Server className="h-6 w-6" /> : 
                            <Shield className="h-6 w-6" />
                          }
                        </div>
                        <h3 className="text-2xl font-bold">{caseStudy.name}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {caseStudy.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">INDUSTRY</h4>
                        <p>{caseStudy.industry}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, i) => (
                            <span key={i} className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button asChild variant="outline" className="rounded-full">
                          <Link to="/contact">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    <div className={`${caseStudy.primaryColor} bg-opacity-10 p-8 md:p-10`}>
                      <blockquote className="italic text-gray-700 mb-8 border-l-4 border-basil-500 pl-4 py-2">
                        "{caseStudy.quote}"
                      </blockquote>
                      
                      <h4 className="text-sm font-semibold text-gray-800 mb-4">KEY OUTCOMES</h4>
                      <ul className="space-y-3">
                        {caseStudy.outcomes.map((outcome, i) => (
                          <li key={i} className="flex">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Capabilities Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <SectionHeading 
              title="Our Capabilities" 
              subtitle="We combine deep technical expertise with industry knowledge to deliver solutions that make a measurable impact."
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-basil-50 flex items-center justify-center text-basil-500 mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to build something amazing?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's talk about your business challenges and how a custom solution can help you overcome them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/contact">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-gray-900">
                  <Link to="/services">
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomSolutions;
