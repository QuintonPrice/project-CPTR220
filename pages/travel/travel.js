const URL_TEMPLATE_ZIP_TO_DISTANCE =
    'https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/Ot7eldouIkrhNUnVjwaElVxvRrIvbw95DXqCEmV8til7Suuu6nTrCLd8Ve9D53i0/distance.json/<zip_code1>/<zip_code2>/mile'

const URL_TEMPLATE_ZIPS_TO_LOCATION =
    'https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/qtaSxIJQgmEIxH9NjWaencrTL6puOC6sPLxljOAdbP2CrwJuS1WMWbwzgDv7pXtc/multi-info.json/<zip_code1>, <zip_code2>/degrees'

const URL_TEMPLATE_ZIP_TO_WEATHER = 'https://api.weatherapi.com/v1/current.json?key=d24bc432234b4a89b2112719200811&q=<zip_code>';

let input = document.querySelector('#zip-input');

let button = document.querySelector('#zip-button');

button.addEventListener('click', function() {
  let inputString = input.value;
  if (input.value.length != 5) {
    return;
  }
  let zip1 = '';
  let zip2 = '98101';
  for (let i = 0; i < 5; i++) {
    zip1 = zip1 + inputString[i];
  }
//   showDistance(2336.384);
//   fetchDistance(zip1, zip2);
  fetchWeather(zip1, '#localWeather');
  fetchWeather(zip2, '#setWeather');
  // let localData = fetchWeather(zip1, '#localWeather');
  // let setData = fetchWeather(zip2, '#setWeather');
  //showDifference(localData, setData, zip1, zip2);
});


function fetchDistance(zip1, zip2) {
  console.log('fetching Distance');
  let url = URL_TEMPLATE_ZIP_TO_DISTANCE;
  url = url.replace('<zip_code1>', zip1);
  url = url.replace('<zip_code2>', zip2);
  let promise = fetch(url);
  promise
      .then(response => {
        let dataPromise = response.json()
        return dataPromise;
      })
      .then(data => {
        console.log('fetched Distance');
        return data['distance'];
        //showDistance(data['distance']);
      });
}

function showDistance(distance) {
  distance = distance.toFixed(0);
  let resultsD = document.querySelector('#resultDistance');
  resultsD.innerHTML = '';

  let divArea1 = document.createElement('div');
  divArea1.classList.add('container');
  divArea1.classList.add('results');
  divArea1.style.width = '13em'
  let distanceText = document.createElement('p');
  distanceText.textContent = 'Distance: ' + String(distance) + ' miles away';
  divArea1.append(distanceText);
  resultsD.appendChild(divArea1);
  resultsD.style.display = 'block';

  // let resultsC = document.querySelector('#resultCost');
  // resultsC.innerHTML = '';
  // let divArea2 = document.createElement('div');
  // divArea2.classList.add('container');
  // divArea2.classList.add('results');
  // divArea2.style.width = '14em'
  // let costText = document.createElement('p');
  // costText.textContent = "Average flight cost: $" + String(distance*.11);
  // divArea2.append(costText);
  // resultsC.appendChild(divArea2);

  // resultsC.style.display = "block";
}

function fetchLocation(zip1, zip2) {
  let url = URL_TEMPLATE_ZIPS_TO_LOCATION;
  url = url.replace('<zip_code1>', zip1);
  url = url.replace('<zip_code2>', zip2);
  let promise = fetch(url);
  promise
      .then(response => {
        let dataPromise = response.json();
        return dataPromise;
      })
      .then(data => {
        // do stuff
      });
}

function fetchWeather(zip, id) {
  let url = URL_TEMPLATE_ZIP_TO_WEATHER;
  url = url.replace('<zip_code>', zip);
  let promise = fetch(url);
  promise
    .then(response => {
      let dataPromise = response.json();
      return dataPromise;
    })
    .then (data => {
      showWeather(data, id);
    });
}

/*
let fetchWeatherObject = async (zip) => {
  let url = URL_TEMPLATE_ZIP_TO_WEATHER;
  url = url.replace('<zip_code>', zip);
  let response = await fetch(url);
  return response.json();
}

*/

function showWeather(data, id) {
  let div = document.querySelector(id);
  let location = data['location'];
  let current = data['current'];

  let nameHeader = document.createElement('h2');
  let regionHeader = document.createElement('h3');
  //let countryHeader = document.createElement('h4');
  let timeHeader = document.createElement('h5');

  nameHeader.textContent = location['name'];
  regionHeader.textContent = location['region'];
  //countryHeader.textContent = location['country'];
  timeHeader.textContent = location['localtime'];

  div.append(nameHeader);
  div.append(regionHeader);
  //div.append(countryHeader);
  div.append(timeHeader);
  div.append(document.createElement('br'));
  /* ------------------------- */

  let tempC = document.createElement('h6');
  let tempF = document.createElement('h6');
  let icon = document.createElement('img');
  let conditionText = document.createElement('h6');
  let humidity = document.createElement('h6');

  tempC.textContent = current['temp_c'] + ' C';
  tempF.textContent = current['temp_f'] + ' F';
  icon.src = 'https:' + current['condition']['icon'];
  conditionText.textContent = current['condition']['text'];
  humidity.textContent = current['humidity'] + '%';

  div.append(tempC);
  div.append(tempF);
  div.append(icon);
  div.append(conditionText);
  div.append(humidity);

  div.style.display = 'block';
}

function showDifference(localData, setData, zip1, zip2) {

  let div = document.querySelector('#difference');
  let title = document.createElement('h3');
  let distance = document.createElement('h4');
  let time = document.createElement('h4');
  console.log('test');
  title.textContent = 'Difference';
  distance.textContent = 'Distance: ' + String(fetchDistance(zip1, zip2)) + ' miles away';
  console.log(distance.textContent);
  time.textContent = 'Time: ' + getTimeDifference(getTime(data[0]), getTime(data[1]));

  // console.log(title);
  // console.log(distance);
  // console.log(time);
  div.append(title);
  div.append(distance);
  div.append(time);

  div.style.display = 'block';
}

function getTime(data) {
  let timeData = data['location']['localtime'];
  let time = '';
  for (let i = 11; i < 16; i++) {
    time = time.concat(timeData[i]);
  }
  return time;
}

function getTimeDifference(localTime, setTime) {
  let time = '';
  localTimeHr = parseInt(localTime.substring(0,2));
  localTimeMn = parseInt(localTime.substring(3));

  setTimeHr = parseInt(setTime.substring(0,2));
  setTimeMn = parseInt(setTime.substring(3));

  let timeHourDifference =  setTimeHr - localTimeHr;
  if (timeHourDifference < 0) {
    time = time.concat('-');
    timeHourDifference += 24;
  } else {
    time = time.concat('+');
  }
  let timeMinuteDifference = setTimeMn - localTimeMn;
  if (timeMinuteDifference < 0) {
    timeHourDifference--;
    timeMinuteDifference += 60;
  }
  time = time.concat(String(timeHourDifference));
  time = time.concat(':')
  time = time.concat(String(timeMinuteDifference));
  return time;
}