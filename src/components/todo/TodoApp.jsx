import React, { useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import Input from "../input/Input";

function TodoApp() {
  const [newText, setNewText] = useState('')

  const handleChange=(event)=>{
    setNewText(event.target.value);
  }
  return (
    <div className="complex-multi-point-background w-full h-screen">
      <div className="w-full h-auto flex items-center justify-center">
        <div className="bg-white w-1/3 p-10 h-96 shadow-md rounded-2xl mt-30 ">
            <div className="flex items-center justify-start  mr-55 text-cus-blue text-3xl">
                <FaRegCalendarPlus />
                <h1>Todo List</h1>
            </div>
            <div>
              <Input onChange={handleChange} value={newText} placeholder={"Enter your Task"} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
