import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "1",
    label: "A",
  },
  {
    value: "2",
    label: "B",
  },
  {
    value: "3",
    label: "C",
  },
  {
    value: "4",
    label: "D",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: "1rem",
      width: "22ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [priority, setPriority] = React.useState("A");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-priority"
          select
          label="Priority"
          value={priority}
          onChange={handleChange}
        //   helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
