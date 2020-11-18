import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

// page imports
import Home from './pages/Home/Home.js';
import Trails from './pages/Trails/Trails.js';
import Covid from './pages/Covid/Covid.js';
import Travel from './pages/Travel/Travel.js';

// component imports
import NavBar from './components/NavBar.js';

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/trails" component={Trails}></Route>
                    <Route path="/covid" component={Covid}></Route>
                    <Route path="/Travel" component={Travel}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;