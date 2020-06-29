import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form = ({ text }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField label="Enter Text here" />
        <TextField label="Enter Text Here" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
