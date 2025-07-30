import React, { useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slice/todoSlice";
import ShowTodos from "./ShowTodos";
import { Button } from "../button/Button";

function TodoApp() {
  const [newText, setNewText] = useState("");

  // console.log(todos);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setNewText(event.target.value);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    if(newText.trim()==='') return ;
    dispatch(addTodo(newText));
    setNewText("")
  };
  return (
    <div className="complex-multi-point-background w-full h-screen">
      <div className="w-full h-auto flex items-center justify-center">
        <div className="bg-white w-1/3 p-10 h-96 shadow-md rounded-2xl mt-30 ">
          <div className="flex items-center justify-start  mr-55 text-cus-blue text-3xl">
            <FaRegCalendarPlus />
            <h1>Todo List</h1>
          </div>
          <div className="flex items-center justify-evenly gap-1">
            <Input
              onChange={handleChange}
              value={newText}
              placeholder={"Enter your Task"}
            />
             <Button onClick={handleAdd} className={" mt-4 px-10 py-2 rounded-2xl mt-5bg bg-red-300"} text={"ADD"}/>
          </div>
          <div className="flex flex-col no-scrollbar mt-2">
            <ShowTodos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
