import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  const items = ["Coffe Late", "Coffe Premium", "Coffe please"];
  return (
    <ul>
      <li>
        <TodoListItem label="Drink Coffee" />
      </li>
      <li>
        <TodoListItem label="Build React App" 
        important />
      </li>
      <li>{items[2]}</li>
    </ul>
  );
};

export default TodoList;
