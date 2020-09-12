import React, { useState } from 'react';

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
            <input type="text" placeholder="When?" /><br/>
            <input type="text" placeholder="What?" /><br/>
            <input type="text" placeholder="How important?" /><br/>
            <button>ADD ToDo</button>
        </div>
    )
}

export default InputArea;