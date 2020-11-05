'use strict'

// variables that correlate to querySelectors for dif classes / ids
var weatherButton = document.querySelector('.submit-button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.city-name');
var description = document.querySelector('.desc');
var temperature = document.querySelector('.temp');
var feelsLike = document.querySelector('.feels-like');

// function to retrieve info about weather
function getWeatherInfo() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=fa7db483534aae10d27013e2df031ed2')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];
            var feelsLikeValue = data['main']['feels_like'];

            cityName.innerHTML = nameValue;
            description.innerHTML = "Weather: " + descValue;
            temperature.innerHTML = "Temperature: " + tempValue + " " + '&#176' + "F";
            feelsLike.innerHTML = "Feels like: " + feelsLikeValue + " " + '&#176' + "F";

            console.log(data);
        })
        .catch(function () {
            return alert("Invalid city name!");
        })
}

weatherButton.addEventListener('click', getWeatherInfo);



