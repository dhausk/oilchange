import React from 'react';

function VehCard(props) {
  return (
    < div className="vehicle-card" id={props.veh.id} onClick={(event) => props.onClickedCard(event, props.veh.id)} >
      <p className="make" >Make : {props.veh.make} </p>
      <p className="model" >Model: {props.veh.model}</p>
      <p className="year" >Year: {props.veh.year}</p>
      <p className="details" >Details: {props.veh.note}</p>
    </div >
  )
}

export default VehCard;