// src/components/TodoFooter.js
import React from "react";

function TodoFooter({ todos, clearCompleted }) {
  const remaining = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {remaining} görev kaldı
      </span>
      <button className="clear-completed" onClick={clearCompleted}>
        Tamamlananları Temizle
      </button>
    </footer>
  );
}

export default TodoFooter;
