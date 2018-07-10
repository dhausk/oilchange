import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const URL = "http://localhost:8080/api/vehicles";

class Cars extends Component {

  vehicleSelected = () => {

  }
  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }
  render() {

    var vehList = <div className="select-vehicle">
      <h4>Select your car from the drop down list or </h4>
      <form onSubmit={this.vehicleSelected}>
        <label name="vehicles">Please select your car from the list please. To go to its maintenance logs</label>
        <button type="submit" >Take Me to My Logs</button>
      </form>
    </div>
    var isLoading = "isloading ? <div> Loading</div> : vehList "

    return (
      <div className="veh-selection" >
        <h2>Vehicle Selection</h2>

      </div>
    );
  }
};

export default Cars;