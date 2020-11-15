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
  showDifference(zip1, zip2, '#localWeather', '#setWeather');
});

function fetchDistance(zip1, zip2) {
  let url = URL_TEMPLATE_ZIP_TO_DISTANCE;
  url = url.replace('<zip_code1>', zip1);
  url = url.replace('<zip_code2>', zip2);
  let promise = fetch(url);
  return promise;
}

function showWeather(data, id) {
  let div = document.querySelector(id);
  let location = data['location'];
  let current = data['current'];

  let nameHeader = document.createElement('h2');
  let regionHeader = document.createElement('h3');
  let timeHeader = document.createElement('h5');

  nameHeader.textContent = location['name'];
  regionHeader.textContent = location['region'];
  timeHeader.textContent = location['localtime'];

  div.append(nameHeader);
  div.append(regionHeader);
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

function fetchWeather(zip, id) {
  let url = URL_TEMPLATE_ZIP_TO_WEATHER;
  url = url.replace('<zip_code>', zip);
  let promise = fetch(url);
  return promise;
}

function showDifference(zip1, zip2, id1, id2) {
  Promise.all([fetchWeather(zip1, id1), fetchWeather(zip2, id2), fetchDistance(zip1, zip2)]).then(async([aa, bb, cc]) => {
    const a = await aa.json();
    const b = await bb.json();
    const c = await cc.json();
    return [a, b, c];
  }).then(data => {
    console.log(data);
    showWeather(data[0], id1);
    showWeather(data[1], id2);
    let div = document.querySelector('#difference');
    let title = document.createElement('h3');
    let distance = document.createElement('h5');
    let time = document.createElement('h5');
    let celcius = document.createElement('h5')
    let farenheit = document.createElement('h5');
    title.textContent = 'Difference';
    distance.textContent = 'Distance: ' + String(data[2]['distance'].toFixed(0)) + ' miles away';
    time.textContent = 'Time: ' + getTimeDifference(getTime(data[0]), getTime(data[1]));
    celcius.textContent = getTempDifferenceC(data[0]['current']['temp_c'], data[1]['current']['temp_c']) + ' C';
    farenheit.textContent = getTempDifferenceF(data[0]['current']['temp_f'], data[1]['current']['temp_f']) + ' F';


    div.append(title);
    div.append(distance);
    div.append(time);
    div.append(celcius);
    div.append(farenheit);

    div.style.display = 'block';
  });
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
  if (timeHourDifference < 0 && timeHourDifference < -12) {
    time = time.concat('-');
    timeHourDifference += 24;
  } else if (timeHourDifference < 0) {
    // do nothing
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
  time = time.concat('0');
  return time;
}

function getTempDifferenceC(localTemp, setTemp) {
  let tempDifference = setTemp - localTemp;
  return tempDifference.toFixed(1);
}

function getTempDifferenceF(localTemp, setTemp) {
  let tempDifference = setTemp - localTemp;
  return tempDifference.toFixed(1);
}