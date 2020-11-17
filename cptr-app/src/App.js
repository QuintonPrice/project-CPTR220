import React, { Component } from 'react';

class DarkMode extends Component {
  // sets state, used to track if dark mode is on
  state = {
    darkModeEnable: false
  }

  // toggles darkModeEnable state
  toggleDarkMode = () => {
    this.setState({
      darkModeEnable: !this.state.darkModeEnable
    });
    console.log(this.state.darkModeEnable);
  }

  // renders clickable button
  render() {
    return <button onClick={this.toggleDarkMode} className="button btn-dark" id="dark_mode">Dark Mode</button>
  }
}

export default DarkMode; // exports DarkMode
