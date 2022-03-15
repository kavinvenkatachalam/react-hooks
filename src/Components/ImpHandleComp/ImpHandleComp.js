import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({ incCount }));

  const incCount = () => setCount((n) => n + 1);

  return (
    <>
      <h1>{count}</h1>
      <Button onClick={incCount}>Increment Count</Button>
    </>
  );
});

export default function ImpHandleComp() {
  const history = useNavigate();
  const ref = useRef();

  return (
    <div className="alignCenter">
      <Counter ref={ref} />
      <Button onClick={() => ref.current.incCount()}>
        Increment from parent
      </Button>
      <p>
        <Button onClick={() => history("/")}>Go to dashboard</Button>
      </p>
    </div>
  );
}
