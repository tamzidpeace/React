import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "max", age: 28 },
      { name: "manu", age: 29 },
      { name: "stephanie", age: 26 },
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = (newName) => {
    console.log('clicked');
    personState.persons[0].name = "arafat";
    setPersonState({
      persons: [
        {name: newName, age: 28},
        {name: 'manu', age: 29},
        {name: 'stephanie', age: 25},
      ],
      otherState: personState.otherState,
    });
  };

  const nameChangeHandler = (event) => {
    setPersonState({
      persons : [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'stephanie', age: 26},
      ],
    });
  };

  return (
    <div className="App">
      <h1>His I am React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler.bind(this, 'Kamal')}>Switch Name</button>
      <Person
        click={switchNameHandler.bind(this, 'k')}
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        changed={nameChangeHandler}
      >
        {" "}
        My Hobbies:Racing{" "}
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
      <Person name={personState.otherState} />
    </div>
  );
};

export default app;

/*
state = {
  persons: [
    {name: 'max', age: 28},
    {name: 'manu', age: 29},
    {name: 'stephanie', age: 26},
  ],
  otherState: 'some other value'
}

switchNameHandler = () => {
  //console.log('clicked');
  //personState.persons[0].name = "arafat";
  this.setState({
    persons: [
      {name: 'arafat', age: 28},
      {name: 'manu', age: 29},
      {name: 'stephanie', age: 25},
    ],
    otherState: 'some other value change'
  });
}
*/
