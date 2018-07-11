import React, { Component } from 'react';

class CreateLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "veh_id": this.props.vehicleSelected.id,
      "maintenance": "",
      "cost": 0,
      "date": 'YYYY-MM-DD',
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
      <div className="add-log" onSubmit={this.logCreateSubmit} >
        <h4>Add a maintenance service log for the {this.props.vehicleSelected.model}</h4>
        <form className="add-form" onSubmit={this.props.formSubmit}>
          <label name="maintenance">What maintenance did your perform?</label>
          <input type="text" name="maintenance" onChange={this.changeHandler} value={this.state.maintenance} required></input>
          <label name="cost">how much did this cost?</label>
          <input type="text" name="cost" onChange={this.changeHandler} value={this.state.cost} required></input>
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
