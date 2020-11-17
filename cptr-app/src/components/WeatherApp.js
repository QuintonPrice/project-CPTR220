import React, { Component } from 'react';

// weather app
class WeatherApp extends Component {

    //constructor for app
    constructor(props) {
        super(props);
        this.state = {
            weather: []
        }
    }

    // function that gets API information
    // CHANGE THIS TO BE DYNAMIC!
    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=puyallup&units=imperial&appid=fa7db483534aae10d27013e2df031ed2')
            .then(res => res.json())
            .then((data) => {
                this.setState({ weather: data })
            })
            .catch(console.log)
    }

    render() {
        console.log(this.state.weather); // logs out API information
        return (
            <div>
                <p className="font-weight bold">{this.state.weather.name}</p>
            </div>

        );
    }
}

export default WeatherApp; // exports weatherApp