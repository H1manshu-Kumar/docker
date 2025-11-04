const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/weather', async (req, res) => {
    const { city } = req.body;
    
    try {
        // Using OpenWeatherMap free API (requires API key)
        const API_KEY = process.env.WEATHER_API_KEY || 'demo';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        res.json({
            city: response.data.name,
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed
        });
    } catch (error) {
        // Mock data for demo purposes
        res.json({
            city: city,
            temperature: Math.floor(Math.random() * 30) + 5,
            description: 'partly cloudy',
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 10) + 2
        });
    }
});

app.listen(PORT, () => {
    console.log(`Weather app running on port ${PORT}`);
});
