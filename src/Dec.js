import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "./redux/counter/actionCreators";

const Dec = () => {
  const dispatch = useDispatch();
  const { dec } = useSelector((state) => {
    return state.key2;
  });
  const decFun = () => {
    dispatch(decrement(2));
  };
  return (
    <div>
      <button onClick={decFun}>Decrement</button>
      <p>{dec}</p>
    </div>
  );
};
export default Dec;
