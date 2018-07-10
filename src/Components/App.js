import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Splash from "./Splash";
import About from "./About";
import Vehicles from './Vehicles';
import Log from './Log';
const URL = "http://localhost:8080/api/vehicles";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      selectedVehicle: null,
      redirect: false
    }
  }
  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          vehicles: res
        })
      })
  }
  onClickedCard = (event, id) => {
    const loadRedirect = !this.state.redirect
    this.setState({
      selectedVehicle: id,
      redirect: loadRedirect
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
          <Route path="/Log" component={() => <Log />} />
        </div>
      </Router>
    );
  }
}

export default App;
