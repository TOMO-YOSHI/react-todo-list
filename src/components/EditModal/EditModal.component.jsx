import React from "react";
import EditArea from '../EditArea/EditArea.component';

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid skyblue",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function EditModal(props) {
  const classes = useStyles();
  const open = props.editModalOpen;

  return (
    <div className="storeTodoId" data-todoid={props.todoId}>
      <IconButton aria-label="delete" onClick={props.handleEditOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={props.handleEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Please Edit Your Duty</h2>
            <div id="transition-modal-description">
              <EditArea
                editTodoId={props.editTodoId}
                todoList={props.existTodo}
                editTodo={props.editTodo}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
