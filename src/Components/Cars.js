import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cars extends Component {
  CarSelected = () => {
    // event.preventDefault();

  }
  onBefore = () => {

  }
  render() {
    return (
      <div className="">
        <h2>Cars</h2>
        <p>Select your car from the drop down list or </p>
        <div>
          <form onSubmit={this.CarSelected}>
            <label>Please select your car from the list please. To go to its Logs</label>
            <input></input>
            <button type="submit" >Take Me to My Logs</button>
          </form>
        </div>
        <div>
          <form>
            <label>Please enter the name of your car, can be a nick name too.</label>
            <input></input>
            <button type="submit">Add Car</button>
          </form>
          <form>
            <label>Please select your car to Edit</label>
            <input></input>
            <button type="submit">Done Editing</button>
          </form>
          <form>
            <label>Please select your car to Delete</label>
            <input></input>
            <button type="submit">Delete</button>
          </form>
        </div>

      </div>


    );
  }
};

export default Cars;