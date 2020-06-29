import React from "react";
import Input from '@material-ui/core/Input'

const Form = ({ title }) => {
  return (
    <form className="property-form">
      <h4>{title}</h4>
      <div className="inline-field">
        <label>Top</label>
        <Input type="number" placeholder="8px" />
      </div>
      <div className="inline-field">
        <label>Right</label>
        <Input type="number" placeholder="8px" />
      </div>
      <div className="inline-field">
        <label>Bottom</label>
        <Input type="number" placeholder="8px" />
      </div>
      <div className="inline-field">
        <label>Left</label>
        <Input type="number" placeholder="8px" />
      </div>
    </form>
  );
};

export default Form;
