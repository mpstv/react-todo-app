import React, { ReactElement } from "react";
import { AddTodoElement } from "./AddTodoElement";
import { TodoList } from "./TodoList";

export default function App(): ReactElement<unknown> {
  return (
    <div>
      <AddTodoElement />
      <TodoList />
    </div>
  );
}
