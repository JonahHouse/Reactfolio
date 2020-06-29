import React from "react";
import Button from "@material-ui/core/Button";

const CommonActions = () => {
  return (
    <div className="toolbar-action">
      
      <Button className="toolbar-button preview">
        <i className="material-icons">visibility</i> Preview
      </Button>
    </div>
  );
};

export default CommonActions;
