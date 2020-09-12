import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

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
}));

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

export default function InteractiveList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const todoList = [...props.todoList];

//   useEffect(() => {
//     console.log(todoList[0]['name']);
//   }, [todoList]);

  return (
    <Grid className={classes.div} item xs={12} md={6}>
      <div className={classes.demo}>
      {
          todoList.length ?
            todoList.map(todo => {
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

                return (
                  <List dense={dense} key={todo.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <EditIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${month}/${date}/${year} - ${todo.name} - ${priority}`}
                        secondary={secondary ? "Secondary text" : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
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
        //     <ListItemAvatar>
        //       <Avatar>
        //         <EditIcon />
        //       </Avatar>
        //     </ListItemAvatar>
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

