import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Splash from "./Splash";
import About from "./About";
import Vehicles from './Vehicles';
import Log from './Log';
const vehiclesURL = "http://localhost:8080/api/vehicles";
const logURL = "http://localhost:8080/api/log";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      logs: [],
      selectedVehicle: null
    }
  }
  componentDidMount = () => {
    fetch(vehiclesURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          vehicles: res
        })
      })
    fetch(logURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          logs: res
        })
      })
  }
  onClickedCard = (id) => {
    let vehicle = this.state.vehicles.find(veh => veh.id === id)
    this.setState({
      selectedVehicle: vehicle,
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Splash} />
          <Route path="/About" component={About} />
          <Route path="/Vehicles" component={() => <Vehicles
            vehicles={this.state.vehicles}
            onClickedCard={this.onClickedCard}
          />} />
          <Route path="/Log" component={() => <Log vehicleSelected={this.state.selectedVehicle} />} />
        </div>
      </Router>
    );
  }
}

export default App;
