import React from 'react';

import InteractiveList from '../InteractiveList/InteractiveList.component';
import NoTodo from '../NoTodo/NoTodo．component';

import './OutputArea.styles.scss';

const OutputArea = (props) => {
  return (
    <div className="outputArea">
        {
            props.todoList.length > 0 ?
             <InteractiveList todoList={props.todoList} deleteTodo={props.deleteTodo}/>
             :
             <NoTodo />
        }
       
    </div>
  );
};

export default OutputArea;

    //   <ul>
    //     <li>
    //       <span className="outputDate">2020/09/30</span>
    //       <span className="outputName">Shopping</span>
    //       <span className="outputPrio">B</span>
    //       <span>x</span>
    //     </li>
    //   </ul>;
