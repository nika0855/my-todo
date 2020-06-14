import React from "react";
import TodoListItem from "./todo-list-item";


const TodoList = () => {
  const items = ["Coffe Late", "Coffe Premium", "Coffe please"];
  return (
    <ul>
      <li><TodoListItem /></li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  );
};

export default TodoList;
