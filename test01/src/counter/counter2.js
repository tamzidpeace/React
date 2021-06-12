import {useDispatch, useSelector} from "react-redux";
import {decrement2, increment2} from "../redux/ducks/counter";

export default function Counter2() {


    const count2 = useSelector((state) => state.counter.count2);
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment2())
    }

    const decrementHandler = () => {
        dispatch(decrement2())
    }

    return (
        <div>
            <h1>count {count}</h1>
            <h1>count2 {count2}</h1>

            <button onClick={decrementHandler}>minus</button>
            <button onClick={incrementHandler}>plus</button>
        </div>
    );

}