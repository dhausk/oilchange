import React from 'react';
import { Link } from 'react-router-dom';

function VehCard(props) {
  return (
    <div className="card-div" id={props.veh.id} >
      <div className="card-deets">
        <p className="make" >Make : {props.veh.make} </p>
        <p className="model" >Model: {props.veh.model}</p>
        <p className="year" >Year: {props.veh.year}</p>
        <p className="details" >Details: {props.veh.note}</p>
      </div>
      <div className="card-buttons">
        <Link to="/Log" >
          <button className="card-button" onClick={(event) => props.onClickedVeh(props.veh.id)}>
            Select the {props.veh.model}
          </button>
        </Link>
        <button className="card-button" onClick={(event) => props.handleEdit(props.veh.id)}>Edit</button>
        <button className="card-button" onClick={(event) => props.handleDelete(props.veh.id)}>Delete</button>
      </div>
    </div>
  )
}

export default VehCard;