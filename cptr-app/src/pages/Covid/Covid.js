import React, { useState, Component } from "react"; //import React Component
import Select, { components } from 'react-select';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie} from "recharts";
import "../../main.css"; // main css file
import "../Covid/covid.css";
 
const optionsCountry = [
  { value: 'USA', label: 'United States of America' },
];

const optionsStates = [
    { value: 'Washington', label: 'Washington' },
    { value: 'none', label: 'None' },
  ];

const optionsCities = [
    { value: 'Spokane', label: 'Spokane' },
    { value: 'Walla Walla', label: 'Walla Walla' },
    { value: 'none', label: 'None' },
  ];

const optionDates = [
    { value: '2020-11-13', label: 'Nov 13' },
    { value: '2020-11-14', label: 'Nov 14' },
    { value: '2020-11-15', label: 'Nov 15' },
    { value: '2020-11-16', label: 'Nov 16' },
    { value: '2020-11-17', label: 'Nov 17' }
]

const optionGraphs = [
    { value: 'bar', label: 'Bar Graph' },
    { value: 'pie', label: 'Pie Graph' },
]

 

class Covid extends Component {
  render() {
    return (
        <div>
            <OptionCountry />
        </div>
    );
  }
}

class OptionCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptionCountry: null
        }
    }

    handleCountryChange = selectedOptionCountry => {
        this.setState({ selectedOptionCountry });
      };

    render() {
        const {selectedOptionCountry} = this.state;
        return (
            <div className="container selections">
                <p >Select Country</p>
                <Select
                    value={selectedOptionCountry}
                    onChange={this.handleCountryChange}
                    options={optionsCountry}
                />
                <OptionStates countryValue={this.state.selectedOptionCountry}/>
          </div>
        );
    }
}

class OptionStates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptionState: null
        }
    }

    handleStateChange = selectedOptionState => {
        this.setState({ selectedOptionState });
      };

    render() {
        const {selectedOptionState} = this.state;
        return (
            <div>
                <p >Select State</p>
                <Select
                    value={selectedOptionState}
                    onChange={this.handleStateChange}
                    options={optionsStates}
                />
                <OptionCities countryValue={this.props.countryValue} stateValue={this.state.selectedOptionState}/>
          </div>
        );
    }
}


class OptionCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptionCity: null
        }
    }

    handleCityChange = selectedOptionCity => {
        this.setState({ selectedOptionCity });
      };

    render() {
        const {selectedOptionCity} = this.state;
        return (
            <div>
                <p >Select City</p>
                <Select
                    value={selectedOptionCity}
                    onChange={this.handleCityChange}
                    options={optionsCities}
                />
                <OptionDate countryValue={this.props.countryValue} stateValue={this.props.stateValue} cityValue={this.state.selectedOptionCity}/>
          </div>
        );
    }
}

class OptionDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptionDate: null
        }
    }

    handleDateChange = selectedOptionDate => {
        this.setState({ selectedOptionDate });
      };

    render() {
        const {selectedOptionDate} = this.state;
        return (
            <div>
                <p >Select Date</p>
                <Select
                    value={selectedOptionDate}
                    onChange={this.handleDateChange}
                    options={optionDates}
                />
                <OptionGraph countryValue={this.props.countryValue} stateValue={this.props.stateValue} cityValue={this.props.cityValue} dateValue={this.state.selectedOptionDate}/>
          </div>
        );
    }
}

class OptionGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptionGraph: null
        }
    }

    handleGraphChange = selectedOptionGraph => {
        this.setState({ selectedOptionGraph });
      };

    render() {
        const {selectedOptionGraph} = this.state;
        return (
            <div>
                <p >Select Type Graph</p>
                <Select
                    value={selectedOptionGraph}
                    onChange={this.handleGraphChange}
                    options={optionGraphs}
                />
                <CovidAPI countryValue={this.props.countryValue} stateValue={this.props.stateValue} cityValue={this.props.cityValue} dateValue={this.props.dateValue} typeGraph = {this.state.selectedOptionGraph} />
          </div>
        );
    }
}

