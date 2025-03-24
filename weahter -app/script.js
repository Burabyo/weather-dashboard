
// Import config.js (commented out as it's not needed in this context)
// const config = require('./config');  

// Access the API key from the config.js file
const apiKey = window.config.apiKey;

// Example API URL format (commented out for reference)
//const apiUrl = `${config.apiUrl}?q=London&appid=${apiKey}`;

// Add event listener to the search button
document.getElementById("searchBtn").addEventListener("click", function() {
    // Get the user input value (city name)
    const city = document.getElementById("cityInput").value;

    // Check if a city name was entered
    if (city) {
        getWeather(city); // Call the function to fetch weather data
    } else {
        alert("Please enter a city name."); // Alert the user if input is empty
    }
});

// Function to fetch weather data from the API
async function getWeather(city) {
    // Construct the API request URL using the provided city name and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        // Fetch the data from the API
        const response = await fetch(url);
        const data = await response.json(); // Convert the response to JSON format

        // Check if the request was successful (HTTP code 200)
        if (data.cod === 200) {
            displayWeather(data); // Call function to display weather data
        } else {
            // Display an error message if the city is not found
            document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error); // Log errors to the console
    }
}

// Function to display the fetched weather data on the webpage
function displayWeather(data) {
    // Create an HTML structure with weather details
    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    // Insert the weather information into the 'weatherResult' div
    document.getElementById("weatherResult").innerHTML = weatherHTML;
}
