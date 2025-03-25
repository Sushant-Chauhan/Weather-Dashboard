async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        // Fetch current weather
        let response = await fetch(`/weather?city=${city}`);
        let data = await response.json();

        if (data.error) {
            document.getElementById("weatherResult").innerHTML = `<p>${data.error}</p>`;
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;

        // Fetch 5-day forecast
        response = await fetch(`/forecast?city=${city}`);
        data = await response.json();

        let forecastHTML = "";
        data.list.forEach((item, index) => {
            if (index % 8 === 0) {  // Show forecast for every 24 hours
                forecastHTML += `
                    <div>
                        <p>${new Date(item.dt_txt).toLocaleDateString()}</p>
                        <p>${item.main.temp}°C</p>
                        <p>${item.weather[0].description}</p>
                    </div>
                `;
            }
        });

        document.getElementById("forecastResult").innerHTML = forecastHTML;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data.");
    }
}
