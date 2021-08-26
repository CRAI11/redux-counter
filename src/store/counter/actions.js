import * as actions from "./actionTypes";

export const increment = () => ({
  type: actions.INCERMENT,
});

export const decrement = () => ({
  type: actions.DECREMENT,
});

export const reset = () => ({
  type: actions.RESET,
});
