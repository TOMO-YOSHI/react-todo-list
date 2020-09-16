import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import TransitionsModal from "../Modal/Modal.component";
// import IconButton from "@material-ui/core/IconButton";
// import AddIcon from "@material-ui/icons/Add";

import './Header.styles.scss';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const Header = (props) => {
    return (
      <div className="header">
        <h1>ToDo Manager</h1>
      </div>
    );}

export default Header;

        // <TransitionsModal
        //   addTodo={props.addTodo}
        //   modalOpen={props.modalOpen}
        //   handleOpen={props.handleOpen}
        //   handleClose={props.handleClose}
        // />;
