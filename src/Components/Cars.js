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

    var isLoading = "isloading "
    return (
      <div className="veh-selection" >
        <h2>Cars</h2>
        <div className="select-vehicle">
          <h4>Select your car from the drop down list or </h4>
          <form onSubmit={this.vehicleSelected}>
            <label name="vehicles">Please select your car from the list please. To go to its maintenance logs</label>
            <select name="vehicles">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <button type="submit" >Take Me to My Logs</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Cars;