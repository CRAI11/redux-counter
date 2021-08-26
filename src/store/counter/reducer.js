import * as actions from "./actionTypes";

let count = 0;
// let initialState = { counter: 0 };

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case actions.INCERMENT:
      return {
        ...state,
        counter: ++count,
      };

    case actions.DECREMENT:
      return {
        ...state,
        counter: --count,
      };

    case actions.RESET:
      return {
        ...state,
        counter: (count = 0),
      };

    default:
      return state;
  }
};

export default reducer;
