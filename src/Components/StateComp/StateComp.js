import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function StateComp() {
  const history = useNavigate();
  const [value, setValue] = useState(0);

  // Get pervious state value
  const incValue = () => setValue((v) => v + 1);
  const decValue = () => setValue((v) => v - 1);
  return (
    <div>
      <div style={{ display: "flex", padding: "20px" }}>
        <Button onClick={incValue}>increment</Button>
        <h4 style={{ padding: "0px 10px" }}>{value}</h4>
        <Button style={{ margin: "0px 10px" }} onClick={decValue}>
          decrement
        </Button>
        <Button onClick={() => history("/")}>Go to Dashboard</Button>
      </div>
    </div>
  );
}
