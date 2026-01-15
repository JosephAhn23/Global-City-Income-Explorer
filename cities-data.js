// Global cities with median income data (in USD per year)
const citiesData = [
    // North America
    { name: "New York", country: "USA", lat: 40.7128, lng: -74.0060, income: 75000 },
    { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437, income: 65000 },
    { name: "Chicago", country: "USA", lat: 41.8781, lng: -87.6298, income: 62000 },
    
    { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, income: 68000 },
    { name: "Montreal", country: "Canada", lat: 45.5017, lng: -73.5673, income: 55000 },
    { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207, income: 72000 },
    
    { name: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332, income: 18000 },
    
    // Europe
    { name: "London", country: "UK", lat: 51.5074, lng: -0.1278, income: 55000 },
    { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, income: 45000 },
    { name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, income: 48000 },
    { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038, income: 35000 },
    { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, income: 32000 },
    { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, income: 52000 },
    { name: "Zurich", country: "Switzerland", lat: 47.3769, lng: 8.5417, income: 85000 },
    { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686, income: 50000 },
    { name: "Oslo", country: "Norway", lat: 59.9139, lng: 10.7522, income: 62000 },
    { name: "Moscow", country: "Russia", lat: 55.7558, lng: 37.6173, income: 15000 },
    
    // Asia
    { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, income: 42000 },
    { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780, income: 38000 },
    { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, income: 65000 },
    { name: "Hong Kong", country: "Hong Kong", lat: 22.3193, lng: 114.1694, income: 48000 },
    { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737, income: 25000 },
    { name: "Beijing", country: "China", lat: 39.9042, lng: 116.4074, income: 28000 },
    { name: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777, income: 8000 },
    { name: "Delhi", country: "India", lat: 28.6139, lng: 77.2090, income: 7500 },
    { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018, income: 12000 },
    { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708, income: 58000 },
    { name: "Tel Aviv", country: "Israel", lat: 32.0853, lng: 34.7818, income: 40000 },
    
    // South America
    { name: "São Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333, income: 14000 },
    { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816, income: 11000 },
    { name: "Lima", country: "Peru", lat: -12.0464, lng: -77.0428, income: 9000 },
    { name: "Bogotá", country: "Colombia", lat: 4.7110, lng: -74.0721, income: 8500 },
    { name: "Santiago", country: "Chile", lat: -33.4489, lng: -70.6693, income: 16000 },
    
    // Africa
    { name: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357, income: 6000 },
    { name: "Lagos", country: "Nigeria", lat: 6.5244, lng: 3.3792, income: 4000 },
    { name: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473, income: 12000 },
    { name: "Nairobi", country: "Kenya", lat: -1.2921, lng: 36.8219, income: 5000 },
    
    // Oceania
    { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, income: 70000 },
    { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, income: 68000 },
    { name: "Auckland", country: "New Zealand", lat: -36.8485, lng: 174.7633, income: 55000 }
];

