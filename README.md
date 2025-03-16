# Weather Dashboard

## Overview
The **Weather Dashboard** is a simple web application that allows users to check the current weather conditions for any city. It fetches real-time weather data using the **OpenWeatherMap API** and displays information such as temperature, humidity, and weather conditions.

## Files
- `weather.html` - The main HTML file that structures the web page.
- `style.css` - The stylesheet that defines the visual appearance of the dashboard.
- `script.js` - The JavaScript file that handles user interaction and fetches weather data from the API.

## Features
- 🌤 Users can enter a city name to get real-time weather data.
- 🌡 Displays **temperature, humidity, and weather conditions**.
- ❌ Displays an error message if the city is not found.
- 🎨 Responsive and visually appealing design.

## Setup & Usage
1. **Clone or download** this repository:
   ```sh
   git clone https://github.com/your-repository/weather-dashboard.git
   cd weather-dashboard
   ```
2. Open `weather.html` in any modern **web browser**.
3. Enter a **city name** and click `Search` to retrieve weather information.

## Running the Project
To run the Weather Dashboard, you have two options:

### Run Online
You can access the live version of the Weather Dashboard here:
🔗 [Weather Dashboard](https://weatherbymohamed.netlify.app/)

### Run Locally
1. Ensure you have an **internet connection** to fetch weather data.
2. Open the `weather.html` file directly in your **browser** (Chrome, Firefox, Edge, etc.).
3. If you are using a local server (for example, Python HTTP server):
   ```sh
   python3 -m http.server
   ```
   Then, open `http://localhost:8000/weather.html` in your browser.

## API Usage
This project uses the **OpenWeatherMap API**:
- **API Key**: _(Replace with your own key)_
- **API Endpoint**: 
  ```
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric
  ```

## Dependencies
- Requires an **active internet connection** to fetch weather data.
- Ensure you replace the **API key** in `script.js` with your own valid **OpenWeatherMap API key**.

## License
This project is **open-source** and available for modification and distribution.

