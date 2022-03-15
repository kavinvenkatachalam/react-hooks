import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function RefComp() {
  const inputRef = useRef();
  const history = useNavigate();

  const getInputVal = () => alert(inputRef.current.value);

  return (
    <div className="alignCenter">
      <input ref={inputRef} type="text"></input>
      <br></br>
      <Button onClick={getInputVal} style={{ margin: "10px 0px" }}>
        Get Input Value
      </Button>
      <br></br>
      <Button onClick={() => inputRef.current.focus()}>Focus Input</Button>
      <p>
        <Button onClick={() => history("/")}>Go to dashboard</Button>
      </p>
    </div>
  );
}
