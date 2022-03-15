import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function ReducerComp() {
  const history = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="alignCenter">
      <Button
        onClick={() => dispatch({ type: "inc" })}
        style={{ margin: "10px 0px" }}
      >
        Increment
      </Button>
      <h4 style={{ margin: "0px 10px" }}>{state.count}</h4>
      <Button onClick={() => dispatch({ type: "dec" })}>Decrement</Button>
      <p>
        <Button onClick={() => history("/")}>Go to dashboard</Button>
      </p>
    </div>
  );
}
