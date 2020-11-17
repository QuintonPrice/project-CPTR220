// things that are used globally
import React, { Component } from 'react';

// header for website
class Header extends Component {
    render() {
        return (
            <header id="header">
                <h1>Pacific Northwest Trails</h1>
            </header>
        );
    }
}

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

export default {Header, NavBar}