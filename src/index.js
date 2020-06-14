import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  const items = ["Coffe Late", "Coffe Premium", "Coffe please"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <span>{(new Date()).toString()}</span>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
