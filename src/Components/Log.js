import React, { Component } from 'react';
import LogList from './LogList';
import Chart from './Chart';
import CreateLog from './LogForms/CreateLog';
import UpdateLog from './LogForms/UpdateLog';

class Log extends Component {

  render() {
    const list = this.props.logList.filter(log => log.veh_id === this.props.vehicleSelected.id);
    const logs = list.map(log => {
      return (<LogList className="LogList"
        key={log.id} log={log}
        onClickedVeh={this.props.onClickedVeh}
        onClickedCard={this.props.onClickedCard}
        handleDelete={this.props.handleDelete} />
      )
    });

    var vehEdit = this.props.selectedCard.id;
    var addOrEdit = vehEdit ? <UpdateLog handleEdit={this.props.handleEdit} selectedCard={this.props.selectedCard} /> : <CreateLog handleAdd={this.props.handleAdd} />;

    return (
      <div className="log">
        <div className="logs-chart">
          <h2>Maintenance log of your {this.props.vehicleSelected.make} {this.props.vehicleSelected.model}</h2>
          <Chart logs={list} />
          <button className="add-button" onClick={() => { this.props.showAddForm() }}>Add a Log</button>
          {logs}
        </div>
        <div className="log-form">
          <div className="vehicle-selected">
            <h3 className="veh-selected" >Your Vehicle's details</h3>
            <p className="make" >Make : {this.props.vehicleSelected.make} </p>
            <p className="model" >Model: {this.props.vehicleSelected.model}</p>
            <p className="year" >Year: {this.props.vehicleSelected.year}</p>
            <p className="details" >Details: {this.props.vehicleSelected.note}</p>
          </div>
          {addOrEdit}
        </div>
      </div>
    );
  }
}

export default Log;
