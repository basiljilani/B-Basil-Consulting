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

const benefits = [
  {
    title: "Scalability",
    description: "Infrastructure that grows with your business needs, from startup to enterprise scale."
  },
  {
    title: "Performance",
    description: "Optimized systems delivering high-performance data processing capabilities."
  },
  {
    title: "Cost Efficiency",
    description: "Strategic infrastructure design that maximizes ROI while minimizing operational costs."
  },
  {
    title: "Future-Proofing",
    description: "Architectures built to adapt to evolving technologies and business requirements."
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <Database className="h-20 w-20 text-basil-500" />
                        <div className="absolute inset-0 bg-basil-500/20 rounded-full -z-10 blur-lg" />
                      </motion.div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((item) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: item * 0.1 }}
                          className="h-4 bg-basil-500/20 rounded-full"
                        />
                      ))}
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {[1, 2].map((item) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: item * 0.2 }}
                          className="h-16 bg-basil-500/10 rounded-xl"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-basil-500/10 to-basil-600/10 rounded-full blur-3xl -z-10" />
              </motion.div>
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
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full transition-all duration-300 group-hover:border-basil-500/50">
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
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Business Benefits of Robust Data Infrastructure
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  A well-designed data infrastructure does more than store data—it transforms how your business operates.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-basil-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-basil-500/10 text-basil-600">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl mb-2 text-gray-900 group-hover:text-basil-600 transition-colors">
                              {benefit.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-basil-500 to-basil-600 group-hover:w-full transition-all duration-300" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                    }}
                    className="grid grid-cols-3 gap-4"
                  >
                    {[...Array(9)].map((_, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          scale: [1, index % 3 === 1 ? 1.1 : 1, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4 + (index % 3),
                          delay: index * 0.2,
                        }}
                        className="aspect-square rounded-xl bg-white shadow-sm flex items-center justify-center"
                      >
                        <div className={`h-8 w-8 rounded-lg ${
                          index % 3 === 0 ? 'bg-basil-500/20' : 
                          index % 3 === 1 ? 'bg-basil-400/20' : 
                          'bg-basil-300/20'
                        }`} />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
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
                <Button asChild size="lg" variant="secondary" className="rounded-full">
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
