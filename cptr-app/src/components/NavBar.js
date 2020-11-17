// NavBar component

import React, { Component } from 'react';

// navigation bar class
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                <li><a href="../../index.html">Home</a></li>
                <li><a href="trails.html">Trails</a></li>
                <li><a href="../travel/travel.html">Travel</a></li>
                <li><a href="../housing/housing.html">Housing</a></li>
            </nav>
        );
    }
}

export default NavBar;
