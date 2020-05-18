import React from "react";
import "./App.scss";
import Title from "./components/title/title";
import ToDo from "./containers/todo/todo";

const App = () => {
  return (
    <div className="App">
      <Title title="ToDo list" />
      <ToDo />
    </div>
  );
};

export default App;
