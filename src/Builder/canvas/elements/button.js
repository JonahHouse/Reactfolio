import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const ButtonElement = ({ text }) => {
  return(

      <Button variant="contained" color="primary">
        {text}
      </Button>
  )
}

export default ButtonElement