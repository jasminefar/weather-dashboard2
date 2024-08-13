const apiKey = 'your_openweathermap_api_key_here';
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const weatherCard = document.getElementById('weatherCard');
const body = document.body;

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const weatherData = await response.json();
        updateWeatherUI(weatherData);
    } catch (error) {
        alert(error.message);
    }
}

function updateWeatherUI(weatherData) {
    cityName.textContent = weatherData.name;
    temperature.textContent = `${Math.round(weatherData.main.temp)}°C`;
    weatherDescription.textContent = weatherData.weather[0].description;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
    pressure.textContent = `Pressure: ${weatherData.main.pressure} hPa`;
    visibility.textContent = `Visibility: ${weatherData.visibility / 1000} km`;

    const iconCode = weatherData.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${ico
