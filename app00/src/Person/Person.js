import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>        
        {props.name} Arafat {props.age}
      </p>      
    </div>
  );
};

export default person;
