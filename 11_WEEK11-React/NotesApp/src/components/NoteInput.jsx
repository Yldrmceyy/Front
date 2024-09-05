import React, { useState } from "react";

function NoteInput({ onAddNote }) {
  const [noteText, setNoteText] = useState(""); // Not metni
  const [selectedColor, setSelectedColor] = useState("yellow"); // Seçilen renk

  // Not ekleme işlevi
  const handleAddNote = () => {
    if (noteText.trim()) {
      onAddNote({ text: noteText, color: selectedColor }); // Not ve renk obje olarak aktarılır
      setNoteText(""); // Not eklendikten sonra input sıfırlanır
    }
  };

  return (
    <div className="note-input">
      {/* Not metni girişi */}
      <textarea
        placeholder="Enter your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)} // Textarea'deki değişikliği kaydeder
      />

      {/* Renk seçme butonları */}
      <div className="color-picker">
        <button
          className={`color-button ${selectedColor === "pink" ? "selected" : ""}`}
          style={{ backgroundColor: "pink" }}
          onClick={() => setSelectedColor("pink")}
        />
        <button
          className={`color-button ${selectedColor === "purple" ? "selected" : ""}`}
          style={{ backgroundColor: "purple" }}
          onClick={() => setSelectedColor("purple")}
        />
        <button
          className={`color-button ${selectedColor === "yellow" ? "selected" : ""}`}
          style={{ backgroundColor: "yellow" }}
          onClick={() => setSelectedColor("yellow")}
        />
        <button
          className={`color-button ${selectedColor === "blue" ? "selected" : ""}`}
          style={{ backgroundColor: "blue" }}
          onClick={() => setSelectedColor("blue")}
        />
        <button
          className={`color-button ${selectedColor === "green" ? "selected" : ""}`}
          style={{ backgroundColor: "green" }}
          onClick={() => setSelectedColor("green")}
        />
      </div>

      {/* Add butonu */}
      <button className="add-button" onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
}

export default NoteInput;
