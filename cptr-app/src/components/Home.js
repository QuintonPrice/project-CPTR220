import React, { Component } from 'react'; //import React Component
import '../main.css'; // main css file

//Imports from index.js
// import React from 'react';
import ReactDOM from 'react-dom';

class HomeApp extends Component {
    render() {
        return (
            <div classname="container">
                <section id="overview">
                    <h2> Overview </h2>
                    <hr />
                    <HomeDesc />
                </section>
            </div>
        )
    }
}

class HomeDesc extends Component {
    render() {
        return (
            <div className="container">
                <p> Content goes here </p>
                
            </div>
        )
    }
}


export default HomeApp;

//This might need to go in a different file
ReactDOM.render(<HomeApp />, document.getElementById('root'));