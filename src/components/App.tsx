import React, { ReactElement } from "react";
import { AddTodoElement } from "./AddTodoElement";
import { TodoList } from "./TodoList";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App(): ReactElement<unknown> {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo List</Link>
            </li>
            <li>
              <Link to="/add-todo">Add Todo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/add-todo">
            <AddTodoElement />
          </Route>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
