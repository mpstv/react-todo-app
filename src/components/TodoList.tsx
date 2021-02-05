import { ReactElement } from "react";
import { TodoListElement } from "../models/TodoListElement";

type TodoListProps = {
  todoList: TodoListElement[];
  deleteElement: (elementId: Symbol) => void;
};

export function TodoList({
  todoList,
  deleteElement,
}: TodoListProps): ReactElement<TodoListProps> {
  const list = createTodoList(todoList, deleteElement);

  return (
    <div>
      <h3>Todo List</h3>
      {list}
    </div>
  );
}

function createTodoList(
  todoList: TodoListElement[],
  deleteElement: (element: Symbol) => void
): JSX.Element {
  if (!todoList.length) {
    return <p>Todo list is empty!</p>;
  }

  const listItems = todoList
    .sort((a, b) => a.priority - b.priority)
    .map((todoListElement) => (
      <li>
        <h3>
          {todoListElement.priority}, {todoListElement.header}{" "}
          <button onClick={() => deleteElement(todoListElement.id)}>
            Удалить
          </button>
        </h3>
        <p>{todoListElement.deadLine.toLocaleDateString()}</p>
        <p>{todoListElement.content}</p>
      </li>
    ));

  return <ul>{listItems}</ul>;
}
