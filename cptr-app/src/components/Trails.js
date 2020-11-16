import React, { Component } from 'react';
import '../main.css'

class App extends Component {
    render() {
        return (
            <div>
                <p>Test</p>
                <Blurb />
            </div>


        );
    }
}

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