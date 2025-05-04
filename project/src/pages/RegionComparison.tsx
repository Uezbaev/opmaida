import React, { useState } from 'react';
import { BarChart2, ArrowRight } from 'lucide-react';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import { agriculturalRegions, regionalCropComparison } from '../data/mockData';

const RegionComparison: React.FC = () => {
  const [selectedRegions, setSelectedRegions] = useState<number[]>([1, 2]); // Default: Central Valley, Corn Belt
  
  const toggleRegion = (regionId: number) => {
    if (selectedRegions.includes(regionId)) {
      setSelectedRegions(selectedRegions.filter(id => id !== regionId));
    } else {
      setSelectedRegions([...selectedRegions, regionId]);
    }
  };

  // Create data specifically for comparing selected regions
  const selectedRegionData = agriculturalRegions
    .filter(region => selectedRegions.includes(region.id));
  
  // Format for the bar chart - comparing production across selected regions
  const productionComparisonData = regionalCropComparison.filter(d => 
    selectedRegionData.some(r => r.name.includes(d.name.split(',')[0]))
  );

  return (
    <div className="space-y-6 scale-in">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Region Comparison</h1>
        <div className="flex space-x-2">
          <button className="btn btn-primary text-sm">Export Comparison</button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-medium mb-4">Select Regions to Compare</h2>
        <div className="flex flex-wrap gap-3">
          {agriculturalRegions.map(region => (
            <button
              key={region.id}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                selectedRegions.includes(region.id)
                  ? 'bg-green-100 border-green-600 text-green-800'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => toggleRegion(region.id)}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>

      {selectedRegions.length === 0 ? (
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
          <div className="bg-gray-100 rounded-full p-4 inline-block mb-4">
            <BarChart2 size={24} className="text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">No Regions Selected</h3>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            Please select at least one region above to view comparison data and analytics.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-4">
              {selectedRegionData.map(region => (
                <div key={region.id} className="card p-4">
                  <h3 className="font-medium text-green-800">{region.name}</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Production</span>
                        <span className="font-medium">{region.production.toLocaleString()} tons</span>
                      </div>
                      <div className="mt-1 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-600 rounded-full" 
                          style={{ width: `${(region.production / 35000000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Area</span>
                        <span className="font-medium">{region.area.toLocaleString()} acres</span>
                      </div>
                      <div className="mt-1 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-600 rounded-full" 
                          style={{ width: `${(region.area / 25000000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-xs text-gray-600">Main Crops</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {region.mainCrops.map((crop, index) => (
                          <span 
                            key={index}
                            className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-xs">
                      <span className="text-gray-600">Soil Type:</span> {region.soilType}
                    </div>
                    
                    <div className="text-xs">
                      <span className="text-gray-600">Climate:</span> {region.climate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <BarChart
              data={productionComparisonData}
              keys={['Fruits', 'Vegetables', 'Nuts', 'Grains']}
              title="Crop Type Comparison (1000s Tons)"
              xAxisLabel="Region"
              yAxisLabel="Production"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedRegionData.map(region => (
              <PieChart
                key={region.id}
                data={region.cropDistribution}
                title={`${region.name} - Crop Distribution (%)`}
              />
            ))}
          </div>

          {selectedRegions.length === 2 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-medium">Direct Comparison</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <h3 className="font-medium text-green-800">{selectedRegionData[0].name}</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <p className="text-xl font-semibold">
                          {selectedRegionData[0].production.toLocaleString()} tons
                        </p>
                        <p className="text-sm text-gray-600">Total Production</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold">
                          {selectedRegionData[0].area.toLocaleString()} acres
                        </p>
                        <p className="text-sm text-gray-600">Cultivated Area</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold">
                          {(selectedRegionData[0].production / selectedRegionData[0].area).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">Yield (tons/acre)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <ArrowRight size={32} className="text-gray-400" />
                    <div className="text-sm text-gray-500 mt-2">vs.</div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-medium text-green-800">{selectedRegionData[1].name}</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <p className="text-xl font-semibold">
                          {selectedRegionData[1].production.toLocaleString()} tons
                        </p>
                        <p className="text-sm text-gray-600">Total Production</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold">
                          {selectedRegionData[1].area.toLocaleString()} acres
                        </p>
                        <p className="text-sm text-gray-600">Cultivated Area</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold">
                          {(selectedRegionData[1].production / selectedRegionData[1].area).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">Yield (tons/acre)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-4">Key Differences</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 text-green-700 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Crop Specialization</p>
                        <p className="text-sm text-gray-600">
                          {selectedRegionData[0].name} specializes in {selectedRegionData[0].mainCrops.join(' and ')}, 
                          while {selectedRegionData[1].name} focuses on {selectedRegionData[1].mainCrops.join(' and ')}.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 text-green-700 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Growing Conditions</p>
                        <p className="text-sm text-gray-600">
                          {selectedRegionData[0].name} has {selectedRegionData[0].climate} climate with {selectedRegionData[0].soilType} soil, 
                          compared to {selectedRegionData[1].name}'s {selectedRegionData[1].climate} climate and {selectedRegionData[1].soilType} soil.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 text-green-700 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Agricultural Practices</p>
                        <p className="text-sm text-gray-600">
                          {selectedRegionData[0].name} primarily uses {selectedRegionData[0].irrigationSystem} irrigation, 
                          while {selectedRegionData[1].name} relies on {selectedRegionData[1].irrigationSystem}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RegionComparison;