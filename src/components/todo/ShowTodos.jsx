import React from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import Input from "../input/Input";
import { toggleTodo } from "../../redux/slice/todoSlice";

const ShowTodos = () => {
    const todos=useSelector((state)=>state.todo.todos);
    // console.log(todos);
    const dispatch=useDispatch();
    const handleToggle=(id)=>{
      dispatch(toggleTodo(id))
    }
  return (
    <div className="h-50 rounded-2xl overflow-auto no-scrollbar ">
      {todos.length > 0 && (
        <>
          {todos.map((item) => (
            <div key={item.id} className="flex items-center justify-start mt-1 ">
              <div className=" ">
                <label >
                  <Input type={"checkbox"} onChange={()=>handleToggle(item.id)} checked={item.done} className="w-8 h-6 mb-3 rounded-3xl"/>
                </label>
              </div>
              <div className="mx-4  sm:block hidden">
                <Todo  todo={item} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ShowTodos;
