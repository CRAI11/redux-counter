// Action Types

const INCERMENT = "incCounter";
const DECREMENT = "decCounter";
const RESET = "resetCounter";

// Action Creators

export const increment = () => ({
  type: INCERMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

// Reducer

let count = 0;
// let initialState = { counter: 0 };

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCERMENT:
      return {
        ...state,
        counter: ++count,
      };

    case DECREMENT:
      return {
        ...state,
        counter: --count,
      };

    case RESET:
      return {
        ...state,
        counter: (count = 0),
      };

    default:
      return state;
  }
};

export default reducer;
