const apiKey = "7eb52dcef68f0087c202ce8eee461e57"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("get-weather").addEventListener("click", () => {
  const city = document.getElementById("city-selector").value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert("Error fetching weather data: " + error.message);
  }
}

function displayWeather(data) {
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
}
