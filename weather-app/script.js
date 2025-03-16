const apiKey = "d9db571d204a41a3e1d6040a0b938c3c"; 
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
    else alert("Please enter a city name");
});

async function fetchWeather(city) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!res.ok) throw new Error("City not found");
        displayWeather(await res.json());
    } catch (error) {
        weatherInfo.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

function displayWeather({ name, main, weather }) {
    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Condition: ${weather[0].description}</p>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">
    `;
}
