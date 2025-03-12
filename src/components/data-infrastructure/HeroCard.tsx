
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
  Tooltip
} from 'recharts';
import { Database } from 'lucide-react';

// Sample data for charts
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

const COLORS = ['#ff7a14', '#0ea5e9', '#8b5cf6', '#f97316'];

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Database className="h-16 w-16 text-basil-500" />
              <div className="absolute inset-0 bg-basil-500/20 rounded-full -z-10 blur-lg" />
            </motion.div>
          </div>
          
          <h3 className="text-center text-xl font-semibold text-white mb-6">Data Infrastructure Growth</h3>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-basil-200 mb-2">Cloud Adoption</h4>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff7a14" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ff7a14" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                        border: 'none', 
                        borderRadius: '4px',
                        color: 'white' 
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#ff7a14" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-medium text-basil-200 mb-2">Data Storage Distribution</h4>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                        border: 'none', 
                        borderRadius: '4px',
                        color: 'white' 
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <h4 className="text-sm font-medium text-basil-200 mb-2">Data Processing Growth (2023)</h4>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                      border: 'none', 
                      borderRadius: '4px',
                      color: 'white' 
                    }} 
                  />
                  <Bar dataKey="value" fill="#8b5cf6">
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-basil-500/10 to-basil-600/10 rounded-full blur-3xl -z-10" />
    </motion.div>
  );
};

export default HeroCard;
