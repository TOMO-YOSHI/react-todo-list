import React from "react";
import InputArea from '../InputArea/InputArea.component';

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";


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
  addIcon: {
    color: "white"
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const open = props.modalOpen;

  return (
    <div className="modalButton">
      <IconButton aria-label="delete" onClick={props.handleOpen}>
        <AddIcon className={classes.addIcon} />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Enter Your Duty</h2>
            <div id="transition-modal-description">
              <InputArea 
                addTodo={props.addTodo} />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
