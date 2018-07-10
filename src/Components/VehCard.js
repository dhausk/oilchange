import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function VehCard(props) {
  return (
    < div className="vehicle-card" id={props.veh.id} >
      <p>Make : {props.veh.make} </p>
      <p>Model: {props.veh.model}</p>
      <p>Year: {props.veh.year}</p>
      <p>Details: {props.veh.note}</p>
    </div >
  )
}

export default VehCard;