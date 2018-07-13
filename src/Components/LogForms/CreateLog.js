import React, { Component } from 'react';

class CreateLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "veh_id": this.props.selectedVehicle.id || 0,
      "maintenance": "",
      "cost": "",
      "date": '',
      "note": ""
    }
  }
  changeHandler = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({
      [key]: value
    })
  }
  logCreateSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="add-log" >
        <h3>Add a log for the Vehicle</h3>

        <form className="form" onSubmit={(event) => this.props.handleAdd(event, this.state, "log")}>
          <label name="maintenance">What maintenance did your perform?</label>
          <input type="text" name="maintenance" onChange={this.changeHandler} value={this.state.maintenance} placeholder="Maintenance" required></input>

          <label name="cost">How much did this cost?</label>
          <input type="number" name="cost" onChange={this.changeHandler} value={this.state.cost} required></input>

          <label name="date">When did this maintenance occur?</label>
          <input type="date" name="date" onChange={this.changeHandler} value={this.state.date} required></input>

          <label name="note">Any additional comments or notes?</label>
          <textarea name="note" onChange={this.changeHandler} value={this.state.note}></textarea>
          <button className="form-submit">Add Log</button>
        </form>
      </div>
    );
  }
}

export default CreateLog;
