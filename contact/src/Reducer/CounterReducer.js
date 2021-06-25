const initialState = { count: 0 };

export function counterReducer(state, action) {
     switch (action.type1) {
          case 'increment':
               return { count: state.count + 1 };

          case 'decrement':
               return { count: state.count - 1 }

          default:
               throw new Error();
     }
}