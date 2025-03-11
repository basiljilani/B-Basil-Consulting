
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  PieChart,
  TrendingUp,
  LineChart,
  BarChart
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

// McKinsey Digital Analytics 2024 Report Data
const analyticsData = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Predictive Analytics",
    description: "AI-powered forecasting and trend analysis with 85% accuracy rate"
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Business Intelligence",
    description: "Real-time data visualization and reporting for informed decision-making"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Performance Metrics",
    description: "Custom KPI tracking and performance optimization solutions"
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Data Visualization",
    description: "Interactive dashboards and intuitive data presentation tools"
  }
];

// Deloitte Analytics Impact Study 2024
const impactStats = [
  { value: "73%", label: "of organizations saw improved decision making with advanced analytics" },
  { value: "2.6x", label: "higher revenue growth for data-driven companies" },
  { value: "45%", label: "reduction in operational costs through predictive analytics" },
  { value: "89%", label: "of executives view analytics as critical to success" }
];

// McKinsey AI/ML adoption data
const adoptionData = [
  { year: '2020', value: 48 },
  { year: '2021', value: 56 },
  { year: '2022', value: 65 },
  { year: '2023', value: 78 },
  { year: '2024', value: 89 },
  { year: '2025', value: 95 }
];

const AnalyticsInsights = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Analytics & Insights Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your data into actionable insights with our advanced analytics solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full bg-basil-500 hover:bg-basil-600">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                    <Link to="/services">
                      View All Services
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-black/80 border border-basil-500/20 backdrop-blur-sm p-8 rounded-3xl">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={adoptionData}>
                        <defs>
                          <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF7A14" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#FF7A14" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis 
                          dataKey="year" 
                          stroke="#666"
                          tick={{ fill: '#999' }}
                        />
                        <YAxis 
                          stroke="#666"
                          tick={{ fill: '#999' }}
                          unit="%"
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#000',
                            border: '1px solid #333',
                            borderRadius: '8px'
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#FF7A14"
                          fillOpacity={1}
                          fill="url(#analyticsGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 text-sm text-gray-400">
                    AI/ML Adoption Rate in Enterprise Analytics (%) - McKinsey 2024
                  </div>
                </div>
                
                <motion.div
                  className="absolute -z-10 inset-0 bg-gradient-to-r from-basil-500/20 to-basil-600/20 rounded-3xl blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.2, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading 
              title="Advanced Analytics Solutions" 
              subtitle="Leverage cutting-edge analytics tools and methodologies" 
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {analyticsData.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-basil-50 flex items-center justify-center text-basil-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-black text-white">
          <Container>
            <SectionHeading 
              title="Analytics Impact" 
              subtitle="Real results from implementing advanced analytics"
              centered
            />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-basil-500/20 bg-black/50"
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
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to transform your data into insights?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's work together to unlock the full potential of your data with 
                advanced analytics solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-basil-500 hover:bg-basil-600">
                  <Link to="/contact">
                    Start Your Analytics Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-black">
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
