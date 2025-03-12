
import React from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line,
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';

const adoptionData = [
  { year: '2019', value: 48 },
  { year: '2020', value: 56 },
  { year: '2021', value: 65 },
  { year: '2022', value: 78 },
  { year: '2023', value: 89 }
];

const infrastructureInvestment = [
  { name: 'Cloud Data Platforms', value: 38 },
  { name: 'Data Lakes', value: 27 },
  { name: 'Data Warehouses', value: 22 },
  { name: 'Edge Computing', value: 13 }
];

const COLORS = ['#ff7a14', '#ff9941', '#ffbd7d', '#ffd9b0'];

const businessImpactData = [
  {
    name: 'Decision Speed',
    'Before Optimization': 45,
    'After Optimization': 92,
  },
  {
    name: 'Data Accessibility',
    'Before Optimization': 38,
    'After Optimization': 85,
  },
  {
    name: 'Analytics Capability',
    'Before Optimization': 42,
    'After Optimization': 78,
  },
  {
    name: 'AI/ML Readiness',
    'Before Optimization': 25,
    'After Optimization': 72,
  },
];

const costReductionData = [
  {
    month: 'Jan',
    cost: 100,
  },
  {
    month: 'Feb',
    cost: 98,
  },
  {
    month: 'Mar',
    cost: 90,
  },
  {
    month: 'Apr',
    cost: 85,
  },
  {
    month: 'May',
    cost: 78,
  },
  {
    month: 'Jun',
    cost: 70,
  },
  {
    month: 'Jul',
    cost: 65,
  },
  {
    month: 'Aug',
    cost: 58,
  },
  {
    month: 'Sep',
    cost: 55,
  },
];

const DataCharts = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <Container>
        <SectionHeading
          title="Data Infrastructure Analytics"
          subtitle="Visualizing the impact of modern data infrastructure on business outcomes"
          centered
          className="text-white"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Chart 1: Adoption Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-basil-300">Enterprise Data Infrastructure Adoption</h3>
            <p className="text-gray-400 mb-4">Percentage of enterprises with mature data infrastructure</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={adoptionData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff7a14" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ff7a14" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="year" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: '#ff7a14' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: any) => [`${value}%`, 'Adoption Rate']}
                    labelStyle={{ color: '#ff7a14' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ff7a14" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-right italic">Source: Gartner Data & Analytics Survey</p>
          </motion.div>
          
          {/* Chart 2: Infrastructure Investment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-basil-300">Infrastructure Investment Distribution</h3>
            <p className="text-gray-400 mb-4">Where organizations are allocating their infrastructure budgets</p>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={infrastructureInvestment}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {infrastructureInvestment.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: '#ff7a14' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: any) => [`${value}%`, 'Budget Allocation']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-right italic">Source: Deloitte Digital Transformation Study</p>
          </motion.div>
          
          {/* Chart 3: Business Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-basil-300">Business Impact of Data Infrastructure</h3>
            <p className="text-gray-400 mb-4">Comparison of key metrics before and after infrastructure optimization</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={businessImpactData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: '#ff7a14' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: any) => [`${value}%`, '']}
                  />
                  <Legend wrapperStyle={{ color: '#999' }} />
                  <Bar dataKey="Before Optimization" fill="#ffd9b0" />
                  <Bar dataKey="After Optimization" fill="#ff7a14" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-right italic">Source: McKinsey Digital Transformation Report</p>
          </motion.div>
          
          {/* Chart 4: Cost Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-basil-300">Operational Cost Reduction</h3>
            <p className="text-gray-400 mb-4">Cost reduction trend after implementing optimized infrastructure</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={costReductionData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: '#ff7a14' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: any) => [`${value}%`, 'Cost (relative to baseline)']}
                    labelStyle={{ color: '#ff7a14' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cost" 
                    stroke="#ff7a14" 
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#ff7a14", stroke: "#ff7a14" }}
                    activeDot={{ r: 8, fill: "#ff7a14", stroke: "#fff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-right italic">Source: IDC Global Data Management Survey</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default DataCharts;
