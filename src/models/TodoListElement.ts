import { v4 as uuidv4 } from "uuid";

export type TodoListElementId = ReturnType<typeof uuidv4> & {
  _type: "TodoListElementId";
};

export interface TodoListElement {
  id: TodoListElementId;
  priority: number;
  header: string;
  content: string;
  deadLine: Date;
}
