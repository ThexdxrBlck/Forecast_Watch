document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-header input');
    const searchBtn = document.querySelector('.search-header button');
    const weatherIcon = document.querySelector('.weather-icon');
    const cityElement = document.querySelector(".city");
    const tempElement = document.querySelector(".temp");
    const humidityElement = document.querySelector(".humidity");
    const windElement = document.querySelector(".wind");
    const errorElement = document.querySelector(".error")

    searchBox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchWeather(searchBox.value);
        }
    });

    searchBtn.addEventListener('click', () => {
        searchWeather(searchBox.value);
    });

    async function searchWeather(city) {
        try {
            const apiKey = await getApiKey();
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
            const data = await fetchData(apiUrl);

            if (data) {
                displayWeather(data);
            } else {
                console.error('Failed to fetch weather data.');
            }
        } catch (error) {
            console.error('Error searching weather:', error);
        }
    }

    async function fetchData(apiUrl) {
        try {
            const apiKey = await getApiKey();
            const response = await fetch(`${apiUrl}&appid=${apiKey}`);

            if (!response.ok) {
                throw new Error('Failed to fetch data.');
            }

            return response.json();
        } catch (error) {
            handleFetchError(error);
            return null;
        }
    }


    function displayWeather(data) {
        if (cityElement && tempElement && humidityElement && windElement) {
            cityElement.innerHTML = data.name;
            tempElement.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
            humidityElement.innerHTML = `${data.main.humidity}%`;
            windElement.innerHTML = `${data.wind.speed} km/h ${data.wind.deg}&deg;C`;

            setWeatherIcon(data.weather[0].main);
        } else {
            console.error('DOM elements not found for weather display.');
        }

        hideError();
        showWeatherContainer();

    }

    function setWeatherIcon(condition) {
        switch (condition) {
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Humidity":
                weatherIcon.src = "images/humidity.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Wind":
                weatherIcon.src = "images/wind.png";
                break;
            default:
                weatherIcon.src = "images/clear.png";
        }
    }

    async function getApiKey() {
        try {
            const apiKeyResponse = await fetch('apiKey.txt');
            return apiKeyResponse.text();
        } catch (error) {
            console.error('Error fetching API key:', error);
            return null;
        }
    }

    function handleFetchError(error) {
        if (error instanceof Error && error.name === 'AbortError') {

        } else {
            showError();
        }

        console.error('Error fetching data:', error);
    }

    function showError() {
        errorElement.style.display = 'block';
    }

    function hideError() {
        errorElement.style.display = 'none';
    }
});
