import React, { Component } from 'react';

class updateVeh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "id": 1,
      "make": "",
      "model": "",
      "year": 1111,
      "note": ""
    }
  }
  changeHandler = (event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState({
      [key]: value
    })
    console.log(this.state);

  }
  render() {
    return (
      <div className="update-veh">
        <h4>Update this Vehicle</h4>
        <form className="form" onSubmit={(event) => this.props.formSubmit(event, this.state)}>
          <label name="make">Vehicle Make</label>
          <input type="text" name="make" onChange={this.changeHandler} placeholder="Make of the vehicle" required ></input>
          <label name="model">Model of Vehicle</label>
          <input type="text" name="model" onChange={this.changeHandler} placeholder="Model of vehicle" required ></input>
          <label name="year">Year of Manufacture</label>
          <input type="text" name="year" onChange={this.changeHandler} placeholder="YYYY" minLength="4" maxLength="4" ></input>
          <label name="note">Any additional comments or notes</label>
          <textarea name="note" onChange={this.changeHandler} placeholder="Add any additional info like transmission type, engine size, sedan or coupe, color." ></textarea>
          <button className="form-submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default updateVeh;