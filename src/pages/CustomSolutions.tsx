import { ArrowRight, CheckCircle2, Code, Database, LineChart, Server, Shield, UserCog, Cpu, Globe, BarChart2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const coreVentures = [
  {
    name: "Foodlytics",
    description: "An advanced data analytics platform that revolutionizes how restaurants and food businesses operate. By leveraging AI-driven insights, predictive analytics, and real-time data visualization, Foodlytics helps businesses optimize pricing, reduce waste, and improve customer engagement.",
    benefits: [
      "Data-driven menu optimization",
      "Predictive demand forecasting",
      "Real-time performance analytics",
      "Customer behavior insights"
    ],
    color: "bg-orange-500",
    textColor: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100"
  },
  {
    name: "HiFoodo",
    description: "A game-changer in the food delivery space. Unlike traditional platforms that take a commission on every order, HiFoodo allows restaurants and consumers to connect directly without any middlemen. This means more profits for restaurants, better prices for customers, and a more sustainable food ecosystem.",
    benefits: [
      "Zero-commission marketplace",
      "Direct restaurant-customer connection",
      "Higher profit margins for restaurants",
      "Better prices for consumers"
    ],
    color: "bg-red-500",
    textColor: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-100"
  },
  {
    name: "BCAI",
    description: "Our cutting-edge AI division focused on automating and optimizing business operations. From intelligent process automation to machine learning-driven insights, BCAI is designed to enhance efficiency and drive growth. Our AI solutions help businesses streamline workflows, improve customer interactions, and stay ahead.",
    benefits: [
      "Intelligent process automation",
      "Machine learning-driven insights",
      "Enhanced operational efficiency",
      "Competitive advantage through AI"
    ],
    color: "bg-blue-500",
    textColor: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100"
  },
  {
    name: "Fintech Pulse Network",
    description: "A dynamic ecosystem that brings together fintech professionals, enthusiasts, and businesses. We provide thought leadership, in-depth analysis, and real-world case studies to help individuals and organizations navigate the ever-evolving fintech landscape.",
    benefits: [
      "Latest fintech trends and insights",
      "Expert opinions and analysis",
      "Industry connections and networking",
      "Real-world case studies"
    ],
    color: "bg-purple-500",
    textColor: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100"
  },
  {
    name: "Pulse AI",
    description: "An AI-driven financial advisory platform designed to provide data-backed recommendations, investment insights, and strategic financial guidance. By leveraging machine learning, Pulse AI helps individuals and businesses make informed financial decisions, optimize investments, and achieve long-term financial stability.",
    benefits: [
      "Data-backed financial recommendations",
      "Investment optimization",
      "Strategic financial guidance",
      "Long-term financial planning"
    ],
    color: "bg-amber-500",
    textColor: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100"
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
      <main className="flex-grow pt-16">
        {/* Header */}
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-12 md:py-16 mt-4 relative z-0">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Custom <span className="text-basil-400">Solutions</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  We build transformative technology solutions that drive progress, efficiency, and innovation across industries.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <a href="mailto:info@basilconsulting.com">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Core Ventures Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <SectionHeading 
              title="Our Core Ventures" 
              subtitle="At Basil Consulting, we believe in building transformative solutions that drive progress, efficiency, and innovation. Our core ventures are designed to disrupt traditional industries, empower businesses, and create sustainable growth opportunities."
              centered
            />
            
            <div className="space-y-16 mt-12">
              {coreVentures.map((venture, index) => (
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
                      <div className="mb-6">
                        <h3 className={`text-2xl font-bold ${venture.textColor}`}>{venture.name}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {venture.description}
                      </p>
                      
                      <div className="mt-6">
                        <Button asChild variant="outline" className={`rounded-full border-2 ${venture.textColor} hover:bg-gray-50`}>
                          <Link to="/contact">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    <div className={`${venture.bgColor} p-8 md:p-10`}>
                      <h4 className="text-lg font-semibold mb-6">Key Benefits</h4>
                      <ul className="space-y-4">
                        {venture.benefits.map((benefit, i) => (
                          <li key={i} className="flex">
                            <CheckCircle2 className={`h-5 w-5 ${venture.textColor} mr-3 flex-shrink-0`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`mt-8 p-4 ${venture.borderColor} border rounded-lg bg-white/80`}>
                        <p className="italic text-gray-700">
                          "Our {venture.name} platform is designed to create sustainable ecosystems that adapt and evolve with changing market dynamics."
                        </p>
                      </div>
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
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center text-basil-500 mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Driving the Future Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading 
                title="Driving the Future of Business" 
                subtitle="At Basil Consulting, each of our ventures is built with the vision of transforming industries, empowering businesses, and creating sustainable ecosystems."
                centered
              />
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-8">
                  Our focus on AI, fintech, and data-driven solutions ensures that we stay at the forefront of innovation, 
                  delivering real-world impact across multiple sectors. We don't just build platforms—we cultivate 
                  thriving ecosystems where businesses, technologies, and people interconnect and flourish together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">
                      Start a Conversation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full bg-white text-gray-900 border-white hover:bg-transparent hover:text-white">
                    <Link to="/services">
                      Explore Our Services
                    </Link>
                  </Button>
                </div>
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
