import React, { useContext, useState, createContext } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ValueContext = createContext(0);

const ChildComp = () => {
  const value = useContext(ValueContext);
  return (
    <>
      <h2>{value.count}</h2>
      <Button onClick={value.incCount}>Increment Count</Button>
    </>
  );
};

const ParentComp = ({ children }) => <>{children}</>;

export default function ContextComp() {
  const history = useNavigate();

  const [count, setCount] = useState(0);

  const incCount = () => setCount((n) => n + 1);

  return (
    <div className="alignCenter">
      <p>
        <ValueContext.Provider value={{ count, incCount }}>
          <ParentComp>
            <ChildComp />
          </ParentComp>
        </ValueContext.Provider>
        <Button onClick={() => history("/")}>Go to dashboard</Button>
      </p>
    </div>
  );
}
