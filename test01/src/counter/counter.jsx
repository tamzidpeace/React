import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../redux/ducks/counter";

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }

    return (
        <React.Fragment>

            <div style={{textAlign: 'center',}}>
                <h1>Redux Made Easy</h1>

                <div className="count">

                    <h3>Count : {count}</h3>

                    <div className="mt-5">

                        <button onClick={decrementHandler} className="btn btn-danger mr-2">
                            <i className="fas fa-minus"/>
                        </button>

                        <button onClick={incrementHandler} className="btn btn-success mr-2">
                            <i className="fas fa-plus"/>
                        </button>


                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}

export default Counter