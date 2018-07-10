import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

class Chart extends Component {
  render() {
    const data = this.props.logs
    return (
      <BarChart width={600} height={300} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cost" fill="#036704" />
      </BarChart>
    );
  }
}
export default Chart;