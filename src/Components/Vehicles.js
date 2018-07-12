import React, { Component } from 'react';
import VehCard from './VehCard';
import AddVeh from './vehForm/AddVeh';
import EditVeh from './vehForm/EditVeh';

class vehicles extends Component {
  render() {
    const listLoaded = this.props.vehicles
    const vehicleForm = listLoaded.map(veh => {
      return <VehCard key={veh.id} veh={veh} onClickedCard={this.props.onClickedCard} />
    })
    var isLoading = listLoaded ? vehicleForm : <h3>Loading vehicle selections</h3>
    return (
      <div className="vehicles">
        <div className="veh-selection" >
          <h2>Select your vehicle</h2>
          {isLoading}
        </div>
        <EditVeh />
      </div>
    );
  }
};

export default vehicles;