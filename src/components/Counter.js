import { useDispatch, useSelector } from "react-redux";

import { increment, reset, decrement } from "../store/counter/actions";

export default function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  console.log(counter);

  const decFunction = () => {
    if (counter > 0) {
      dispatch(decrement());
    }
  };

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
