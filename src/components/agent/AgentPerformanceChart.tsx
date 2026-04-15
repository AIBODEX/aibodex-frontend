import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 70 },
  { name: 'Mar', value: 90 },
  { name: 'Apr', value: 0 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 100 },
  { name: 'Jul', value: 50 },
  { name: 'Aug', value: 60 },
  { name: 'Sep', value: 60 },
  { name: 'Oct', value: 30 },
  { name: 'Nov', value: 80 },
  { name: 'Dec', value: 90 },
];

const AgentPerformanceChart = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-[24px] p-6 w-full h-full flex flex-col">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-[18px] font-medium text-[#1E1E1E]">Market Performance</h2>
          <p className="text-[14px] text-gray-500 mt-1">Views and inquires all over time.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-100 rounded-lg text-[13px] text-gray-600 font-medium">
          <span>Last 30 days</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#E5E7EB" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#6B7280' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#6B7280' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#11B880" 
              strokeWidth={2} 
              dot={{ r: 4, fill: '#11B880', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#11B880', stroke: '#fff', strokeWidth: 2 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AgentPerformanceChart;
