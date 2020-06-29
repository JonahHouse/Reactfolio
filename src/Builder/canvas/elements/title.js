import React from "react";
import Typography from '@material-ui/core/Typography'

const Title = ({ text = "Lorem Ipsum" }) => {
  return (
    <Typography>
      <h1>{text}</h1>
    </Typography>
  )
};

export default Title;
