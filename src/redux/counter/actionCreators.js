import { INCREMENT, DECREMENT } from "./actions";

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload: payload,
  };
};

export const decrement = (x) => {
  return {
    type: DECREMENT,
    payload: x,
  };
};
