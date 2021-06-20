import './App.css';
import Persons from "./Persons";
import PersonContext from "./PersonContext";
import {useState} from "react";

function App() {

    // const mPersons = ['arafat', 'latif', 'mukit', 'mifta'];

    const [mPersons, setPerson] = useState(['arafat']);

    return (
        <div className="App">

            <PersonContext.Provider value={[mPersons, setPerson]}>
                <Persons/>
            </PersonContext.Provider>

        </div>
    );

}


export default App;
