import React from 'react';
import { Link } from 'react-router-dom';

function VehCard(props) {
  return (
    < div className="vehicle-card" id={props.veh.id} >
      <p className="make" >Make : {props.veh.make} </p>
      <p className="model" >Model: {props.veh.model}</p>
      <p className="year" >Year: {props.veh.year}</p>
      <p className="details" >Details: {props.veh.note}</p>
      <button className="vehicle-select" onClick={(event) => props.onClickedCard(props.veh.id)}>
        <Link to="/Log">Select the {props.veh.model}</Link>
      </button>
    </div >
  )
}

export default VehCard;