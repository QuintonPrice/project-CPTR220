import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';

// css import
import './main.css'; // main css file

// page imports
import Home from './pages/Home/Home.js';
import Differences from './pages/Differences/Differences.js';
import Trails from './pages/Trails/Trails.js';
import Covid from './pages/Covid/Covid.js';

// component imports
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

// this is what will render for EVERY page.
// when you click a link in the navbar, it simply re-renders the page with the content from that component
class App extends Component {

    // constructor for App
    constructor(props) {
        super(props);
        this.state = {
            darkModeActive: false // darkmode tracker
        }
    }

    // toggles darkmode state
    darkModeToggle = () => {
        this.setState({ darkModeActive: !this.state.darkModeActive });
    }

    render() {
        const darkModeActive = this.state.darkModeActive;

        return (
            <body className={darkModeActive ? "body-dark" : null}>
                <Router>
                    <NavBar />
                    <button onClick={this.darkModeToggle} className="button btn-dark" id="dark_mode">Dark Mode</button> 
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/trails" component={Trails}></Route>
                        <Route path="/covid" component={Covid}></Route>
                        <Route path="/differences" component={Differences}></Route>
                        <Redirect exact from="/" to="/home" />
                    </Switch>
                    <Footer />
                </Router>
            </body>
        );
    }
}

export default App;