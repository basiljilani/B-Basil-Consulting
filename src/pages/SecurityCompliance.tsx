import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Lock, 
  Key, 
  UserCog, 
  Eye, 
  EyeOff 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const securitySolutions = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Comprehensive Security Audits",
    description: "In-depth assessment of your current security posture to identify vulnerabilities and recommend improvements."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Data Protection Frameworks",
    description: "Custom-designed security frameworks to safeguard sensitive data throughout its lifecycle."
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: "Identity & Access Management",
    description: "Advanced IAM solutions to ensure only authorized users can access critical systems and data."
  },
  {
    icon: <UserCog className="h-6 w-6" />,
    title: "Compliance Automation",
    description: "Streamlined processes to maintain continuous compliance with relevant regulations and standards."
  },
  {
    icon: <EyeOff className="h-6 w-6" />,
    title: "Threat Detection & Response",
    description: "Proactive monitoring systems to identify and mitigate security threats before they cause damage."
  }
];

const regulations = [
  { name: "GDPR", description: "General Data Protection Regulation for EU data subjects" },
  { name: "HIPAA", description: "Healthcare data protection and privacy in the US" },
  { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
  { name: "SOC 2", description: "Service Organization Control for service providers" },
  { name: "CCPA/CPRA", description: "California Consumer Privacy Act/California Privacy Rights Act" },
  { name: "ISO 27001", description: "International standard for information security management" }
];

const securityStats = [
  { value: "$4.35M", label: "average cost of a data breach in 2023" },
  { value: "249", label: "average days to identify and contain a breach" },
  { value: "83%", label: "of organizations experienced more than one data breach in the past year" },
  { value: "45%", label: "of breaches were cloud-based" }
];

const SecurityCompliance = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Security & Compliance Solutions
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Protect your data and maintain regulatory compliance with our comprehensive security solutions.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" variant="secondary" className="rounded-full">
                      <Link to="/contact">
                        Request a Security Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-gray-900">
                      <Link to="/services">
                        Explore All Services
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-basil-500/20 to-basil-600/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8
                    }}
                  />
                  
                  <div className="bg-black/80 border border-basil-500/20 backdrop-blur-sm p-8 rounded-3xl relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="flex justify-center mb-6"
                    >
                      <div className="relative">
                        <Shield className="h-20 w-20 text-green-400" />
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3
                          }}
                          className="absolute inset-0 bg-green-400/20 rounded-full blur-xl"
                        />
                      </div>
                    </motion.div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + (i * 0.1) }}
                          className="h-2 bg-gray-700 rounded-full overflow-hidden"
                        >
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              repeat: Infinity,
                              duration: 3 + i,
                              ease: "linear"
                            }}
                            className="h-full w-1/3 bg-gradient-to-r from-green-400 to-blue-400"
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + (i * 0.15) }}
                          className="flex items-center"
                        >
                          <div className="h-10 w-10 rounded-lg bg-gray-700 flex items-center justify-center mr-3">
                            <Lock className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex-grow">
                            <div className="h-2 bg-gray-700 rounded-full w-full mb-2">
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${70 + (i * 10)}%` }}
                                transition={{ duration: 1, delay: 1.2 + (i * 0.15) }}
                                className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                              />
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full w-3/4" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-basil-500/10 to-black/50 rounded-xl blur-xl"
                    animate={{
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut"
                    }}
                    className="absolute -z-10 inset-0 bg-gradient-to-br from-basil-200 to-black/50 rounded-xl blur-xl opacity-50 transform -rotate-3"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Security Solutions Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <SectionHeading 
              title="Our Security Solutions" 
              subtitle="Comprehensive security and compliance solutions to protect your data and maintain regulatory compliance." 
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {securitySolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-basil-50 flex items-center justify-center text-basil-600 mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 md:py-20 bg-black text-white">
          <Container>
            <SectionHeading 
              title="The Cost of Poor Security" 
              subtitle="Current statistics highlighting the importance of robust security measures"
              centered
            />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {securityStats.map((stat, index) => (
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
            <p className="text-sm text-center text-gray-500 mt-6">
              Source: IBM Cost of a Data Breach Report 2023, Ponemon Institute
            </p>
          </Container>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Secure your data and ensure compliance
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's work together to build a robust security and compliance framework 
                that protects your business and builds trust with your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link to="/contact">
                    Get a Security Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-gray-900">
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

export default SecurityCompliance;
