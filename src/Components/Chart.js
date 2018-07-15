import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

class Chart extends Component {
  render() {
    const data = this.props.logs;
    return (
      <ResponsiveContainer width="100%" height="25%">
        <BarChart data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cost" fill="#036704" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default Chart;