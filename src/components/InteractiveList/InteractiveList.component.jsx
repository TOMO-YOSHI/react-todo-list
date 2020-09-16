import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditModal from "../EditModal/EditModal.component";

import './InteractiveList.styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  div: {
    margin: "1rem auto",
    padding: "0 1rem",
        ['@media (min-width:600px)']: {
      width: '80%',
      maxWidth: "500px"
    }
  },
  listItem: {
    "-webkit-box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    "-moz-box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    "border-radius": "5px"
  }
//   editButton: {
//       backgroundColor: "rgba(0, 0, 0, 0.54)",
//       color: "white"
//   }
}));

export default function InteractiveList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const todoList = [...props.todoList];
//   const deleteTodo = props.deleteTodo;

  return (
    <Grid className={classes.div} item xs={12} md={6}>
      <div className={classes.demo}>
      {
          todoList.length ?
            todoList.map((todo, index) => {
                const date =
                  todo.dueDate.getDate() < 10
                    ? "0" + todo.dueDate.getDate()
                    : todo.dueDate.getDate()
                ;
                const month =
                  todo.dueDate.getMonth() + 1 < 10
                    ? "0" + (todo.dueDate.getMonth() + 1)
                    : todo.dueDate.getMonth() + 1
                ;
                const year = todo.dueDate.getFullYear();

                let priority;
                switch(todo.priority) {
                    case 1:
                        priority = "A";
                        break;
                    case 2:
                        priority = "B";
                        break;
                    case 3:
                        priority = "C";
                        break;
                    case 4:
                        priority = "D";
                        break;
                    default:
                        break;
                }

                // console.log(todo.id);

                return (
                  <List dense={dense} key={todo.id}>
                    <ListItem className={classes.listItem}>
                      <EditModal
                        todoId={todo.id}
                        todoList={todoList}
                        editModalOpen={props.editModalOpen}
                        editTodo={props.editTodo}
                        editTodoId={props.editTodoId}
                        handleEditOpen={props.handleEditOpen}
                        handleEditClose={props.handleEditClose}
                      />

                      <ListItemText
                        primary={
                          <p>
                            {month}/{date}/{year}
                            <span className="namePri">
                              <span className="prioritySpan">{priority}</span>
                              <span className="nameSpan">
                                &nbsp;&nbsp;&nbsp;
                                {todo.name}
                              </span>
                            </span>
                          </p>
                        }
                        secondary={secondary ? "Secondary text" : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => props.deleteTodo(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                );
          }): null
      }
      </div>
    </Grid>
  );
}

        // <List dense={dense}>
        //   <ListItem>
            // <ListItemAvatar>
            //   <Avatar>
            //     <EditIcon />
            //   </Avatar>
            // </ListItemAvatar>
        //     <ListItemText
        //       primary="Single-line item"
        //       secondary={secondary ? "Secondary text" : null}
        //     />
        //     <ListItemSecondaryAction>
        //       <IconButton edge="end" aria-label="delete">
        //         <DeleteIcon />
        //       </IconButton>
        //     </ListItemSecondaryAction>
        //   </ListItem>
        // </List>;

