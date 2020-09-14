import React, { useState, useEffect } from 'react';

import DatePicker from '../DatePicker/DatePicker.component';
import TextField from '../TextField/TextField.component';
import SelectField from '../SelectField/SelectField.component';
import Button from '../Button/Button.component';

import './EditArea.styles.scss';

const EditArea = (props) => {
    const [edit, setEdit] = 
    useState({
      dueDate: "",
      name: "",
      priority: "",
      // id: "",
    });

    // useEffect(()=>{
    //   setEdit(props.todoList);
    //   console.log("editArea", props.todoList);
    // }, [])

    useEffect(()=>{
      let newTodoList = props.todoList;
      let editIndex = newTodoList.findIndex(
        (todo) => todo.id == props.editTodoId
      );
      setEdit(newTodoList[editIndex]);
      // console.log(props.editTodoId);
      // console.log(newTodoList);
      // console.log(editIndex);
    }, [])

    const updateHandler = (edit) => {
      // let todoId = event.target.closest("div").closest("storeTodoId");
      // console.log(todoId);
      props.editTodo(edit, props.editTodoId);
    }

    const onChangeHandler = (event) => {
        const {value, name} = event.target;

        setEdit({...edit, [name]: value});
    }

    const getValueHandler = (name, value) => {
        setEdit({ ...edit, [name]: value });
    }

    // const setId = () => {        
    //     const id = new Date().getTime();
    //     setEdit({ ...edit, id: id });
    // }

    // useEffect(() => {
    //     console.log(input);
    // }, [input])

    return (
      <div className="editArea">
        <DatePicker change={getValueHandler} value={edit.dueDate} />
        <TextField change={onChangeHandler} value={edit.name} />
        <SelectField change={onChangeHandler} value={edit.priority} />
        <Button
          click={updateHandler}
          todo={edit}
          text="Edit"
          editTodoId={props.editTodoId}
        />
      </div>
    );
}

export default EditArea;