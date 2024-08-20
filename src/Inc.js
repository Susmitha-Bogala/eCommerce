import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/counter/actionCreators";

const Inc = () => {
  const dispatch = useDispatch();
  const { inc, data } = useSelector((state) => {
    return state.key2;
  });
  const incFun = () => {
    dispatch(increment(5));
  };
  return (
    <div>
      <button onClick={incFun}>Increment</button>
      <p>{inc}</p>
    </div>
  );
};
export default Inc;
