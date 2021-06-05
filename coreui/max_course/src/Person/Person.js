import {useState} from "react";

const Person = (props) => {

    const [person, setPerson] = useState({
        persons: [
            {name: 'max', age: 28},
            {name: 'bob', age: 40},
        ]
    })

    let handleClick = () => {
        setPerson({
            persons: [
                {name: 'bob', age: 28},
                {name: 'max', age: 40},
            ]
        })
    }

    return (
        <div>
            <button onClick={handleClick} type="button">click</button>
            <p>{person.persons[0].name}</p>
            <p>{person.persons[1].name}</p>
        </div>
    );
}

export default Person