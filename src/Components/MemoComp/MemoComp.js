import React, { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function MemoComp() {
  const history = useNavigate();
  const [num, setNum] = useState(1);
  const [dummy, setDummy] = useState(0);

  useEffect(() => console.log("Component Updated"));

  const factCalc = (n) => {
    console.log("Fact calculation done");
    if (n === 1) return 1;
    return n * factCalc(n - 1);
  };

  const factNum = useMemo(() => factCalc(num), [num]);

  return (
    <div className="alignCenter">
      <h6>{`Factorial of ${num} is ${factNum}`}</h6>
      <Button onClick={() => setNum(num + 1)}>Increment Num</Button>
      <p>
        <Button onClick={() => setDummy(dummy + 1)}>Re-render Component</Button>
      </p>
      <p>
        <Button onClick={() => history("/")}>Go to dashboard</Button>
      </p>
    </div>
  );
}
