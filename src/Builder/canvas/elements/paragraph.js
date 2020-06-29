import React from "react";
import Typography from '@material-ui/core/Typography'

const initialPara =
  "Paragraph initial text user can change";

const Paragraph = ({ text = initialPara }) => {
  return (
    <Typography>
      <p>{text}</p>
    </Typography>
  );
};

export default Paragraph;
