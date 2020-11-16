import React, { Component } from 'react'; //import React Component
// import './style.css' //Where should this be?

//Imports from index.js
// import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; //Not needed in this case

/*///////////THINGS THAT GO IN INDEX.HTML/////////////

<head>
    <!-- favicon -->
    <link rel="shortcut icon" type="image/png" href="https://static.thenounproject.com/png/61121-200.png">
    <meta charset="utf-8">

    <!-- site info -->
    <meta name="author" content="Quinton Price">
    <meta name="description" content="Home Page">
    <meta name="keywords" content="washington, mountain, bike, seattle">

    <!-- viewport info -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

    <!-- styling-->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+KR&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">

    <title>Home - Seattle Guide</title>

</head>



    <div id="navbar-div">
        <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
            <li><a href="index.html">Home</a></li>
            <li> <a href="pages/trails/trails.html">Trails</a></li>
            <li> <a href="pages/travel/travel.html">Travel</a></li>
            <li> <a href="pages/housing/housing.html">Housing</a></li>
        </nav>
    </div>

    <button class="button btn-dark" id="dark_mode">Dark Mode</button>



    <footer>
        <a href="mailto:quintonp10@gmail.com">Contact</a>.
        Quinton Price &copy;. All rights reserved.
    </footer>

    <!-- scripts -->
    <script src="js/main.js"></script>

////////////////////////////////////////////////////*/

class HomeApp extends Component {
    render() {
        return (
            <div classname="contianer">
                <section id="overview">
                    <h2> Overview </h2>
                    <hr />
                    <HomeDesc />
                    <HomeImg />
                </section>
            </div>
        )
    }
}

class HomeDesc extends Component {
    render() {
        return (
            <div>
                <p>
                    Washington, Oregon and much of the "<a href="https://vancouversnorthshore.com/"
                        alt="Vancouver's official site for the North Shore">North Coast</a>" hosts some of the best
                    mountain biking in the world.
                </p>

                <p>
                    Through the help of organizations such as the <a href="https://www.evergreenmtb.org/">Evergreen
                    Mountain
                    Bike
                        Alliance</a>, <a href="https://www.wmbcmtb.org/" alt="Whatcom Mountain Bike Coalition website">
                        Whatcom Mountain Bike Coalition</a> , and more, the Pacific Northwest has evolved into a
                    mountain
                    biking mecca.
                </p>

                <p>
                    Every year, people travel from all over the world to ride the trails in our backyard. Here,
                    riders can find nearly everything, from flowy cross-country to technical downhill to lift-assisted
                    bike
                    parks. There truly is something for everyone.
                </p>
            </div>
        )
    }
}

class HomeImg extends Component {
    render() {
        return (
            <section id="images">
                <img id="tokul" src="images/tokul.png" alt="Tokul Mountain Bike Trails"></img>
                <p class="img-citation"><cite>From <a
                    href="https://www.pinkbike.com/news/social-distancing-a-pinkbike-photo-epic-for-the-times.html">
                        "Social Distancing"</a> by Pinkbike.</cite>
                </p>

                <img id="galbraith" src="images/Galbraith.jpg" alt="Galbraith Mountain"></img>
                <p class="img-citation"><cite>From <a href="https://www.adventuresnw.com/pnw-bucket-list-mountain-bike-trails/">
                    Carl Bremen</a></cite>
                </p>
                {/* <hr>
                <img id="tokul" src="images/tokul.png" alt="Tokul Mountain Bike Trails">
                <p class="img-citation"><cite>From <a
                    href="https://www.pinkbike.com/news/social-distancing-a-pinkbike-photo-epic-for-the-times.html">"Social Distancing"</a> by Pinkbike.</cite>
                </p>

                <img id="galbraith" src="images/Galbraith.jpg" alt="Galbraith Mountain">
                <p class="img-citation"><cite>From <a href="https://www.adventuresnw.com/pnw-bucket-list-mountain-bike-trails/">Carl Bremen</a></cite>
                </p>
                <hr> */}
            </section>
        )
    }
}

export default HomeApp;

//This might need to go in a different file
ReactDOM.render(<HomeApp />, document.getElementById('root'));