import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>        
        {props.name} Arafat {props.age}
      </p> 
      <input type="text" onChange={props.changed} value={props.name} />     
    </div>
  );
};

export default person;
