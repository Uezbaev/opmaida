import React from 'react';
import { BrainIcon as GrainIcon, DropletIcon, ScalingIcon as SeedlingIcon, TrendingUpIcon } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import BarChart from '../components/charts/BarChart';
import { 
  dashboardStats, 
  cropProductionTrend, 
  nationalCropDistribution,
  regionalCropComparison
} from '../data/mockData';

const Dashboard: React.FC = () => {
  const iconMap = {
    'Total Production': <GrainIcon size={24} />,
    'Cultivated Area': <SeedlingIcon size={24} />,
    'Yield Efficiency': <TrendingUpIcon size={24} />,
    'Water Usage': <DropletIcon size={24} />,
  };

  return (
    <div className="space-y-6 scale-in">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Agricultural Dashboard</h1>
        <div className="flex space-x-2">
          <select className="select text-sm">
            <option>2023 Season</option>
            <option>2022 Season</option>
            <option>2021 Season</option>
          </select>
          <button className="btn btn-primary text-sm">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map(stat => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={iconMap[stat.title as keyof typeof iconMap]}
            description={stat.description}
            color={stat.change > 0 ? 'green' : 'red'}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={cropProductionTrend}
          keys={['Corn', 'Soybeans', 'Wheat', 'Cotton']}
          title="National Crop Production Trends (Million Bushels)"
          xAxisLabel="Year"
          yAxisLabel="Production"
        />
        <PieChart
          data={nationalCropDistribution}
          title="National Crop Distribution by Area (%)"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <BarChart
          data={regionalCropComparison}
          keys={['Fruits', 'Vegetables', 'Nuts', 'Grains']}
          title="Regional Crop Type Comparison (1000s Tons)"
          xAxisLabel="Region"
          yAxisLabel="Production"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-lg font-medium mb-4">Recent Agricultural Insights</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
            <div className="bg-green-100 text-green-700 p-2 rounded-full">
              <TrendingUpIcon size={16} />
            </div>
            <div>
              <h3 className="font-medium">Corn Production Shows Strong Growth</h3>
              <p className="text-sm text-gray-600">Corn yields have increased by 7% over the previous season due to favorable weather conditions and improved farming techniques.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
            <div className="bg-amber-100 text-amber-700 p-2 rounded-full">
              <DropletIcon size={16} />
            </div>
            <div>
              <h3 className="font-medium">Water Conservation Efforts Paying Off</h3>
              <p className="text-sm text-gray-600">Implementation of smart irrigation systems has resulted in a 15% reduction in water usage across major growing regions.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
              <SeedlingIcon size={16} />
            </div>
            <div>
              <h3 className="font-medium">New Drought-Resistant Varieties Show Promise</h3>
              <p className="text-sm text-gray-600">Field trials of new crop varieties have demonstrated 30% better resilience to drought conditions compared to traditional varieties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;