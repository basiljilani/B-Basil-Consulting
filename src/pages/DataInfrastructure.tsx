import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  Server, 
  Cloud, 
  HardDrive, 
  Network
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
  { value: "68%", label: "of organizations struggle with data integration across multiple sources" },
  { value: "73%", label: "of enterprise data goes unused for analytics and decision-making" },
  { value: "3.8x", label: "higher ROI for companies with mature data infrastructure" },
  { value: "47%", label: "reduction in time-to-insight with optimized data pipelines" }
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 4
                    }}
                    className="relative z-10"
                  >
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <Database className="h-20 w-20 text-blue-500" />
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.7, 0.9, 0.7]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2
                          }}
                          className="absolute inset-0 bg-blue-200 rounded-full -z-10 blur-lg"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((item) => (
                        <motion.div
                          key={item}
                          animate={{
                            y: [0, item % 2 === 0 ? -5 : 5, 0]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3 + item * 0.5,
                            delay: item * 0.2
                          }}
                          className="h-4 bg-blue-100 rounded-full"
                        />
                      ))}
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {[1, 2].map((item) => (
                        <motion.div
                          key={item}
                          animate={{
                            y: [0, item % 2 === 0 ? -5 : 5, 0]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3 + item * 0.7,
                            delay: item * 0.3
                          }}
                          className="h-16 bg-blue-50 rounded-xl"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-basil-500/20 to-basil-600/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8
                  }}
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Technologies Section */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading 
              title="Core Technologies" 
              subtitle="We leverage the latest data infrastructure technologies to build systems that scale with your business needs." 
              centered
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
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-basil-50 flex items-center justify-center text-basil-600 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
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
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 text-center"
                >
                  <motion.p 
                    className="text-3xl md:text-4xl font-bold text-basil-500 mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600">{stat.label}</p>
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
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Business Benefits of Robust Data Infrastructure
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  A well-designed data infrastructure does more than store data—it transforms how your business operates.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="rounded-full bg-blue-100 p-1 mt-1 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button asChild className="rounded-full">
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
                <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-lg">
                  <div className="aspect-video bg-gradient-to-r from-blue-100 to-blue-50 p-8 relative">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotateY: [0, 180, 360],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 8,
                          }}
                          className="absolute inset-0 bg-blue-300 rounded-full blur-xl opacity-20"
                          style={{ height: '200px', width: '200px', top: '-50px', left: '-50px' }}
                        />
                        
                        <motion.div
                          className="grid grid-cols-3 gap-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                            <motion.div
                              key={item}
                              animate={{
                                scale: [1, item % 3 === 0 ? 1.1 : 1, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 4 + (item % 3),
                                delay: item * 0.2
                              }}
                              className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center"
                            >
                              <div className={`h-6 w-6 rounded-md ${item % 3 === 0 ? 'bg-blue-400' : item % 3 === 1 ? 'bg-blue-300' : 'bg-blue-200'}`}></div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
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
