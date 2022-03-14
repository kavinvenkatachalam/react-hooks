import React, { useEffect, useState, memo } from "react";

const EffectComponent = () => {
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
    <div>
      <p>{num}</p>
      <p>{num2}</p>
      <button onClick={() => setNum(num + 1)}>Inc Num</button>
      <button onClick={() => setNum2(num2 + 1)}>Inc Num 2</button>
    </div>
  );
};

export default memo(EffectComponent);
