import React, { useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,filterDateTime } from "../../redux/slice/todoSlice";
import ShowTodos from "./ShowTodos";
import { Button } from "../button/Button";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendar } from "react-icons/fa";
import CalenderIconInput from "../input/CalenderIconInput";
function TodoApp() {
  const [newText, setNewText] = useState("");
  const [selectedDueDate, setSelectedDueDate] = useState(null);
  const [filterRange ,setFilterRange]=useState([null,null]);
  const [startDate,endDate]=filterRange;

  // console.log(todos);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setNewText(event.target.value);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    if (newText.trim() === "") return;
    dispatch(
      addTodo({ text: newText, dueDate: selectedDueDate?selectedDueDate.toISOString():null})
    );
    setNewText("");
    setSelectedDueDate(null);
  };

  const handleDataRangeFilter=()=>{
    dispatch(filterDateTime({
      startDate:startDate?startDate.toISOString():null,
      endDate:endDate?endDate.toISOString():null
    }))
  }

  const handleClearRangeFilter=()=>{
    setFilterRange([null,null]);
    dispatch(filterDateTime({startDate:null,endDate:null}))
  }

  return (
    <div className="complex-multi-point-background w-full h-screen">
      <div className="w-full h-auto flex items-center justify-center">
        <div className="bg-white w-1/2 p-10 h-96 shadow-md rounded-2xl mt-30 ">
          <div className="flex items-center justify-start  mr-55 text-cus-blue text-3xl">
            <FaRegCalendarPlus />
            <h1>Todo List</h1>
          </div>
          <div className="flex items-center justify-evenly ">
            <Input
              onChange={handleChange}
              value={newText}
              placeholder={"Enter your Task"}
            />
            <DatePicker
              selected={selectedDueDate}
              onChange={(date) => setSelectedDueDate(date)}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              customInput={<CalenderIconInput/>}
            />
            <Button
              onClick={handleAdd}
              className={" mt-4 px-10 py-2 rounded-2xl  bg bg-red-300"}
              text={"ADD"}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col no-scrollbar mt-2">
            <ShowTodos />
          </div>
          <div className="mt-2">
            <div className="text-sm font-semibold text-gray-600 ">Filter By Due Date</div>
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update)=>setFilterRange(update)}
                  isClearable={true}
                  placeholder="Select Your Date"
                  dateFormat='yyyy/MM/dd'
                  className="px-3 py-2 rounded-md border text-sm w-full"
                />
                <div className="flex items-center justify-center">
                  <Button className={"mt-2 mr-1 px-7 py-2 rounded-2xl  bg bg-red-300"} onClick={handleDataRangeFilter} text={'Set'}/>
                {(startDate&&endDate)&&(
                  <Button className={'mt-2 px-7 py-2 rounded-2xl  bg bg-red-300'} onClick={handleClearRangeFilter} text={'Clear'}/>
                )}
                </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
