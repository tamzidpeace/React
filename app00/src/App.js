import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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
    //this.state.persons[0].name = "arafat";
    this.setState({
      persons: [
        {name: 'arafat', age: 28},
        {name: 'manu', age: 29},
        {name: 'stephanie', age: 25},
      ],
      otherState: 'some other value change'
    });
  }

  render() {
    return (
      <div className="App">
        <h1>His I am React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies:Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.otherState}/>
      </div>
    );
  }
}

export default App;
