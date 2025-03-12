
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
import { BarChart2 } from 'lucide-react';

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

// Custom tooltip component to fix the TypeScript error
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-gray-900/90 backdrop-blur-sm p-3 rounded-md border border-gray-700 shadow-xl">
        <p className="text-basil-300 font-medium">{`Year: ${label}`}</p>
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
      {/* Background glow effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-basil-500/20 via-black/0 to-blue-500/20 rounded-xl blur-lg z-0" />
      
      {/* Main card */}
      <div className="relative z-10 bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-xl p-6 overflow-hidden shadow-xl">
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
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Current Adoption</p>
            <p className="text-2xl font-bold text-white">{currentAdoption}%</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Current Year</p>
            <p className="text-2xl font-bold text-white">{currentYear}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-1">Forecasted Growth</p>
            <p className="text-2xl font-bold text-basil-400">+{forecastedGrowth}%</p>
          </div>
        </div>
        
        {/* Chart */}
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={adoptionData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff7a14" stopOpacity={0.8} />
                  <stop offset="50%" stopColor="#ff7a14" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#33a1ff" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff7a14" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#33a1ff" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.5} />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#999' }} 
                axisLine={{ stroke: '#444' }}
                tickLine={{ stroke: '#444' }}
              />
              <YAxis 
                tick={{ fill: '#999' }} 
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
                stroke="url(#colorValue)" 
                strokeWidth={3}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  return (
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={payload.forecast ? 4 : 5}
                      fill={payload.forecast ? "#33a1ff" : "#ff7a14"}
                      stroke={payload.forecast ? "#33a1ff20" : "#ff7a1420"}
                      strokeWidth={2}
                    />
                  );
                }}
                activeDot={{ r: 8, fill: "#ff7a14", stroke: "#fff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-between mt-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-basil-500" />
            <span>Historical Data</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span>Forecast</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-4 italic text-right">
          Source: Industry Analysis & Market Projections 2023
        </p>
      </div>
    </motion.div>
  );
};

export default HeroCard;
