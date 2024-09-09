import { useState } from "react";

function TodoHeader({ addToDo }) {
  const [text, setText] = useState("");

  return (
    <header className="header">
      <h1>Yapıacaklar Listesi</h1>
      <form >

        <input
            className="new-todo"
            value="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Yeni görev yazınız"
            autoFocus
        />
      </form>
    </header>
  );
}

export default TodoHeader;
