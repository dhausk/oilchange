import React, { Component } from 'react';
import VehCard from './VehCard';
import AddVeh from './vehForm/AddVeh';
import UpdateVeh from './vehForm/UpdateVeh';

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
    var vehEdit = this.props.selectedCard.id;
    var addOrEdit = vehEdit ? <UpdateVeh handleEdit={this.props.handleEdit} selectedCard={this.props.selectedCard} /> : <AddVeh handleAdd={this.props.handleAdd} />;
    return (
      <div className="vehicles">
        <div className="veh-selection" >
          <h2>Select your vehicle</h2>
          <button className="add-button" onClick={() => { this.props.showAddForm() }}>Add a vehicle</button>
          {isLoading}
        </div>
        {addOrEdit}
      </div>
    );
  }
};

export default vehicles;