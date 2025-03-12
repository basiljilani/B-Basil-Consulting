import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  PieChart,
  TrendingUp,
  LineChart,
  BarChart,
  TrendingDown,
  Users,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
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
  { 
    value: "73%", 
    label: "of organizations saw improved decision making with advanced analytics",
    icon: <Award className="h-6 w-6" />
  },
  { 
    value: "2.6x", 
    label: "higher revenue growth for data-driven companies",
    icon: <TrendingUp className="h-6 w-6" />
  },
  { 
    value: "45%", 
    label: "reduction in operational costs through predictive analytics",
    icon: <TrendingDown className="h-6 w-6" />
  },
  { 
    value: "89%", 
    label: "of executives view analytics as critical to success",
    icon: <Users className="h-6 w-6" />
  }
];

// McKinsey AI/ML adoption data with forecasts
const adoptionData = [
  { year: '2020', value: 48, forecast: null },
  { year: '2021', value: 56, forecast: null },
  { year: '2022', value: 65, forecast: null },
  { year: '2023', value: 78, forecast: null },
  { year: '2024', value: 89, forecast: null },
  { year: '2025', value: null, forecast: 95 },
  { year: '2026', value: null, forecast: 98 },
  { year: '2027', value: null, forecast: 99 }
];

const AnalyticsInsights = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-12 md:py-16 mt-4 relative z-0">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Analytics & <span className="text-orange-500">Insights</span> Solutions
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Transform your data into actionable insights with our advanced analytics solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full bg-white text-gray-900 border-white hover:bg-transparent hover:text-white">
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
                <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl shadow-lg">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">AI/ML Adoption in Enterprise</h3>
                    <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full">McKinsey 2024</span>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={adoptionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FB923C" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#FB923C" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis 
                          dataKey="year" 
                          stroke="#666"
                          tick={{ fill: '#999' }}
                        />
                        <YAxis 
                          stroke="#666"
                          tick={{ fill: '#999' }}
                          unit="%"
                          domain={[0, 100]}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#222',
                            border: '1px solid #444',
                            borderRadius: '8px'
                          }}
                          formatter={(value) => [`${value}%`, 'Adoption Rate']}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#F97316"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#analyticsGradient)"
                          name="Historical"
                        />
                        <Area
                          type="monotone"
                          dataKey="forecast"
                          stroke="#FB923C"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          fillOpacity={1}
                          fill="url(#forecastGradient)"
                          name="Forecast"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-orange-500 mr-2"></span>
                      <span className="text-gray-300">Historical Data</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-orange-400 mr-2"></span>
                      <span className="text-gray-300">Forecast (95% confidence)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <SectionHeading 
              title="Advanced Analytics Solutions" 
              subtitle="Leverage cutting-edge analytics tools and methodologies to transform your business" 
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
                  <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
          <Container className="relative z-10">
            <SectionHeading 
              title="Analytics Impact" 
              subtitle="Real results from implementing advanced analytics"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-colors shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mr-4">
                      {stat.icon}
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-orange-400">
                      {stat.value}
                    </p>
                  </div>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <div className="p-6 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <p className="text-lg text-gray-300 italic">
                  "Organizations that leverage advanced analytics see a significant competitive advantage, with data-driven 
                  decisions leading to better outcomes across all business metrics."
                </p>
                <p className="mt-4 text-orange-400 font-medium">
                  — Deloitte Analytics Impact Study 2024
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <SectionHeading 
              title="Analytics Success Stories" 
              subtitle="How our clients achieved measurable results with data-driven insights"
              centered
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-4">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-800">Global Retail Chain</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Implemented predictive inventory management system that reduced stockouts by 37% and 
                  decreased excess inventory costs by $4.2M annually.
                </p>
                <div className="flex items-center text-orange-600">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span className="font-medium">42% ROI in first year</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-800">Financial Services Firm</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Developed customer analytics platform that increased cross-selling success by 58% and 
                  improved customer retention by 23%.
                </p>
                <div className="flex items-center text-orange-600">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span className="font-medium">31% increase in customer lifetime value</span>
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
                Ready to transform your data into insights?
              </h2>
              <p className="text-white mb-8 text-lg">
                Let's work together to unlock the full potential of your data with 
                advanced analytics solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/contact">
                    Start Your Analytics Journey
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

export default AnalyticsInsights;
