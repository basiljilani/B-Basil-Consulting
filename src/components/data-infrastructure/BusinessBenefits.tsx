
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart, Clock, DollarSign, Zap } from 'lucide-react';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    id: "scalability",
    icon: <Zap className="h-6 w-6" />,
    color: "from-purple-400 to-blue-500",
    title: "Scalability",
    description: "Infrastructure that grows seamlessly with your business needs, from startup to enterprise scale."
  },
  {
    id: "performance",
    icon: <BarChart className="h-6 w-6" />,
    color: "from-basil-400 to-basil-600",
    title: "Performance",
    description: "Optimized systems delivering high-performance data processing capabilities with minimal latency."
  },
  {
    id: "efficiency",
    icon: <DollarSign className="h-6 w-6" />,
    color: "from-emerald-400 to-teal-600",
    title: "Cost Efficiency",
    description: "Strategic infrastructure design that maximizes ROI while minimizing operational costs."
  },
  {
    id: "future",
    icon: <Clock className="h-6 w-6" />,
    color: "from-blue-400 to-indigo-600",
    title: "Future-Proofing",
    description: "Architectures built to adapt to evolving technologies and business requirements."
  }
];

const BusinessBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-basil-50 rounded-full blur-3xl opacity-70 mix-blend-multiply" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70 mix-blend-multiply" />
            
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-5"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                    <div className={`h-12 w-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${benefit.color} text-white shadow-md`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-basil-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <SectionHeading
              title="Business Benefits of Robust Data Infrastructure"
              subtitle="A well-designed data infrastructure becomes a strategic asset that transforms how your business operates and competes."
              withLine
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <h3 className="text-lg font-medium mb-4 text-basil-600">Key Impact Areas:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-basil-50 p-1 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-basil-600" />
                  </div>
                  <span className="text-gray-700">Accelerated decision-making with real-time data availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-basil-50 p-1 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-basil-600" />
                  </div>
                  <span className="text-gray-700">Enhanced competitive advantage through data-driven insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-basil-50 p-1 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-basil-600" />
                  </div>
                  <span className="text-gray-700">Improved operational efficiency and resource allocation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-basil-50 p-1 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-basil-600" />
                  </div>
                  <span className="text-gray-700">Unlocked AI/ML capabilities for predictive business insights</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessBenefits;
