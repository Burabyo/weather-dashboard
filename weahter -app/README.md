# Weather Dashboard

This Weather Dashboard Application allows users to check the current weather and forecast for a selected location. It integrates with the OpenWeatherMap API to fetch weather data and provides an interactive user interface built with HTML, CSS, and JavaScript. This README will guide you through setting up the application locally and deploying it to the provided web servers.

Technologies Used
HTML5: For structure and layout.
CSS3: For styling the application.
JavaScript: For adding interactivity, such as fetching data from APIs and handling user inputs.
OpenWeatherMap API: To fetch weather data for user-specified cities.
APIs Used
OpenWeatherMap API
The OpenWeatherMap API provides weather data for any location.
API Documentation: https://openweathermap.org/api

Challenges Encountered
1. API Rate Limiting
While working with the OpenWeatherMap API, I encountered rate limiting issues as the API only allows a limited number of requests per minute. To overcome this, I implemented a caching mechanism that stores weather data for a specified period before making another request.

2. Cross-Origin Resource Sharing (CORS) Issue
The browser initially blocked API requests due to CORS. I resolved this by enabling CORS on the server-side, which allowed the application to communicate with the API without issues.

3. Deploying on Multiple Servers with Load Balancer
Setting up the web servers with a load balancer was a challenge. I had to ensure that the application was deployed on both web servers and configured to route traffic correctly through the load balancer. This required proper Nginx configuration and SSL setup to avoid security issues.

Credits and Acknowledgments
OpenWeatherMap API: The weather data is fetched from OpenWeatherMap.
API Documentation: https://openweathermap.org/api
Nginx: Used as the web server to serve the application.
Official Documentation: https://nginx.org/en/docs/
Certbot: Used to obtain and configure SSL certificates for secure access.
Official Documentation: https://certbot.eff.org/



