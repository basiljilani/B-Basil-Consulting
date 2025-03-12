
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

// Research sources information with added credibility details
const dataSources = [
  {
    name: "Gartner Research",
    description: "Industry leading market analysis",
    credibility: "Top-tier industry analyst"
  },
  {
    name: "McKinsey Global Institute",
    description: "Business and economics research",
    credibility: "Fortune 500 trusted advisor"
  },
  {
    name: "Deloitte Insights",
    description: "Enterprise transformation studies",
    credibility: "Big Four consulting firm"
  }
];

// Custom tooltip component with enhanced styling
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-gray-800/95 p-4 rounded-lg border border-gray-700 shadow-xl backdrop-blur-sm">
        <p className="text-gray-300 font-medium mb-1">{`Year: ${label}`}</p>
        <p className="text-white text-lg font-semibold mb-1">
          <span>{`Adoption: ${payload[0].value}%`}</span>
        </p>
        {data.forecast && (
          <div className="flex items-center gap-1.5 mt-1.5 py-1 px-2 bg-purple-900/50 rounded border border-purple-700/50">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <p className="text-xs text-purple-300 font-medium">Forecasted value</p>
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
      {/* Main card */}
      <div className="relative z-10 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-basil-500 to-basil-600 flex items-center justify-center text-white">
                <BarChart2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Global Data Infrastructure Adoption</h3>
                <p className="text-gray-400 text-sm mt-0.5">Percentage of enterprises with mature data infrastructure</p>
              </div>
            </div>
            <div className="text-sm bg-gray-800/70 py-1 px-3 rounded-full border border-gray-700 text-gray-300">2018-2030</div>
          </div>
          
          {/* Key stats with improved visuals */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-lg p-4 border border-gray-700/50"
            >
              <p className="text-gray-400 text-sm mb-1">Current Adoption</p>
              <p className="text-2xl font-bold text-white">{currentAdoption}%</p>
              <div className="h-1 w-2/3 bg-basil-500/30 rounded-full mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-basil-500 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-lg p-4 border border-gray-700/50"
            >
              <p className="text-gray-400 text-sm mb-1">Current Year</p>
              <p className="text-2xl font-bold text-white flex items-center">
                {currentYear}
                <span className="ml-2 bg-basil-500/20 text-basil-400 text-xs py-0.5 px-1.5 rounded">Now</span>
              </p>
              <div className="h-1 w-2/3 bg-gray-700 rounded-full mt-2" />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-lg p-4 border border-gray-700/50"
            >
              <p className="text-gray-400 text-sm mb-1">Forecasted Growth</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-basil-400 to-basil-500 flex items-center">
                +{forecastedGrowth}%
                <TrendingUp className="h-5 w-5 ml-2 text-basil-500" />
              </p>
              <div className="h-1 w-2/3 bg-basil-500/30 rounded-full mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                  className="h-full bg-gradient-to-r from-basil-500 to-basil-400 rounded-full"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced Chart with more aesthetic styling */}
          <div className="h-72 w-full mb-6 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={adoptionData}
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
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
                  <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4d94ff" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#4d94ff" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="colorAreaForecast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#bbb' }} 
                  axisLine={{ stroke: '#444' }}
                  tickLine={{ stroke: '#444' }}
                  tickMargin={10}
                />
                <YAxis 
                  tick={{ fill: '#bbb' }} 
                  axisLine={{ stroke: '#444' }}
                  tickLine={{ stroke: '#444' }}
                  domain={[0, 130]}
                  unit="%"
                  tickMargin={10}
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
                
                {/* Historical Area */}
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="none"
                  fillOpacity={1}
                  fill="url(#colorArea)"
                  activeDot={false}
                  name="Historical Area"
                  stackId="1"
                  connectNulls={true}
                />
                
                {/* Forecast Area */}
                <Area
                  type="monotone"
                  dataKey={(data) => data.forecast ? data.value : null}
                  stroke="none"
                  fillOpacity={1}
                  fill="url(#colorAreaForecast)"
                  activeDot={false}
                  name="Forecast Area"
                  stackId="2"
                  connectNulls={true}
                />
                
                {/* Historical Line */}
                <Line 
                  type="monotone" 
                  dataKey={(data) => data.forecast ? null : data.value}
                  stroke="#4d94ff" 
                  strokeWidth={3}
                  activeDot={{ r: 8, fill: "#4d94ff", stroke: "#fff", strokeWidth: 2 }}
                  dot={{ r: 5, fill: "#4d94ff", stroke: "#4d94ff", strokeWidth: 1, strokeOpacity: 0.8 }}
                  name="Historical"
                  connectNulls={true}
                />
                
                {/* Forecast Line */}
                <Line 
                  type="monotone" 
                  dataKey={(data) => data.forecast ? data.value : null}
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  activeDot={{ r: 8, fill: "#8B5CF6", stroke: "#fff", strokeWidth: 2 }}
                  dot={{ r: 5, fill: "#8B5CF6", stroke: "#8B5CF6", strokeWidth: 1, strokeOpacity: 0.8 }}
                  name="Forecast"
                  connectNulls={true}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between mb-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <span>Historical Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <span>Forecast</span>
            </div>
          </div>
          
          {/* Enhanced Credible Sources Section with motion effects */}
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-800/80 to-gray-850/80 rounded-lg p-5 border border-gray-700 mb-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-basil-400" />
              <h4 className="text-white font-medium">Research Sources</h4>
              <span className="text-xs bg-basil-500/20 text-basil-400 py-0.5 px-1.5 rounded-md ml-1">Premium Data</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dataSources.map((source, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.03)' }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-gray-700"
                >
                  <Bookmark className="h-5 w-5 text-basil-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-white">{source.name}</p>
                      <ExternalLink className="h-3.5 w-3.5 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{source.description}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Sparkles className="h-3 w-3 text-basil-400" />
                      <p className="text-xs text-basil-400/90 font-medium">{source.credibility}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500 italic">
              Last updated: June 2024
            </p>
            <p className="text-xs text-gray-400 italic flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-basil-400" />
              Source: Industry Analysis & Market Projections 2023-24
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
