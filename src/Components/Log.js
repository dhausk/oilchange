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
      formRender: null,
      filtered: false,
      display: "0",
      selectedLog: ''
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
      case "0":
        return (<div className="vehicle-selected">
          <p className="make" >Make : {this.props.vehicleSelected.make} </p>
          <p className="model" >Model: {this.props.vehicleSelected.model}</p>
          <p className="year" >Year: {this.props.vehicleSelected.year}</p>
          <p className="details" >Details: {this.props.vehicleSelected.note}</p>
        </div>);
      case "1":
        return <CreateLog vehicleSelected={this.props.vehicleSelected} formSubmit={this.formSubmit} />;
      case "2":
        return <UpdateLog vehicleSelected={this.props.vehicleSelected} logSelected={this.props.selectedLog} formSubmit={this.formSubmit} />;
      default:
        console.log("display switch statement error");
        break;
    }
  }
  formClick = (event) => {
    let form = event.target.value;
    const id = event.target.id;
    var currentLog = this.state.filteredLogs.filter(log => log.id === id)[0]
    console.log(currentLog);
    this.setState({
      selectedLog: currentLog,
      display: form
    });
  }
  formSubmit = (event, state) => {
    event.preventDefault();
    console.log(state);
    this.setState({ display: "0" });
  }
  handle

  render() {
    let logs = this.state.filteredLogs.map(log => <LogList className="LogList" key={log.id} log={log} editClick={this.formClick} delete />);
    let displayForm = this.formsRender(this.state.display);

    return (
      <div className="Log">
        <h2>Maintenance log of your {this.props.vehicleSelected.make} {this.props.vehicleSelected.model}</h2>
        <Chart logs={this.state.filteredLogs} />
        {logs}
        <button className="add-button" onClick={this.formClick} value="1" >Add a Log</button>
        {displayForm}
      </div>
    );
  }
}

export default Log;
