import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload, done: false });
    },
  },
});

export const {addTodo} =todoSlice.actions;
export const todoReducer=todoSlice.reducer;
