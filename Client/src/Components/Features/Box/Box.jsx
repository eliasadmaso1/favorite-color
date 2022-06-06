import React from "react";
import "./Box.css";

function Box({color,numberOfVotes,progressWidth,handleClick}) {
  return (
    <div className="box" style={{backgroundColor:color}} onClick={handleClick}>
      <div className="progress" style={{width:progressWidth}}>{numberOfVotes}</div>
    </div>
  );
}

export default Box;
