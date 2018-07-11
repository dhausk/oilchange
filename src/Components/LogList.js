import React from 'react';

function LogList(props) {
  let timeStamp = new Date(props.log.date);
  let date = timeStamp.toLocaleDateString();
  return (
    <div className="logList-div">
      <p>{props.log.maintenance}</p>
      <p>{date}</p>
      <p>{props.log.note}</p>
      <p>{props.log.cost}</p>
      <button className="log-button" value="2" onClick={(event) => props.editClick(event)}>Edit</button>
      <button className="log-button" >Delete</button>
    </div>
  )
}

export default LogList;