import React, {useContext} from 'react';
import Person from "./Person";
import PersonContext from "./PersonContext";

function Persons(props) {

    const [mPersons, setPerson] = useContext(PersonContext);

    return (
        <div>
            <h1>Persons Component</h1>
            <strong>{mPersons}</strong>
            <Person/>
        </div>
    );
}

export default Persons;