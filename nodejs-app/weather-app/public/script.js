async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) return;

    try {
        const response = await fetch('/weather', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city })
        });

        const data = await response.json();
        
        document.getElementById('cityName').textContent = data.city;
        document.getElementById('temperature').textContent = `${data.temperature}°C`;
        document.getElementById('description').textContent = data.description;
        document.getElementById('humidity').textContent = `💧 ${data.humidity}%`;
        document.getElementById('windSpeed').textContent = `💨 ${data.windSpeed} m/s`;
        
        document.getElementById('weatherResult').classList.remove('hidden');
    } catch (error) {
        alert('Error fetching weather data');
    }
}

document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});
