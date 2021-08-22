import { useState, useContext } from "react";
import { ThemeContext } from "./App";

const CounterHooks = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  const changeCount = (amount) => {
    setCount((prev) => prev + amount);
  };
  return (
    <div>
      <button style={style} onClick={() => changeCount(-1)}>
        -
      </button>
      <span>{count}</span>
      <button style={style} onClick={() => changeCount(1)}>
        +
      </button>
    </div>
  );
};

export default CounterHooks;
