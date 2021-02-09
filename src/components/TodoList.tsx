import { Dispatch, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoListElement } from "../models/TodoListElement";
import { removeElement, selectTodoList } from "../store/TodoListSlice";

export function TodoList(): ReactElement<unknown> {
  const todoList: TodoListElement[] = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const list = createTodoList(todoList, dispatch);

  return (
    <div>
      <h3>Todo List</h3>
      {list}
    </div>
  );
}

function createTodoList(
  todoList: TodoListElement[],
  dispatch: Dispatch<any>
): JSX.Element {
  if (!todoList.length) {
    return <p>Todo list is empty!</p>;
  }

  const listItems = todoList.map((todoListElement) => (
    <li key={todoListElement.id}>
      <h3>
        {todoListElement.priority}, {todoListElement.header}
        <button onClick={() => dispatch(removeElement(todoListElement.id))}>
          Удалить
        </button>
      </h3>
      <p>{todoListElement.deadLine.toLocaleDateString()}</p>
      <p>{todoListElement.content}</p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
