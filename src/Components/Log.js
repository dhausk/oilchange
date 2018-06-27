import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Maintenance from './Maintenance';

class Log extends Component {
  render() {
    return (

      <div className="">
        <h1>Your Selected Vehicle Logs</h1>
        <Maintenance />
      </div>


    );
  }
}

export default Log;
