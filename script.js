const container = document.getElementById("weatherContainer");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");

const cities = [
  { name: "Delhi", lat: 28.61, lon: 77.23 },
  { name: "Mumbai", lat: 19.07, lon: 72.87 },
  { name: "Bangalore", lat: 12.97, lon: 77.59 }
];

function weatherEmoji(code) {
  if (code === 0) return "☀️ Clear";
  if (code <= 3) return "⛅ Partly Cloudy";
  if (code <= 48) return "☁️ Cloudy";
  if (code <= 67) return "🌧 Rain";
  if (code <= 77) return "❄️ Snow";
  if (code <= 99) return "⛈ Storm";
  return "🌍 Unknown";
}

async function fetchWeather() {

  loader.style.display = "block";

  try {

    const promises = cities.map(city => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
      return fetch(url).then(res => res.json());
    });

    const results = await Promise.all(promises);

    loader.style.display = "none";

    results.forEach((data, index) => {

      const weather = data.current_weather;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${cities[index].name}</h2>
        <div class="temp">${weather.temperature}°C</div>
        <div class="condition">
        ${weatherEmoji(weather.weathercode)}
        </div>
      `;

      container.appendChild(card);

    });

  } catch (error) {

    loader.style.display = "none";
    errorDiv.innerText = "⚠️ Failed to fetch weather data";

  }
}

fetchWeather();