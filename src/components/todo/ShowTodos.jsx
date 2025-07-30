import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import Input from "../input/Input";

const ShowTodos = () => {
    const todos=useSelector((state)=>state.todo.todos);
    console.log(todos);
  return (
    <div className="h-50 rounded-2xl overflow-auto no-scrollbar ">
      {todos.length > 0 && (
        <>
          {todos.map((item) => (
            <div>
            <div key={item.id} className="flex items-center justify-start mt-1 ">
              <div className=" ">
                <label >
                  {/* <input  type="radio"  checked={item.done} /> */}
                  <Input type={"radio"} checked={item.done} className="w-8 h-6 mb-3"/>
                </label>
              </div>
              <div className="mx-4  sm:block hidden">
                <Todo  todo={item} />
              </div>
            </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ShowTodos;
