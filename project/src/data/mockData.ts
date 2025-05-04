// Agricultural Regions
export const agriculturalRegions = [
  {
    id: 1,
    name: "Central Valley, CA",
    coordinates: [36.7783, -119.4179],
    mainCrops: ["Almonds", "Grapes", "Tomatoes"],
    production: 25000000,
    area: 7000000,
    growingSeason: "Year-round",
    climate: "Mediterranean",
    soilType: "Alluvial",
    irrigationSystem: "Drip and Sprinkler",
    challenges: ["Water Scarcity", "Labor Shortages"],
    yearlyProduction: [
      { year: "2019", production: 23500000 },
      { year: "2020", production: 24100000 },
      { year: "2021", production: 24800000 },
      { year: "2022", production: 25000000 },
    ],
    cropDistribution: [
      { name: "Almonds", value: 35 },
      { name: "Grapes", value: 25 },
      { name: "Tomatoes", value: 15 },
      { name: "Pistachios", value: 10 },
      { name: "Other", value: 15 },
    ]
  },
  {
    id: 2,
    name: "Corn Belt, Iowa",
    coordinates: [41.8780, -93.0977],
    mainCrops: ["Corn", "Soybeans", "Wheat"],
    production: 32000000,
    area: 24000000,
    growingSeason: "April - October",
    climate: "Humid Continental",
    soilType: "Mollisol",
    irrigationSystem: "Pivot Irrigation",
    challenges: ["Soil Erosion", "Weather Variability"],
    yearlyProduction: [
      { year: "2019", production: 30100000 },
      { year: "2020", production: 31200000 },
      { year: "2021", production: 31800000 },
      { year: "2022", production: 32000000 },
    ],
    cropDistribution: [
      { name: "Corn", value: 55 },
      { name: "Soybeans", value: 35 },
      { name: "Wheat", value: 5 },
      { name: "Other", value: 5 },
    ]
  },
  {
    id: 3,
    name: "Florida Citrus Belt",
    coordinates: [28.2917, -81.4075],
    mainCrops: ["Oranges", "Grapefruit", "Sugarcane"],
    production: 15000000,
    area: 5000000,
    growingSeason: "Year-round",
    climate: "Subtropical",
    soilType: "Sandy",
    irrigationSystem: "Microsprinkler",
    challenges: ["Citrus Greening Disease", "Hurricanes"],
    yearlyProduction: [
      { year: "2019", production: 17500000 },
      { year: "2020", production: 16200000 },
      { year: "2021", production: 15500000 },
      { year: "2022", production: 15000000 },
    ],
    cropDistribution: [
      { name: "Oranges", value: 60 },
      { name: "Grapefruit", value: 15 },
      { name: "Sugarcane", value: 20 },
      { name: "Other", value: 5 },
    ]
  },
  {
    id: 4,
    name: "Columbia Basin, WA",
    coordinates: [47.5511, -120.6624],
    mainCrops: ["Apples", "Cherries", "Potatoes"],
    production: 11000000,
    area: 4000000,
    growingSeason: "April - October",
    climate: "Semi-arid",
    soilType: "Loamy",
    irrigationSystem: "Center Pivot",
    challenges: ["Water Rights", "Frost Damage"],
    yearlyProduction: [
      { year: "2019", production: 10200000 },
      { year: "2020", production: 10500000 },
      { year: "2021", production: 10800000 },
      { year: "2022", production: 11000000 },
    ],
    cropDistribution: [
      { name: "Apples", value: 45 },
      { name: "Cherries", value: 25 },
      { name: "Potatoes", value: 20 },
      { name: "Other", value: 10 },
    ]
  },
  {
    id: 5,
    name: "Mississippi Delta",
    coordinates: [33.5975, -90.5737],
    mainCrops: ["Cotton", "Rice", "Soybeans"],
    production: 18000000,
    area: 9000000,
    growingSeason: "March - November",
    climate: "Humid Subtropical",
    soilType: "Alluvial",
    irrigationSystem: "Furrow Irrigation",
    challenges: ["Flooding", "Soil Salinity"],
    yearlyProduction: [
      { year: "2019", production: 17100000 },
      { year: "2020", production: 17400000 },
      { year: "2021", production: 17800000 },
      { year: "2022", production: 18000000 },
    ],
    cropDistribution: [
      { name: "Cotton", value: 30 },
      { name: "Rice", value: 25 },
      { name: "Soybeans", value: 35 },
      { name: "Other", value: 10 },
    ]
  }
];

