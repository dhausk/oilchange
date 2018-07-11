import React, { Component } from 'react';

class CreateLog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "make": "",
      "model": "",
      "year": 1999,
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
  addCreateSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

  }
  render() {
    return (
      <div className="add-log" onSubmit={this.addCreateSubmit} >
        <h4>Add a maintenance service log for the {this.props.vehicleSelected.model}</h4>
        <form className="add-form" onSubmit={this.props.formSubmit}>
          <label name="make">What make is your car?</label>
          <input type="text" name="make" onChange={this.changeHandler} value={this.state.make} required></input>

          <label name="model">what model is your car?</label>
          <input type="text" name="model" onChange={this.changeHandler} value={this.state.model} required></input>

          <label name="year">What year is your ?</label>
          <input type="number" name="year" onChange={this.changeHandler} value={this.state.date} min="4" max="4" required ></input>

          <label name="note">Any additional comments or notes?</label>
          <textarea name="note" onChange={this.changeHandler} value={this.state.note}></textarea>

          <button className="form-submit">Add Log</button>
        </form>
      </div>
    );
  }
}

export default CreateLog;
