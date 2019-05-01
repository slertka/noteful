import React from "react";
import "./FolderList.css";
import { NavLink } from "react-router-dom";

class FolderList extends React.Component {
  static defaultProps = {
    folders: []
  };

  render() {
    const folders = this.props.folders.map(folder => (
      <NavLink to={`/folder/${folder.id}`} className="nav-link">
        {folder.name}
      </NavLink>
    ));

    return <div className="folderList">{folders}</div>;
  }
}

export default FolderList;
