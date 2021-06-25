import React, { useReducer } from 'react'
import { counterReducer } from '../Reducer/CounterReducer';

export default function Counter() {

     const initialState = { count: 0 };
     const [state, dispatch] = useReducer(counterReducer, initialState)

     return (
          <div>
               {state.count}

               <br /><br />

               <button onClick={() => dispatch({ type1: 'increment' })}>Increment</button>
               <br /> <br />
               <button >Decrement</button>
          </div>
     )
}
