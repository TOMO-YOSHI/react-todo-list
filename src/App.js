import React from 'react';
import './App.css';

import Header from './components/Header/Header.component';
import InputArea from './components/InputArea/InputArea.component';
import OutputArea from './components/OutputArea/OutputArea.component';

class App extends React.Component {
  state = {
    todoList: [
      // {
      //   dueDate: "",
      //   name: "test",
      //   priority: "",
      // },
    ],
  };

  addTodo = (todo) => {
    if ( !todo.name || !todo.dueDate || !todo.priority) {
      alert("Please fill in all fields!!");
    } else {
      let todoList = this.state.todoList;
      todoList.push(todo);
      this.setState({ todoList: todoList });
    }
  }

  componentDidUpdate() {
    console.log('state update')
    console.log(...this.state.todoList)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputArea addTodo={this.addTodo} />
        <OutputArea todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
