import React, {useState} from "react";
import Button from '@material-ui/core/Button';


const Counter = (props) => {

    const [count, setCount] = useState(0)

    return (
        <React.Fragment>

            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>plus</button>
            <button onClick={() => setCount(count - 1)}>minus</button>

            <Button variant="contained" color="primary">
                Hello World
            </Button>

        </React.Fragment>
    );
}

export default Counter