import { createSlice } from "@reduxjs/toolkit";
import { TodoListElement, TodoListElementId } from "../models/TodoListElement";
import store from "./store";
import { v4 as uuidv4 } from "uuid";
import { Dispatch } from "react";

// Models
type TodoListElementInStore = {
  id: TodoListElementId;
  priority: number;
  header: string;
  content: string;
  deadLine: number;
};

// Store
const initialState: TodoListElementInStore[] = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addElement: (
      state,
      action: {
        payload: TodoListElementInStore;
      }
    ) => {
      return [...state, action.payload];
    },
    removeElement: (state, action: { payload: TodoListElementId }) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

// Actions
const { addElement, removeElement } = todoListSlice.actions;

export { removeElement };

// Thunks
export const addTodoListElementThunk = (payload: {
  priority: number;
  header: string;
  content: string;
  deadLine: Date;
}) => (dispatch: Dispatch<any>) => {
  const { priority, header, content, deadLine } = payload;
  const newTodoListElement = {
    id: uuidv4() as TodoListElementId,
    priority,
    header,
    content,
    deadLine: deadLine.getTime(),
  };

  dispatch(addElement(newTodoListElement));
};

// Selectors
export const selectTodoList = (
  state: ReturnType<typeof store.getState>
): TodoListElement[] =>
  [...state.todoList]
    .sort((a, b) => b.priority - a.priority)
    .map((el) => ({ ...el, deadLine: new Date(el.deadLine) }));

// Default export reducer
export default todoListSlice.reducer;
