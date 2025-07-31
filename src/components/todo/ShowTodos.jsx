import React from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import Input from "../input/Input";
import { toggleTodo } from "../../redux/slice/todoSlice";
import { createSelector } from "@reduxjs/toolkit";
import { isWithinInterval } from "date-fns";

const ShowTodos = () => {
  // console.log(todos);
  const dispatch = useDispatch();

  const selectFilterTodos = createSelector(
    (state) => state.todo.todos,
    (state) => state.todo.filters.startDate,
    (state) => state.todo.filters.endDate,
    (todos, filterStartDateIso, filterEndDateIso) => {
      let filtered = todos;
      const filterStartDate = filterStartDateIso
        ? new Date(filterStartDateIso)
        : null;
      const filterEndDate = filterEndDateIso
        ? new Date(filterEndDateIso)
        : null;
      if (filterStartDate && filterEndDate) {
        filtered = filtered.filter((todo) => {
          if (!todo.dueDate) return false;
          const todoDueDate = new Date(todo.dueDate);
          return isWithinInterval(todoDueDate, {
            start: filterStartDate,
            end: filterEndDate,
          });
        });
      } else if (filterStartDate && !filterEndDate) {
        filtered = filtered.filter((todo) => {
          if (!todo.dueDate) return false;
          const todoDueDate = new Date(todo.dueDate);
          return todoDueDate >= filterEndDate;
        });
      } else if (!filterStartDate && filterEndDate) {
        filtered = filtered.filter((todo) => {
          if (!todo.dueDate) return false;
          const todoDueDate = new Date(todo.dueDate);
          return todoDueDate <= filterStartDate;
        });
      }
      return filtered;
    }
  );

  const todos = useSelector(selectFilterTodos);
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <div className="h-50 rounded-2xl overflow-auto no-scrollbar ">
      {todos.length > 0 && (
        <>
          {todos.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-start mt-1 "
            >
              <div className=" ">
                <label>
                  <Input
                    type={"checkbox"}
                    onChange={() => handleToggle(item.id)}
                    checked={item.done}
                    className="w-8 h-6 mb-3 rounded-3xl"
                  />
                </label>
              </div>
              <div className="mx-4  sm:block hidden">
                <Todo todo={item} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ShowTodos;
