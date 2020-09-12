import React from 'react';
import './App.css';

import Header from './components/Header/Header.component';
import InputArea from './components/InputArea/InputArea.component';
import OutputArea from './components/OutputArea/OutputArea.component';

function App() {
  return (
    <div className="App">
      <Header />
      <InputArea />
      <OutputArea />
    </div>
  );
}

export default App;
