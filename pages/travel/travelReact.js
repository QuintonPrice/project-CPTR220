import React, {Component} from 'react';
import './travelM.css';

const URL_TEMPLATE_ZIP_TO_DISTANCE =
    'https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/Ot7eldouIkrhNUnVjwaElVxvRrIvbw95DXqCEmV8til7Suuu6nTrCLd8Ve9D53i0/distance.json/<zip_code1>/<zip_code2>/mile'

const URL_TEMPLATE_ZIP_TO_WEATHER = 'https://api.weatherapi.com/v1/current.json?key=d24bc432234b4a89b2112719200811&q=<zip_code>';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {location: '',
                        localInformation: '',
                        setInformation: '', 
                        differenceInformation: ''};
    }

    inputLocation = (locationCode) => {
        this.setState((state, props) => {
            state.location = locationCode;
            return {location: state.location};
        });
    }

    componentDidMount() {
        let data =  Promise.all([this.fetchWeather(this.state.location, '#localWeather'), 
                            this.fetchWeather('98101', '#setWeather'), 
                            this.fetchDistance(this.state.location, '98101')])
                            .then(async([aa, bb, cc]) => {
                                const a = await aa.json();
                                const b = await bb.json();
                                const c = await cc.json();
                                return [a, b, c];
                            });
        this.processData(data);
    }

    processData = (data) => {
        data.then(data => {
            this.setState((state, props) => {
                state.localInformation = this.showWeather(data[0]);
                state.setInformation = this.showWeather(data[1]);
                state.differenceInformation = this.showDifference(data);
            })
        });
    }

    showDifference = (data) => {
        return ([
            <h3>Difference</h3>,
            <h5>{'Distance: ' + String(data[2]['distance'].toFixed(0)) + ' miles away'}</h5>,
            <h5>{'Time: ' + this.getTimeDifference(getTime(data[0]), this.getTime(data[1]))}</h5>,
            <h5>{this.getTempDifferenceC(data[0]['current']['temp_c'], data[1]['current']['temp_c']) + ' C'}</h5>,
            <h5>{this.getTempDifferenceF(data[0]['current']['temp_f'], data[1]['current']['temp_f']) + ' F'}</h5>
        ]);
    }

    getTime(data) {
        let timeData = data['location']['localtime'];
        let time = '';
        for (let i = 11; i < 16; i++) {
          time = time.concat(timeData[i]);
        }
        return time;
    }
      
    getTimeDifference(localTime, setTime) {
        let time = '';
        localTimeHr = parseInt(localTime.substring(0,2));
        localTimeMn = parseInt(localTime.substring(3));
      
        setTimeHr = parseInt(setTime.substring(0,2));
        setTimeMn = parseInt(setTime.substring(3));
      
        let timeHourDifference =  setTimeHr - localTimeHr;
        if (timeHourDifference < 0 && timeHourDifference < -12) {
          time = time.concat('-');
          timeHourDifference += 24;
        } else if (timeHourDifference < 0) {
          // do nothing
        } else {
          time = time.concat('+');
        }
        let timeMinuteDifference = setTimeMn - localTimeMn;
        if (timeMinuteDifference < 0) {
          timeHourDifference--;
          timeMinuteDifference += 60;
        }
        time = time.concat(String(timeHourDifference));
        time = time.concat(':')
        time = time.concat(String(timeMinuteDifference));
        time = time.concat('0');
        return time;
    }
      
    getTempDifferenceC(localTemp, setTemp) {
        let tempDifference = setTemp - localTemp;
        return tempDifference.toFixed(1);
    }

    getTempDifferenceF(localTemp, setTemp) {
        let tempDifference = setTemp - localTemp;
        return tempDifference.toFixed(1);
    }

    showWeather = (data) => {
        let location = data['location'];
        return([
            <h2>{location['name']}</h2>,
            <h3>{location['region']}</h3>,
            <h5>{location['localtime']}</h5>,
            <br />,
            <h6>{current['temp_c'] + ' C'}</h6>,
            <h6>{current['temp_f'] + ' F'}</h6>,
            <img src={'https:' + current['condition']['icon']}/>,
            <h6>{current['condition']['text']}</h6>,
            <h6>{current['humidity'] + '%'}</h6>
        ]);
    }

    fetchDistance(zip1, zip2) {
        let url = URL_TEMPLATE_ZIP_TO_DISTANCE;
        url = url.replace('<zip_code1>', zip1);
        url = url.replace('<zip_code2>', zip2);
        let promise = fetch(url);
        return promise;
      }

    fetchWeather(zip, id) {
        let url = URL_TEMPLATE_ZIP_TO_WEATHER;
        url = url.replace('<zip_code>', zip);
        let promise = fetch(url);
        return promise;
      }

    render() {
        return ([
            //Nav bar should go here
            <header id="header">
                <h1>Weather Guide</h1>
            </header>,
            <main>
                <div className="container" id="input-box">
                    <InputBox inputLocationCallback={this.inputLocation}/>
                </div>
                <div className="d-flex" id="weather">
                    <LocalWeather information={this.state.localInformation}/>
                    <Difference information={this.state.differenceInformation}/>
                    <SetWeather information={this.state.setInformation} />
                </div>
            </main>,
            <footer>
            <a href="mailto:MBeresnev01@gmail.com">Contact</a>.
                Mikhail Beresnev &copy;. All rights reserved.
            </footer>
        ]);
    }
}

class LocalWeather extends Component {
    render() {
        let displayStyle = {
            display: 'none'
        };
        if (this.props.information != '') {
            displayStyle['display'] = 'block';
        }
        return(<div class="container center" id="localWeather" style={displayStyle}>{this.props.information}</div>);
    }
}

class SetWeather extends Component {
    render() {
        let displayStyle = {
            display: 'none'
        };
        if (this.props.information != '') {
            displayStyle['display'] = 'block';
        }
        return(<div class="container center" id="setWeather" style={displayStyle}>{this.props.information}</div>);
    }
}

class Difference extends Component {
    render() {
        let displayStyle = {
            display: 'none'
        };
    return(<div class="container center" id="difference" style={displayStyle}>{this.props.information}</div>);
    }
}

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange = (event) => {
        this.setState({value: event.target.value});
      }

      handleSubmit = (event) => {
        if (this.state.value != 5) {
            alert('Please input a 5 digit zip code');
        } else {
            this.props.inputLocationCallback(this.state.value);
        }
        event.preventDefault();
      }

    render() {
        return(
            <div className="input-group">
                <input className="input-group-text" id="zip-input" type="text" placeholder="zipcode" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn btn-primary" id="zip-button" type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}