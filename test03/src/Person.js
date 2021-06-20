import React, {useContext, useReducer} from 'react';
import PersonContext from "./PersonContext";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment' :
            return {count: state.count + 1};
        case 'decrement' :
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Person(props) {

    const [mPersons, setPerson] = useContext(PersonContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    const handlePerson = () => {
        setPerson(['maruf', 'saif']);
    }

    return (
        <div>
            <h2>Person Component</h2>

            <p>{mPersons}</p>

            <button onClick={handlePerson}>setPerson</button>
                <br/>
            <>
                Count: {state.count}
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
            </>

        </div>
    );
}

export default Person;