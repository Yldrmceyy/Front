import { useState } from "react";

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

import "./App.css";

function App() {

  const [todos, setTodos]=useState([]);

const addTodo=(text)=>{
  const newTodo={
    id:Date.now(),
    text:text,
    completed:false

  };
  setTodos([...todos,newTodo]);
};


  return (
    <div className="todoapp">
      <TodoHeader addTodo={addTodo} />
      <TodoList/>
      <TodoFooter />
    </div>
  );
}

export default App;
