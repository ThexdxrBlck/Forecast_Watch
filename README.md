
## Prerequisites
-   HTML
-   CSS
-   JavaScript
-   Fetch API
-   JSON

## Building the Interface:

### Structure:
-   Create an HTML file and a CSS file.
-   Add a div with the class name "card" to the body of the HTML file.
-   Inside the card, create another div with the class name "search" for the search box.
-   Add a div with the class name "weather-card" to display the weather information.
-   Add a script tag to link the JavaScript file to the HTML file.
-   Add a link tag to link the CSS file to the HTML file.

### Search Box:
-   Inside the "search" div, add an input field with a placeholder like "Enter city name".
-   Add a search button with an icon next to the input field.
Styling:
-   Use CSS to style the card, search box, input field, and button.
-   Apply a dark background color and rounded corners to the card.
-   Style the search box to be flexible and center the input and button horizontally.
-   Customize the input field and button with appropriate borders, colors, and padding.

### Weather Card:
-   Add a div with the class name "weather-card" inside the card.
-   Inside the "weather-card" div, add a div with the class name "city" to display the city name.
-   Add another div with the class name "temp" to display the temperature.
-   Add a div with the class name "weather" to display the weather conditions.
-   Add a div with the class name "hi-low" to display the high and low temperatures.
-   Add a div with the class name "humidity" to display the humidity.
-   Add a div with the class name "wind" to display the wind speed.
-   Add an image tag with the class name "icon" to display the weather icon.
-   Add a div with the class name "loading" to display a loading indicator.
-   Add a div with the class name "error" to display an error message.
Styling:
-   Use CSS to style the weather card, city, temperature, weather conditions, high and low temperatures, humidity, wind speed, weather icon, loading indicator, and error message.
-   Apply a light background color and rounded corners to the weather card.
-   Style the city name, temperature, weather conditions, high and low temperatures, humidity, and wind speed with appropriate colors, borders, and padding.
-   Customize the weather icon with appropriate borders and padding.
-   Style the loading indicator and error message with appropriate colors, borders, and padding.
-   Hide the loading indicator and error message by default.

## Fetching Weather Data:

### API:
-   Use a weather API (e.g., OpenWeatherMap) to retrieve weather data for the entered city.
-   Sign up for the API and get your API key.

### JavaScript:
-   Write JavaScript code to:
    -   Get the user input from the search box.
    -   Send a request to the weather API with the city name and your API key.
    -   Parse the response data from the API.
    -   Extract relevant weather information like temperature, humidity, wind speed, and weather icon.
-   Displaying Weather:
    -   Update the HTML content of the card with the retrieved weather information.
    -   Display the city name, temperature, humidity, wind speed, and weather icon.
    -   Use dynamic styling based on the weather conditions (e.g., color changes for hot/cold temperatures).
    -   Add a loading indicator while the weather data is being retrieved.
