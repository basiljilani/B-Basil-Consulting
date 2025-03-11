
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Search, 
  Eye 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const analyticsCapabilities = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Interactive Dashboards",
    description: "Custom-built dashboards that bring your data to life with interactive visualizations."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Predictive Analytics",
    description: "Leverage machine learning to forecast trends and identify future opportunities."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Advanced Data Exploration",
    description: "Powerful tools to dive deep into your data and uncover hidden patterns and correlations."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights that drive strategic decision-making."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Performance Metrics",
    description: "Track KPIs and business metrics with real-time monitoring and alerts."
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Data Visualization",
    description: "Beautiful, intuitive visualizations that make complex data easy to understand."
  }
];

const businessImpacts = [
  {
    title: "Informed Decision Making",
    description: "Replace gut feelings with data-driven insights to make more accurate business decisions."
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of the competition by identifying market trends and opportunities faster."
  },
  {
    title: "Operational Efficiency",
    description: "Optimize processes and reduce costs by identifying bottlenecks and inefficiencies."
  },
  {
    title: "Customer Understanding",
    description: "Gain deep insights into customer behavior to improve products and experiences."
  }
];

const analyticsStats = [
  { value: "79%", label: "of executives say analytics create a competitive advantage" },
  { value: "2.6x", label: "more likely to exceed revenue goals with advanced analytics" },
  { value: "73%", label: "of companies are integrating data across their organization" },
  { value: "59%", label: "productivity improvement with data-driven decision making" }
];

const AnalyticsInsights = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Analytics & Insights Solutions
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Transform your data into actionable insights that drive business growth and innovation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700">
                      <Link to="/contact">
                        Discuss Your Analytics Needs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
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
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">Performance Dashboard</h3>
                    <div className="flex items-center text-sm text-purple-600">
                      <span>Last updated: Today</span>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4
                    }}
                    className="grid grid-cols-3 gap-4 mb-6"
                  >
                    {[
                      { label: "Revenue", value: "$1.24M", trend: "+18%" },
                      { label: "Users", value: "48.5K", trend: "+24%" },
                      { label: "Conversion", value: "3.8%", trend: "+2%" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="bg-gray-50 p-4 rounded-xl"
                      >
                        <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                        <div className="flex justify-between items-end">
                          <p className="text-xl font-bold">{stat.value}</p>
                          <p className="text-green-500 text-sm font-medium">{stat.trend}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Revenue Trends</h4>
                        <div className="flex gap-2 text-xs">
                          <span className="text-purple-600">This Month</span>
                          <span className="text-gray-400">Last Month</span>
                        </div>
                      </div>
                      <div className="h-40 bg-gray-50 rounded-lg relative overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="absolute inset-0"
                        >
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end">
                            {[15, 30, 25, 40, 20, 35, 45, 30, 35, 55, 40, 50].map((height, index) => (
                              <motion.div
                                key={index}
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ delay: 1 + (index * 0.05), duration: 0.5 }}
                                className="w-full bg-purple-500 mx-0.5 rounded-t-sm relative"
                              >
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${height * 0.8}%` }}
                                  transition={{ delay: 1 + (index * 0.05), duration: 0.5 }}
                                  className="absolute bottom-0 left-0 right-0 bg-purple-200 rounded-t-sm"
                                  style={{ opacity: 0.4 }}
                                />
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.svg
                            viewBox="0 0 100 100"
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                          >
                            <motion.path
                              d="M0 80 Q 10 60, 20 70 T 40 60 T 60 55 T 80 45 T 100 50"
                              fill="none"
                              stroke="#a855f7"
                              strokeWidth="1"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.5, delay: 1.5 }}
                            />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Market Distribution</h4>
                        <div className="text-xs text-purple-600">View Details</div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { color: "bg-purple-500", percent: 38 },
                          { color: "bg-blue-400", percent: 24 },
                          { color: "bg-green-400", percent: 18 },
                          { color: "bg-yellow-400", percent: 12 }
                        ].map((segment, index) => (
                          <motion.div
                            key={index}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1.8 + (index * 0.1) }}
                            className="h-24 rounded-lg relative overflow-hidden"
                          >
                            <motion.div
                              initial={{ height: "0%" }}
                              animate={{ height: `${segment.percent * 2}%` }}
                              transition={{ delay: 2 + (index * 0.1), duration: 0.7 }}
                              className={`absolute bottom-0 inset-x-0 ${segment.color}`}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-2 text-white">
                              <span className="font-bold">{segment.percent}%</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className="absolute -z-10 -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-50"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Analytics Capabilities Section */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading 
              title="Analytics Capabilities" 
              subtitle="Transformative analytics tools and methodologies to uncover valuable insights from your data." 
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {analyticsCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <Container>
            <SectionHeading 
              title="Analytics Impact by the Numbers" 
              subtitle="How data-driven organizations are outperforming their competitors"
              centered
            />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {analyticsStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 text-center"
                >
                  <motion.p 
                    className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-center text-gray-500 mt-6">
              Source: McKinsey Global Institute, Deloitte Analytics Advantage Report
            </p>
          </Container>
        </section>
        
        {/* Business Impact Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Business Impact of Advanced Analytics
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  See how our analytics solutions translate into tangible business outcomes.
                </p>
                
                <div className="space-y-6">
                  {businessImpacts.map((impact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="rounded-full bg-purple-100 p-1 mt-1 flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-1">{impact.title}</h3>
                        <p className="text-gray-600">{impact.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button asChild className="rounded-full bg-purple-600 hover:bg-purple-700">
                    <Link to="/contact">
                      Schedule a Consultation
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
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="bg-white p-6">
                    <h3 className="font-semibold text-xl mb-4">Analytics Maturity Journey</h3>
                    
                    <div className="space-y-6">
                      {[
                        { 
                          stage: "Descriptive", 
                          description: "What happened?", 
                          color: "purple",
                          progress: 100 
                        },
                        { 
                          stage: "Diagnostic", 
                          description: "Why did it happen?", 
                          color: "indigo",
                          progress: 80 
                        },
                        { 
                          stage: "Predictive", 
                          description: "What will happen?", 
                          color: "blue",
                          progress: 60 
                        },
                        { 
                          stage: "Prescriptive", 
                          description: "How can we make it happen?", 
                          color: "cyan",
                          progress: 40 
                        }
                      ].map((stage, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (index * 0.2) }}
                          className="relative"
                        >
                          <div className="flex justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{stage.stage}</h4>
                              <p className="text-sm text-gray-500">{stage.description}</p>
                            </div>
                            <div className={`text-${stage.color}-600 font-medium`}>
                              {stage.progress}%
                            </div>
                          </div>
                          
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${stage.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                              className={`h-full bg-${stage.color}-500 rounded-full`}
                            />
                          </div>
                          
                          {index < 3 && (
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-8 border-l border-dashed border-gray-200 z-10" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-gray-500">Your organization is currently at the <span className="font-medium text-purple-600">Descriptive/Diagnostic stage</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className="absolute -z-10 -inset-4 bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 rounded-2xl blur-3xl opacity-50"
                  animate={{
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-purple-600 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to unlock the power of your data?
              </h2>
              <p className="text-purple-100 mb-8 text-lg">
                Let's turn your data into actionable insights that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link to="/contact">
                    Start Your Analytics Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-purple-600">
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

export default AnalyticsInsights;
