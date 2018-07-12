import React, { Component } from 'react';
import LogList from './LogList';
import Chart from './Chart';
import CreateLog from './LogForms/CreateLog';
import UpdateLog from './LogForms/UpdateLog';

class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredLogs: [],
      filtered: false,
      display: "1",
    }
  }

  componentDidMount = () => {
    const list = this.props.logList.filter(log => log.veh_id === this.props.vehicleSelected.id);
    this.setState({
      filteredLogs: list,
      filtered: true
    });
  }

  formsRender(display) {
    switch (display) {
      case "1":
        return (<CreateLog vehicleSelected={this.props.vehicleSelected}
          formSubmit={this.formSubmit} />);
      case "2":
        return (<UpdateLog
          vehicleSelected={this.props.vehicleSelected}
          logSelected={this.props.selectedLog}
          formSubmit={this.formSubmit} />);
      default:
        return <h2>Add a Log</h2>
        break;
    }
  }
  formClick = (event) => {
    let form = event.target.id;
    this.setState({
      display: form
    });
  }
  formSubmit = (event, state) => {
    event.preventDefault();
    console.log(state);
    this.setState({ display: "1" });
  }

  render() {
    let logs = this.state.filteredLogs.map(log => {
      <LogList className="LogList"
        key={log.id} log={log}
        editClick={this.formClick} delete={this.props.handleDelete} />
    });
    let displayForm = this.formsRender(this.state.display);

    return (
      <div className="log">
        <div className="logs-chart">
          <h2>Maintenance log of your {this.props.vehicleSelected.make} {this.props.vehicleSelected.model}</h2>
          <Chart logs={this.state.filteredLogs} />
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
          {displayForm}
        </div>
      </div>
    );
  }
}

export default Log;
