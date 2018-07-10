import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Cars extends Component {

  render() {
    const listLoaded = this.props.vehicles
    const vehicleForm = <form className="vehicle-form">
      <label name="vehicleSelect">Please select your vehicle</label>
      <select name="vehicleSelect">

      </select>
    </form>
    var isLoading = listLoaded ? vehicleForm : <h3>Loading vehicle selections</h3>

    return (
      <div className="veh-selection" >
        <h2>Vehicle Selection</h2>
        {isLoading}
      </div>
    );
  }
};

export default Cars;