import React from "react";
import uuid from "uuidv4";
import Button from '@material-ui/core/Button'
import { TOOL_ITEMS } from "../constants";

const Tools = ({ tools, addLayer, removeLayer }) => {
  const handleAdd = (type, name) => {
    const data = {
      id:uuid,
      type,
      name
    };
    addLayer(data);
  };
  return (
    <ul className="toolbar-list">
      {tools.map(tool => (
        <li className="toolbar-item" key={tool.id}>
          <Button variant="contained" color="black"
            className="toolbar-button"
            onClick={() => handleAdd(tool.type, tool.name)}
            title={tool.name}
          >
            <i className="material-icons">{tool.icon}</i> {tool.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Tools;
