import React, { useEffect, useDebugValue, useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const useDelay = (message, time) => {
  const [msg, setMsg] = useState("");
  useEffect(() =>
    setTimeout(() => {
      setMsg(message);
    }, time)
  );

  useDebugValue(msg ? "Message Set" : "Message not set");
  return msg;
};

export default function DebugComp() {
  const history = useNavigate();
  const delayedMsg = useDelay("hello", 10000);

  return (
    <div className="alignCenter">
      <h1>{delayedMsg}</h1>
      <p>
        <Button onClick={() => history("/")}>Go to dashboard</Button>
      </p>
    </div>
  );
}
