import React, { useState } from "react";

function NoteInput({ onAddNote }) {
  const [noteText, setNoteText] = useState("");  // Not metni
  const [selectedColor, setSelectedColor] = useState("yellow");  // Seçilen renk

  // Not ekleme işlemi
  const handleAddNote = () => {
    if (noteText.trim()) {  // Not metni boş değilse
      onAddNote({ text: noteText, color: selectedColor });
      setNoteText("");  // Not eklendikten sonra metni sıfırlama
    }
  };

  return (
    <div className="note-input">
      <textarea
        placeholder="Enter your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <div className="color-picker">
        <button
          className={`color-button color-pink ${selectedColor === "pink" ? "selected" : ""}`}
          onClick={() => setSelectedColor("pink")}
        />
        <button
          className={`color-button color-purple ${selectedColor === "purple" ? "selected" : ""}`}
          onClick={() => setSelectedColor("purple")}
        />
        <button
          className={`color-button color-yellow ${selectedColor === "yellow" ? "selected" : ""}`}
          onClick={() => setSelectedColor("yellow")}
        />
        <button
          className={`color-button color-blue ${selectedColor === "blue" ? "selected" : ""}`}
          onClick={() => setSelectedColor("blue")}
        />
        <button
          className={`color-button color-green ${selectedColor === "green" ? "selected" : ""}`}
          onClick={() => setSelectedColor("green")}
        />
      </div>
      <button className="add-button" onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
}

export default NoteInput;
