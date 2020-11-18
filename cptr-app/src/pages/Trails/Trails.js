// Trails page

import React, { Component } from 'react';
import WeatherDisplay from '../../components/WeatherApp.js'; // weather display component
import Header from '../../components/Header.js'; // header component
import './trails.css'; // trails css file

class Trails extends Component {
    render() {
        return (
            <div>
                <WeatherDisplay />
                <Header />
                <Blurb />
                <TrailList />
            </div>
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

// list of trails
class TrailList extends Component {
    render() {
        return (
            <div>
                <div className="container trail" id="top-whistler">
                    <h3 className="font-weight-bold"> <a
                        href="https://www.whistlerblackcomb.com/Explore-The-Resort/Activities-and-Events/Whistler-Mountain-Bike-Park/Whistler-Mountain-Bike-Park"
                        alt="Whistler Bike Park Website">1. Whistler Bike Park</a></h3>
                    <p>
                        Undoubtedly the most famous bike park in the world, Whistler is situated about an hour north of
                        Vancouver, BC in Canada. Whistler has one of the most extensive and well-built trail systems in
                        the
                        world, with dozens of machine-built runs to boast. For this reason, tens of thousands of people
                        travel
                        out to the mountain biking mecca every summer.
                     </p>

                    <p>
                        During the summer, Whistler opens to mountain biking. Whistler's climate is mild, and a
                        chairlift
                        adapted to fit bikes makes it easy for riderse to get up the mountain, allowing them to get in
                        as
                        many laps as
                        possible. Some famous trails from Whistler are A-Line, Dirt Merchant, and Too Tight.
                    </p>

                    <p className="font-weight-bold"> Quick info:</p>

                    <ul>
                        <li>Location: British Columbia, Canada</li>
                        <li>Climb: None, lift assisted</li>
                        <li>Trail Type: Freeride, Flow, Jumps, Technical Riding</li>
                        <li>Elevation: 5,000 ft</li>
                    </ul>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.553442559852!2d-122.956630784113!3d50.11336491947661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5487234d0643925b%3A0x6f4a138d3cc4d3b6!2sWhistler%20Mountain%20Bike%20Park!5e0!3m2!1sen!2sus!4v1603345383168!5m2!1sen!2sus"
                        width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>

                    <img src="https://theloamwolf.com/wp-content/uploads/2019/09/Whistler-91.jpg" alt="Whistler Bike Park Jump"></img>

                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/L0HQvovVOsE" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>


                <div className="container trail" id="top-galbraith">
                    <h3 className="font-weight-bold"><a href="https://www.wmbcmtb.org/galbraith">2. Galbraith Mountain</a></h3>

                    <p>
                        Galbraith mountain is one of Washington's top mountain biking destination. It is located within
                        5
                        minutes of downtown, making it a perfect mountain for after-work rides. However, don't let it's
                        proximity to the city fool you: Galbraith boasts over 65 miles of trails, varying from technical
                        to
                        smooth singletrack.
                    </p>

                    <p>
                        Unlike Whistler, Galbraith has many hiking trails for locals to enjoy. Galbraith is divided into
                        two
                        sections, north and south. They both feature a rich variety of trails.It is not a bike-only
                        park,
                        though the majority of the mountain is built for mountain biking. Galbraith is famous for long,
                        punchy descents with technical features. It is good for intermediate and advanced riders, though
                        new
                        riders may find it intimidating. Famous lines at Galbraith include Unemployment Line and
                        Evolution.
                    </p>

                    <p className="font-weight-bold">Quick info:</p>

                    <ul>
                        <li>Location: Bellingham, WA, USA</li>
                        <li>Climb: Intermediate</li>
                        <li>Trail Type: Technical, Flow, Cross-country</li>
                        <li>Elevation: 1,785 ft</li>
                    </ul>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.0131377150083!2d-122.42832538414946!3d48.743445816746814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485a3fee5d97b8b%3A0x3e4872047b238700!2sGalbraith%20Mountain%20Bike%20Park%20North%20Entrance!5e0!3m2!1sen!2sus!4v1603345537886!5m2!1sen!2sus"
                        width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>

                    <img src="https://www.bellingham.org/wp-content/uploads/2019/07/Biking-Bellingham-Galbraith-Mountain-Whatcom2.jpg"
                        alt="Galbraith Mountain Biking Trail"></img>

                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/VaCtGz2ktzU" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}




export default Trails;