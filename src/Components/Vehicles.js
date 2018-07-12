import React, { Component } from 'react';
import VehCard from './VehCard';
import EditVeh from './vehForm/EditVeh';

class vehicles extends Component {
  render() {
    const listLoaded = this.props.vehicles
    const vehicleForm = listLoaded.map(veh => {
      return (<VehCard
        key={veh.id}
        veh={veh}
        onClickedVeh={this.props.onClickedVeh}
        onClickedCard={this.props.onClickedCard}
        handleDelete={this.props.handleDelete}
      />)
    })
    var isLoading = listLoaded ? vehicleForm : <h3>Loading vehicle selections</h3>
    return (
      <div className="vehicles">
        <div className="veh-selection" >
          <h2>Select your vehicle</h2>
          {isLoading}
        </div>
        <EditVeh selectedCard={this.props.selectedCard} handleEdit />
      </div>
    );
  }
};

export default vehicles;