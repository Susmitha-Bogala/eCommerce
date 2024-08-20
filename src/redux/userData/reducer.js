import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};
