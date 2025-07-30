import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";
import Button from "../buttons/Button";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-yellow-100 w-full h-screen flex items-center justify-center">
      <div className="bg-yellow-100 w-full h-auto flex items-center justify-center">
        <div className="bg-white w-1/5 p-10 rounded shadow-md ">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-2xl text-black ">
              <strong>Counter: </strong>
            </h1>
            <p className="flex items-center justify-center  text-2xl text-black">
              {count}
            </p>
          </div>
          <div className="flex items-center justify-center mt-10 gap-1">
            <Button
              onClick={() => dispatch(increment())}
              className={
                "bg-yellow-200 hover:bg-amber-300 px-4 py-1 rounded-2xl"
              }
              text={"Increment"}
            />
            <Button
              onClick={() => dispatch(decrement())}
              className={
                "bg-yellow-200 hover:bg-amber-300 px-4 py-1 rounded-2xl"
              }
              text={"Decrement"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
