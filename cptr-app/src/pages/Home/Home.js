// Home page

import React, { Component } from 'react';
import '../../main.css'; // main css file
import '../Home/home.css' // Not sure if this will be used

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <SectionTrails />
                <SectionDifferences />
                <SectionCovid />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header id="header">
                <h1>Welcome to the Pacific Northwest</h1>
                {/* <h3>Enjoy your stay</h3>  // too dumb lol?*/}
            </header>
        )
    }
}

class SectionTrails extends Component {
    render() {
        return (
            <div className="container">
                <h2>Interested in Hitting the Local Trails?</h2>
                <hr></hr>
                <p>If you are one of those people who gets excited to hop on your
                     bike as the weekend gets nearer, then you're in the right
                     place. Check out the <b>'Trails'</b> tab to find a well curated guide
                     about some of the most popular
                     trails in the Pacific Northwest. Our guide features quick and easy 
                     information like climb distance, elevation, and more
                     to help the decision process on where to go.
                     We also provide you with interactive maps, photos, and videos
                      to show you exactly the info you need to know.

                </p>
                <img src="https://theloamwolf.com/wp-content/uploads/2020/11/Sandy-Ride-Shirbach-1-1200x800.jpg" alt="Local Trails"></img>
            </div>
        )
    }
}

class SectionDifferences extends Component {
    render() {
        return (
            <div className="container">
                <h2>How About the Weather?</h2>
                <hr></hr>
                <p>We well know that weather can make or break a trip to the wonderful
                    Pacific Northwest. Luckily on our site we have a specifically
                    designed tool called <b>'Differences'</b> to help you compare any 
                    local weather with the current weather in Seattle. All you need
                    is the zipcode of the location you would like to check and it will
                    display instantly. It will
                    not only give you the local weather, but also a direct comparison
                    between that and Seattle. We hope this helps you decide where to go
                    for your weekend excursion.
                </p>
                <img src="https://www.eopugetsound.org/sites/default/files/topical_article/images/SoundScience2007reprint_Page_022_Image_0005.png" alt="PNW Weather"></img>
            </div>
        )
    }
}

class SectionCovid extends Component {
    render() {
        return (
            <div className="container">
                <h2>Want to Stay Safe?</h2>
                <hr></hr>
                <p>
                    As long as you haven't been living under a rock for the past year
                    or so, you may well know that we are in the midst of a pandemic.
                    Both staying safe and getting out are very important, which is
                    where our <b>'Covid Info'</b> page comes in handy. This page will provide you
                    with the ability to search any location to see the current Covid
                    situation there. Our application will give you information about
                    how much of the population is impacted by the virus, and if it
                    would be safe for you to go. We hope you are still able to come enjoy
                    the wonderful Pacific Northwest.
                </p>
                <img src="https://southkingstownri.com/ImageRepository/Document?documentID=3809" alt="Covid Tracking"></img>
            </div>
        )
    }
}

export default Home;