// Crop production trend over time
export const cropProductionTrend = [
  { name: "2017", Corn: 14600, Soybeans: 4390, Wheat: 1740, Cotton: 920 },
  { name: "2018", Corn: 14420, Soybeans: 4428, Wheat: 1885, Cotton: 862 },
  { name: "2019", Corn: 13620, Soybeans: 3558, Wheat: 1920, Cotton: 890 },
  { name: "2020", Corn: 14182, Soybeans: 4135, Wheat: 1826, Cotton: 812 },
  { name: "2021", Corn: 15115, Soybeans: 4465, Wheat: 1646, Cotton: 915 },
  { name: "2022", Corn: 13930, Soybeans: 4276, Wheat: 1650, Cotton: 830 },
  { name: "2023", Corn: 15150, Soybeans: 4515, Wheat: 1690, Cotton: 875 },
];

// Regional crop comparison 
export const regionalCropComparison = [
  { name: "Central Valley", Fruits: 8500, Vegetables: 4200, Nuts: 7300, Grains: 2000 },
  { name: "Corn Belt", Fruits: 1200, Vegetables: 2500, Nuts: 900, Grains: 12400 },
  { name: "Florida Belt", Fruits: 7100, Vegetables: 3200, Nuts: 500, Grains: 1200 },
  { name: "Columbia Basin", Fruits: 5600, Vegetables: 3100, Nuts: 400, Grains: 1900 },
  { name: "Mississippi Delta", Fruits: 800, Vegetables: 1500, Nuts: 600, Grains: 6100 },
];

// Weather impact on yields
export const weatherImpactData = [
  { name: "Jan", Temperature: 32, Rainfall: 65, YieldIndex: 40 },
  { name: "Feb", Temperature: 38, Rainfall: 75, YieldIndex: 45 },
  { name: "Mar", Temperature: 45, Rainfall: 90, YieldIndex: 60 },
  { name: "Apr", Temperature: 58, Rainfall: 110, YieldIndex: 80 },
  { name: "May", Temperature: 68, Rainfall: 120, YieldIndex: 95 },
  { name: "Jun", Temperature: 75, Rainfall: 85, YieldIndex: 100 },
  { name: "Jul", Temperature: 82, Rainfall: 70, YieldIndex: 90 },
  { name: "Aug", Temperature: 80, Rainfall: 65, YieldIndex: 85 },
  { name: "Sep", Temperature: 72, Rainfall: 85, YieldIndex: 80 },
  { name: "Oct", Temperature: 60, Rainfall: 95, YieldIndex: 70 },
  { name: "Nov", Temperature: 48, Rainfall: 80, YieldIndex: 55 },
  { name: "Dec", Temperature: 38, Rainfall: 70, YieldIndex: 45 },
];

// National crop distribution
export const nationalCropDistribution = [
  { name: "Corn", value: 30 },
  { name: "Soybeans", value: 25 },
  { name: "Wheat", value: 12 },
  { name: "Cotton", value: 8 },
  { name: "Fruits & Nuts", value: 15 },
  { name: "Vegetables", value: 10 },
];

// Dashboard statistics
export const dashboardStats = [
  {
    id: 1,
    title: "Total Production",
    value: "105.2M tons",
    change: 3.2,
    description: "Combined crop production nationwide",
  },
  {
    id: 2,
    title: "Cultivated Area",
    value: "325M acres",
    change: 1.5,
    description: "Total farming land under cultivation",
  },
  {
    id: 3,
    title: "Yield Efficiency",
    value: "67%",
    change: 4.8,
    description: "Average yield as percentage of potential yield",
  },
  {
    id: 4,
    title: "Water Usage",
    value: "850B gallons",
    change: -2.3,
    description: "Annual agricultural water consumption",
  },
];