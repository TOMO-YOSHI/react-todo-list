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
      id: "",
    });

    useEffect(()=>{
      setEdit(props.existTodo);
      console.log(props.existTodo);
    }, [])

    useEffect(()=>{
      console.log("edit", edit);
    }, [edit])


    const updateHandler = (edit) => {
      props.editTodo(edit, edit.id);
    }

    const onChangeHandler = (event) => {
        const {value, name} = event.target;

        setEdit({...edit, [name]: value});
    }

    const getValueHandler = (name, value) => {
        setEdit({ ...edit, [name]: value });
    }

    const setId = () => {        
        const id = new Date().getTime();
        setEdit({ ...edit, id: id });
    }

    // useEffect(() => {
    //     console.log(input);
    // }, [input])

    return (
      <div className="editArea">
        <DatePicker change={getValueHandler} setId={setId} />
        <TextField change={onChangeHandler} />
        <SelectField change={onChangeHandler} />
        <Button click={updateHandler} todo={edit} text="Edit" />
      </div>
    );
}

export default EditArea;