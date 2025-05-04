import React, { useState } from 'react';
import { Cloud, CloudRain, Thermometer, Wind, Calendar } from 'lucide-react';
import LineChart from '../components/charts/LineChart';
import { weatherImpactData } from '../data/mockData';

const WeatherInsights: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("Central Valley, CA");
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  
  return (
    <div className="space-y-6 scale-in">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Weather Insights</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <select 
              className="select text-sm pl-9"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option>Central Valley, CA</option>
              <option>Corn Belt, Iowa</option>
              <option>Florida Citrus Belt</option>
              <option>Columbia Basin, WA</option>
              <option>Mississippi Delta</option>
            </select>
            <Cloud size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          
          <div className="relative">
            <select 
              className="select text-sm pl-9"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
            <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
              <Thermometer size={20} />
            </div>
            <h3 className="font-medium">Temperature</h3>
          </div>
          <div className="text-3xl font-semibold">68°F</div>
          <p className="text-gray-600 text-sm mt-1">Average for {selectedYear}</p>
          
          <div className="flex items-center mt-3 text-sm">
            <span className="text-green-600">+2.1°F</span>
            <span className="text-gray-500 ml-2">from historical average</span>
          </div>
        </div>
        
        <div className="card p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
              <CloudRain size={20} />
            </div>
            <h3 className="font-medium">Precipitation</h3>
          </div>
          <div className="text-3xl font-semibold">32"</div>
          <p className="text-gray-600 text-sm mt-1">Total for {selectedYear}</p>
          
          <div className="flex items-center mt-3 text-sm">
            <span className="text-red-600">-3.4"</span>
            <span className="text-gray-500 ml-2">from historical average</span>
          </div>
        </div>
        
        <div className="card p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
              <Wind size={20} />
            </div>
            <h3 className="font-medium">Growing Days</h3>
          </div>
          <div className="text-3xl font-semibold">245</div>
          <p className="text-gray-600 text-sm mt-1">Days in {selectedYear}</p>
          
          <div className="flex items-center mt-3 text-sm">
            <span className="text-green-600">+12 days</span>
            <span className="text-gray-500 ml-2">from historical average</span>
          </div>
        </div>
        
        <div className="card p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
              <Cloud size={20} />
            </div>
            <h3 className="font-medium">Humidity</h3>
          </div>
          <div className="text-3xl font-semibold">58%</div>
          <p className="text-gray-600 text-sm mt-1">Average for {selectedYear}</p>
          
          <div className="flex items-center mt-3 text-sm">
            <span className="text-red-600">-2%</span>
            <span className="text-gray-500 ml-2">from historical average</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={weatherImpactData}
          keys={['Temperature', 'Rainfall']}
          title="Temperature & Rainfall Correlation"
          xAxisLabel="Month"
          yAxisLabel="Measurement"
        />
        
        <LineChart
          data={weatherImpactData}
          keys={['YieldIndex']}
          title="Impact on Crop Yield Index"
          xAxisLabel="Month"
          yAxisLabel="Yield Index"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-medium">Seasonal Weather Patterns for {selectedRegion}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <h3 className="font-medium text-green-800 mb-2">Spring</h3>
              <div className="flex justify-center mb-3">
                <CloudRain size={32} className="text-blue-600" />
              </div>
              <p className="text-sm">Temperature: 55-68°F</p>
              <p className="text-sm">Rainfall: 8-12 inches</p>
              <p className="text-sm">Growing Conditions: Good</p>
              <p className="mt-3 text-xs text-gray-600">Ideal for early planting and germination</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <h3 className="font-medium text-amber-800 mb-2">Summer</h3>
              <div className="flex justify-center mb-3">
                <Thermometer size={32} className="text-amber-600" />
              </div>
              <p className="text-sm">Temperature: 75-95°F</p>
              <p className="text-sm">Rainfall: 3-7 inches</p>
              <p className="text-sm">Growing Conditions: Excellent</p>
              <p className="mt-3 text-xs text-gray-600">Peak growing season with irrigation needs</p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4 text-center">
              <h3 className="font-medium text-amber-800 mb-2">Fall</h3>
              <div className="flex justify-center mb-3">
                <Wind size={32} className="text-amber-600" />
              </div>
              <p className="text-sm">Temperature: 58-75°F</p>
              <p className="text-sm">Rainfall: 5-9 inches</p>
              <p className="text-sm">Growing Conditions: Good</p>
              <p className="mt-3 text-xs text-gray-600">Harvest season with variable conditions</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <h3 className="font-medium text-blue-800 mb-2">Winter</h3>
              <div className="flex justify-center mb-3">
                <Cloud size={32} className="text-blue-600" />
              </div>
              <p className="text-sm">Temperature: 35-50°F</p>
              <p className="text-sm">Rainfall: 10-15 inches</p>
              <p className="text-sm">Growing Conditions: Limited</p>
              <p className="mt-3 text-xs text-gray-600">Field preparation and winter crops</p>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="font-medium mb-4">Weather Impact Analysis</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-xs">1</span>
                </div>
                <div>
                  <p className="font-medium">Temperature Trends</p>
                  <p className="text-sm text-gray-600">
                    Average temperatures in {selectedRegion} have increased by 2.1°F over the past decade, 
                    extending the growing season by approximately 12 days but also increasing irrigation requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-xs">2</span>
                </div>
                <div>
                  <p className="font-medium">Rainfall Patterns</p>
                  <p className="text-sm text-gray-600">
                    Precipitation has become more variable, with a 15% increase in extreme rainfall events 
                    and longer dry periods between storms, creating challenges for consistent crop development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-xs">3</span>
                </div>
                <div>
                  <p className="font-medium">Yield Correlation</p>
                  <p className="text-sm text-gray-600">
                    Statistical analysis shows that optimal yields in {selectedRegion} are achieved when average 
                    temperatures remain between 65-75°F during key growth stages with consistent moisture availability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                  <span className="text-xs">4</span>
                </div>
                <div>
                  <p className="font-medium">Adaptation Strategies</p>
                  <p className="text-sm text-gray-600">
                    Farmers in this region are increasingly adopting drought-resistant crop varieties, 
                    improved irrigation efficiency, and adjusting planting schedules to mitigate weather variability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInsights;