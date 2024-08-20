import React from "react";

const Title = ({ title, onClickFn }) => {
  console.log("title", title);
  return <h1>{title}</h1>;
};

export default React.memo(Title);