class CovidAPI extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isGraph: null,
            totalActive: 0,
            totalConfirmed:0,
            totalDeaths:0,
            isGraph: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var totalActiveSum = 0;
        var totalConfirmedSum = 0;
        var totalDeathsSum = 0;
        if(this.props.countryValue === null || this.props.stateValue === null || this.props.cityValue === null 
            || this.props.dateValue === null || this.props.barValue === null){
                return null;
            } else {
                if (this.props.cityValue.value === "none" && this.props.stateValue.value === "none") {
                    fetch(
                      "https://covid-19-statistics.p.rapidapi.com/reports?iso=" + this.props.countryValue.value +"&date=" + this.props.dateValue.value,
                      {
                        method: "GET",
                        headers: {
                          "x-rapidapi-key":
                            "e4334e991bmsh3fbca92360085c6p133e04jsn483e0d7b0472",
                          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
                        },
                      }
                    )
                      .then((response) => response.json())
                      .then((data) => {
                          console.log(data["data"]);
                        data["data"].forEach(eachState => {
                            totalActiveSum = totalActiveSum + eachState["active"];
                            totalConfirmedSum = totalConfirmedSum + eachState["confirmed"];
                            totalDeathsSum = totalDeathsSum + eachState["deaths"];
                        });
                        this.setState({
                            totalActive: totalActiveSum,
                            totalConfirmed: totalConfirmedSum,
                            totalDeaths: totalDeathsSum,
                            isGraph: <Graph active={this.state.totalActive} confirmed={this.state.totalConfirmed} death={this.state.totalDeaths} typeGraph={this.props.typeGraph}/>
                        })
                      })
                      .catch((err) => {
                        console.error(err);
                      });
                  } else if(this.props.cityValue.value === "none") {
                    fetch(
                        "https://covid-19-statistics.p.rapidapi.com/reports?region_province=" +
                          this.props.stateValue.value +
                          "&iso=" +
                            this.props.countryValue.value +"&date=" + this.props.dateValue.value,
                        {
                          method: "GET",
                          headers: {
                            "x-rapidapi-key":
                              "e4334e991bmsh3fbca92360085c6p133e04jsn483e0d7b0472",
                            "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
                          },
                        }
                      )
                        .then((response) => response.json())
                        .then((data) => {
                          console.log(data);
                          this.setState({
                              totalActive: data["data"][0]["active"],
                              totalConfirmed: data["data"][0]["confirmed"],
                              totalDeaths: data["data"][0]["deaths"],
                              isGraph: <Graph active={this.state.totalActive} confirmed={this.state.totalConfirmed} death={this.state.totalDeaths} typeGraph={this.props.typeGraph}/>
                          })
                        })
                        .catch((err) => {
                          console.error(err);
                        });
                  } else {
                    fetch(
        
                        "https://covid-19-statistics.p.rapidapi.com/reports?region_province=" +
                            this.props.stateValue.value +
                          "&iso=" +
                         this.props.countryValue.value +
                          "&city_name=" +
                          this.props.cityValue.value +
                          "&date=" +
                          this.props.dateValue.value,
                        {
                          method: "GET",
                          headers: {
                            "x-rapidapi-key":
                              "e4334e991bmsh3fbca92360085c6p133e04jsn483e0d7b0472",
                            "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
                          },
                        }
                      )
                        .then((response) => response.json())
                        .then((data) => {
                          this.setState({
                              totalActive: data["data"][0]["active"],
                              totalConfirmed: data["data"][0]["confirmed"],
                              totalDeaths: data["data"][0]["deaths"],
                              isGraph: <Graph active={this.state.totalActive} confirmed={this.state.totalConfirmed} death={this.state.totalDeaths} typeGraph={this.props.typeGraph}/>
                          })
                        })
                        .catch((err) => {
                          console.error(err);
                        });
                  }
            }
            }
        

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <input type="submit" className="covid-input"></input>
                <p className="buttonTxt">Double Click For Results(If Left Empty Nothing Happens)</p>
                {this.state.isGraph}
            </form>
        );
    }
}

class Graph extends Component {
    render(){
        var graphEle = <div></div>;
        if(this.props.typeGraph != null) {
            if(this.props.typeGraph.value === "pie") {
                let data = [
                    {name:"Active", value:this.props.active},
                    {name:"Deaths", value:this.props.death},
                    {name:"Comfirmed", value:this.props.confirmed}]
                graphEle = 
                <div className="Graph">
                    <h2>Results</h2>
                <PieChart width={600} height={400} margin={{top:5, right:60, bottom: 20, left: 60 }}>
                    <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
                </div>
            }
            else {
                let data = [
                    {name:"Active", uv:this.props.active, pv: 2400, amt: 2400},
                    {name:"Deaths", uv:this.props.death, pv: 2400, amt: 2400},
                    {name:"Comfirmed", uv:this.props.confirmed, pv: 2400, amt: 2400}]
                graphEle = 
                <div className="Graph">
                    <h2>Results</h2>
                <BarChart width={600} height={350} data={data} margin={{top:5, right:60, bottom: 5, left: 60 }}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
              </BarChart>
              </div>
            }
        }
       
        return(graphEle);
    }
}




export default Covid;
