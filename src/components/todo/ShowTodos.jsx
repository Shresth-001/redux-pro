import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const ShowTodos = () => {
    const todos=useSelector((state)=>state.todo.todos);
    console.log(todos);
  return (
    <div className="h-50 rounded-2xl overflow-auto no-scrollbar ">
      {todos.length > 0 && (
        <>
          {todos.map((item) => (
            <div key={item.id} className="flex items-center justify-start mt-1">
              <div>
                <label key={item.id}>
                  <input  type="radio" key={item.id} checked={item.done} />
                </label>
              </div>
              <div className="border-r-2 border-gray-300 mx-4 self-stretch sm:block hidden">
                <Todo key={item.id} todo={item} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ShowTodos;
