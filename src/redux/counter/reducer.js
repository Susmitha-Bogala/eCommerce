import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  dec: 0,
  inc: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        inc: state.inc + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        dec: state.dec - action.payload,
      };

    default:
      return { ...state };
  }
};
