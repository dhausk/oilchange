import React, { Component } from 'react';

class AddVeh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "make": "",
      "model": "",
      "note": "",
      "year": ""
    }
  }
  changeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    });
  }
  render() {
    return (
      <div className="add-veh">
        <h4>Add a Vehicle</h4>
        <form className="form" onSubmit={(event) => this.props.handleAdd(event, this.state, "vehicles")}>
          <label name="make">Vehicle Make</label>
          <input type="text" name="make" onChange={this.changeHandler} placeholder="Make of the vehicle" value={this.state.make} required ></input>
          <label name="model">Model of Vehicle</label>
          <input type="text" name="model" onChange={this.changeHandler} placeholder="Model of vehicle" value={this.state.model} required ></input>
          <label name="year">Year of Manufacture</label>
          <input type="text" name="year" onChange={this.changeHandler} placeholder="YYYY" minLength="4" maxLength="4" value={this.state.year} required ></input>
          <label name="note">Any additional comments or notes</label>
          <textarea name="note" onChange={this.changeHandler} placeholder="Add any additional info like transmission type, engine size, sedan or coupe, color." value={this.state.note}></textarea>
          <button className="form-submit"> Submit</button>
        </form>
      </div>
    );
  };
}

export default AddVeh;