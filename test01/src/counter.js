import React, {useState} from "react";


const Counter = (props) => {

    const [count, setCount] = useState(0)

    return (
        <React.Fragment>

            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>plus</button>
            <button onClick={() => setCount(count - 1)}>minus</button>

        </React.Fragment>
    );
}

export default Counter