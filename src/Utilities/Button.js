import React from "react";

const Button = ({ title, onClickFn }) => {
  console.log("Button", title);
  return <button onClick={() => onClickFn()}>{title}</button>;
};

export default React.memo(Button);
