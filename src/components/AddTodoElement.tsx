import React from "react";
import { ReactElement } from "react";
import { TodoListElement } from "../models/TodoListElement";

type AddTodoElementProps = {
  onElementAdd: (element: TodoListElement) => void;
};

type AddTodoElementState = {
  priority: number;
  header: string;
  content: string;
  deadLine: Date;
};

export class AddTodoElement extends React.Component<
  AddTodoElementProps,
  AddTodoElementState
> {
  constructor(props: AddTodoElementProps) {
    super(props);
    this.state = this.defaultState;
  }

  render(): ReactElement {
    return (
      <form onSubmit={(event) => this.submitForm(event)}>
        <label>
          Priority:
          <input
            type="number"
            value={this.state.priority}
            onChange={(event) =>
              this.setState({ priority: Number(event.target.value) })
            }
          />
        </label>
        <label>
          Header:
          <input
            type="text"
            value={this.state.header}
            onChange={(event) => this.setState({ header: event.target.value })}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
          />
        </label>
        <label>
          Dead line:
          <input
            type="date"
            value={this.state.deadLine.toISOString().split("T")[0]}
            onChange={(event) =>
              this.setState({ deadLine: new Date(event.target.value) })
            }
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }

  private submitForm(event: React.FormEvent<HTMLFormElement>) {
    this.props.onElementAdd({
      ...this.state,
      id: Symbol(),
    });

    event.preventDefault();
    this.setState(this.defaultState);
  }

  private get defaultState(): Readonly<AddTodoElementState> {
    return {
      priority: 0,
      header: "",
      content: "",
      deadLine: new Date(),
    };
  }
}
