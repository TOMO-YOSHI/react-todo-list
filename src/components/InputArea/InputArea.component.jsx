import React, { useState } from 'react';

import DatePicker from '../DatePicker/DatePicker.component';
import TextField from '../TextField/TextField.component';
import SelectField from '../SelectField/SelectField.component';
import Button from '../Button/Button.component';

import './InputArea.styles.scss';

const InputArea = () => {
    const [input, setInput] = 
    useState({
      dueDate: "",
      name: "",
      priority: ""
    });

    return (
        <div className="inputArea">
            <DatePicker />
            <TextField />
            <SelectField />
            <Button />
        </div>
    )
}

export default InputArea;