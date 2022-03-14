import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const history = useNavigate();
  const buttonStyle = {
    width: "200px",
    margin: "5px 0",
  };

  const redirectToUseState = () => history("/use-state");
  const redirectToUseEffect = () => history("/use-effect");
  const redirectToUseContext = () => history("/use-context");
  const redirectToUseRef = () => history("/use-ref");
  const redirectToUseReducer = () => history("/use-reducer");
  const redirectToUseMemo = () => history("/use-memo");
  const redirectToUseCallback = () => history("/use-callback");
  const redirectToUseImp = () => history("/use-imperative-handle");
  const redirectToUseLayout = () => history("/use-layout-effect");
  const redirectToUseDebug = () => history("/use-debug-value");

  return (
    <div
      style={{
        display: "grid",
        justifyItems: "center",
        margin: "20px 0",
      }}
    >
      <Button onClick={redirectToUseState} style={buttonStyle}>
        UseState
      </Button>
      <Button onClick={redirectToUseEffect} style={buttonStyle}>
        UseEffect
      </Button>
      <Button onClick={redirectToUseContext} style={buttonStyle}>
        UseContext
      </Button>
      <Button onClick={redirectToUseRef} style={buttonStyle}>
        UseRef
      </Button>
      <Button onClick={redirectToUseReducer} style={buttonStyle}>
        UseReducer
      </Button>
      <Button onClick={redirectToUseMemo} style={buttonStyle}>
        UseMemo
      </Button>
      <Button onClick={redirectToUseCallback} style={buttonStyle}>
        UseCallback
      </Button>
      <Button onClick={redirectToUseImp} style={buttonStyle}>
        UseImperativeHanle
      </Button>
      <Button onClick={redirectToUseLayout} style={buttonStyle}>
        UseLayoutEffect
      </Button>
      <Button onClick={redirectToUseDebug} style={buttonStyle}>
        UseDebugValue
      </Button>
    </div>
  );
}
