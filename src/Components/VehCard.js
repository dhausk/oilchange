import React from 'react';
import './App.css';

function VehCard(props) {
  return (
    < div className="vehicle-card" id={props.veh.id} onClick={props.vehClick} >
      <p className="make" >Make : {props.veh.make} </p>
      <p className="model" >Model: {props.veh.model}</p>
      <p className="year" >Year: {props.veh.year}</p>
      <p className="details" >Details: {props.veh.note}</p>
    </div >
  )
}

export default VehCard;