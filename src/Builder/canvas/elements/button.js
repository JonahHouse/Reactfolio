import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonElement = ({ text }) => {
 const classes = useStyles()
  return(

      <Button variant="contained" color="primary">
       Write text here 
      </Button>
  )
}

export default ButtonElement