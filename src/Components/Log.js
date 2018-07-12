import React, { Component } from 'react';
import LogList from './LogList';
import Chart from './Chart';
import CreateLog from './LogForms/CreateLog';
import UpdateLog from './LogForms/UpdateLog';

class Log extends Component {


  // formsRender(display) {
  //   switch (display) {
  //     case "1":
  //       return (<CreateLog vehicleSelected={this.props.vehicleSelected}
  //         formSubmit={this.formSubmit} />);
  //     case "2":
  //       return (<UpdateLog
  //         vehicleSelected={this.props.vehicleSelected}
  //         logSelected={this.props.selectedLog}
  //         formSubmit={this.formSubmit} />);
  //     default:
  //       return <h2>Add a Log</h2>
  //   }
  // }
  //   vehicleSelected = { this.state.selectedVehicle }
  //   selectedCard = { this.state.selectedCard }
  //   logList = { this.state.logs } />}
  // onClickedCard = { this.onClickedCard }
  // handleDelete = { this.handleDelete }

  render() {
    const list = this.props.logList.filter(log => log.veh_id === this.props.vehicleSelected.id);
    const logs = list.map(log => {
      return (<LogList className="LogList"
        key={log.id} log={log}
        handleDelete={this.props.handleDelete}
        onClickedCard={this.props.onClickedCard} />
      )
    });
    console.log(this.props);


    return (
      <div className="log">
        <div className="logs-chart">
          <h2>Maintenance log of your {this.props.vehicleSelected.make} {this.props.vehicleSelected.model}</h2>
          <Chart logs={list} />
          <button className="add-button" onClick={this.formClick} id="1" >Add a Log</button>
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

          <CreateLog vehicleSelected={this.props.vehicleSelected}
            formSubmit={this.formSubmit} />
        </div>
      </div>
    );
  }
}

export default Log;
