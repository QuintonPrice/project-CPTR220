// footer component
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="mailto:quintonp10@gmail.com">Contact</a>.
                Quinton Price &copy;. All rights reserved. Data from <a href="https://openweathermap.org/"
                    target="_blank">OpenWeatherMap</a>.
            </footer>
        );
    }
}

export default Footer;