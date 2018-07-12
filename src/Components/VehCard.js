import React from 'react';
import { Link } from 'react-router-dom';

function VehCard(props) {
  return (
    <div className="vehicle-card" id={props.veh.id} >
      <div className="veh-deets">
        <p className="make" >Make : {props.veh.make} </p>
        <p className="model" >Model: {props.veh.model}</p>
        <p className="year" >Year: {props.veh.year}</p>
        <p className="details" >Details: {props.veh.note}</p>
      </div>
      <div className="veh-buttons">
        <Link to="/Log" >
          <button className="veh-button" onClick={(event) => props.onClickedCard(props.veh.id)}>
            Select the {props.veh.model}
          </button>
        </Link>
        <button className="veh-button" onClick={(event) => props.handleEdit(props.veh.id)}>Edit</button>
        <button className="veh-button" onClick={(event) => props.handleDelete(props.veh.id)}>Delete</button>
      </div>
    </div>
  )
}

export default VehCard;