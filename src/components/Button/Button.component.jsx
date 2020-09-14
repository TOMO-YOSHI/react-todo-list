import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "skyblue",
    width: "22ch"
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        // color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={() => {
            props.click(props.todo);
            // props.todo.id
            //   ? 
            //   // props.click(props.todo, props.todoId)
            //     console.log(props.todo.id)
            //   : 
            //     // console.log(props.todo)
            //     props.click(props.todo);
        }}
      >
        {props.text}
      </Button>
    </div>
  );
}
