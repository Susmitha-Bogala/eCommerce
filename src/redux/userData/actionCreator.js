import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actions";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserDataSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: payload,
  };
};
export const fetchUserDataFailure = (payload) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: payload,
  };
};

// thunk creator

export const fetchUserData = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUserDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserDataFailure(error.message));
      });
  };
};
