import React, { Component } from 'react';

class UpdateLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "veh_id": 1,
      "maintenance": "",
      "cost": 0,
      "date": 'YYYY-MM-DD',
      "note": ""
    }
  }
  componentDidMount = () => {
    this.setState({
      "veh_id": this.props.veh_id,
      "maintenance": this.props.maintenance,
      "cost": this.props.cost,
      "date": this.props.date,
      "note": this.props.note
    })
  }
  changeHandler = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <div className="Update-log">
        <h4>Update this maintenance service log for the {this.props.vehicleSelected.model}</h4>
        <form className="add-form" onSubmit={(event) => this.props.formSubmit(event, this.state)}>
          <label name="maintenance">What maintenance did your perform?</label>
          <input type="text" name="maintenance" onChange={this.changeHandler} value={this.state.maintenance}></input>
          <label name="cost">how much did this cost?</label>
          <input type="text" name="cost" onChange={this.changeHandler} value={this.state.cost}></input>
          <label name="date">When did this maintenance occur?</label>
          <input type="text" name="date" onChange={this.changeHandler} value={this.state.date} ></input>
          <label name="note">Any additional comments or notes?</label>
          <textarea name="note" onChange={this.changeHandler} value={this.state.note}></textarea>
          <button className="form-submit">Add Log</button>
        </form>
      </div>
    );
  }
}

export default UpdateLog;