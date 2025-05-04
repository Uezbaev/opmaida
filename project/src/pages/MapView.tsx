import React, { useState } from 'react';
import { Filter, Download, Layers } from 'lucide-react';
import MapComponent from '../components/maps/MapComponent';
import { agriculturalRegions } from '../data/mockData';

interface Region {
  id: number;
  name: string;
  coordinates: [number, number];
  mainCrops: string[];
  production: number;
  area: number;
  growingSeason: string;
  climate: string;
  soilType: string;
  irrigationSystem: string;
  challenges: string[];
  yearlyProduction: { year: string; production: number }[];
  cropDistribution: { name: string; value: number }[];
}

const MapView: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [filter, setFilter] = useState('all');

  const handleRegionSelect = (region: Region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="space-y-6 scale-in">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Agricultural Map</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <select 
              className="select text-sm pl-9"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Crops</option>
              <option value="corn">Corn</option>
              <option value="soybeans">Soybeans</option>
              <option value="wheat">Wheat</option>
              <option value="fruits">Fruits</option>
            </select>
            <Filter size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          
          <button className="btn btn-primary text-sm flex items-center space-x-1">
            <Download size={16} />
            <span>Export</span>
          </button>
          
          <button className="btn btn-outline text-sm flex items-center space-x-1">
            <Layers size={16} />
            <span>Layers</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MapComponent 
            selectedRegionId={selectedRegion?.id}
            onRegionSelect={handleRegionSelect}
          />
        </div>
        
        <div className="lg:col-span-1">
          <div className="card h-full">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold">Region Details</h2>
            </div>
            
            {selectedRegion ? (
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-green-800">{selectedRegion.name}</h3>
                  <p className="text-gray-600">Agricultural Production Region</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-gray-600 text-sm">Production</p>
                    <p className="font-semibold text-lg">{selectedRegion.production.toLocaleString()} tons</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-gray-600 text-sm">Area</p>
                    <p className="font-semibold text-lg">{selectedRegion.area.toLocaleString()} acres</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Main Crops</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedRegion.mainCrops.map((crop, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Climate & Soil</h4>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm"><span className="font-medium">Climate:</span> {selectedRegion.climate}</p>
                      <p className="text-sm"><span className="font-medium">Soil Type:</span> {selectedRegion.soilType}</p>
                      <p className="text-sm"><span className="font-medium">Growing Season:</span> {selectedRegion.growingSeason}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Agricultural Practices</h4>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm"><span className="font-medium">Irrigation:</span> {selectedRegion.irrigationSystem}</p>
                      <p className="text-sm"><span className="font-medium">Challenges:</span> {selectedRegion.challenges.join(', ')}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Production Trend</h4>
                    <div className="mt-2 flex items-center space-x-1">
                      {selectedRegion.yearlyProduction.map((year, i, arr) => {
                        const isIncrease = i > 0 && year.production > arr[i-1].production;
                        const isLast = i === arr.length - 1;
                        
                        return (
                          <div key={year.year} className="flex flex-col items-center">
                            <span className={`text-xs ${isLast ? 'font-medium' : ''}`}>{year.year}</span>
                            <div 
                              className={`w-12 h-16 relative flex items-end ${isLast ? 'bg-green-100' : 'bg-gray-100'} rounded`}
                            >
                              <div 
                                className={`w-full ${isLast ? 'bg-green-600' : 'bg-gray-400'} rounded-t`}
                                style={{ 
                                  height: `${(year.production / 35000000) * 100}%`,
                                  minHeight: '10%',
                                }}
                              ></div>
                            </div>
                            {i < arr.length - 1 && (
                              <div className={`text-xs ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
                                {isIncrease ? '↗' : '↘'}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <button className="btn btn-primary w-full mt-4">View Detailed Analytics</button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 h-full">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <MapComponent />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Select a Region</h3>
                <p className="text-gray-600 mt-2">Click on any agricultural region on the map to view detailed information and analytics.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;