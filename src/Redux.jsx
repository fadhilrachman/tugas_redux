import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dicrement } from "./features/action";
const Redux = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div>
      <button onClick={() => dispatch(dicrement())}>-</button>
      {counter.count}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
    </div>
  );
};

export default Redux;
