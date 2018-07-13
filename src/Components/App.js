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
    else if (cardType === "log") {
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
  buildEditBodyObj(data, type, id) {
    if (type === "vehicles") {
      return {
        "id": id,
        "make": data.get('make'),
        "model": data.get('model'),
        "year": data.get('year'),
        "notes": data.get('notes')
      }
    }
    else if (type === "log") {
      return {
        "id": id,
        "veh_id": data.get('make'),
        "model": data.get('model'),
        "year": data.get('year'),
        "notes": data.get('notes')
      }

    }


  }
  handleEdit = (event, id, type) => {
    event.preventDefault()
    console.log(event.target);

    let updateUrl = this.urlIdTypeCreate(type, id)
    const formData = new FormData(event.target)
    const dataObj = this.buildEditBodyObj(formData, type, id)
    console.log(dataObj);


    // fetch(updateUrl, {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     imgUrl: data.get('imgUrl'),
    //     description: data.get('description'),
    //     location: data.get('location'),
    //     lat: parseFloat(data.get('lat')),
    //     lng: parseFloat(data.get('lng'))
    //   }),
    //   headers: { "Content-Type": "application/json" }
    // })
    //   .then(this.handleErrors)
    //   .then(res => res.json())
    //   .then(res => {
    //     let currentArtList = this.state.artList
    //     let artToBeUpdated = currentArtList.filter(art => art.id == res.id)[0]
    //     currentArtList.splice(currentArtList.indexOf(artToBeUpdated), 1)
    //     currentArtList.unshift(res)
    //     this.setState({
    //       currentArt: res,
    //       artList: currentArtList
    //     })
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })

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
  showAddForm = () => {
    this.setState({ selectedCard: {} })
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
            showAddForm={this.showAddForm}
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
            showAddForm={this.showAddForm}
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
