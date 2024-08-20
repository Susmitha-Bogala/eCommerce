import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import Title from "./Title";

import Button from "./Utilities/Button";

function Login() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(10000);

  const updateAge = useCallback(() => {
    setAge((age) => age + 1);
  }, [age]);

  const updateSalary = useCallback(() => {
    setSalary((salary) => salary + 5000);
  }, [salary]);

  const ageIsEven = useMemo(() => {
    let i = 1;
    while (i < 290000000) {
      i++;
    }
    return age % 2 == 0 ? "Even" : "Odd";
  }, [age]);

  return (
    <div>
      <Title title={age} />
      <p>{ageIsEven}</p>
      <Button onClickFn={updateAge} title="Increment Age" />
      <Title title={salary} />
      <Button onClickFn={updateSalary} title="Increment Salary" />
    </div>
  );
}

export default React.memo(Login);
