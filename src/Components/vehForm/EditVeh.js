import React, { Component } from 'react';

class EditVeh extends Component {
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
  }
  render() {
    return (
      <div className="Update-veh">
        <h4>Add or Edit</h4>
        <form className="add-veh-form" onSubmit={(event) => this.props.formSubmit(event, this.state)}>
          <label name="maintenance">What maintenance did your perform?</label>
          <input type="text" name="maintenance" onChange={this.changeHandler} defaultValue={this.state.maintenance} ></input>
          <label name="cost">how much did this cost?</label>
          <input type="text" name="cost" onChange={this.changeHandler} defaultValue={this.state.cost} ></input>
          <label name="date">When did this maintenance occur?</label>
          <input type="text" name="date" onChange={this.changeHandler} defaultValue={this.state.date} ></input>
          <label name="note">Any additional comments or notes?</label>
          <textarea name="note" onChange={this.changeHandler} defaultValue={this.state.note} ></textarea>
          <button className="form-submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default EditVeh;