import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, reset, decrement } from "../store/counter/actions";

export default function Counter(props) {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  console.log(counter);
  // const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   let count = counter;
  //   count++;
  //   setCounter(count);
  // };

  const decFunction = () => {
    if (counter > 0) {
      dispatch(decrement());
    }
  };

  // const reset = () => {
  //   setCounter(0);
  // };

  return (
    <>
      <div className="count">{counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>INCERMENT</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
        <button onClick={decFunction}>DECREMENT</button>
      </div>
    </>
  );
}
