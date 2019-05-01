import React from "react";
import Note from "./Note";

class NoteList extends React.Component {
  static defaultProps = {
    notes: []
  };

  render() {
    const notes = this.props.notes.map(note => {
      const date = new Date(Date.parse(note.modified)).toDateString();
      return (
        <div className="note" key={note.id}>
          <h4>{note.name}</h4>
          <p className="modified">Date Modified {date}</p>
        </div>
      );
    });

    return <div className="noteList">{notes}</div>;
  }
}

export default NoteList;
