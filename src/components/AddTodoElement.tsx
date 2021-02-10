import React from "react";
import { ReactElement } from "react";
import { Redirect } from "react-router-dom";
import store from "../store/store";
import { addTodoListElementThunk } from "../store/TodoListSlice";

type AddTodoElementState = {
  redirect: boolean;
  priority: number;
  header: string;
  content: string;
  deadLine: Date;
};

export class AddTodoElement extends React.Component<
  unknown,
  AddTodoElementState
> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      redirect: false,
      priority: 0,
      header: "",
      content: "",
      deadLine: new Date(),
    };
  }

  render(): ReactElement {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <form
        className="add-todo-element-form"
        onSubmit={(event) => this.submitForm(event)}
      >
        <label>
          Priority:
          <input
            type="number"
            value={this.state.priority}
            onChange={(event) =>
              this.setState({ priority: Number(event.target.value) })
            }
            required
          />
        </label>
        <label>
          Header:
          <input
            type="text"
            value={this.state.header}
            onChange={(event) => this.setState({ header: event.target.value })}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
            required
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
            required
          />
        </label>
        <input type="submit" value="Add todo !!!" />
      </form>
    );
  }

  private submitForm(event: React.FormEvent<HTMLFormElement>) {
    store.dispatch(addTodoListElementThunk(this.state));
    this.setState({ redirect: true });

    event.preventDefault();
  }
}
