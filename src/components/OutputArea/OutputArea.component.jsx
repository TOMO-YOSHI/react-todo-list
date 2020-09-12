import React from 'react';

import InteractiveList from '../InteractiveList/InteractiveList.component';

import './OutputArea.styles.scss';

const OutputArea = (props) => {
  return (
    <div className="outputArea">
        <InteractiveList todoList={props.todoList} />
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
