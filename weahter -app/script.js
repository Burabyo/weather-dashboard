//const apiKey = "b669a40811493504f4a43928ed7442bc";
// const config = require('./config');  // Import config.js
const apiKey = window.config.apiKey;
//const apiUrl = `${config.apiUrl}?q=London&appid=${apiKey}`;


document.getElementById("searchBtn").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayWeather(data) {
    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;
}
