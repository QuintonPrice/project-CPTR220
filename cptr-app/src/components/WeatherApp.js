// Weather app component

import React, { Component } from 'react';

class WeatherDisplay extends Component {
    render() {
        return (
            <div className="container" id="weather">
                <h3 className="font-weight-bold">Find the weather for your next trip!</h3>
                <p>Enter the city you wish to travel to below and see what the weather is like currently.</p>
                <WeatherInfo />
            </div>
        );
    }
}


class WeatherInfo extends Component {

    //constructor for WeatherInfo
    constructor(props) {
        super(props);
        this.state = {
            nameVal: '',
            tempCur: '',
            tempMax: '',
            tempMin: '',
            descVal: ''
        }
    }

    // function that gets API information
    // CHANGE THIS TO BE DYNAMIC!
    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=puyallup&units=imperial&appid=fa7db483534aae10d27013e2df031ed2')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    // stores weather info into state
                    nameVal: data['name'],
                    tempCur: data['main']['temp'],
                    tempMax: data['main']['temp_max'],
                    tempMin: data['main']['temp_min'],
                    descVal: data['weather'][0]['description']
                })
            })
            .catch(console.log)
    }

    render() {
        console.log(this.state.nameValue); // test log
        return (
            // prints weather info
            <div>
                <h3 className="font-weight bold">{this.state.nameVal}</h3>
                <p>Weather: {this.state.descVal} </p>
                <p>Current Temp: {this.state.tempCur} {String.fromCharCode(176)}F</p>
                <p>Max Temp: {this.state.tempMax} {String.fromCharCode(176)}F</p>
                <p>Min Temp: {this.state.tempMin} {String.fromCharCode(176)}F</p>
            </div>

        );
    }
}

export default WeatherDisplay; // exports weatherApp