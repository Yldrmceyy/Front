import { useState } from "react";

function TodoHeader({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
    }
  };



  return (
    <header className="todoapp">
      <h1>Yapılacaklar Listesi</h1>
      <form onSubmit={handleSubmit} >
        <input
          className="new-todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Yeni görev yazınız"
          autoFocus
        />
      </form>
    </header>
  );
}

export default TodoHeader;
