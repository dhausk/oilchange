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
      selectedCard: {}
    }
  }
  componentDidMount = () => {
    this.vehiclesFetch();
    this.logsFetch();
  }

  vehiclesFetch() {
    fetch(vehiclesURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          vehicles: res
        })
      })
  }
  logsFetch() {
    fetch(logURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          logs: res
        })
      })
  }
  onClickedVeh = (id) => {
    let vehicle = this.state.vehicles.find(veh => veh.id === id);
    this.setState({
      selectedVehicle: vehicle
    })
  }
  onClickedCard = (card) => {
    this.setState({
      selectedCard: card
    });
  }

  urlIdTypeCreate(cardType, id) {
    if (cardType === "vehicles") {
      return `${vehiclesURL}/${id}`
    }
    else if (cardType === "logs") {
      return `${logURL}/${id}`
    }
  }
  currentListType(cardType) {
    if (cardType === "vehicles") {
      return this.state.vehicles;
    }
    else if (cardType === "logs") {
      return this.state.logs;
    }
  }
  handleDelete = (event, id) => {
    event.preventDefault();
    const cardType = event.target.value;
    const deleteURL = this.urlIdTypeCreate(cardType, id)
    let currentList = this.currentListType(cardType)
    let deletedCard = currentList.filter(item => item.id === id)[0]
    fetch(deleteURL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => {
        currentList.splice(currentList.indexOf(deletedCard), 1)
        this.setState({
          [cardType]: currentList,
          selectedCard: {}
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  handleEdit = (event) => {
    event.preventDefault()
    console.log(event.target);

  }

  handleAdd = (event, state, type) => {
    event.preventDefault();
    const addURL = `http://localhost:8080/api/${type}/`;
    const currentList = this.currentListType(type);
    fetch(addURL, {
      method: "POST",
      body: JSON.stringify(state),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(res => {
        currentList.unshift(res)
        this.setState({
          [type]: currentList
        })
      })
      .catch(err => {
        console.error(err)
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
            selectedCard={this.state.selectedCard}
            handleAdd={this.handleAdd}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            onClickedCard={this.onClickedCard}
            onClickedVeh={this.onClickedVeh}
          />} />
          <Route path="/Log" component={() => <Log
            logList={this.state.logs}
            selectedCard={this.state.selectedCard}
            vehicleSelected={this.state.selectedVehicle}
            handleAdd={this.handleAdd}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            onClickedCard={this.onClickedCard}
          />} />
        </div>
      </Router>
    );
  }
}

export default App;
