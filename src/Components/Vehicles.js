import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VehCard from './VehCard'

class vehicles extends Component {

  render() {

    const listLoaded = this.props.vehicles
    console.log(listLoaded)
    const vehicleForm = listLoaded.map(veh => {
      return <VehCard key={veh.id} veh={veh} />
    })
    var isLoading = listLoaded ? vehicleForm : <h3>Loading vehicle selections</h3>
    return (
      <div className="veh-selection" >
        <h2>Select your vehicle</h2>
        {isLoading}
      </div>
    );
  }
};

export default vehicles;