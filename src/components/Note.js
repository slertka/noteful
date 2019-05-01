import React from "react";
import "./Note.css";

import NOTES from "../dummy-store";

function Note(props) {
  console.log(props.match);
  const notes = NOTES.notes.filter(
    note => note.folderId === props.match.params.folderid
  );

  return notes.map(note => {
    const date = new Date(Date.parse(note.modified)).toDateString();
    return (
      <div className="note" key={note.id}>
        <h4>{note.name}</h4>
        <p className="modified">Date Modified {date}</p>
        <p className="hidden">{note.content}</p>
      </div>
    );
  });
}

export default Note;
