
import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis
} from 'recharts';
import { Database, ArrowUpRight } from 'lucide-react';

// Enhanced data for charts
const areaData = [
  { name: '2019', value: 25 },
  { name: '2020', value: 40 },
  { name: '2021', value: 65 },
  { name: '2022', value: 80 },
  { name: '2023', value: 100 },
];

const pieData = [
  { name: 'Cloud', value: 45 },
  { name: 'On-Prem', value: 25 },
  { name: 'Hybrid', value: 30 },
];

const barData = [
  { name: 'Q1', value: 35 },
  { name: 'Q2', value: 52 },
  { name: 'Q3', value: 60 },
  { name: 'Q4', value: 82 },
];

const lineData = [
  { name: '2019', efficiency: 35, security: 28 },
  { name: '2020', efficiency: 45, security: 35 },
  { name: '2021', efficiency: 60, security: 48 },
  { name: '2022', efficiency: 75, security: 68 },
  { name: '2023', efficiency: 92, security: 85 },
];

const COLORS = ['#ff7a14', '#0ea5e9', '#8b5cf6', '#f97316'];

const customTooltipStyle = {
  backgroundColor: 'rgba(22, 22, 26, 0.9)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '8px 12px',
  color: 'white',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
};

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10"
    >
      <div className="bg-gradient-to-br from-gray-900/70 to-black/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-basil-500 to-basil-600 shadow-lg">
                <Database className="h-6 w-6 text-white" />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
                className="absolute inset-0 bg-basil-500/30 rounded-xl blur-xl -z-10" 
              />
            </motion.div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Data Infrastructure Growth</h3>
              <p className="text-gray-400 text-sm mt-1">Performance metrics 2019-2023</p>
            </div>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center space-x-1 text-basil-500 cursor-pointer text-sm"
          >
            <span>View full report</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-lg hover:shadow-basil-500/5 transition-all duration-300 hover:bg-white/8 overflow-hidden col-span-1 md:col-span-1 lg:col-span-1"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-300">Cloud Adoption</h4>
              <span className="text-xs text-basil-500 bg-basil-500/10 px-2 py-1 rounded-full">+75%</span>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff7a14" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ff7a14" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={customTooltipStyle} />
                  <XAxis dataKey="name" axisLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ff7a14" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-lg hover:shadow-basil-500/5 transition-all duration-300 hover:bg-white/8 overflow-hidden col-span-1 md:col-span-1 lg:col-span-1"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-300">Storage Distribution</h4>
              <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">Optimized</span>
            </div>
            <div className="h-40 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    animationDuration={1200}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={customTooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-lg hover:shadow-basil-500/5 transition-all duration-300 hover:bg-white/8 overflow-hidden col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-300">Processing Growth (2023)</h4>
              <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">+37%</span>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <XAxis dataKey="name" axisLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={1500}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 md:mt-6 bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-lg hover:shadow-basil-500/5 transition-all duration-300 hover:bg-white/8 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-gray-300">Operational Metrics Improvement</h4>
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">Trending Up</span>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <XAxis dataKey="name" axisLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <YAxis axisLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <Tooltip contentStyle={customTooltipStyle} />
                <Line 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="#0ea5e9" 
                  strokeWidth={2} 
                  dot={{ fill: '#0ea5e9', r: 4 }}
                  activeDot={{ r: 6, fill: '#0ea5e9', stroke: 'white', strokeWidth: 2 }}
                  animationDuration={1500}
                />
                <Line 
                  type="monotone" 
                  dataKey="security" 
                  stroke="#ff7a14" 
                  strokeWidth={2} 
                  dot={{ fill: '#ff7a14', r: 4 }}
                  activeDot={{ r: 6, fill: '#ff7a14', stroke: 'white', strokeWidth: 2 }}
                  animationDuration={1800}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-full bg-gradient-to-r from-basil-400/50 via-basil-500 to-basil-600/50" />
        </motion.div>
      </div>
      
      <div className="absolute -inset-4 bg-gradient-to-r from-basil-500/20 via-transparent to-basil-600/20 rounded-full blur-3xl -z-10 opacity-50" />
    </motion.div>
  );
};

export default HeroCard;
