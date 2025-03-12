
import React from 'react';
import { motion } from 'framer-motion';
import { ChartBar, Timer, TrendingDown, Brain, Network, Database, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';

const benefits = [
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
];

const BusinessBenefits = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
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
          {benefits.map((benefit, index) => (
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
  );
};

export default BusinessBenefits;
