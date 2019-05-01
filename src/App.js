import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import NOTES from "./dummy-store";
import FolderList from "./components/FolderList";
import Folder from "./components/Folder";
import NoteList from "./components/NoteList";
import Note from "./components/Note";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: NOTES.folders,
      notes: NOTES.notes,
      selectedFolder: "",
      selectedNote: ""
    };
  }

  render() {
    console.log(this.state.folders);
    console.log(this.state.notes);
    return (
      <div className="App">
        <h1>Noteful</h1>
        <nav>
          <Route
            exact
            path="/"
            render={() => (
              <FolderList
                folders={this.state.folders}
                selectedFolder={this.state.selectedFolder}
              />
            )}
          />
          <Route path="/folder/:folderid" component={Folder} />
          <Route path="/note/:noteid" />
        </nav>
        <main>
          <Route
            exact
            path="/"
            render={() => (
              <NoteList
                notes={this.state.notes}
                selectedFolder={this.state.selectedFolder}
                selectedNote={this.state.selectedNote}
              />
            )}
          />
          <Route path="/folder/:folderid" component={Note} />
          <Route path="/note/:noteid" />
        </main>
      </div>
    );
  }
}

export default App;
