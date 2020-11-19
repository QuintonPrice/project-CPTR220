// Weather app component

import React, { Component } from 'react';

class WeatherDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameVal: '',
            tempCur: '',
            tempMax: '',
            tempMin: '',
            descVal: '',
            locationInput: '', // state from form. constantly changing when typing
            locationSubmit: 'Seattle' // state once form is submitted. used for API call
        }
    }

    // renders as soon as page renders
    // passes 'Seattle' to the API call
    componentDidMount() {
        this.retrieveData('Seattle');
    }

    // updates the api call when this.state.locationSubmit updates
    componentDidUpdate(prevProps, prevState) {
        if (prevState.locationSubmit !== this.state.locationSubmit) {
            this.retrieveData(this.state.locationSubmit);
        }
        // if state.locationSubmit is the same, do not call API and log out message
        else {
            console.log("state.locationSubmit is same as before");
        }
    }

    // function to retrieve data from API given an input for location
    retrieveData = (input) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=imperial&appid=fa7db483534aae10d27013e2df031ed2')
            .then(res => res.json())
            .then((data) => {
                console.log(data); // logs out API response
                this.setState({
                    // stores weather info into state
                    nameVal: data['name'],
                    tempCur: data['main']['temp'],
                    tempMax: data['main']['temp_max'],
                    tempMin: data['main']['temp_min'],
                    descVal: data['weather'][0]['description']
                });
            })
            // handles invalid city inputs
            .catch(function () {
                return alert("Invalid city name!");
            });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        // sets locationSubmit to be locationInput once form is submitted
        this.setState({ locationSubmit: this.state.locationInput });
    }

    // updates the locationInput state when text is typed in form
    handleFormChange = (event) => {
        event.preventDefault();
        this.setState({ locationInput: event.target.value });
    }

    render() {
        return (
            // weather output container
            <div className="container" id="weather-app">
                <h3 className="font-weight-bold">Find the weather for your next trip!</h3>
                <p>Enter the city you wish to travel to below and double-click 'Submit' to see what the weather is like currently.</p>

                <form onSubmit={this.handleFormSubmit} className="input">
                    <input type="text" className="inputValue form-control" placeholder="Type a city..." name="locationInput" onChange={this.handleFormChange}></input>
                    <input type="submit" id="submit-button"></input>
                </form>

                <hr></hr>

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