import React, { useState, useCallback, useEffect } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const DisplayComp = React.memo(({ inc, dec, value }) => {
  const history = useNavigate();

  useEffect(() => console.log("Component Updated"));

  return (
    <div>
      <div style={{ display: "flex", padding: "20px" }}>
        <Button onClick={inc}>increment</Button>
        <h4 style={{ padding: "0px 10px" }}>{value}</h4>
        <Button style={{ margin: "0px 10px" }} onClick={dec}>
          decrement
        </Button>
        <p>
          <Button onClick={() => history("/")}>Go to Dashboard</Button>
        </p>
      </div>
    </div>
  );
});

export default function StateComp() {
  const [value, setValue] = useState(0);
  const [dummy, setDummy] = useState(0);

  useEffect(() => console.log("Parent Component re-rendered"));

  // Get pervious state value
  const incValue = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  const decValue = useCallback(() => {
    setValue(value - 1);
  }, [value]);

  const reRender = () => setDummy(dummy + 1);

  return (
    <>
      <Button onClick={reRender}>Re-render Component</Button>
      <DisplayComp inc={incValue} dec={decValue} value={value} />
    </>
  );
}
