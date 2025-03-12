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

const stats = [
  {
    value: "89%",
    label: "of companies investing in data infrastructure report improved decision making",
    icon: <ChartBar className="h-6 w-6" />,
    source: "Gartner Data & Analytics Survey 2023"
  },
  {
    value: "2.6x",
    label: "faster time-to-market for companies with mature data infrastructure",
    icon: <Timer className="h-6 w-6" />,
    source: "McKinsey Digital Transformation Report"
  },
  {
    value: "45%",
    label: "reduction in operational costs through optimized data infrastructure",
    icon: <TrendingDown className="h-6 w-6" />,
    source: "Deloitte Digital Transformation Study"
  },
  {
    value: "94%",
    label: "of enterprises cite data infrastructure as critical for AI/ML initiatives",
    icon: <Brain className="h-6 w-6" />,
    source: "IDC Global Data Management Survey"
  }
];

const DataInfrastructure = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Data Infrastructure Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Build the foundation for your data-driven business with scalable, reliable, and high-performance infrastructure solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">
                      Discuss Your Requirements
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
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
        <section className="py-16 md:py-24 bg-black">
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
        
        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-black text-white">
          <Container>
            <SectionHeading 
              title="Data Infrastructure by the Numbers" 
              subtitle="Current industry statistics highlighting the importance of robust data infrastructure"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-basil-500/20 via-basil-500/10 to-transparent rounded-xl blur-xl transition-opacity group-hover:opacity-75" />
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl h-full transition-all duration-300 hover:border-basil-500/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-basil-500 to-basil-600 flex items-center justify-center text-white">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-2">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      Source: {stat.source}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Charts Section */}
        <DataCharts />
        
        {/* Benefits Section - Replaced with BusinessBenefits component */}
        <BusinessBenefits />
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to build your optimal data infrastructure?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
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
                <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-blue-600">
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
