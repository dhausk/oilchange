import React, { Component } from 'react';

class updateVeh extends Component {
  render() {
    return (
      <div className="update-veh" >
        <h4>Update this Vehicle</h4>
        <form className="form" onSubmit={(event) => this.props.handleEdit(event, this.props.selectedCard.id)}>
          <label name="make">Vehicle Make</label>
          <input type="text" name="make" onChange={this.changeHandler} defaultValue={this.props.selectedCard.make} required ></input>
          <label name="model">Model of Vehicle</label>
          <input type="text" name="model" onChange={this.changeHandler} defaultValue={this.props.selectedCard.model} required ></input>
          <label name="year">Year of Manufacture</label>
          <input type="text" name="year" onChange={this.changeHandler} defaultValue={this.props.selectedCard.year} minLength="4" maxLength="4" ></input>
          <label name="note">Any additional comments or notes</label>
          <textarea name="note" onChange={this.changeHandler} defaultValue={this.props.selectedCard.note} ></textarea>
          <button className="form-submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default updateVeh;