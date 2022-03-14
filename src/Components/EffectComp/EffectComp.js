import React, { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const EffectComp = () => {
  const history = useNavigate();
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    console.log("Component Updated");
  });

  useEffect(() => {
    console.log("Num got changed");
  }, [num]);

  useEffect(() => {
    console.log("Component Mounted");
    return () => console.log("Component Unmounted");
  }, []);

  return (
    <div style={{ display: "table", margin: "0px auto" }}>
      <p>{num}</p>
      <p>{num2}</p>
      <Button onClick={() => setNum(num + 1)}>Inc Num</Button>
      <Button onClick={() => setNum2(num2 + 1)} style={{ margin: "10px" }}>
        Inc Num 2
      </Button>
      <Button onClick={() => history("/")}>Go to dashboard</Button>
    </div>
  );
};

export default memo(EffectComp);
