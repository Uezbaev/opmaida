import React, { useState } from 'react';
import { BarChart2, Sprout, TrendingUp, SlidersHorizontal } from 'lucide-react';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import { cropProductionTrend, regionalCropComparison } from '../data/mockData';

const CROPS = ["Corn", "Soybeans", "Wheat", "Cotton", "Fruits", "Vegetables"];

const CropAnalytics: React.FC = () => {
  const [selectedCrops, setSelectedCrops] = useState<string[]>(["Corn", "Soybeans"]);
  const [timeRange, setTimeRange] = useState<string>("7y");

  const toggleCrop = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter(c => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  // Filter data to only include selected crops
  const filteredProductionData = cropProductionTrend.map(data => {
    const filtered: any = { name: data.name };
    Object.keys(data).forEach(key => {
      if (key === "name" || selectedCrops.includes(key)) {
        filtered[key] = data[key as keyof typeof data];
      }
    });
    return filtered;
  });

  const yieldData = [
    { name: "2017", Corn: 176.6, Soybeans: 49.3, Wheat: 46.3, Cotton: 905 },
    { name: "2018", Corn: 176.4, Soybeans: 51.6, Wheat: 47.6, Cotton: 882 },
    { name: "2019", Corn: 167.4, Soybeans: 47.4, Wheat: 51.7, Cotton: 823 },
    { name: "2020", Corn: 171.4, Soybeans: 50.2, Wheat: 49.7, Cotton: 847 },
    { name: "2021", Corn: 177.0, Soybeans: 51.4, Wheat: 44.3, Cotton: 879 },
    { name: "2022", Corn: 173.3, Soybeans: 49.8, Wheat: 46.5, Cotton: 850 },
    { name: "2023", Corn: 178.2, Soybeans: 52.1, Wheat: 48.2, Cotton: 891 },
  ];

  const filteredYieldData = yieldData.map(data => {
    const filtered: any = { name: data.name };
    Object.keys(data).forEach(key => {
      if (key === "name" || selectedCrops.includes(key)) {
        filtered[key] = data[key as keyof typeof data];
      }
    });
    return filtered;
  });

  return (
    <div className="space-y-6 scale-in">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Crop Analytics</h1>
        <div className="flex space-x-2">
          <select 
            className="select text-sm"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="3y">Last 3 Years</option>
            <option value="5y">Last 5 Years</option>
            <option value="7y">Last 7 Years</option>
            <option value="10y">Last 10 Years</option>
          </select>
          <button className="btn btn-primary text-sm flex items-center space-x-1">
            <SlidersHorizontal size={16} />
            <span>Customize</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-medium mb-4">Select Crops to Compare</h2>
        <div className="flex flex-wrap gap-3">
          {CROPS.map(crop => (
            <button
              key={crop}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                selectedCrops.includes(crop)
                  ? 'bg-green-100 border-green-600 text-green-800'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => toggleCrop(crop)}
            >
              {crop}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 text-green-700 p-2 rounded-full">
              <Sprout size={20} />
            </div>
            <h3 className="font-medium">Selected Crops</h3>
          </div>
          <div className="text-3xl font-semibold">{selectedCrops.length}</div>
          <p className="text-gray-600 text-sm mt-1">out of {CROPS.length} major crops</p>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Top Producing Regions</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Corn Belt</span>
                <span className="text-sm font-medium">32.0M tons</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Central Valley</span>
                <span className="text-sm font-medium">25.0M tons</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Mississippi Delta</span>
                <span className="text-sm font-medium">18.0M tons</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
              <BarChart2 size={20} />
            </div>
            <h3 className="font-medium">Production Volume</h3>
          </div>
          <div className="text-3xl font-semibold">105.2M</div>
          <p className="text-gray-600 text-sm mt-1">tons, +3.2% from last year</p>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Top Crops by Volume</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Corn</span>
                <span className="text-sm font-medium">15.1M tons</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Soybeans</span>
                <span className="text-sm font-medium">4.5M tons</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Wheat</span>
                <span className="text-sm font-medium">1.7M tons</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-amber-100 text-amber-700 p-2 rounded-full">
              <TrendingUp size={20} />
            </div>
            <h3 className="font-medium">Yield Efficiency</h3>
          </div>
          <div className="text-3xl font-semibold">+4.8%</div>
          <p className="text-gray-600 text-sm mt-1">average increase in yield</p>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Factors Affecting Yield</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Weather Conditions</span>
                <span className="text-sm font-medium">Favorable</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Irrigation Coverage</span>
                <span className="text-sm font-medium">72%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Soil Health Index</span>
                <span className="text-sm font-medium">Good</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={filteredProductionData}
          keys={selectedCrops}
          title="Crop Production Trend (Million Bushels)"
          xAxisLabel="Year"
          yAxisLabel="Production"
        />
        
        <LineChart
          data={filteredYieldData}
          keys={selectedCrops}
          title="Crop Yield Trends"
          xAxisLabel="Year"
          yAxisLabel="Yield (bu/acre)"
        />
      </div>
      
      <div>
        <BarChart
          data={regionalCropComparison}
          keys={['Fruits', 'Vegetables', 'Nuts', 'Grains'].filter(crop => 
            selectedCrops.includes(crop)
          )}
          title="Regional Distribution by Crop Types (1000s Tons)"
          xAxisLabel="Region"
          yAxisLabel="Production"
        />
      </div>
    </div>
  );
};

export default CropAnalytics;