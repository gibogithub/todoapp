import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <h1>{completedTodos}</h1>
    </div>
  );
}
