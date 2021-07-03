import React, {Component} from 'react';
import './App.css';


class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [
                {name: 'Frankenstein', key: 1},
                {name: 'Dracula', key: 2},
                {name: 'Zombie', key: 3},
            ]
        }
    }


    render() {
        return (
            <div className="App">
                {this.state.monsters.map(monster => (<h1 key={monster.key}>{monster.name}</h1>))}
            </div>

        );
    }
}


export default App;
