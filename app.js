// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

// Function to get color based on income
function getIncomeColor(income) {
    if (income >= 80000) return '#2ecc71'; // Green
    if (income >= 60000) return '#3498db'; // Blue
    if (income >= 40000) return '#f39c12'; // Orange
    return '#e74c3c'; // Red
}

// Function to format income
function formatIncome(income) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(income);
}

// Create markers for each city
const markers = [];
citiesData.forEach(city => {
    const marker = L.circleMarker([city.lat, city.lng], {
        radius: 8,
        fillColor: getIncomeColor(city.income),
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);
    
    // Create popup content
    const popupContent = `
        <div class="city-popup">
            <h3>${city.name}</h3>
            <p class="country">${city.country}</p>
            <p class="income">${formatIncome(city.income)}</p>
            <p style="font-size: 0.9em; color: #7f8c8d;">Median Annual Income</p>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    
    // Store city data with marker
    marker.cityData = city;
    markers.push(marker);
    
    // Add click event to show info in panel
    marker.on('click', function() {
        showCityInfo(city);
    });
});

// Function to show city info in the panel
function showCityInfo(city) {
    const infoPanel = document.getElementById('cityInfo');
    infoPanel.innerHTML = `
        <strong>${city.name}, ${city.country}</strong><br>
        <span style="font-size: 1.3em; color: #27ae60; font-weight: bold;">
            ${formatIncome(city.income)}
        </span><br>
        <span style="color: #7f8c8d;">Median Annual Income</span><br>
        <span style="color: #7f8c8d; font-size: 0.9em;">
            Coordinates: ${city.lat.toFixed(4)}, ${city.lng.toFixed(4)}
        </span>
    `;
}

// Search functionality
const searchInput = document.getElementById('citySearch');
const searchBtn = document.getElementById('searchBtn');

function searchCity() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;
    
    const foundCity = citiesData.find(city => 
        city.name.toLowerCase().includes(query) || 
        city.country.toLowerCase().includes(query)
    );
    
    if (foundCity) {
        // Find the corresponding marker
        const marker = markers.find(m => m.cityData === foundCity);
        if (marker) {
            map.setView([foundCity.lat, foundCity.lng], 8);
            marker.openPopup();
            showCityInfo(foundCity);
        }
    } else {
        alert(`City "${query}" not found. Try another city name.`);
    }
}

searchBtn.addEventListener('click', searchCity);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchCity();
    }
});

// Add autocomplete suggestions
searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    if (query.length < 2) return;
    
    // You could add a dropdown with suggestions here
    // For now, just enable search on Enter or button click
});

// Add keyboard navigation hints
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchInput.value = '';
        searchInput.blur();
    }
});

// Show initial message
document.getElementById('cityInfo').innerHTML = `
    <strong>Welcome!</strong><br>
    Click on any city marker on the map or use the search box to explore cities and their median income data.
`;

// Create table with all cities showing x, y coordinates
function populateCitiesTable() {
    const tableBody = document.getElementById('citiesTableBody');
    
    // Sort cities by income (descending)
    const sortedCities = [...citiesData].sort((a, b) => b.income - a.income);
    
    sortedCities.forEach((city) => {
        const row = document.createElement('tr');
        row.className = 'city-table-row';
        row.innerHTML = `
            <td class="city-name-cell">${city.name}</td>
            <td class="country-cell">${city.country}</td>
            <td class="coord-cell">${city.lng.toFixed(4)}</td>
            <td class="coord-cell">${city.lat.toFixed(4)}</td>
            <td class="income-cell">${formatIncome(city.income)}</td>
        `;
        
        // Make rows clickable to focus on map
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => {
            const marker = markers.find(m => m.cityData === city);
            if (marker) {
                map.setView([city.lat, city.lng], 8);
                marker.openPopup();
                showCityInfo(city);
            }
        });
        
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = '#f0f7ff';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = 'transparent';
        });
        
        tableBody.appendChild(row);
    });
}

// Populate the table when page loads
populateCitiesTable();

