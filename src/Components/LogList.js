import React from 'react';

function LogList(props) {
  // let timeStamp = new Date(props.log.date);
  // let date = timeStamp.toLocaleDateString();
  return (
    <div className="card-div">
      <div className="card-deets">
        <p>Maintenance done: {props.log.maintenance}</p>
        <p>Date: {props.log.date}</p>
        <p>Notes: {props.log.note}</p>
        <p>Cost: ${props.log.cost}</p>
      </div>
      <div className="card-buttons"></div>
      <button className="card-button" value="log" id="2" onClick={(event) => props.editClick(event, props.log.id)}>Edit</button>
      <button className="card-button" >Delete</button>
    </div>
  )
}

export default LogList;