'use strict'

// variables that correlate to querySelectors for dif classes / ids
var weatherButton = document.querySelector('.submit-button');

var display = document.querySelector(".weather-display");

var inputValue = document.querySelector('.inputValue');

// function to retrieve info about weather
function getOneDayForecast() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=fa7db483534aae10d27013e2df031ed2')
        .then(response => response.json())
        .then(data => {

            // grab values from API
            var nameValue = data['name'];
            var tempCur = data['main']['temp'];
            var tempMax = data['main']['temp_max'];
            var tempMin = data['main']['temp_min']
            var descValue = data['weather'][0]['description'];

            // below functions create DOM <p> elements w/ weather info
            var cityName = document.createElement("p");
            cityName.innerHTML = nameValue;
            cityName.classList.add("font-weight-bold");
            display.appendChild(cityName);

            var description = document.createElement("p");
            description.innerHTML = "Weather: " + descValue.charAt(0).toUpperCase() + descValue.slice(1);
            display.appendChild(description);

            var currentTemp = document.createElement("p");
            currentTemp.innerHTML = "Current Temp: " + tempCur + " " + '&#176' + "F";
            display.appendChild(currentTemp);

            var temperatureMax = document.createElement("p");
            temperatureMax.innerHTML = "Max Temp: " + tempMax + " " + '&#176' + "F";
            display.appendChild(temperatureMax);

            var temperatureMin = document.createElement("p");
            temperatureMin.innerHTML = "Min Temp: " + tempMin + " " + '&#176' + "F";
            display.appendChild(temperatureMin);

            // log data to console to check
            console.log(data);
        })
        .catch(function () {
            return alert("Invalid city name!");
        })
}

weatherButton.addEventListener('click', getOneDayForecast);

// add five day forecast

/*function getFiveDayForecast () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=fa7db483534aae10d27013e2df031ed2')
    .then(response => response.json())
    .then(data => {

    })
    .catch(function () {
        return alert("Invalid city name!");
    })
}
*/




