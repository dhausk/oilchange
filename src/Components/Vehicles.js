import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VehCard from './VehCard'

class vehicles extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }

  render() {
    const listLoaded = this.props.vehicles
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