import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function LayoutEffectComp() {
  const history = useNavigate();
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   if (num === 0) {
  //     setNum(10 + Math.floor(Math.random() * 12345));
  //   }
  // }, [num]);

  useLayoutEffect(() => {
    if (num === 0) {
      setNum(10 + Math.floor(Math.random() * 145));
    }
  }, [num]);

  return (
    <div className="alignCenter">
      <h1>{num}</h1>
      <Button onClick={() => setNum(0)}>Set to Zero</Button>
      <p>
        <Button onClick={() => history("/")}>Go to dashboard</Button>
      </p>
    </div>
  );
}
