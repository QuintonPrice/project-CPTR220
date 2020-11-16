import React, { Component } from 'react';
import '../main.css';
import './trails.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Blurb />
            </div>
        );
    }
}

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                <li><a href="../../index.html">Home</a></li>
                <li><a href="trails.html">Trails</a></li>
                <li> <a href="../travel/travel.html">Travel</a></li>
                <li> <a href="../housing/housing.html">Housing</a></li>
            </nav>
        );
    }
}

// top blurb class
class Blurb extends Component {
    render() {
        return (
            <div className="container" id="blurb">
                <h2>Trails in the Pacific Northwest</h2>
                <hr></hr>
                <p>With hundreds of trails to choose from, the Pacific Northwest undoubtedly has some of the best
                mountain biking in the world. Below is a list with information about some of my personal favorites,
                as well as rides I have on my bucket list!</p>
            </div>
        );
    }
}

export default App;