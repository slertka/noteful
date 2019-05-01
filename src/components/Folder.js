import React from "react";
import { Link } from "react-router-dom";
import "./Folder.css";
import NOTES from "../dummy-store";

function Folder(props) {
  const folder = NOTES.folders.find(
    folder => folder.id === props.match.params.folderid
  );

  return (
    <div>
      <p className="folder" key={folder.id}>
        {folder.name}
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Folder;
