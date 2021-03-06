import React, { useState, useEffect } from 'react';

import DatePicker from '../DatePicker/DatePicker.component';
import TextField from '../TextField/TextField.component';
import SelectField from '../SelectField/SelectField.component';
import Button from '../Button/Button.component';

import './InputArea.styles.scss';

const InputArea = (props) => {
    const [input, setInput] = 
    useState({
      dueDate: "",
      name: "",
      priority: "",
    //   id: "",
    });

    const onChangeHandler = (event) => {
        const {value, name} = event.target;

        setInput({...input, [name]: value});
    }

    const getValueHandler = (name, value) => {
        setInput({ ...input, [name]: value });
    }

    const setId = () => {        
        const id = new Date().getTime();
        setInput({ ...input, id: id });
    }

    // useEffect(() => {
    //     console.log(input);
    // }, [input])

    return (
      <div className="inputArea">
        <DatePicker change={getValueHandler} setId={setId} />
        <TextField change={onChangeHandler} />
        <SelectField change={onChangeHandler} />
        <Button click={props.addTodo} todo={input} text="Save" />
      </div>
    );
}

export default InputArea;