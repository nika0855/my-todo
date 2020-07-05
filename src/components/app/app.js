import React from "react";
import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFulter from "../item-status-filter/item-status-fulter";

import './app.css';


const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false , id: 10},
    { label: "Make Awesome App", important: true, id:20 },
    { label: "Have a lunch", important: false , id: 3},
  ];

  return (
    <div className='todo-app'>
      <span>{new Date().toString()}</span>
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
      <ItemStatusFulter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};
export default App;