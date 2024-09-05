import React from "react";

function NoteList({ notes, filterText }) {
  return (
    <div className="note-list">
      {notes
        .filter((note) =>
          note.text.toLowerCase().includes(filterText.toLowerCase()) // Arama filtresi
        )
        .map((note, index) => (
          <div
            key={index}
            className="note"
            style={{ backgroundColor: note.color }} // Not rengi burada ayarlanır
          >
            {note.text} {/* Not metni */}
          </div>
        ))}
    </div>
  );
}

export default NoteList;
