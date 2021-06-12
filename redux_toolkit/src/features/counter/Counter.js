import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, incrementByAmount} from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <h1>Vote: {count}</h1>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(incrementByAmount(10 ))}>IncrementBy</button>
            </div>
        </div>
    )
}