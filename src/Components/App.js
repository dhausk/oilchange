import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Splash from "./Splash";
import About from "./About";
import Cars from './Cars';
const URL = "http://localhost:8080/api/vehicles";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
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

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Splash} />
          <Route path="/About" component={About} />
          <Route path="/Vehicles" component={() => <Cars vehicles={this.state.vehicles} />} />
        </div>
      </Router>
    );
  }
}

export default App;
