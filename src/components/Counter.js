import { useState } from "react";

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    let count = counter;
    count++;
    setCounter(count);
  };

  const decrement = () => {
    if (counter > 0) {
      let count = counter;
      count--;
      setCounter(count);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="count">{counter}</div>
      <div>
        <button onClick={increment}>INCERMENT</button>
        <button onClick={reset}>RESET</button>
        <button onClick={decrement}>DECREMENT</button>
      </div>
    </>
  );
}
