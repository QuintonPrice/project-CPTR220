import { render } from "@testing-library/react";

test("local weather div exsists", () => {
    const { getByTestId } = render(
        <div id="localWeather"></div>
      );
    expect(getByTestId(/username/i)).toBeTruthy();
});

test("set weather div exsists", () => {
    const { getByTestId } = render(
        <div id="setWeather"></div>
      );
    expect(getByTestId(/username/i)).toBeTruthy();

    // expect(document.querySelector('#localWeather')).toBeDefined();
});

test("set and local weather display none initially", () => {
    const localWeather = document.querySelector('#localWeather').style;
    const setWeather = document.querySelector('#setWeather').style;

    expect(localWeather.display).toBe('none');
    expect(setWeather.display).toBe('none');
});

require('./travel.js');

test("show correct weather", () => {
    let data = {
        "location": {
            "name": "Queensbury",
            "region": "New York",
            "country": "USA",
            "lat": 43.33,
            "lon": -73.68,
            "tz_id": "America/New_York",
            "localtime_epoch": 1604851886,
            "localtime": "2020-11-08 11:11"
        },
        "current": {
            "last_updated_epoch": 1604851207,
            "last_updated": "2020-11-08 11:00",
            "temp_c": 14.4,
            "temp_f": 57.9,
            "is_day": 1,
            "condition": {
                "text": "Sunny",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                "code": 1000
            },
            "wind_mph": 0.0,
            "wind_kph": 0.0,
            "wind_degree": 0,
            "wind_dir": "N",
            "pressure_mb": 1029.0,
            "pressure_in": 30.9,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 62,
            "cloud": 0,
            "feelslike_c": 14.4,
            "feelslike_f": 57.9,
            "vis_km": 16.0,
            "vis_miles": 9.0,
            "uv": 3.0,
            "gust_mph": 2.9,
            "gust_kph": 4.7
        }
    };
    let id = '#localWeather';
    showWeather(data, id);

    expect(document.querySelector('h2').textContent).toEqual('Queensbury');
    expect(document.querySelector('h5').textContent).toEqual('2020-11-08 11:11');
    expect(document.querySelector('h3').textContent).toEqual('New York');
});
