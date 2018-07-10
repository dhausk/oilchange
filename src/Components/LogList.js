import React from 'react';

function LogList(props) {
  let timeStamp = new Date(props.log.date);
  let date = timeStamp.toLocaleDateString();

  return (
    <div className="LogList-div">
      <p>{props.log.maintenance}</p>
      <p>{date}</p>
      <p>{props.log.note}</p>
      <p>{props.log.cost}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default LogList;