import React, { Component } from 'react';

class UpdateLog extends Component {

  render() {
    return (
      <div className="Update-log">
        <h4>Update this maintenance service log for the {this.props.selectedCard.date}</h4>

        <form className="form" onSubmit={(event) => this.props.handleEdit(event, this.props.selectedCard.id, "logs")}>

          <label name="maintenance">What maintenance did your perform?</label>
          <input type="text" name="maintenance" defaultValue={this.props.selectedCard.maintenance} required ></input>

          <label name="cost">How much did this cost?</label>
          <input type="text" name="cost" defaultValue={this.props.selectedCard.cost} required ></input>

          <label name="date">When did this maintenance occur?</label>
          <input type="date" name="date" defaultValue={this.props.selectedCard.date} required ></input>

          <label name="note">Any additional comments or notes?</label>
          <textarea name="note" defaultValue={this.props.selectedCard.note} ></textarea>

          <button className="form-submit">Add Log</button>
        </form>
      </div>
    );
  }
}

export default UpdateLog;