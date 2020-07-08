import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false , id: 10},
    { label: "Make Awesome App", important: true, id:20 },
    { label: "Have a lunch", important: false , id: 3},
  ];

  return (
    <div>
      <span>{new Date().toString()}</span>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
