// Weather app component

import React, { Component } from 'react';

class WeatherDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputLocation: '', // used for inputs
            submitLocation: 'Seattle', // used for the API call
            nameVal: '',
            tempCur: '',
            tempMax: '',
            tempMin: '',
            descVal: ''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitLocation : this.state.inputLocation}); // sets submitLocation to inputLocation once button is pressed
        console.log(this.state.submitLocation);
    }

    handleFormChange = (event) => {
        event.preventDefault();
        this.setState({ inputLocation: event.target.value }); // sets input from form to be current state for inputLocation
    }

    // function that gets API information
    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.submitLocation + '&units=imperial&appid=fa7db483534aae10d27013e2df031ed2')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    // stores weather info into state
                    nameVal: data['name'],
                    tempCur: data['main']['temp'],
                    tempMax: data['main']['temp_max'],
                    tempMin: data['main']['temp_min'],
                    descVal: data['weather'][0]['description']
                });
                console.log("componentDidMount: ", this.state.nameVal);
            })
            .catch(console.log)
    }

    render() {
        return (
            // weather output container
            <div className="container" id="weather-app">
                <h3 className="font-weight-bold">Find the weather for your next trip!</h3>
                <p>Enter the city you wish to travel to below and see what the weather is like currently.</p>

                <form onSubmit={this.handleFormSubmit} className="input">
                    <input type="text" className="inputValue form-control" placeholder="Type a city..." name="inputLocation" onChange={this.handleFormChange}></input>
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

class WeatherInfo extends Component {

    //constructor for WeatherInfo
    constructor(props) {

        super(props);
        this.state = {
            location: this.props.location,

        }
    }

    render() {
        console.log("WeatherInfo location: ", this.props.location);

        return (
            // prints weather info
            <div>

            </div>

        );
    }


}


export default WeatherDisplay; // exports weatherApp