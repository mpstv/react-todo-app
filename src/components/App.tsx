import React, { ReactElement } from "react";
import { TodoListElement } from "../models/TodoListElement";
import { AddTodoElement } from "./AddTodoElement";
import { TodoList } from "./TodoList";

export default class App extends React.Component<
  unknown,
  { todoListItems: TodoListElement[] }
> {
  constructor(props: unknown) {
    super(props);
    this.state = { todoListItems: [] };
  }

  render(): ReactElement {
    return (
      <div>
        <AddTodoElement
          onElementAdd={(element: TodoListElement) => this.addTodo(element)}
        />
        <TodoList
          todoList={this.state.todoListItems}
          deleteElement={(elementForDeleteId) =>
            this.deleteElement(elementForDeleteId)
          }
        />
      </div>
    );
  }

  private addTodo(element: TodoListElement) {
    this.setState({
      todoListItems: [...this.state.todoListItems, element],
    });
  }

  private deleteElement(elementForDeleteId: Symbol) {
    this.setState({
      todoListItems: this.state.todoListItems.filter(
        (listElement) => listElement.id !== elementForDeleteId
      ),
    });
  }
}
