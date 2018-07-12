import React from 'react';

function LogList(props) {
  // let timeStamp = new Date(props.log.date);
  // let date = timeStamp.toLocaleDateString();
  return (
    <div className="card-div">
      <div className="card-deets">
        <p>{props.log.maintenance}</p>
        <p>{props.log.date}</p>
        <p>{props.log.note}</p>
        <p>{props.log.cost}</p>
      </div>
      <div className="card-buttons"></div>
      <button className="card-button" value="2" id={props.log.id} onClick={(event) => props.editClick(event)}>Edit</button>
      <button className="card-button" >Delete</button>
    </div>
  )
}

export default LogList;