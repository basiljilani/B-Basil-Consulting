
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine,
  TooltipProps
} from 'recharts';
import { BarChart2, Bookmark, Award } from 'lucide-react';

// Data includes historical data and forecasts
const adoptionData = [
  { year: 2018, value: 42, forecast: false },
  { year: 2019, value: 48, forecast: false },
  { year: 2020, value: 56, forecast: false },
  { year: 2021, value: 65, forecast: false },
  { year: 2022, value: 78, forecast: false },
  { year: 2023, value: 89, forecast: false },
  { year: 2024, value: 94, forecast: false },
  { year: 2025, value: 98, forecast: true },
  { year: 2026, value: 103, forecast: true },
  { year: 2027, value: 107, forecast: true },
  { year: 2028, value: 112, forecast: true },
  { year: 2029, value: 116, forecast: true },
  { year: 2030, value: 120, forecast: true },
];

const currentYear = 2024;
const currentAdoption = adoptionData.find(item => item.year === currentYear)?.value || 0;
const forecastedGrowth = ((adoptionData[adoptionData.length - 1].value - currentAdoption) / currentAdoption * 100).toFixed(1);

// Research sources information
const dataSources = [
  {
    name: "Gartner Research",
    description: "Industry leading market analysis"
  },
  {
    name: "McKinsey Global Institute",
    description: "Business and economics research"
  },
  {
    name: "Deloitte Insights",
    description: "Enterprise transformation studies"
  }
];

// Custom tooltip component to fix the TypeScript error
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-gray-800 p-3 rounded-md border border-gray-700 shadow-xl">
        <p className="text-gray-300 font-medium">{`Year: ${label}`}</p>
        <p className="text-white">
          <span className="font-medium">{`Adoption: ${payload[0].value}%`}</span>
        </p>
        {data.forecast && (
          <p className="text-xs text-gray-400 mt-1 italic">Forecasted value</p>
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
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Main card - removed glow effect */}
      <div className="relative z-10 bg-gray-900 border border-gray-800 rounded-xl p-6 overflow-hidden shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-basil-500/20 flex items-center justify-center text-basil-400">
              <BarChart2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium text-white">Global Data Infrastructure Adoption</h3>
          </div>
          <div className="text-sm text-gray-400">2018-2030</div>
        </div>
        
        {/* Key stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Current Adoption</p>
            <p className="text-2xl font-bold text-white">{currentAdoption}%</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Current Year</p>
            <p className="text-2xl font-bold text-white">{currentYear}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Forecasted Growth</p>
            <p className="text-2xl font-bold text-basil-400">+{forecastedGrowth}%</p>
          </div>
        </div>
        
        {/* Improved Chart with more aesthetic styling */}
        <div className="h-64 w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={adoptionData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#33a1ff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#33a1ff" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorBackground" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#33a1ff" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#33a1ff" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#aaa' }} 
                axisLine={{ stroke: '#444' }}
                tickLine={{ stroke: '#444' }}
              />
              <YAxis 
                tick={{ fill: '#aaa' }} 
                axisLine={{ stroke: '#444' }}
                tickLine={{ stroke: '#444' }}
                domain={[0, 130]}
                unit="%"
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine 
                x={currentYear} 
                stroke="#fff" 
                strokeDasharray="3 3" 
                label={{ 
                  value: "Present", 
                  position: "top", 
                  fill: "#fff",
                  fontSize: 12,
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#33a1ff" 
                strokeWidth={3}
                activeDot={{ r: 8, fill: "#33a1ff", stroke: "#fff" }}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  return (
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={payload.forecast ? 4 : 5}
                      fill={payload.forecast ? "#8B5CF6" : "#33a1ff"}
                      stroke={payload.forecast ? "#8B5CF6" : "#33a1ff"}
                      strokeWidth={2}
                      strokeOpacity={0.3}
                    />
                  );
                }}
                fill="url(#colorValue)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-between mb-6 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span>Historical Data</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-purple-500" />
            <span>Forecast</span>
          </div>
        </div>
        
        {/* Credible Sources Section - Highlight research sources */}
        <div className="bg-gray-800/70 rounded-lg p-4 border border-gray-700 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-5 w-5 text-basil-400" />
            <h4 className="text-white font-medium">Research Sources</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {dataSources.map((source, index) => (
              <div key={index} className="flex items-start gap-2">
                <Bookmark className="h-4 w-4 text-basil-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">{source.name}</p>
                  <p className="text-xs text-gray-400">{source.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-xs text-gray-400 italic text-right">
          Source: Industry Analysis & Market Projections 2023
        </p>
      </div>
    </motion.div>
  );
};

export default HeroCard;
