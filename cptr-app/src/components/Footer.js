// footer component
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="mailto:quintonp10@gmail.com">Contact</a>.
                Quinton Price, Mikhail Beresnev, Matija Benko, Joel Hartman &copy;. All rights reserved. Data from <a href="https://openweathermap.org/"
                    target="_blank">OpenWeatherMap</a>, <a href="https://www.zipcodeapi.com/" target="_blank">ZipCodeAPI</a>, <a href="https://www.weatherapi.com/" 
                    target="_blank">Weather API</a>, and more [add APIs here].
            </footer>
        );
    }
}

export default Footer;