import React from "react";
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>        
        {props.name} Arafat {props.age}
      </p> 
      <input type="text" onChange={props.changed} value={props.name} />     
    </div>
  );
};

export default person;
