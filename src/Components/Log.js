import React, { Component } from 'react';
// import LogList from 'LogList';
// import Chart from 'Chart';

class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredLogs: [],
      formSwitch: null,
    }
  }

  componentDidMount = () => {
    const list = this.props.logList.filter(log => log.veh_id === this.props.vehicleSelected.id);
    this.setState({ filteredLogs: list })
  }
  render() {


    return (
      <div className="Log">
        {/* <LogList />
        <Chart /> */}

      </div>


    );
  }
}

export default Log;
