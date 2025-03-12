
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
  TooltipProps,
  Area,
  ComposedChart
} from 'recharts';
import { BarChart2, Bookmark, Award, Sparkles, TrendingUp, ExternalLink } from 'lucide-react';

// Data includes historical data and forecasts - reduced dataset
const adoptionData = [
  { year: 2018, value: 42, forecast: false },
  { year: 2020, value: 56, forecast: false },
  { year: 2022, value: 78, forecast: false },
  { year: 2024, value: 94, forecast: false },
  { year: 2026, value: 103, forecast: true },
  { year: 2028, value: 112, forecast: true },
  { year: 2030, value: 120, forecast: true },
];

const currentYear = 2024;
const currentAdoption = adoptionData.find(item => item.year === currentYear)?.value || 0;
const forecastedGrowth = ((adoptionData[adoptionData.length - 1].value - currentAdoption) / currentAdoption * 100).toFixed(1);

// Simplified data sources
const dataSources = [
  {
    name: "Gartner Research",
    description: "Top-tier industry analyst",
  },
  {
    name: "McKinsey Global Institute",
    description: "Fortune 500 trusted advisor",
  }
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-gray-800/95 p-3 rounded-lg border border-gray-700 shadow-xl backdrop-blur-sm">
        <p className="text-gray-300 font-medium text-sm">{`Year: ${label}`}</p>
        <p className="text-white font-semibold">
          <span>{`Adoption: ${payload[0].value}%`}</span>
        </p>
        {data.forecast && (
          <div className="flex items-center gap-1 mt-1 py-0.5 px-1.5 bg-purple-900/50 rounded border border-purple-700/50">
            <Sparkles className="h-3 w-3 text-purple-400" />
            <p className="text-xs text-purple-300">Forecast</p>
          </div>
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
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      {/* Main card - more compact */}
      <div className="relative z-10 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-basil-500 to-basil-600 flex items-center justify-center text-white">
                <BarChart2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Global Data Infrastructure</h3>
                <p className="text-gray-400 text-xs">Enterprise adoption %</p>
              </div>
            </div>
            <div className="text-xs bg-gray-800/70 py-0.5 px-2 rounded-full border border-gray-700 text-gray-300">2018-2030</div>
          </div>
          
          {/* Key stats row - more compact */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-lg p-2 border border-gray-700/50"
            >
              <p className="text-gray-400 text-xs mb-0.5">Current</p>
              <p className="text-xl font-bold text-white">{currentAdoption}%</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-lg p-2 border border-gray-700/50"
            >
              <p className="text-gray-400 text-xs mb-0.5">Year</p>
              <p className="text-xl font-bold text-white flex items-center">
                {currentYear}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-lg p-2 border border-gray-700/50"
            >
              <p className="text-gray-400 text-xs mb-0.5">Growth</p>
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-basil-400 to-basil-500 flex items-center">
                +{forecastedGrowth}%
              </p>
            </motion.div>
          </div>
          
          {/* Chart - reduced height */}
          <div className="h-48 w-full mb-3 bg-gray-900/50 p-2 rounded-lg border border-gray-800">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={adoptionData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorHistorical" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4d94ff" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4d94ff" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#bbb' }} 
                  axisLine={{ stroke: '#444' }}
                  tickLine={{ stroke: '#444' }}
                />
                <YAxis 
                  tick={{ fill: '#bbb' }} 
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
                />
                
                {/* Historical Line */}
                <Line 
                  type="monotone" 
                  dataKey={(data) => data.forecast ? null : data.value}
                  stroke="#4d94ff" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#4d94ff", stroke: "#fff", strokeWidth: 1 }}
                  name="Historical"
                  connectNulls={true}
                />
                
                {/* Forecast Line */}
                <Line 
                  type="monotone" 
                  dataKey={(data) => data.forecast ? data.value : null}
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 4, fill: "#8B5CF6", stroke: "#fff", strokeWidth: 1 }}
                  name="Forecast"
                  connectNulls={true}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between mb-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Historical</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>Forecast</span>
            </div>
          </div>
          
          {/* Sources section - simplified */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-850/80 rounded-lg p-3 border border-gray-700 mb-2">
            <div className="flex items-center gap-1 mb-2">
              <Award className="h-4 w-4 text-basil-400" />
              <h4 className="text-sm text-white">Sources</h4>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {dataSources.map((source, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-1 p-1.5 rounded-md"
                >
                  <Bookmark className="h-3 w-3 text-basil-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-white">{source.name}</p>
                    <p className="text-xs text-gray-400">{source.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-xs text-gray-500 italic text-center">
            Source: Industry Analysis 2024
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
