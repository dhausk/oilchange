import React, { Component } from 'react';

class UpdateLog extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     "veh_id": 1,
  //     "maintenance": "",
  //     "cost": 0,
  //     "date": 'YYYY-MM-DD',
  //     "note": ""
  //   }
  // }
  // changeHandler = (event) => {
  //   const key = event.target.name
  //   const value = event.target.value
  //   this.setState({
  //     [key]: value
  //   })
  // }
  render() {
    return (
      <div className="Update-log">
        <h4>Update this maintenance service log for the {this.props.vehicleSelected.model}</h4>
        <form className="form" onSubmit={(event) => this.props.formSubmit(event, this.state, )}>
          <label name="maintenance">What maintenance did your perform?</label>
          <input type="text" name="maintenance" onChange={this.changeHandler} defaultValue={this.props.maintenance} required ></input>
          <label name="cost">how much did this cost?</label>
          <input type="text" name="cost" onChange={this.changeHandler} defaultValue={this.props.cost} required ></input>
          <label name="date">When did this maintenance occur?</label>
          <input type="date" name="date" onChange={this.changeHandler} defaultValue={this.props.date} required ></input>
          <label name="note">Any additional comments or notes?</label>
          <textarea name="note" onChange={this.changeHandler} defaultValue={this.props.note} ></textarea>
          <button className="form-submit">Add Log</button>
        </form>
      </div>
    );
  }
}

export default UpdateLog;