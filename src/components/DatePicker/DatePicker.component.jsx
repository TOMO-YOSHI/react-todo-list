import "date-fns";
import React,{ useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    input: {
        "&:input" : {
        textAlign: 'center',
        color: "red"
        }
    },
  })
);


export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  // console.log(props.value);
  // let initialValue;
  //   useEffect(() => {
  //     if (props.value) {
  //       initialValue = props.value ? props.value : new Date();
  //     }
  //   });

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (event) => {
    setSelectedDate(event);
    props.change("dueDate", event);
  };

  useEffect(()=>{
    props.change("dueDate", selectedDate);
  }, [])

  useEffect(()=>{
    if (props.value) {
      setSelectedDate(props.value);
    }
  })

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.input}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="When is the due date?"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        name="dueDate"
      />
    </MuiPickersUtilsProvider>
  );
}
