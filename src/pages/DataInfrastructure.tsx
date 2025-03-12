import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  Server, 
  Cloud, 
  HardDrive, 
  Network,
  ChartBar,
  Timer,
  TrendingDown,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import DataCharts from "@/components/data-infrastructure/DataCharts";
import HeroCard from "@/components/data-infrastructure/HeroCard";
import BusinessBenefits from "@/components/data-infrastructure/BusinessBenefits";

const technologies = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Modern Database Systems",
    description: "Advanced scalable database solutions optimized for your specific workloads."
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Data Warehouse Architecture",
    description: "Enterprise-grade data warehousing designed for analytics and business intelligence."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud-Native Infrastructure",
    description: "Leverage the full potential of cloud platforms with optimized infrastructure."
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    title: "Data Lakes & Storage",
    description: "Cost-effective solutions for storing and processing vast amounts of structured and unstructured data."
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Data Integration Pipelines",
    description: "Seamless ETL/ELT pipelines connecting all your data sources and destinations."
  }
];

const DataInfrastructure = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section - Adjusted to fix navbar overlap */}
        <section className="bg-gradient-to-b from-black to-gray-900 text-white py-12 md:py-16 mt-4 relative z-0">
          <Container>
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Data Infrastructure <span className="text-basil-500">Solutions</span>
                </h1>
                <p className="text-lg text-gray-300 mb-6 max-w-lg">
                  Build the foundation for your data-driven business with scalable, reliable, and high-performance infrastructure solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">
                      Discuss Your Requirements
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full bg-white text-gray-900 border-white hover:bg-transparent hover:text-white">
                    <Link to="/services">
                      Explore All Services
                    </Link>
                  </Button>
                </div>
              </div>
              
              <HeroCard />
            </div>
          </Container>
        </section>
        
        {/* Technologies Section */}
        <section className="py-16 md:py-20 bg-black">
          <Container>
            <SectionHeading 
              title="Core Technologies" 
              subtitle="We leverage the latest data infrastructure technologies to build systems that scale with your business needs." 
              centered
              className="text-white"
            />
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-basil-500/20 via-basil-500/10 to-transparent rounded-2xl blur-xl transition-opacity group-hover:opacity-75" />
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full transition-all duration-300" >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-basil-500 to-basil-600 flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-basil-500 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {tech.description}
                    </p>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-basil-500 to-basil-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
        
        {/* Business Benefits Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-basil-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-basil-500/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="Business Benefits of Robust Data Infrastructure" 
                subtitle="Discover how our data infrastructure solutions directly impact your business performance and growth"
                centered
                withLine
                className="text-white mb-16"
              />
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  icon: <ChartBar className="h-8 w-8" />,
                  title: "Enhanced Decision Making",
                  description: "Transform raw data into actionable insights that drive confident, data-backed business decisions with real-time analytics and reporting capabilities.",
                  stats: "89% of companies report improved strategic outcomes",
                  source: "Harvard Business Review"
                },
                {
                  icon: <Timer className="h-8 w-8" />,
                  title: "Accelerated Time-to-Market",
                  description: "Streamline product development cycles with rapid data access, testing, and validation. Deliver innovations to market faster than competitors.",
                  stats: "2.6× faster product iterations on average",
                  source: "McKinsey Digital"
                },
                {
                  icon: <TrendingDown className="h-8 w-8" />,
                  title: "Cost Optimization",
                  description: "Eliminate redundancies, optimize storage costs, and automate routine data operations to significantly reduce operational expenses.",
                  stats: "45% reduction in data management costs",
                  source: "Deloitte Insights"
                },
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: "AI/ML Foundation",
                  description: "Build the essential foundation for advanced AI and machine learning initiatives with clean, organized, and accessible data infrastructure.",
                  stats: "94% of enterprises cite this as critical for AI success",
                  source: "MIT Technology Review"
                },
                {
                  icon: <Network className="h-8 w-8" />,
                  title: "Seamless Scalability",
                  description: "Adapt to changing business needs with infrastructure that scales effortlessly, eliminating growth bottlenecks and performance degradation.",
                  stats: "67% improvement in scaling capabilities",
                  source: "Gartner Research"
                },
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "Enhanced Security & Compliance",
                  description: "Protect valuable business data with enterprise-grade security measures while maintaining regulatory compliance across jurisdictions.",
                  stats: "78% reduction in data breach risk",
                  source: "Cybersecurity Ventures"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="h-full rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-basil-500/0 via-basil-500/0 to-basil-500/0 group-hover:from-basil-500/10 group-hover:via-basil-500/5 group-hover:to-basil-500/0 transition-all duration-700 ease-in-out"></div>
                    
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-basil-600 to-basil-500 mb-6 shadow-lg shadow-basil-500/20">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-basil-300 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {benefit.description}
                    </p>
                    
                    <div className="pt-4 mt-auto border-t border-white/10">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-basil-400">{benefit.stats}</span>
                        <div className="flex items-center gap-1 mt-1">
                          <CheckCircle2 className="h-4 w-4 text-basil-500" />
                          <span className="text-sm text-gray-400">Source: {benefit.source}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Charts Section */}
        <DataCharts />
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to build your optimal data infrastructure?
              </h2>
              <p className="text-white mb-8 text-lg">
                Let's discuss how we can design and implement a data infrastructure 
                solution that meets your specific business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-white text-gray-900 border-white hover:bg-transparent hover:text-white">
                  <Link to="/services">
                    Explore More Services
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

export default DataInfrastructure;
