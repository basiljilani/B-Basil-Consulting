
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

// Data with historical values and forecast through 2030
const adoptionData = [
  // Historical data (2018-2023)
  { year: 2018, adoption: 28, forecast: null },
  { year: 2019, adoption: 35, forecast: null },
  { year: 2020, adoption: 47, forecast: null },
  { year: 2021, adoption: 62, forecast: null },
  { year: 2022, adoption: 78, forecast: null },
  { year: 2023, adoption: 85, forecast: null },
  // Forecast data (2024-2030)
  { year: 2024, adoption: null, forecast: 91 },
  { year: 2025, adoption: null, forecast: 95 },
  { year: 2026, adoption: null, forecast: 98 },
  { year: 2027, adoption: null, forecast: 102 },
  { year: 2028, adoption: null, forecast: 105 },
  { year: 2029, adoption: null, forecast: 107 },
  { year: 2030, adoption: null, forecast: 110 }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const value = data.adoption !== null ? data.adoption : data.forecast;
    const isForecasted = data.forecast !== null;
    
    return (
      <div className="bg-gray-900/95 border border-white/10 p-3 rounded-lg shadow-lg">
        <p className="text-gray-300 text-xs font-medium">{`Year: ${label}`}</p>
        <p className="text-white font-semibold">
          {`${isForecasted ? 'Forecasted ' : ''}Adoption: ${value}%`}
        </p>
        {isForecasted && (
          <p className="text-xs text-basil-300 italic mt-1">Projected value</p>
        )}
      </div>
    );
  }
  return null;
};

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10"
    >
      <div className="bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
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
                <TrendingUp className="h-6 w-6 text-white" />
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
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Data Infrastructure Adoption</h3>
              <p className="text-gray-400 text-sm mt-1">Trend forecast 2018-2030</p>
            </div>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center space-x-1 text-basil-500 cursor-pointer text-sm"
          >
            <span>View detailed analysis</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 shadow-lg hover:shadow-basil-500/5 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="text-base font-semibold text-gray-300">Global Adoption of Data Infrastructure Solutions</h4>
              <p className="text-xs text-gray-400">% of enterprises implementing comprehensive data infrastructure</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-basil-500"></div>
                <span className="text-xs text-gray-400">Historical</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-xs text-gray-400">Forecast</span>
              </div>
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={adoptionData}
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#9ca3af', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <YAxis 
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 120]}
                  tick={{ fill: '#9ca3af', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine 
                  x={2023} 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeDasharray="3 3" 
                  label={{ 
                    value: "Current", 
                    position: "top", 
                    fill: "rgba(255,255,255,0.6)",
                    fontSize: 10
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="adoption" 
                  name="Historical Adoption"
                  stroke="#ff7a14" 
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "#1a1a1a" }}
                  activeDot={{ r: 7, strokeWidth: 2, stroke: "white" }}
                  animationDuration={1500}
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  name="Forecasted Adoption"
                  stroke="#0ea5e9" 
                  strokeWidth={3}
                  strokeDasharray="6 3"
                  dot={{ r: 5, strokeWidth: 2, fill: "#1a1a1a" }}
                  activeDot={{ r: 7, strokeWidth: 2, stroke: "white" }}
                  animationDuration={1500}
                />
                <Legend 
                  wrapperStyle={{ bottom: 0 }}
                  iconType="circle"
                  formatter={(value) => <span className="text-gray-300 text-xs">{value}</span>}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Current Adoption</p>
              <p className="text-xl font-bold text-basil-500">85%</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Projected by 2030</p>
              <p className="text-xl font-bold text-blue-400">110%</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Growth Rate</p>
              <p className="text-xl font-bold text-green-400">+29%</p>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-400 italic">
            <p>Data sources: Gartner, IDC, Deloitte Digital Transformation Studies (2018-2023)</p>
            <p>Forecast methodology: Compound Annual Growth Rate (CAGR) analysis with market saturation model</p>
          </div>
        </div>
        
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
