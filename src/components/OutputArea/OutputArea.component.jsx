import React from 'react';

import './OutputArea.styles.scss';

const OutArea = () => {
  return (
    <div className="outputArea">
      <ul>
        <li>
          <span className="outputDate">2020/09/30</span>
          <span className="outputName">Shopping</span>
          <span className="outputPrio">B</span>
          <span>x</span>
        </li>
      </ul>
    </div>
  );
};

export default OutArea;