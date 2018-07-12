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
      selectedVehicle: {},
      selectedCard: {},

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
  onClickedVeh = (id) => {
    let vehicle = this.state.vehicles.find(veh => veh.id === id)
    this.setState({
      selectedVehicle: vehicle
    })
  }
  onClickedCard = (id) => {
    let log = this.state.logs.find(log => log.id === id)
    this.setState({
      selectedCard: log
    })
  }
  handleDelete = (event) => {
    event.preventDefault();
    const cardId = event.target
    console.log(cardId);
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
            onClickedVeh={this.onClickedVeh}
            handleDelete={this.handleDelete}
            onClickedCard={this.onClickedCard}
            selectedCard={this.state.selectedCard}
          />} />
          <Route path="/Log" component={() => <Log
            vehicleSelected={this.state.selectedVehicle}
            selectedCard={this.state.selectedCard}
            logList={this.state.logs} />}
            onClickedCard={this.onClickedCard}
            handleDelete={this.handleDelete}
          />
        </div>
      </Router>
    );
  }
}

export default App;
