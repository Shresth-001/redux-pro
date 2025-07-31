import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    filters: { 
      searchQuery: '',
      startDate: null, 
      endDate: null,   
    },
  },
  reducers: {
    addTodo: {
      reducer:(state,action)=>{state.todos.push(action.payload)},
      prepare:({text,dueDate=null})=>{
        const id=nanoid();
        return {
          payload:{
            id,
            text,
            done:false,
            dueDate
          }
        }
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    filterDateTime:(state,action)=>{
      const {startDate,endDate}=action.payload;
      state.filters.startDate=startDate;
      state.filters.endDate=endDate;
    }
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodo,filterDateTime } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
