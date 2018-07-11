import React, { Component } from 'react';
import LogList from './LogList';
import Chart from './Chart';

class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredLogs: [],
      formSwitch: null,
      filtered: false
    }
  }

  componentDidMount = () => {
    const list = this.props.logList.filter(log => log.veh_id === this.props.vehicleSelected.id);
    this.setState({
      filteredLogs: list,
      filtered: true
    })
  }

  render() {
    let logs = this.state.filteredLogs.map(log => <LogList className="LogList" key={log.id} log={log} />)
    return (
      <div className="Log">
        <h2>Maintenance log of your {this.props.vehicleSelected.make} {this.props.vehicleSelected.model}</h2>
        <button className="add-button" >Add a Log</button>
        {logs}
        <Chart logs={this.state.filteredLogs} />
      </div>
    );
  }
}

export default Log;
